import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { AuthContextValue, MockUser } from "./types";

const STORAGE_KEY = "mock-auth-user";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function loadUser(): MockUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MockUser) : null;
  } catch {
    return null;
  }
}

function saveUser(user: MockUser | null) {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadUser = () => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  };

  // Load lần đầu khi vào web
  loadUser();

  // Lắng nghe sự kiện đổi thông tin từ SettingsModal
  window.addEventListener("storage", loadUser);
  return () => window.removeEventListener("storage", loadUser);
}, []);

  const signIn = async (email: string, _password: string): Promise<MockUser> => {
    await new Promise((r) => setTimeout(r, 350));
    const existing = loadUser();
    const next: MockUser =
      existing && existing.email === email
        ? existing
        : {
            id: crypto.randomUUID(),
            email,
            name: email.split("@")[0],
            tier: "free",
          };
    saveUser(next);
    setUser(next);
    return next;
  };

  const signUp = async (
    email: string,
    _password: string,
    name: string
  ): Promise<MockUser> => {
    await new Promise((r) => setTimeout(r, 350));
    const next: MockUser = {
      id: crypto.randomUUID(),
      email,
      name,
      tier: "free",
    };
    saveUser(next);
    setUser(next);
    return next;
  };

  const signOut = () => {
    saveUser(null);
    setUser(null);
  };

  // Sửa hàm upgradeToPremium nhận tham số level
// Thêm `?` hoặc `| undefined` cho tham số purchasedTier
const upgradeToPremium = (purchasedTier?: "A2" | "B1" | "premium") => {
  setUser((prevUser) => {
    if (!prevUser) return null;

    // Nếu không truyền purchasedTier thì mặc định là "premium"
    const targetTier = purchasedTier || "premium";
    let nextTier = targetTier;

    // Logic gộp gói: có A2 mua B1 (hoặc ngược lại) -> lên Combo Premium
    if (
      (prevUser.tier === "A2" && targetTier === "B1") ||
      (prevUser.tier === "B1" && targetTier === "A2")
    ) {
      nextTier = "premium";
    }

    const updatedUser = { ...prevUser, tier: nextTier };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    return updatedUser;
  });
};

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signUp, signOut, upgradeToPremium }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
