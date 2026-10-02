export type UserTier = "free" | "A2" | "B1" | "premium";

export interface MockUser {
  id: string;
  email: string;
  name: string;
  avatar?: string; // 👈 thêm
  tier: UserTier;
}

export interface AuthContextValue {
  user: MockUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<MockUser>;
  signUp: (email: string, password: string, name: string) => Promise<MockUser>;
  signOut: () => Promise<void>;
  upgradeToPremium: (purchasedTier?: "A2" | "B1" | "premium") => void;
  updateUser: (updatedFields: Partial<MockUser>) => void; // 👈 THÊM DÒNG NÀY VÀO NHA!
  updateProfile: (fields: { name?: string; avatar?: string }) => Promise<void>; // 👈 thêm
  uploadAvatar: (file: Blob) => Promise<void>; // 👈 thêm
  signInWithGoogle: () => Promise<void>;
}