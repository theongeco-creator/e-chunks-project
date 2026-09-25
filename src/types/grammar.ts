export interface GrammarAlternative {
  en: string;
  vi: string;
}

export interface GrammarChunk {
  id: string;
  chunkEn: string;
  chunkVi: string;
  grammarRole: string;
  roleLabelVi: string;
  colorType: string;
  explanation?: string; // <--- Thêm dòng này để chứa nội dung giải thích nhỏ
  alternatives?: { en: string; vi: string }[];
}

export interface GrammarExplanationItem {
  label: string;
  content: string;
}

export interface GrammarSentenceItem {
  id: string;
  level: "A1" | "A2" | "B1";
  fullSentenceEn: string;
  fullSentenceVi: string;
  grammarExplanation?: string; // Thêm dòng này vào
  detailedExplanation?: GrammarExplanationItem[]; // Thêm mảng này để bóc tách chi tiết
  chunks: GrammarChunk[];
}