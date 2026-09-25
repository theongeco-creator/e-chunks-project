import type { ChunkType } from "./types";

interface ChunkColorStyle {
  bg: string;
  text: string;
  border: string;
  labelVi: string;
}

// Phân loại chunk theo LOẠI TỪ (không theo vai trò trong câu, không theo nghĩa).
// Vai trò ngữ pháp (chủ ngữ, tân ngữ, chỉ thời gian...) nằm ở `roleVi` của từng chunk.
export const CHUNK_COLORS: Record<string, ChunkColorStyle> = {
  noun: {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-300 dark:border-blue-800",
    labelVi: "Danh từ / Đại từ",
  },
  verb: {
    bg: "bg-red-50 dark:bg-red-950/40",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-300 dark:border-red-800",
    labelVi: "Động từ",
  },
  adjective: {
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-300 dark:border-emerald-800",
    labelVi: "Tính từ",
  },
  adverb: {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-300 dark:border-amber-800",
    labelVi: "Trạng từ",
  },
  preposition: {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-300 dark:border-violet-800",
    labelVi: "Cụm giới từ",
  },
  connector: {
    bg: "bg-pink-50 dark:bg-pink-950/40",
    text: "text-pink-700 dark:text-pink-300",
    border: "border-pink-300 dark:border-pink-800",
    labelVi: "Từ nối",
  },
  default: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-700 dark:text-slate-300",
    border: "border-slate-300 dark:border-slate-700",
    labelVi: "Cụm cố định",
  },

  // ---- LEGACY: giữ tạm cho các bài / từ vựng cũ chưa đổi type ----
  // subject -> "noun" | object -> "noun" hoặc "adjective"
  // time, place, method -> "preposition" (hoặc "adverb" nếu là today, tomorrow, together...)
  // frequency -> "adverb"
  // Cùng màu với loại mới. Không hiện trong bảng chú thích. Đổi xong thì xóa các mục này.
  subject: {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-300 dark:border-blue-800",
    labelVi: "Chủ ngữ",
  },
  object: {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-300 dark:border-blue-800",
    labelVi: "Tân ngữ",
  },
  time: {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-300 dark:border-violet-800",
    labelVi: "Thời gian",
  },
  place: {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-300 dark:border-violet-800",
    labelVi: "Địa điểm",
  },
  method: {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-300 dark:border-violet-800",
    labelVi: "Cách thức",
  },
  frequency: {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-300 dark:border-amber-800",
    labelVi: "Tần suất",
  },
};

const LEGACY_KEYS: string[] = ["subject", "object", "time", "place", "method", "frequency"];

// Danh sách hiển thị (bảng chú thích, nhóm từ vựng): giữ `type`, ẩn mục legacy
export const CHUNK_COLOR_LIST = Object.entries(CHUNK_COLORS)
  .filter(([type]) => !LEGACY_KEYS.includes(type))
  .map(([type, style]) => ({
    type: type as ChunkType,
    ...style,
  }));