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
    setUser(loadUser());
    setLoading(false);
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

  const upgradeToPremium = () => {
    setUser((prev) => {
      if (!prev) return prev;
      const next = { ...prev, tier: "premium" as const };
      saveUser(next);
      return next;
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
