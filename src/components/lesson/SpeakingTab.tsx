import { useState, useEffect, useRef } from "react";
import {
  Volume2,
  ChevronLeft,
  ChevronRight,
  Settings2,
  Mic,
  Square,
  RotateCcw,
  CheckCircle,
  Award,
  ArrowRight,
} from "lucide-react";
import type { Lesson, Chunk } from "@/data/lessonData";
import { Button } from "@/components/Button";
import { createPortal } from "react-dom";
import { playSound } from "@/lib/sound"; // 🔊 import hàm âm thanh từ lib

interface SpeakingTabProps {
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

function buildSentenceIpa(sentence: string, chunks: Chunk[]): string {
  if (!chunks || chunks.length === 0) return "(chưa có IPA cho câu này)";

  const sorted = [...chunks].sort((a, b) => b.phrase.length - a.phrase.length);
  let result = sentence;
  let matched = false;

  for (const chunk of sorted) {
    const escaped = chunk.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "i");
    if (regex.test(result)) {
      result = result.replace(regex, `[${chunk.pronunciation}]`);
      matched = true;
    }
  }

  return matched ? result : "(chưa có IPA cho câu này)";
}

function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[.,!?;:"']/g, "");
}

interface WordResult {
  word: string;
  correct: boolean;
}

function scoreSpeech(original: string, spoken: string): { score: number; words: WordResult[] } {
  const originalWords = original.split(/\s+/).filter(Boolean);
  const spokenWords = spoken.split(/\s+/).filter(Boolean);

  const normOriginal = originalWords.map(normalizeWord);
  const normSpoken = spokenWords.map(normalizeWord);

  const n = normOriginal.length;
  const m = normSpoken.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (normOriginal[i - 1] === normSpoken[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const matchedInOriginal = new Array(n).fill(false);
  let i = n;
  let j = m;
  while (i > 0 && j > 0) {
    if (normOriginal[i - 1] === normSpoken[j - 1]) {
      matchedInOriginal[i - 1] = true;
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  const words: WordResult[] = originalWords.map((word, idx) => ({
    word,
    correct: matchedInOriginal[idx],
  }));

  const score = n === 0 ? 0 : Math.round((dp[n][m] / n) * 100);

  return { score, words };
}

export function SpeakingTab({ lesson, isCompleted, onToggleComplete, onNextTab }: SpeakingTabProps) {
  const sentences = (() => {
    if (lesson.sentences && lesson.sentences.length > 0) {
      return lesson.sentences;
    }
    const englishSentences = splitSentences(lesson.paragraph || lesson.title || "");
    return englishSentences.map((text) => ({
      text,
      ipa: buildSentenceIpa(text, lesson.chunks ?? []),
    }));
  })();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rate, setRate] = useState<number>(0.9);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [showSettings, setShowSettings] = useState(false);

  const [showConfirmNextModal, setShowConfirmNextModal] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [result, setResult] = useState<{ score: number; words: WordResult[]; spokenText: string } | null>(null);
  const recognitionRef = useRef<any>(null);

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

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);
  }, []);

  const currentSentence = sentences[currentIndex] || sentences[0];

  useEffect(() => {
    setResult(null);
    setIsRecording(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, [currentIndex]);

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

  const startRecording = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    setResult(null);
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsRecording(true);

    recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      const { score, words } = scoreSpeech(currentSentence.text, spokenText);
      setResult({ score, words, spokenText });

      // 🔊 TỰ ĐỘNG PHÁT TIẾNG .MP3 ĐÚNG/SAI DỰA TRÊN ĐIỂM SỐ (Đạt >= 80% là Đúng)
      const isPassed = score >= 80;
      playSound(isPassed);
    };

    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setResult(null);
    setIsRecording(false);
  };

  if (sentences.length === 0) {
    return (
      <p className="text-sm text-slate-500 py-10 text-center">
        Bài học này chưa có nội dung để luyện nói.
      </p>
    );
  }

  return (
    <div className="space-y-4 pb-28">
      {/* ============ 1. HEADER NHẸ ============ */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: "var(--text-color)" }}>
            <Mic className="w-5 h-5 text-brand-500" />
            <span>Speaking</span>
          </div>
          <p className="text-[13px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Thực hành luyện nói từng câu phát âm và ngữ điệu: {lesson.title}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleReset}
            className="w-9 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer"
            style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
            title="Bắt đầu lại"
            aria-label="Làm lại"
          >
            <RotateCcw className="w-4 h-4 opacity-70" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer"
              style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
              title="Tùy chỉnh âm thanh"
              aria-label="Cài đặt phát âm"
            >
              <Settings2 className="w-4 h-4 opacity-70" />
            </button>

            {showSettings && (
              <div className="absolute right-0 mt-2 w-64 p-3 rounded-lg border shadow-xl bg-white dark:bg-slate-900 z-20 space-y-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-textMuted">
                    Tốc độ mẫu: {rate}x
                  </span>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {[0.5, 0.7, 0.9, 1.0].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setRate(spd)}
                        className={`flex-1 text-xs font-semibold py-1.5 rounded-md cursor-pointer transition ${
                          rate === spd
                            ? "bg-brand-soft text-brand-500"
                            : "text-neutral-textSecondary hover:bg-neutral-bg"
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-border">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-textMuted">
                    Giọng đọc mẫu
                  </span>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full text-xs p-2 mt-1.5 rounded-md border font-medium bg-white dark:bg-slate-800"
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

      {/* ============ 2. THANH TIẾN ĐỘ ============ */}
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
          className="text-xs font-bold shrink-0 flex items-center gap-1.5"
          style={{ color: "var(--text-color)" }}
        >
          <Award className="w-3.5 h-3.5 text-amber-500" />
          {currentIndex + 1}/{sentences.length}
        </span>
      </div>

      {/* ============ 3. CARD CÂU HỎI LUYỆN NÓI ============ */}
      <div
        className="rounded-2xl shadow-card p-8 sm:p-8 flex flex-col items-center text-center space-y-6"
        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
      >
        <div className="space-y-2 max-w-2xl">
          <h3
            className="text-3xl font-extrabold tracking-tight"
            style={{ color: "var(--text-color)" }}
          >
            "{currentSentence.text}"
          </h3>

          <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            {currentSentence.ipa}
          </p>
        </div>

        {/* Nút Nghe mẫu & Nút Ghi âm */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={speakCurrent}
            className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
            title="Nghe phát âm mẫu"
          >
            <Volume2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          </button>

          <button
            onClick={isRecording ? stopRecording : startRecording}
            disabled={!isSupported}
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !isSupported
                ? "bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-50"
                : isRecording
                ? "bg-red-500 hover:bg-red-600 animate-pulse text-white scale-105"
                : "bg-indigo-600 hover:bg-indigo-700 hover:scale-105 active:scale-95 text-white"
            }`}
            title={isRecording ? "Dừng thu âm" : "Nói theo mẫu"}
          >
            {isRecording ? <Square className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
          </button>
        </div>

        {!isSupported && (
          <p className="text-xs text-red-500">
            Trình duyệt này chưa hỗ trợ nhận diện giọng nói. Hãy sử dụng Chrome hoặc Edge.
          </p>
        )}

        {isRecording && (
          <p className="text-xs font-bold text-red-500 animate-pulse">
            🔴 Đang thu âm... hãy đọc câu phía trên
          </p>
        )}

        {/* Chi tiết từ đã phát âm */}
        {result && (
          <div className="w-full max-w-xl space-y-3 pt-2">
            <div className="flex flex-wrap gap-2 justify-center">
              {result.words.map((w, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-2.5 rounded-xl border-2 text-[16px] font-bold ${
                    w.correct
                      ? "border-[#30B83D] bg-[#EBFFEF] text-[#232323] dark:bg-emerald-950/40 dark:text-emerald-300"
                      : "border-[#DB2323] bg-[#FFF0F0] text-[#232323] dark:bg-red-950/40 dark:text-red-400 line-through decoration-2"
                  }`}
                >
                  {w.word}
                </span>
              ))}
            </div>

            <p className="text-xs font-medium opacity-60" style={{ color: "var(--text-color)" }}>
              Hệ thống nghe được: "{result.spokenText}"
            </p>
          </div>
        )}
      </div>

      {/* ============ 4. TOOLBAR CUỐI ============ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 shadow-lg transition-all duration-300"
        style={{
          backgroundColor: result
            ? result.score >= 80
              ? "#EBFFEF"
              : "#FFF0F0"
            : "var(--card-bg, #ffffff)",
        }}
      >
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800"
              style={{ borderColor: "var(--border-color)", color: "var(--text-color)", backgroundColor: "var(--card-bg)" }}
              title="Câu trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {result ? (
              <div className="flex items-center gap-2 min-w-0 px-2 animate-in fade-in duration-200">
                <span
                  className={`text-[15px] sm:text-[16px] font-extrabold truncate ${
                    result.score >= 80 ? "text-[#30B83D]" : "text-[#DB2323]"
                  }`}
                >
                  {result.score >= 80
                    ? `Xuất sắc! Điểm: ${result.score}%`
                    : `Cố lên! Điểm: ${result.score}%`}
                </span>
              </div>
            ) : (
              <div className="hidden sm:block text-xs font-semibold opacity-50">
                Nhấn biểu tượng Micro để ghi âm câu nói
              </div>
            )}

            <div className="flex items-center gap-2 shrink-0 ml-auto">
              {result && (
                <Button variant="secondary" size="md" onClick={startRecording}>
                  <RotateCcw className="w-4 h-4 mr-1 inline-block" />
                  Thử lại
                </Button>
              )}

              {currentIndex < sentences.length - 1 ? (
                <Button variant="primary" size="md" onClick={handleNext}>
                  Tiếp theo
                  <ChevronRight className="w-4 h-4 ml-1.5 inline-block" />
                </Button>
              ) : (
                <>
                  <Button
                    variant={isCompleted ? "ghost" : "outline"}
                    size="md"
                    onClick={onToggleComplete}
                  >
                    {isCompleted ? "Đã hoàn thành" : "Hoàn thành"}
                    <CheckCircle className="w-4 h-4 ml-1.5 inline-block" />
                  </Button>

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

      {/* ============ MODAL XÁC NHẬN CHUYỂN KỸ NĂNG ============ */}
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
                Bạn đã hoàn thành phần <strong>Luyện nói (Speaking)</strong>. Bạn muốn chuyển tiếp sang kỹ năng tiếp theo hay ở lại để ôn tập thêm?
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