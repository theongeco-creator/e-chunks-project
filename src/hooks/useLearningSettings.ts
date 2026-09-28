import { useCallback, useEffect, useState } from "react";

export interface LearningSettings {
  dailyGoal: 1 | 3 | 5; // số bài / ngày
  accent: "us" | "uk";
  speechRate: 0.75 | 1;
  showIPA: boolean;
  showVietnamese: boolean;
  soundEffects: boolean;
}

export const DEFAULT_LEARNING_SETTINGS: LearningSettings = {
  dailyGoal: 1,
  accent: "us",
  speechRate: 1,
  showIPA: true,
  showVietnamese: true,
  soundEffects: true,
};

const STORAGE_KEY = "learning-settings";
const CHANGE_EVENT = "learning-settings-change";

/** Dùng ở chỗ không phải component (vd: hàm phát âm). */
export function getLearningSettings(): LearningSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_LEARNING_SETTINGS;
    return { ...DEFAULT_LEARNING_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_LEARNING_SETTINGS;
  }
}

/** Dùng trong component: tự cập nhật khi setting đổi ở bất kỳ đâu. */
export function useLearningSettings() {
  const [settings, setSettings] = useState<LearningSettings>(getLearningSettings);

  useEffect(() => {
    const sync = () => setSettings(getLearningSettings());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback(
    <K extends keyof LearningSettings>(key: K, value: LearningSettings[K]) => {
      const next = { ...getLearningSettings(), [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // localStorage đầy hoặc bị chặn thì bỏ qua
      }
      window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    []
  );

  return { settings, update };
}
