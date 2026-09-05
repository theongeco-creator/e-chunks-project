import type { Chunk, FillBlankQuestion, Lesson } from "./types";

export const empty = {
  paragraph: "",
  translation: "", // <--- Thêm dòng này vào để khớp với kiểu Lesson
  chunks: [] as Chunk[],
  practice: [] as FillBlankQuestion[],
};

export function mk(
  day: number,
  title: string,
  iconOrImage: string,
  content = empty
): Lesson {
  const isImage = iconOrImage.startsWith("http");
  
  return { 
    day, 
    title, 
    emoji: isImage ? "📚" : iconOrImage,
    image: isImage ? iconOrImage : undefined,
    ...content 
  };
}