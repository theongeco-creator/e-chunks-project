import type { ChunkColor, ChunkType, Level } from "./types";

export const CHUNK_COLORS: Record<ChunkType, ChunkColor> = {
  noun: {
    type: "noun",
    label: "Noun Chunk",
    labelVi: "Danh từ",
    text: "text-[#c41111] font-bold",
    bg: "bg-[#f7d7d7]",
    border: "",
    hex: "#f87171",
  },
  verb: {
    type: "verb",
    label: "Verb Chunk",
    labelVi: "Động từ",
    text: "text-[#19A14D] font-bold",
    bg: "bg-[#d2f2e2]",
    border: "",
    hex: "#4ade80",
  },
  adjective: {
    type: "adjective",
    label: "Adjective Chunk",
    labelVi: "Tính từ",
    text: "text-[#028ADE] font-bold",
    bg: "bg-[#DEF2FF]",
    border: "",
    hex: "#38bdf8",
  },
  preposition: {
    type: "preposition",
    label: "Prepositional Chunk",
    labelVi: "Giới từ",
    text: "text-[#AB2141] font-bold",
    bg: "bg-[#FFE5EF]",
    border: "",
    hex: "#f472b6",
  },
  time: {
    type: "time",
    label: "Time & Frequency Chunk",
    labelVi: "Thời gian",
    text: "text-[#840ec8] font-bold",
    bg: "bg-[#e9e1f4]",
    border: "",
    hex: "#c084fc",
  },
  reason: {
    type: "reason",
    label: "Reason & Purpose Chunk",
    labelVi: "Lý do / Mục đích",
    text: "text-[#D83537] font-bold",   // 👈 Chữ màu nâu đậm, dày nét
    bg: "bg-[#FDE68A]",             // 👈 Nền nâu nhạt trong suốt
    border: "",       // 👈 Viền nâu nhẹ
    hex: "#b45309",                      // 👈 Mã hex chuẩn màu nâu hổ phách
  },
  greeting: {
    type: "greeting",
    label: "Greeting Chunk",
    labelVi: "Chào hỏi",
    text: "text-[#232323] font-bold",
    bg: "bg-[#e4e4e4]",
    border: "",
    hex: "#b4b4b4",
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