import { useState, useEffect, useMemo } from "react";
import { Volume2, ChevronLeft, ChevronRight, Settings2, Headphones, CheckCircle, Award, RotateCcw, AlertTriangle, ArrowRight } from "lucide-react";
import type { Lesson, Chunk } from "@/data/lessonData";
import { Button } from "@/components/Button"; // 👈 chỉnh lại path cho khớp project của bạn
import { createPortal } from "react-dom";

interface ListeningTabProps {
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
  onNextTab?: () => void;
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

export function ListeningTab({ lesson, isCompleted, onToggleComplete,  onNextTab }: ListeningTabProps) {
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
  // State điều khiển Modal xác nhận chuyển tab
  const [showConfirmNextModal, setShowConfirmNextModal] = useState(false);

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
    <div className="space-y-4 pb-28">
      {/* ============ 1. HEADER NHẸ: tiêu đề + icon công cụ phụ ============ */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: "var(--text-color)" }}>
            <Headphones className="w-5 h-5 text-brand-500" />
            <span>Listening</span>
          </div>
          <p className="text-[13px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Luyện nghe từng câu và chọn từ đúng để điền vào chỗ trống
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {answeredCount > 0 && (
            <button
              onClick={handleReset}
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer"
              style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
              title="Xoá hết đáp án và làm lại từ đầu"
              aria-label="Làm lại"
            >
              <RotateCcw className="w-4 h-4 opacity-70" />
            </button>
          )}

          <div className="relative" data-listening-settings>
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
              width: `${((currentIndex + 1) / sentences.length) * 100}%`,
              backgroundColor: "#4F46E5",
            }}
          />
        </div>
        <span
          className="text-base font-bold shrink-0 flex items-center gap-1.5"
          style={{ color: "var(--text-color)" }}
        >
          <Award className="w-3.5 h-3.5 text-amber-500" />
          {correctCount}/{totalQuestions}
        </span>
      </div>

      {shouldSuggestReset && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-lg border bg-amber-50 border-amber-300">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <p className="text-sm font-bold text-amber-700">
                Bạn sai {wrongCount}/{totalQuestions} câu rồi đó!
              </p>
              <p className="text-xs font-medium opacity-70 text-amber-700">
                Làm lại từ đầu để nghe kỹ hơn và nắm chắc bài này nhé.
              </p>
            </div>
          </div>
          <Button variant="primary" size="sm" icon={<RotateCcw className="w-4 h-4" />} onClick={handleReset}>
            Làm lại từ đầu
          </Button>
        </div>
      )}

      {/* ============ 3. CARD CÂU HỎI ============ */}
      <div
        className="rounded-2xl shadow-card p-6 sm:p-8 flex flex-col items-center text-center space-y-5"
        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
      >
        <button
          onClick={speakCurrent}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          style={{ backgroundColor: "#4F46E5", color: "#fff" }}
          title="Nghe câu này"
        >
          <Volume2 className="w-7 h-7" />
        </button>

        {currentQuestion ? (
          <div className="w-full max-w-2xl space-y-4">
            <h3
              className="text-xl sm:text-2xl font-extrabold tracking-tight leading-relaxed"
              style={{ color: "var(--text-color)" }}
            >
              {(() => {
                const parts = currentQuestion.blankedText.split("_____");
                const before = parts[0] ?? "";
                const after = parts[1] ?? "";

                return (
                  <>
                    {before}
                    {isRevealed ? (
                      <span className={isCorrect ? "text-[#30B83D]" : "text-[#DB2323]"}>
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

                // Style mặc định chưa trả lời
                let boxStyle: React.CSSProperties = {
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-color)",
                };
                // 🚀 Đổi border thành border-2, tăng py-5 để box to và viền dày hơn
                 let extraClass = "border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:bg-indigo-50/30 dark:hover:bg-slate-800/60 shadow-sm active:scale-[0.99]";

                // Style khi đã bấm chọn / hiển thị đáp án
                if (isRevealed) {
                  if (isThisCorrect) {
                    boxStyle = { backgroundColor: "#EBFFEF", borderColor: "#30B83D", color: "#232323" };
                  } else if (isThisSelected) {
                    boxStyle = { backgroundColor: "#FFF0F0", borderColor: "#DB2323", color: "#232323" };
                  } else {
                    extraClass = "opacity-50";
                  }
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isRevealed}
                    style={boxStyle}
                    className={`px-5 py-4 rounded-xl border-2 text-[16px] font-bold transition-all ${extraClass} ${
                      !isRevealed ? "cursor-pointer hover:bg-neutral-bg" : "cursor-default"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-sm opacity-60" style={{ color: "var(--text-color)" }}>
            Câu này chưa đủ dữ liệu để tạo bài tập nghe.
          </p>
        )}
      </div>

      {/* ============ 4. TOOLBAR CUỐI: fixed cố định ở bottom ============ */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 shadow-lg transition-all duration-300"
        style={{ 
          backgroundColor: isRevealed 
            ? (isCorrect ? "#EBFFEF" : "#FFF0F0") 
            : "var(--card-bg, #ffffff)" // Hoặc bg-white dark:bg-slate-900 mặc định
        }}
      >
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
            {/* Nút Prev sang trái */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800"
              style={{ borderColor: "var(--border-color)", color: "var(--text-color)", backgroundColor: "var(--card-bg)" }}
              title="Câu trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Text Feedback nằm giữa - Chỉ xuất hiện khi đã trả lời */}
            {isRevealed && currentQuestion ? (
              <div className="flex items-center gap-2 min-w-0 px-2 animate-in fade-in duration-200">
                <div className="min-w-0 text-center sm:text-left">
                  <p className={`text-[15px] sm:text-[16px] font-extrabold truncate ${isCorrect ? "text-[#30B83D]" : "text-[#DB2323]"}`}>
                    {isCorrect ? "Chính xác!" : `Chưa đúng — Đáp án: "${currentQuestion.correct}"`}
                  </p>
                  {currentSentence?.translation && (
                    <p className="text-[13px] sm:text-[14px] font-medium opacity-75 truncate" style={{ color: "var(--text-color)" }}>
                      {currentSentence.translation}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden sm:block text-xs font-semibold opacity-50">
                Lựa chọn đáp án để tiếp tục
              </div>
            )}

            {/* Nút Next / Complete / Kỹ năng tiếp theo sang phải */}
            <div className="flex items-center gap-2 shrink-0 ml-auto">
              {currentIndex < sentences.length - 1 ? (
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleNext}
                  disabled={!isRevealed}
                >
                  Tiếp theo
                  <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                </Button>
              ) : (
                <>
                  {/* Nút Hoàn thành */}
                  <Button
                    variant={isCompleted ? "ghost" : "outline"}
                    size="md"
                    onClick={onToggleComplete}
                    disabled={!isRevealed}
                  >
                    {isCompleted ? "Đã hoàn thành" : "Hoàn thành"}
                    <CheckCircle className="w-4 h-4 ml-1.5 inline-block" />
                  </Button>

                  {/* Nút Kỹ năng tiếp theo */}
                  {isCompleted && onNextTab && (
                    <Button
                      variant="dark"
                      size="md"
                      onClick={() => setShowConfirmNextModal(true)}
                      className="bg-[#513DEB] hover:bg-[#4332ca] text-white"
                    >
                      Kỹ năng tiếp theo &rarr;
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============ MODAL XÁC NHẬN CHUYỂN KỸ NĂNG (ĐẶT NGOÀI TOOLBAR) ============ */}
      {showConfirmNextModal &&
      createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 max-w-md w-full shadow-2xl space-y-5 animate-scaleUp">
            
            <div className="w-12 h-12 rounded-2xl bg-[#513DEB]/10 dark:bg-[#513DEB]/20 flex items-center justify-center text-[#513DEB] dark:text-[#9084f3]">
              <ArrowRight className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Chuyển sang kỹ năng tiếp theo?
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Bạn đã hoàn thành phần <strong>Luyện nghe (Listening)</strong>. Bạn muốn chuyển tiếp sang kỹ năng tiếp theo hay ở lại để ôn tập thêm?
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmNextModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Ở lại ôn bài
              </button>

              <button
                onClick={() => {
                  setShowConfirmNextModal(false);
                  if (onNextTab) onNextTab();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#513DEB] hover:bg-[#4332ca] text-white text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#513DEB]/25"
              >
                <span>Chuyển ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>,
          document.body
        )}

    </div>
  );
}