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
export { categories as categoriesA2 } from "./categories";
export { categories as categoriesB1 } from "./categoriesB1";

import type { Lesson } from "./types";
import { categories as categoriesA2 } from "./categories";
import { categories as categoriesB1 } from "./categoriesB1";

// Gom tất cả bài học của A2 và B1 lại thành 2 mảng riêng biệt
export const allLessonsA2: Lesson[] = categoriesA2.flatMap((c) => c.lessons);
export const allLessonsB1: Lesson[] = categoriesB1.flatMap((c) => c.lessons);

// Giữ lại mảng gộp chung nếu cần thiết cho các trang tổng hợp
export const allLessons: Lesson[] = [...allLessonsA2, ...allLessonsB1];

// Cập nhật lại hàm findLesson để hỗ trợ nhận thêm cấp độ (level)
export function findLesson(day: number, level: "A2" | "B1" = "A2"): Lesson | undefined {
  const targetLessons = level === "B1" ? allLessonsB1 : allLessonsA2;
  return targetLessons.find((l) => l.day === day);
}