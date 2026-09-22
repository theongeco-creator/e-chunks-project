export type ChunkType =
  | "noun"
  | "verb"
  | "adjective"
  | "preposition"
  | "time"; // 👈 thêm dòng này


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

// ---- Vocabulary ----

export type Level = "A1" | "A2" | "B1";

export interface VocabWord {
  id: string;
  word: string;
  phonetic: string;
  respelling?: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
  level: Level; // 👈 level dời xuống đây, mỗi từ tự chọn level riêng
  type: ChunkType; // 👈 kiểm tra dòng này có chưa
}

export interface VocabTopic {
  id: string;
  number: string;
  title: string;
  titleEn?: string; // 👈 Thêm field này (optional)
  icon?: string;
  vocabulary: VocabWord[]; // 👈 bỏ field level ở đây
}

export interface Story {
  id: string;
  title: string;
  level: Level;
  // Bổ sung các field này vào interface Story:
  summary?: string;
  content?: { text: string }[] | string;
  imageUrl?: string;
  readTime?: string | number;
  vocabCount?: string | number;
  // ... các field cũ giữ nguyên
}