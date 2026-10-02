import { useEffect, useState } from "react";

const KEY = "saved_stories";

const read = (): Record<string, boolean> => {
  try {
    const raw = localStorage.getItem(KEY);
    const obj = raw ? JSON.parse(raw) : {};
    return obj && typeof obj === "object" && !Array.isArray(obj) ? obj : {};
  } catch {
    return {};
  }
};

export const getSavedStoryIds = (): string[] => {
  const saved = read();
  return Object.keys(saved).filter((id) => saved[id] === true);
};

export const isStorySaved = (id: string): boolean => read()[id] === true;

// Bấm lần 1 là lưu, bấm lần 2 là bỏ lưu. Trả về trạng thái mới.
export const toggleSavedStory = (id: string): boolean => {
  const saved = read();
  if (saved[id]) delete saved[id];
  else saved[id] = true;
  localStorage.setItem(KEY, JSON.stringify(saved));
  window.dispatchEvent(new Event("saved-stories-changed"));
  return saved[id] === true;
};

// Dùng trong component: danh sách id truyện đã lưu, tự cập nhật khi bấm bookmark
export function useSavedStories(): string[] {
  const [ids, setIds] = useState<string[]>(getSavedStoryIds);
  useEffect(() => {
    const refresh = () => setIds(getSavedStoryIds());
    window.addEventListener("saved-stories-changed", refresh);
    return () => window.removeEventListener("saved-stories-changed", refresh);
  }, []);
  return ids;
}