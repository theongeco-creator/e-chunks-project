import { useState, useMemo, useEffect } from "react";
import { Volume2, RotateCcw, CheckCircle2, XCircle, Sparkles, Settings2, ChevronLeft, ChevronRight, BookHeadphones } from "lucide-react";
import type { Lesson } from "@/data/lessonData";

interface ListeningQuizTabProps {
  lesson: Lesson;
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

export function ListeningQuizTab({ lesson }: ListeningQuizTabProps) {
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

  // 🚀 Cài đặt âm thanh - giống ListeningTab
  const [rate, setRate] = useState<number>(0.85);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [showSettings, setShowSettings] = useState(false);

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
    const correct = answer.every(
      (u, i) => u.toLowerCase() === currentQuestion.correctUnits[i]?.toLowerCase()
    );
    if (correct) setScore((s) => s + 1);
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    setBank(shuffle(questions[index].correctUnits));
    setAnswer([]);
    setChecked(false);
  };

  // 🚀 Nút Câu trước / Câu sau - điều hướng tự do, không phụ thuộc đã kiểm tra hay chưa
  const handlePrevQuestion = () => {
    if (currentIndex > 0) goToQuestion(currentIndex - 1);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) goToQuestion(currentIndex + 1);
  };

  const isCorrect =
    checked &&
    answer.length === currentQuestion.correctUnits.length &&
    answer.every((u, i) => u.toLowerCase() === currentQuestion.correctUnits[i]?.toLowerCase());

  return (
    <div className="space-y-6">
      {/* Tiêu đề tab + nút Tùy chỉnh âm thanh */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
  <div>
    <h2
      className="text-base font-bold flex items-center gap-2"
      style={{ color: "var(--text-color)" }}
    >
      <BookHeadphones className="w-5 h-5 text-blue-600 shrink-0" />
      <span>Nghe &amp; ghép câu</span>
    </h2>
    <p className="text-xs font-medium opacity-80 mt-0.5" style={{ color: "var(--text-color)" }}>
      Nghe câu rồi ghép các cụm từ theo đúng thứ tự: {lesson.title}
    </p>
  </div>

  <button
    onClick={() => setShowSettings(!showSettings)}
    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-semibold shadow-2xs cursor-pointer w-fit"
  >
    <Settings2 className="w-4 h-4 text-blue-600" />
    <span>Tùy chỉnh âm thanh</span>
  </button>
</div>

      {/* KHUNG CÀI ĐẶT NHANH - copy y hệt ListeningTab */}
      {showSettings && (
        <div
          className="p-4 rounded-2xl border bg-slate-50 dark:bg-slate-900/50 space-y-4"
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
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

            <div className="space-y-1.5">
              <label className="text-xs font-semibold opacity-80" style={{ color: "var(--text-color)" }}>
                Giọng đọc (Voice)
              </label>
              <select
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="w-full text-xs p-2 rounded-xl border bg-white dark:bg-slate-800 font-medium"
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

      {/* Khung trung tâm */}
      <div
        className="rounded-3xl border p-8 shadow-sm flex flex-col items-center text-center space-y-6 relative overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-color)",
        }}
      >
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
          Câu {currentIndex + 1} / {questions.length}
        </span>

        <button
          onClick={speakSentence}
          className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Nghe câu này"
        >
          <Volume2 className="w-8 h-8" />
        </button>
        <p className="text-sm font-medium opacity-70 -mt-3">
          Nghe rồi bấm các mảnh bên dưới theo đúng thứ tự
        </p>

        {/* Khu vực ghép câu - nền trắng, viền xanh dương */}
        <div className="w-full rounded-2xl border-2 border-blue-300 bg-white dark:bg-slate-950 p-4 space-y-4">
          {/* Khu vực đáp án */}
          <div
            className={`min-h-[70px] rounded-xl border-2 border-dashed p-3 flex flex-wrap gap-2 items-start content-start transition-colors ${
              checked
                ? isCorrect
                  ? "border-emerald-400 bg-emerald-50"
                  : "border-red-400 bg-red-50"
                : "border-blue-200 bg-blue-50/40"
            }`}
          >
            {answer.length === 0 && (
              <span className="text-sm text-slate-400 italic py-2 mx-auto">
                Bấm vào các mảnh bên dưới để xếp vào đây...
              </span>
            )}
            {answer.map((unit, i) => (
              <button
                key={`${unit}-${i}`}
                onClick={() => handleRemoveFromAnswer(i)}
                disabled={checked}
                className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition cursor-pointer disabled:cursor-default"
              >
                {unit}
              </button>
            ))}
          </div>

          {/* Kho các mảnh */}
          <div className="w-full flex flex-wrap gap-2 justify-center">
            {bank.map((unit, i) => (
              <button
                key={`${unit}-${i}`}
                onClick={() => handlePickFromBank(i)}
                className="px-3 py-2 rounded-lg bg-blue-50 border border-blue-200 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition cursor-pointer"
              >
                {unit}
              </button>
            ))}
          </div>
        </div>

        {checked && (
          <div
            className={`w-full flex items-center justify-center gap-2 text-sm font-semibold ${
              isCorrect ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Chính xác!
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" /> Chưa đúng — câu đúng: "{currentQuestion.fullText}"
              </>
            )}
          </div>
        )}

        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={!isFullyAnswered}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Kiểm tra
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs font-semibold opacity-60">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Đã kiểm tra — bấm "Câu sau" để tiếp tục</span>
          </div>
        )}

        {/* THANH ĐIỀU HƯỚNG CÂU TRƯỚC / CÂU SAU */}
        <div
          className="flex items-center justify-between w-full pt-4 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <button
            onClick={handlePrevQuestion}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800"
                : "hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            }`}
            style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <span className="text-xs font-bold text-blue-600">
            Điểm: {score} / {questions.length}
          </span>

          <button
            onClick={handleNextQuestion}
            disabled={currentIndex === questions.length - 1}
            className={`px-4 py-2 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition ${
              currentIndex === questions.length - 1
                ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800"
                : "hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            }`}
            style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
          >
            <span>Câu sau</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}