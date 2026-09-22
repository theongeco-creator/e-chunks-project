import type { ChunkColor, ChunkType, Level } from "./types";

export const CHUNK_COLORS: Record<ChunkType, ChunkColor> = {
  noun: {
    type: "noun",
    label: "Noun Chunk",
    labelVi: "Danh từ",
    text: "text-[#D62820] font-semibold",
    bg: "bg-[#FDEEEC]",
    border: "",
    hex: "#D62820",
  },
  verb: {
    type: "verb",
    label: "Verb Chunk",
    labelVi: "Động từ",
    text: "text-[#19A14D] font-semibold",
    bg: "bg-[#EBFAF0]",
    border: "",
    hex: "#19A14D",
  },
  adjective: {
    type: "adjective",
    label: "Adjective Chunk",
    labelVi: "Tính từ",
    text: "text-[#2A61EC] font-semibold",
    bg: "bg-[#EFF3FF]",
    border: "",
    hex: "#2A61EC",
  },
  preposition: {
    type: "preposition",
    label: "Prepositional Chunk",
    labelVi: "Giới từ",
    text: "text-[#BF6F32] font-semibold",
    bg: "bg-[#FCF5DB]",
    border: "",
    hex: "#BF6F32",
  },
  time: {
    type: "time",
    label: "Time & Frequency Chunk",
    labelVi: "Tần xuất",
    text: "text-[#7808CF] font-semibold",
    bg: "bg-[#F4EDFB]",
    border: "",
    hex: "#7808CF",
  },
};

export const CHUNK_COLOR_LIST = Object.values(CHUNK_COLORS);