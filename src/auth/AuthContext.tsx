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
    localStorage.removeItem("user");
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(() => loadUser());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const syncUser = () => {
      const currentUser = loadUser();
      setUser(currentUser);
    };

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
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

  // ✅ HÀM CẬP NHẬT PROFILE CHUẨN DÀNH CHO ĐỔI TÊN / AVATAR
  const updateUser = (updatedFields: Partial<MockUser>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      const nextUser = { ...prevUser, ...updatedFields };
      saveUser(nextUser);
      return nextUser;
    });
  };

  const upgradeToPremium = (purchasedTier?: "A2" | "B1" | "premium") => {
    setUser((prevUser) => {
      if (!prevUser) return null;

      const targetTier = purchasedTier || "premium";
      let nextTier = targetTier;

      if (
        (prevUser.tier === "A2" && targetTier === "B1") ||
        (prevUser.tier === "B1" && targetTier === "A2")
      ) {
        nextTier = "premium";
      }

      const updatedUser = { ...prevUser, tier: nextTier };
      saveUser(updatedUser);
      return updatedUser;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signUp, signOut, upgradeToPremium, updateUser }}
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