export type ChunkType =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "preposition"
  | "connector"
  | "default";


export interface ChunkColor {
  type: ChunkType;
  label: string;
  labelVi: string;
  text: string;
  bg: string;
  border: string;
  hex: string;
}

export interface Chunk {
  phrase: string;
  pronunciation: string;
  meaning: string;
  context: string;
  type: ChunkType;
}

export interface ReadingSegment {
  text: string;
  type?: ChunkType;
}

export interface FillBlankQuestion {
  prompt: string;
  answer: string;
  hint: string;
}

export interface ExtraVocabItem {
  term: string;
  meaning: string;
  example: string;
  alternatives?: string[]; // danh sách cụm từ có thể thay thế
}

// 👇 THÊM ĐOẠN NÀY VÀO
export interface SentenceItem {
  text: string;
  ipa: string;
}

export interface Lesson {
  day: number;
  title: string;
  emoji: string;
  image?: string;
  paragraph: string;
  translation: string;
  sentences?: SentenceItem[]; // 👈 thêm dòng này — optional để không vỡ lesson cũ chưa có
  chunks: Chunk[];
  readingSegments?: ReadingSegment[];
  practice: FillBlankQuestion[];
  extraVocab?: ExtraVocabItem[];
}

export interface Category {
  id: string;
  number: string;
  title: string;
  emoji: string;
  lessons: Lesson[];
}

// ---- Vocabulary Types ----

export type Level = "A1" | "A2" | "B1";

export interface VocabWord {
  id: string;
  word: string;
  phonetic: string;
  respelling?: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
  level: Level;   // 👈 Level nằm ở từng từ vựng riêng
  type: ChunkType; // 👈 Kiểm tra loại từ (noun, verb, adjective...)
}

export interface VocabTopic {
  id: string;
  number?: string;
  title: string;
  titleEn?: string;
  icon: string;
  vocabulary: VocabWord[];
}

export interface Story {
  id: string;
  title: string;
  level: string;
  image?: string;
  summary?: string;
  content?: { text: string }[] | string;
  imageUrl?: string;
  paragraph: string;
  translation: string;
  readTime?: string | number;
  vocab?: { word: string; meaning: string; type?: string; phonetic?: string }[];
  blanks?: string[];
}