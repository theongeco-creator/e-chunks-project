import { useState, useMemo, useEffect } from "react";
import {
  Volume2,
  CheckCircle,
  Settings2,
  ChevronLeft,
  ChevronRight,
  Headphones,
  RotateCcw,
  Award,
} from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { Button } from "@/components/Button";

interface ListeningQuizTabProps {
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

interface QuizSentence {
  fullText: string;
  correctUnits: string[];
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tokenizeSentence(sentence: string, chunkPhrases: string[]): string[] {
  let remaining = sentence.replace(/[.,!?;:]/g, "").trim();
  const units: string[] = [];
  const phrasesSorted = [...chunkPhrases].sort((a, b) => b.length - a.length);

  while (remaining.length > 0) {
    let matched = false;
    for (const phrase of phrasesSorted) {
      const re = new RegExp(`^${escapeRegex(phrase)}\\b`, "i");
      const m = remaining.match(re);
      if (m) {
        units.push(m[0]);
        remaining = remaining.slice(m[0].length).trim();
        matched = true;
        break;
      }
    }
    if (!matched) {
      const wordMatch = remaining.match(/^\S+/);
      if (wordMatch) {
        units.push(wordMatch[0]);
        remaining = remaining.slice(wordMatch[0].length).trim();
      } else {
        break;
      }
    }
  }
  return units;
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function ListeningQuizTab({ lesson, isCompleted, onToggleComplete }: ListeningQuizTabProps) {
  const questions = useMemo<QuizSentence[]>(() => {
    const chunkPhrases = (lesson.chunks ?? []).map((c) => c.phrase);
    const sentences = splitSentences(lesson.paragraph);

    return sentences
      .map((sentence) => ({
        fullText: sentence,
        correctUnits: tokenizeSentence(sentence, chunkPhrases),
      }))
      .filter((q) => q.correctUnits.length >= 2);
  }, [lesson]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [bank, setBank] = useState<string[]>(() =>
    questions.length > 0 ? shuffle(questions[0].correctUnits) : []
  );
  const [answer, setAnswer] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCorrect, setAnsweredCorrect] = useState<Set<number>>(new Set());

  const [rate, setRate] = useState<number>(0.9);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const updateVoices = () => {
        const availableVoices = window.speechSynthesis
          .getVoices()
          .filter((v) => v.lang.startsWith("en"));
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

  if (questions.length === 0) {
    return (
      <p className="text-sm text-slate-500 py-10 text-center">
        Bài học này chưa đủ dữ liệu để tạo bài luyện ghép câu.
      </p>
    );
  }

  const currentQuestion = questions[currentIndex];

  const speakSentence = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(currentQuestion.fullText);
    u.rate = rate;
    u.lang = "en-US";
    if (selectedVoice) {
      const v = voices.find((vo) => vo.voiceURI === selectedVoice);
      if (v) u.voice = v;
    }
    window.speechSynthesis.speak(u);
  };

  const handlePickFromBank = (index: number) => {
    if (checked) return;
    const unit = bank[index];
    setBank((prev) => prev.filter((_, i) => i !== index));
    setAnswer((prev) => [...prev, unit]);
  };

  const handleRemoveFromAnswer = (index: number) => {
    if (checked) return;
    const unit = answer[index];
    setAnswer((prev) => prev.filter((_, i) => i !== index));
    setBank((prev) => [...prev, unit]);
  };

  const isFullyAnswered = bank.length === 0;

  const handleCheck = () => {
    setChecked(true);
    const correct =
      answer.length === currentQuestion.correctUnits.length &&
      answer.every(
        (u, i) => u.toLowerCase() === currentQuestion.correctUnits[i]?.toLowerCase()
      );

    if (correct && !answeredCorrect.has(currentIndex)) {
      setScore((s) => s + 1);
      setAnsweredCorrect((prev) => new Set(prev).add(currentIndex));
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    setBank(shuffle(questions[index].correctUnits));
    setAnswer([]);
    setChecked(false);
  };

  const handlePrev = () => {
    if (currentIndex > 0) goToQuestion(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) goToQuestion(currentIndex + 1);
  };

  const handleRetryQuestion = () => {
    setBank(shuffle(currentQuestion.correctUnits));
    setAnswer([]);
    setChecked(false);
  };

  const handleReset = () => {
    setScore(0);
    setAnsweredCorrect(new Set());
    goToQuestion(0);
  };

  const isCorrect =
    checked &&
    answer.length === currentQuestion.correctUnits.length &&
    answer.every(
      (u, i) => u.toLowerCase() === currentQuestion.correctUnits[i]?.toLowerCase()
    );

  return (
    <div className="space-y-4 pb-28">
      {/* ============ 1. HEADER NHẸ: tiêu đề + icon công cụ phụ ============ */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: "var(--text-color)" }}>
            <Headphones className="w-5 h-5 text-brand-500" />
            <span>Nghe &amp; sắp xếp lại câu</span>
          </div>
          <p className="text-[13px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Nghe câu rồi chọn các cụm từ theo đúng thứ tự
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleReset}
            className="w-9 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer"
            style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
            title="Làm lại từ đầu"
            aria-label="Làm lại"
          >
            <RotateCcw className="w-4 h-4 opacity-70" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer"
              style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
              title="Tốc độ & giọng đọc"
              aria-label="Cài đặt phát âm"
            >
              <Settings2 className="w-4 h-4 opacity-70" />
            </button>

            {showSettings && (
              <div className="absolute right-0 mt-2 w-64 p-3 rounded-lg border shadow-xl bg-white z-20 space-y-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-textMuted">
                    Tốc độ: {rate}x
                  </span>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {[0.7, 0.9, 1.0, 1.2].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setRate(spd)}
                        className={`flex-1 text-xs font-semibold py-1.5 rounded-md cursor-pointer transition ${
                          rate === spd ? "bg-brand-soft text-brand-500" : "text-neutral-textSecondary hover:bg-neutral-bg"
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-border">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-textMuted">
                    Giọng đọc
                  </span>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full text-xs p-2 mt-1.5 rounded-md border font-medium"
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
            )}
          </div>
        </div>
      </div>

      {/* ============ 2. THANH TIẾN ĐỘ kiểu quiz-flow ============ */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border-color)" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              backgroundColor: "#4F46E5",
            }}
          />
        </div>
        <span
          className="text-xs font-bold shrink-0 flex items-center gap-1.5"
          style={{ color: "var(--text-color)" }}
        >
          <Award className="w-3.5 h-3.5 text-amber-500" />
          {score}/{questions.length}
        </span>
      </div>

      {/* ============ 3. CARD CÂU HỎI ============ */}
      <div
        className="rounded-2xl border-2 shadow-card p-6 sm:p-8 flex flex-col items-center text-center space-y-5"
        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
      >
        <button
          onClick={speakSentence}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          style={{ backgroundColor: "#4F46E5", color: "#fff" }}
          title="Nghe câu này"
        >
          <Volume2 className="w-7 h-7" />
        </button>

        <div className="w-full max-w-2xl space-y-5">
          <p className="text-xs font-semibold opacity-60" style={{ color: "var(--text-color)" }}>
            Bấm các từ/cụm từ bên dưới để xếp lại thành câu chuẩn xác
          </p>

          {/* Khung chứa các từ đã chọn */}
          <div
            className={`min-h-[72px] rounded-2xl border-2 border-dashed p-3.5 flex flex-wrap gap-2.5 items-center justify-center transition-colors ${
              checked
                ? isCorrect
                  ? "border-[#30B83D] bg-[#EBFFEF]"
                  : "border-[#DB2323] bg-[#FFF0F0]"
                : "border-indigo-200 bg-indigo-50/30 dark:bg-slate-900/50"
            }`}
          >
            {answer.length === 0 && (
              <span className="text-sm font-medium text-slate-400 italic">
                Chọn mảnh từ bên dưới...
              </span>
            )}
            {answer.map((unit, i) => (
              <button
                key={`${unit}-${i}`}
                onClick={() => handleRemoveFromAnswer(i)}
                disabled={checked}
                className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-base font-bold shadow-xs hover:border-red-300 transition cursor-pointer disabled:cursor-default"
                style={{ color: "var(--text-color)" }}
              >
                {unit}
              </button>
            ))}
          </div>

          {/* Ngân hàng từ (Word Bank) */}
          <div className="flex flex-wrap gap-2.5 justify-center pt-2">
            {bank.map((unit, i) => (
              <button
                key={`${unit}-${i}`}
                onClick={() => handlePickFromBank(i)}
                className="px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-base font-bold hover:border-indigo-500 hover:bg-indigo-50/30 dark:hover:bg-slate-800 transition active:scale-95 cursor-pointer shadow-xs"
                style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
              >
                {unit}
              </button>
            ))}
          </div>

          {!checked && (
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={handleCheck}
                disabled={!isFullyAnswered}
              >
                Kiểm tra
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* ============ 4. TOOLBAR CUỐI: fixed cố định sát đáy y chang ListeningTab ============ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 shadow-lg transition-all duration-300"
        style={{
          backgroundColor: checked
            ? isCorrect
              ? "#EBFFEF"
              : "#FFF0F0"
            : "var(--card-bg, #ffffff)",
        }}
      >
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
            {/* Nút Prev sang trái */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-color)",
                backgroundColor: "var(--card-bg)",
              }}
              title="Câu trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Text Feedback nằm giữa - Chỉ xuất hiện khi đã bấm Kiểm tra */}
            {checked ? (
              <div className="flex items-center gap-2 min-w-0 px-2 animate-in fade-in duration-200">
                <div className="min-w-0 text-center sm:text-left">
              {isCorrect ? (
                <p className="text-[12px] sm:text-[16px] font-extrabold text-[#30B83D]">
                  Chính xác!
                </p>
              ) : (
                <div className="text-[#DB2323] font-extrabold">
                  <p className="text-[12px] sm:text-[15px]">Chưa đúng</p>
                  <p className="text-[13px] sm:text-[16px] font-bold text-slate-700 dark:text-slate-200 truncate">
                    Đáp án: "{currentQuestion.fullText}"
                  </p>
                </div>
              )}
            </div>
              </div>
            ) : (
              <div className="hidden sm:block text-xs font-semibold opacity-50">
                Sắp xếp câu rồi bấm Kiểm tra
              </div>
            )}

            {/* Nút Thử lại / Tiếp theo / Hoàn thành sang phải */}
            <div className="flex items-center gap-2 shrink-0 ml-auto">
  {currentIndex < questions.length - 1 ? (
    <Button
      variant="primary"
      size="md"
      onClick={handleNext}
      disabled={!checked}
    >
      Tiếp theo
      <ChevronRight className="w-4 h-4 ml-1 inline-block" />
    </Button>
  ) : (
    <Button
      variant={isCompleted ? "secondary" : "primary"}
      size="md"
      onClick={onToggleComplete}
      className={
        isCompleted
          ? "bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200 cursor-pointer"
          : "cursor-pointer"
      }
    >
      {isCompleted ? "Đã hoàn thành" : "Hoàn thành"}
      <CheckCircle
        className={`w-4 h-4 ml-1.5 inline-block ${
          isCompleted ? "text-emerald-600" : ""
        }`}
      />
    </Button>
  )}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}