// src/lib/sound.ts

export const playSound = (isCorrect: boolean) => {
  const soundPath = isCorrect ? "/sounds/correct.mp3" : "/sounds/wrong.mp3";
  const audio = new Audio(soundPath);
  audio.volume = 0.6; // Âm lượng từ 0.0 tới 1.0
  audio.play().catch((err) => {
    console.error("Lỗi phát audio:", err);
  });
};