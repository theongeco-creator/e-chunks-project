import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { AuthContextValue, MockUser, UserTier } from "./types";
import { supabase } from "../lib/supabase"; // 👈 Sửa lại đường dẫn lùi ra đúng chỗ chứa supabaseClient (hoặc ../supabaseClient tùy cấu trúc của bà)


const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function formatSupabaseUser(su: any): MockUser | null {
  if (!su) return null;
  return {
  id: su.id,
  email: su.email || "",
  name: su.user_metadata?.full_name || su.email?.split("@")[0] || "Người dùng",
  avatar: su.user_metadata?.avatar_url || "",
  tier: su.user_metadata?.tier || "free",
};
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [tier, setTier] = useState<UserTier>("free");

const loadTier = async (userId: string) => {
  const { data, error } = await supabase
    .from("purchases")
    .select("product")
    .eq("user_id", userId)
    .eq("status", "active");
  if (error) {
    console.warn("Không tải được gói học:", error);
    return;
  }
  const owned = new Set((data ?? []).map((r: { product: string }) => r.product));
  setTier(
    owned.has("A2") && owned.has("B1") ? "premium" : owned.has("A2") ? "A2" : owned.has("B1") ? "B1" : "free"
  );
};

// Tải gói khi đăng nhập; quay lại tab thì tải lại (để thấy gói mới được cấp)
useEffect(() => {
  if (!user?.id) {
    setTier("free");
    return;
  }
  loadTier(user.id);
  const onVisible = () => {
    if (document.visibilityState === "visible") loadTier(user.id);
  };
  document.addEventListener("visibilitychange", onVisible);
  return () => document.removeEventListener("visibilitychange", onVisible);
}, [user?.id]);

  useEffect(() => {
    // 1. Kiểm tra session hiện tại khi mở app
    supabase.auth.getSession().then(({ data: { session } }: { data: { session: any } }) => {
      setUser(formatSupabaseUser(session?.user ?? null));
      setLoading(false);
    });

    // 2. Lắng nghe mọi thay đổi đăng nhập/đăng xuất real-time từ Supabase
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: string, session: any) => {
      setUser(formatSupabaseUser(session?.user ?? null));
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string): Promise<MockUser> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    const formatted = formatSupabaseUser(data.user);
    if (!formatted) throw new Error("Không thể lấy thông tin người dùng");
    setUser(formatted);
    return formatted;
  };

  const signUp = async (
    email: string,
    password: string,
    name: string
  ): Promise<MockUser> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
      data: { full_name: name}
      }
    });
    if (error) throw error;
    const formatted = formatSupabaseUser(data.user);
    if (!formatted) throw new Error("Không thể tạo tài khoản");
    setUser(formatted);
    return formatted;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.origin },
  });
  if (error) throw error;
};


  const updateProfile = async (fields: { name?: string; avatar?: string }) => {
  const data: Record<string, any> = {};
  if (fields.name !== undefined) data.full_name = fields.name; data.name = fields.name;
  if (fields.avatar !== undefined) data.avatar_url = fields.avatar;

  const { error } = await supabase.auth.updateUser({ data });
  if (error) throw error;

  setUser((prev) =>
    prev
      ? {
          ...prev,
          ...(fields.name !== undefined && { name: fields.name }),
          ...(fields.avatar !== undefined && { avatar: fields.avatar }),
        }
      : prev
  );
};

const uploadAvatar = async (file: Blob) => {
  if (!user) throw new Error("Chưa đăng nhập");
  const path = `${user.id}/avatar.jpg`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(path, file, { upsert: true, contentType: "image/jpeg" });
  if (error) throw error;

  const { data } = supabase.storage.from("avatars").getPublicUrl(path);
  // ?v=... để trình duyệt không xài ảnh cũ trong cache
  await updateProfile({ avatar: `${data.publicUrl}?v=${Date.now()}` });
};

  const updateUser = (updatedFields: Partial<MockUser>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      return { ...prevUser, ...updatedFields };
    });
  };

  const upgradeToPremium = (_purchasedTier?: "A2" | "B1" | "premium") => {
  if (user?.id) loadTier(user.id);
};

  const userWithTier = user ? { ...user, tier } : null;

  return (
  <AuthContext.Provider
    value={{
      user: userWithTier,
      loading,
      signIn,
      signUp,
      signOut,
      upgradeToPremium,
      updateUser,
      updateProfile,   // 👈 thêm
      uploadAvatar,    // 👈 thêm
      signInWithGoogle,
    }}
  >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}