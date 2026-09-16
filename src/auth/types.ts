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
  signIn: (email: string, password: string) => Promise<MockUser>;
  signUp: (email: string, password: string, name: string) => Promise<MockUser>;
  signOut: () => void;
  upgradeToPremium: (purchasedTier?: "A2" | "B1" | "premium") => void;
  updateUser: (updatedFields: Partial<MockUser>) => void; // 👈 THÊM DÒNG NÀY VÀO NHA!
}