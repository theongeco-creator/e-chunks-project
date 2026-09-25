import type { Chunk, ChunkType, FillBlankQuestion, ReadingSegment, SentenceItem } from "./types";

// ============================================================
// KIỂU DỮ LIỆU DÙNG CHUNG CHO MỌI BÀI (giống cấu trúc grammarA1)
// ============================================================
export interface SentenceChunk {
  en: string;        // PHẢI khớp đúng từng ký tự với chữ trong câu `en`
  vi: string;
  ipa: string;
  type: ChunkType;   // "default" = không tô màu (lời chào, cụm cố định)
  roleVi: string;    // vai trò ngữ pháp (dùng ở phần phân tích câu)
  note?: string;     // ghi chú cách dùng, hiện trong tooltip
}

export interface GrammarNote {
  label: string;
  content: string;
}

export interface LessonSentence {
  id: string;
  en: string;
  vi: string;
  ipa: string;       // phiên âm CẢ CÂU (cho tab Speaking), viết dạng /.../
  explanation: GrammarNote[];
  chunks: SentenceChunk[];
}

// Helper viết chunk cho gọn
export const c = (
  en: string,
  vi: string,
  ipa: string,
  type: ChunkType,
  roleVi: string,
  note?: string
): SentenceChunk => ({ en, vi, ipa, type, roleVi, note });

// ============================================================
// SUY RA DỮ LIỆU CHO ReadingTab (shape cũ, không cần sửa component)
// ============================================================
interface Piece {
  text: string;
  type?: ChunkType;
  isChunk: boolean;
}

function buildReadingSegments(sentences: LessonSentence[]): ReadingSegment[] {
  const pieces: Piece[] = [];

  // Text thường liền nhau thì gộp lại; chunk không bao giờ bị gộp
  const pushPlain = (text: string) => {
    if (!text) return;
    const last = pieces[pieces.length - 1];
    if (last && !last.isChunk) last.text += text;
    else pieces.push({ text, isChunk: false });
  };

  sentences.forEach((s, si) => {
    if (si > 0) pushPlain(" ");
    let cursor = 0;

    for (const ch of s.chunks) {
      const idx = s.en.indexOf(ch.en, cursor);
      if (idx === -1) {
        throw new Error(`[lesson] Không tìm thấy chunk "${ch.en}" trong câu ${s.id}`);
      }
      pushPlain(s.en.slice(cursor, idx));
      // "default" = không tô màu, nhưng vẫn bấm được và có tooltip
      pieces.push({
        text: ch.en,
        type: ch.type === "default" ? undefined : ch.type,
        isChunk: true,
      });
      cursor = idx + ch.en.length;
    }
    pushPlain(s.en.slice(cursor));
  });

  return pieces.map(({ text, type }) => (type ? { text, type } : { text }));
}

// Danh sách chunk cho tooltip: lọc trùng theo chữ (không phân biệt hoa/thường)
function buildChunks(sentences: LessonSentence[]): Chunk[] {
  const seen = new Set<string>();
  const list: Chunk[] = [];
  for (const s of sentences) {
    for (const ch of s.chunks) {
      const key = ch.en.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      list.push({
        phrase: ch.en,
        pronunciation: ch.ipa,
        meaning: ch.vi,
        context: ch.note ?? ch.roleVi,
        type: ch.type,
      });
    }
  }
  return list;
}

export function buildLessonContent(sentences: LessonSentence[]) {
  return {
    paragraph: sentences.map((s) => s.en).join(" "),
    translation: sentences.map((s) => s.vi).join(" "),
    chunks: buildChunks(sentences),
    readingSegments: buildReadingSegments(sentences),
    // Bài tập điền chỗ trống: mặc định rỗng, bài nào cần thì ghi đè:
    // { ...buildLessonContent(sentences), practice: [...] }
    practice: [] as FillBlankQuestion[],
    // Tab Speaking: từng câu + phiên âm cả câu
    sentences: sentences.map<SentenceItem>((s) => ({ text: s.en, ipa: s.ipa })),
  };
}
