import { useEffect, useState } from "react";

const KEY = "saved_topics";

const read = (): Record<string, boolean> => {
  try {
    const raw = localStorage.getItem(KEY);
    const obj = raw ? JSON.parse(raw) : {};
    return obj && typeof obj === "object" && !Array.isArray(obj) ? obj : {};
  } catch {
    return {};
  }
};

export const getSavedTopicIds = (): string[] => {
  const saved = read();
  return Object.keys(saved).filter((id) => saved[id] === true);
};

export const toggleSavedTopic = (id: string): boolean => {
  const saved = read();
  if (saved[id]) delete saved[id];
  else saved[id] = true;
  localStorage.setItem(KEY, JSON.stringify(saved));
  window.dispatchEvent(new Event("saved-topics-changed"));
  return saved[id] === true;
};

export function useSavedTopics(): string[] {
  const [ids, setIds] = useState<string[]>(getSavedTopicIds);
  useEffect(() => {
    const refresh = () => setIds(getSavedTopicIds());
    window.addEventListener("saved-topics-changed", refresh);
    return () => window.removeEventListener("saved-topics-changed", refresh);
  }, []);
  return ids;
}