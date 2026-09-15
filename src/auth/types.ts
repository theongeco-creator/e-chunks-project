export type UserTier = "free" | "A2" | "B1" | "premium";

export interface MockUser {
  id: string;
  email: string;
  name: string;
  tier: UserTier;
}

export interface AuthContextValue {
  user: MockUser | null;
  loading: boolean;
  signIn: (email: string, pass: string) => Promise<MockUser>;
  signUp: (email: string, pass: string, name: string) => Promise<MockUser>;
  signOut: () => void;
  upgradeToPremium: (level?: "A2" | "B1" | "premium") => void;
}