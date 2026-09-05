import type { ChunkColor, ChunkType, Level } from "./types";

export const CHUNK_COLORS: Record<ChunkType, ChunkColor> = {
  noun: {
    type: "noun",
    label: "Noun Chunk",
    labelVi: "Danh từ",
    text: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    hex: "#f87171",
  },
  verb: {
    type: "verb",
    label: "Verb Chunk",
    labelVi: "Động từ",
    text: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    hex: "#4ade80",
  },
  adjective: {
    type: "adjective",
    label: "Adjective Chunk",
    labelVi: "Tính từ",
    text: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    hex: "#38bdf8",
  },
  preposition: {
    type: "preposition",
    label: "Prepositional Chunk",
    labelVi: "Giới từ",
    text: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    hex: "#f472b6",
  },
  time: {
    type: "time",
    label: "Time & Frequency Chunk",
    labelVi: "Thời gian",
    text: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    hex: "#c084fc",
  },
  reason: {
    type: "reason",
    label: "Reason & Purpose Chunk",
    labelVi: "Lý do / Mục đích",
    text: "text-amber-700 font-bold",   // 👈 Chữ màu nâu đậm, dày nét
    bg: "bg-amber-500/15",             // 👈 Nền nâu nhạt trong suốt
    border: "border-amber-500/40",       // 👈 Viền nâu nhẹ
    hex: "#b45309",                      // 👈 Mã hex chuẩn màu nâu hổ phách
  },
  greeting: {
    type: "greeting",
    label: "Greeting Chunk",
    labelVi: "Chào hỏi",
    text: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    hex: "#fb923c",
  },
  
};

export const CHUNK_COLOR_LIST = Object.values(CHUNK_COLORS);
export interface VocabWord {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
  level: Level;
  type: ChunkType; // 👈 thêm dòng này để tô màu theo noun/verb/adjective...
}