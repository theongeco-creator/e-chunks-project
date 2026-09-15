import type { MockUser, UserTier } from "./types";

export const FREE_LESSON_LIMIT = 5;

export function isLessonLocked(
  day: number,
  tier: UserTier = "free",
  level?: "A1" | "A2" | "B1"
): boolean {
  // 1. Cấp độ A1 luôn MIỄN PHÍ
  if (level === "A1") return false;

  // 2. Tài khoản VIP/Premium full: mở toàn bộ bài học
  if (tier === "premium") return false;

  // 3. Mua gói B1 (250k): Mở khóa cả A2 lẫn B1
  if ((tier as string) === "B1") return false;

  // 4. Mua gói A2 (150k): CHỈ mở khóa A2 (nếu level là B1 sẽ vẫn bị khóa)
  if ((tier as string) === "A2") {
    if (level === "A2") return false;
    // B1 sẽ tiếp tục chạy xuống dưới và bị khóa từ bài 6 trở đi
  }

  // 5. Tài khoản Free (hoặc gói A2 truy cập vào B1): Khóa từ bài 6 trở đi
  return day > FREE_LESSON_LIMIT;
}

export function canAccessLesson(
  day: number,
  tier: UserTier = "free",
  level?: "A1" | "A2" | "B1"
): boolean {
  return !isLessonLocked(day, tier, level);
}