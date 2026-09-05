import type { MockUser, UserTier } from "./types";

export const FREE_LESSON_LIMIT = 5;

export function isLessonLocked(day: number, tier: UserTier): boolean {
  if (tier === "premium") return false;
  return day > FREE_LESSON_LIMIT; // Trả về true nếu bài học > 5 và tài khoản là free
}

export function canAccessLesson(day: number, user: MockUser | null): boolean {
  if (!user) return false;
  return !isLessonLocked(day, user.tier);
}