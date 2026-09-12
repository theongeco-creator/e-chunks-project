import { useState, useEffect, useMemo } from "react";
import { Volume2, ChevronLeft, ChevronRight, Settings2, Sparkles, Headphones, CheckCircle, Award, RotateCcw, AlertTriangle } from "lucide-react";
import type { Lesson, Chunk } from "@/data/lessonData";

interface ListeningTabProps {
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface ListeningQuestion {
  blankedText: string;
  correct: string;
  options: string[];
}

const STOPWORDS = new Set([
  "the", "a", "an", "is", "are", "was", "were", "and", "but", "or",
  "to", "of", "in", "on", "at", "with", "for", "my", "your", "our",
  "we", "i", "you", "they", "he", "she", "it", "this", "that",
]);

function buildListeningQuestion(
  sentence: string,
  chunks: Chunk[],
  allWordsPool: string[]
): ListeningQuestion | null {
  const sortedChunks = [...(chunks ?? [])].sort((a, b) => b.phrase.length - a.phrase.length);

  for (const chunk of sortedChunks) {
    const escaped = chunk.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "i");
    const match = sentence.match(regex);
    if (match) {
      const correct = match[0];
      const blankedText = sentence.replace(regex, "_____");

      const sameType = chunks.filter(
        (c) => c.type === chunk.type && c.phrase.toLowerCase() !== correct.toLowerCase()
      );
      const others = chunks.filter((c) => c.phrase.toLowerCase() !== correct.toLowerCase());
      const pool = sameType.length >= 3 ? sameType : others;
      
      const uniquePoolPhrases = Array.from(
        new Map(pool.map((c) => [c.phrase.toLowerCase(), c.phrase])).values()
      );

      const distractors = shuffle(uniquePoolPhrases).slice(0, 3);
      if (distractors.length < 3) continue;

      const finalOptions = Array.from(new Set([correct, ...distractors]));
      if (finalOptions.length < 4) continue;

      return { blankedText, correct, options: shuffle(finalOptions) };
    }
  }

  const words = sentence.split(/\s+/);
  const contentWords = words
    .map((w) => w.replace(/[.,!?;:"']/g, ""))
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w.toLowerCase()));

  if (contentWords.length === 0) return null;

  const correct = contentWords[Math.floor(Math.random() * contentWords.length)];
  const regex = new RegExp(`\\b${correct}\\b`, "i");
  const blankedText = sentence.replace(regex, "_____");

  const distractorPool = allWordsPool.filter(
    (w) => w.toLowerCase() !== correct.toLowerCase() && w.length >= 4
  );
  
  const uniqueDistractors = shuffle(Array.from(new Set(distractorPool))).slice(0, 3);
  if (uniqueDistractors.length < 3) return null;

  const finalOptions = Array.from(new Set([correct, ...uniqueDistractors]));
  if (finalOptions.length < 4) return null;

  return { blankedText, correct, options: shuffle(finalOptions) };
}

export function ListeningTab({ lesson, isCompleted, onToggleComplete }: ListeningTabProps) {
  const englishSentences = splitSentences(lesson.paragraph);
  const vietnameseSentences = splitSentences(lesson.translation);

  const sentences = englishSentences.map((text, i) => ({
    text,
    translation: vietnameseSentences[i] ?? "",
  }));

  const allWordsPool = useMemo(
    () =>
      Array.from(
        new Set(
          englishSentences
            .join(" ")
            .split(/\s+/)
            .map((w) => w.replace(/[.,!?;:"']/g, ""))
            .filter((w) => w.length >= 4)
        )
      ),
    [lesson.paragraph]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rate, setRate] = useState<number>(0.9);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [showSettings, setShowSettings] = useState(false);

  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`listening_answers_day_${lesson.day}`);
      if (saved) {
        try { return JSON.parse(saved); } catch { return {}; }
      }
    }
    return {};
  });

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const updateVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices().filter((v) =>
          v.lang.startsWith("en")
        );
        setVoices(availableVoices);
        if (availableVoices.length > 0 && !selectedVoice) {
          const defaultV = availableVoices.find((v) => v.lang === "en-US") || availableVoices[0];
          setSelectedVoice(defaultV.voiceURI);
        }
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const questionsList = useMemo(() => {
    return sentences.map((s) => buildListeningQuestion(s.text, lesson.chunks ?? [], allWordsPool));
  }, [lesson.day, lesson.paragraph]);

  const currentSentence = sentences[currentIndex] || sentences[0];
  const currentQuestion = questionsList[currentIndex];

  useEffect(() => {
    if (Object.keys(userAnswers).length > 0) {
      localStorage.setItem(`listening_answers_day_${lesson.day}`, JSON.stringify(userAnswers));
    } else {
      localStorage.removeItem(`listening_answers_day_${lesson.day}`);
    }
  }, [userAnswers, lesson.day]);

  const speakCurrent = () => {
    if ("speechSynthesis" in window && currentSentence) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(currentSentence.text);
      u.rate = rate;
      u.lang = "en-US";

      if (selectedVoice) {
        const v = voices.find((vo) => vo.voiceURI === selectedVoice);
        if (v) u.voice = v;
      }

      window.speechSynthesis.speak(u);
    }
  };

  const handleSelectOption = (option: string) => {
    if (userAnswers[currentIndex] !== undefined) return;

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleReset = () => {
    setUserAnswers({});
    setCurrentIndex(0);
  };

  const totalQuestions = questionsList.filter(Boolean).length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).reduce((acc, [idxStr, ans]) => {
    const qIdx = Number(idxStr);
    const q = questionsList[qIdx];
    return q && q.correct === ans ? acc + 1 : acc;
  }, 0);

  const wrongCount = answeredCount - correctCount;
  const isAllAnswered = totalQuestions > 0 && answeredCount >= totalQuestions;
  // Sai từ 50% số câu trở lên sau khi làm hết bài -> gợi ý làm lại
  const shouldSuggestReset = isAllAnswered && wrongCount / totalQuestions >= 0.5;

  if (sentences.length === 0) {
    return (
      <p className="text-sm text-slate-500 py-10 text-center">
        Bài học này chưa có đoạn văn để luyện nghe.
      </p>
    );
  }

  const currentSelectedOption = userAnswers[currentIndex];
  const isRevealed = currentSelectedOption !== undefined;
  const isCorrect = currentSelectedOption === currentQuestion?.correct;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: "var(--text-color)" }}>
            <Headphones className="w-5 h-5 text-blue-600" />
            <span>Luyện nghe từng câu</span>
          </div>
          <p className="text-[14px] font-medium opacity-80" style={{ color: "var(--text-color)" }}>
            Nghe kỹ rồi chọn từ đúng để điền vào chỗ trống: {lesson.title}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="px-3 py-2 rounded-md border bg-slate-50 dark:bg-slate-900 flex items-center gap-2 text-xs font-bold" style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}>
            <Award className="w-4 h-4 text-amber-500" />
            <span>Đúng: <strong className="text-emerald-600">{correctCount}</strong> / {totalQuestions}</span>
          </div>

          {answeredCount > 0 && (
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-semibold shadow-2xs cursor-pointer"
              title="Xoá hết đáp án đã chọn và làm lại từ câu đầu tiên"
            >
              <RotateCcw className="w-4 h-4 text-blue-600" />
              <span>Làm lại</span>
            </button>
          )}

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-semibold shadow-2xs cursor-pointer"
          >
            <Settings2 className="w-4 h-4 text-blue-600" />
            <span>Cài đặt</span>
          </button>
        </div>
      </div>

      {shouldSuggestReset && (
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl border bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <p className="text-sm font-bold text-amber-700 dark:text-amber-400">
                Bạn sai {wrongCount}/{totalQuestions} câu rồi đó!
              </p>
              <p className="text-xs font-medium opacity-70 text-amber-700 dark:text-amber-400">
                Làm lại từ đầu để nghe kỹ hơn và nắm chắc bài này nhé.
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-md bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition-all flex items-center gap-2 shadow-sm cursor-pointer shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại từ đầu</span>
          </button>
        </div>
      )}

      {showSettings && (
        <div
          className="p-4 rounded-md border bg-slate-50 dark:bg-slate-900/50 space-y-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold opacity-80" style={{ color: "var(--text-color)" }}>
                Tốc độ đọc: {rate}x
              </label>
              <div className="flex items-center gap-2">
                {[0.7, 0.9, 1.0, 1.2].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setRate(spd)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold border transition ${
                      rate === spd
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold opacity-80" style={{ color: "var(--text-color)" }}>
                Giọng đọc (Voice)
              </label>
              <select
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="w-full text-xs p-2 rounded-md border bg-white dark:bg-slate-800 font-medium"
                style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
              >
                {voices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      <div
        className="rounded-xl border p-8 shadow-sm flex flex-col items-center text-center space-y-6 relative overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-color)",
        }}
      >
        <span className="px-3 py-2.5 rounded-md text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
          Câu {currentIndex + 1} / {sentences.length}
        </span>

        <button
          onClick={speakCurrent}
          className="w-16 h-16 rounded-md bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Nghe câu này"
        >
          <Volume2 className="w-8 h-8" />
        </button>

        {currentQuestion ? (
          <div className="w-full max-w-2xl space-y-5">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-relaxed" style={{ color: "var(--text-color)" }}>
              {(() => {
                const parts = currentQuestion.blankedText.split("_____");
                const before = parts[0] ?? "";
                const after = parts[1] ?? "";

                return (
                  <>
                    {before}
                    {isRevealed ? (
                      <span className={isCorrect ? "text-emerald-600" : "text-red-500"}>
                        {currentQuestion.correct}
                      </span>
                    ) : (
                      "_____"
                    )}
                    {after}
                  </>
                );
              })()}
            </h3>

            {!isRevealed && (
              <p className="text-xs font-medium opacity-60" style={{ color: "var(--text-color)" }}>
                Nghe kỹ rồi chọn từ/cụm từ đúng bên dưới để điền vào chỗ trống nhé
              </p>
            )}

            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((opt) => {
                const isThisCorrect = opt === currentQuestion.correct;
                const isThisSelected = opt === currentSelectedOption;

                let style =
                  "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50";

                if (isRevealed) {
                  if (isThisCorrect) {
                    style = "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-700 dark:text-emerald-400";
                  } else if (isThisSelected) {
                    style = "bg-red-50 dark:bg-red-950/60 border-red-400 text-red-600 dark:text-red-400";
                  } else {
                    style = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isRevealed}
                    className={`px-4 py-3 rounded-md border text-sm font-bold transition-all ${style} ${
                      !isRevealed ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {isRevealed && (
              <div className="space-y-1 pt-2 border-t" style={{ borderColor: "var(--border-color)" }}>
                <p className={`text-sm font-bold ${isCorrect ? "text-emerald-600" : "text-red-500"}`}>
                  {isCorrect ? "✓ Chính xác!" : `✗ Chưa đúng — đáp án là "${currentQuestion.correct}"`}
                </p>
                <p className="text-sm font-medium opacity-70" style={{ color: "var(--text-color)" }}>
                  {currentSentence.translation}
                </p>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm opacity-60" style={{ color: "var(--text-color)" }}>
            Câu này chưa đủ dữ liệu để tạo bài tập nghe.
          </p>
        )}

        <div
          className="flex items-center justify-between w-full pt-4 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-3 rounded-md border flex items-center gap-1.5 text-xs font-bold transition-all ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <div className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-semibold opacity-60" style={{ color: "var(--text-color)" }}>
              Đã làm: {answeredCount}/{totalQuestions} câu
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === sentences.length - 1}
            className={`px-4 py-3 rounded-md border flex items-center gap-1.5 text-xs font-bold transition-all ${
              currentIndex === sentences.length - 1
                ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
            }`}
          >
            <span>Câu sau</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        className="flex items-center justify-between p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/50"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold" style={{ color: "var(--text-color)" }}>
            Nghe có ra hông dị bà!  
          </span>
          <span className="text-[12px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Hong sao đâu bà ơi, nghe hong được thì nghe lại, nghe nhiều là quen à!
          </span>
        </div>

        <button
          onClick={onToggleComplete}
          className={`px-5 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer ${
            isCompleted
              ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/20"
              : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-slate-900/10"
          }`}
        >
          <CheckCircle className={`w-4 h-4 ${isCompleted ? "fill-white text-emerald-600" : "text-slate-400"}`} />
         <span>   {isCompleted ? "Ngon lành cành đào " : "Hiểu rùi thì cho 1 tick"}
         </span>
        </button>
      </div>
    </div>
  );
}