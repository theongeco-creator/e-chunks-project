export type {
  ChunkType,
  ChunkColor,
  Chunk,
  ReadingSegment,
  FillBlankQuestion,
  Lesson,
  Category,
} from "./types";

export { CHUNK_COLORS, CHUNK_COLOR_LIST } from "./chunkColors";

// 🔴 SỬA 2 DÒNG NÀY:
export { categories as categoriesA1 } from "./categoriesA1"; // 👈 Sửa đường dẫn trỏ tới A1
export { categories as categoriesA2 } from "./categories";
export { categories as categoriesB1 } from "./categoriesB1";

import type { Lesson } from "./types";
import { categories as categoriesA1 } from "./categoriesA1"; // 👈 Sửa ở đây luôn nha!
import { categories as categoriesA2 } from "./categories";
import { categories as categoriesB1 } from "./categoriesB1";

// Gom tất cả bài học của A1, A2 và B1 thành 3 mảng riêng biệt
export const allLessonsA1: Lesson[] = categoriesA1.flatMap((c) => c.lessons);
export const allLessonsA2: Lesson[] = categoriesA2.flatMap((c) => c.lessons);
export const allLessonsB1: Lesson[] = categoriesB1.flatMap((c) => c.lessons);

// Giữ lại mảng gộp chung nếu cần thiết
export const allLessons: Lesson[] = [...allLessonsA1, ...allLessonsA2, ...allLessonsB1];

// Hàm tìm bài học
export function findLesson(day: number, level?: "A1" | "A2" | "B1"): Lesson | undefined {
  const targetLessons = 
    level === "B1" 
      ? allLessonsB1 
      : level === "A1" 
        ? allLessonsA1 
        : allLessonsA2;

  return targetLessons.find((l) => l.day === day);
}