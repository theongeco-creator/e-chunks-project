export type UserTier = "free" | "premium";

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
  upgradeToPremium: () => void;
}
