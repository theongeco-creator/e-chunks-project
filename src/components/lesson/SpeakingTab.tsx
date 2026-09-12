import { useState, useEffect, useRef } from "react";
import { Volume2, ChevronLeft, ChevronRight, Settings2, Sparkles, Mic, Square, RotateCcw, CheckCircle } from "lucide-react";
import type { Lesson, Chunk } from "@/data/lessonData";
import { LessonCompletion } from "./LessonCompletion";

// 👉 1. KHAI BÁO THÊM PROPS CHO INTERFACE
interface SpeakingTabProps {
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

// Tách 1 đoạn văn thành mảng từng câu, dựa theo dấu . ! ?
function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// 👉 Ghép IPA cho 1 câu bằng cách khớp các cụm từ đã có pronunciation trong chunks.
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

// 👉 Chuẩn hoá 1 từ: bỏ dấu câu, viết thường, dùng để so sánh
function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[.,!?;:"']/g, "");
}

interface WordResult {
  word: string;
  correct: boolean;
}

// 👉 So khớp câu mẫu với câu người dùng nói bằng LCS (Longest Common Subsequence) theo từ.
// Trả về: % điểm + mảng từng từ trong câu MẪU kèm trạng thái đúng/sai (để highlight).
function scoreSpeech(original: string, spoken: string): { score: number; words: WordResult[] } {
  const originalWords = original.split(/\s+/).filter(Boolean);
  const spokenWords = spoken.split(/\s+/).filter(Boolean);

  const normOriginal = originalWords.map(normalizeWord);
  const normSpoken = spokenWords.map(normalizeWord);

  const n = normOriginal.length;
  const m = normSpoken.length;

  // Bảng LCS
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

  // Truy vết để biết từ nào trong câu MẪU đã được nói khớp
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

export function SpeakingTab({ lesson, isCompleted, onToggleComplete }: SpeakingTabProps) {
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

  // 🎙️ State cho phần luyện nói + chấm điểm
  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [result, setResult] = useState<{ score: number; words: WordResult[]; spokenText: string } | null>(null);
  const recognitionRef = useRef<any>(null);

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

  // Kiểm tra trình duyệt có hỗ trợ SpeechRecognition không (Chrome/Edge có, Firefox/Safari thường không)
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);
  }, []);

  const currentSentence = sentences[currentIndex] || sentences[0];

  // Reset kết quả chấm điểm mỗi khi đổi câu
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
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600 dark:text-emerald-400";
    if (score >= 50) return "text-amber-500 dark:text-amber-400";
    return "text-red-500 dark:text-red-400";
  };

  if (sentences.length === 0) {
    return (
      <p className="text-sm text-slate-500 py-10 text-center">
        Bài học này chưa có nội dung để luyện nói.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tiêu đề tab */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: 'var(--text-color)' }}>
            <Mic className="w-5 h-5 text-blue-600" />
            <span>Luyện nói từng câu</span>
          </div>
          <p className="text-[14px] font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
            Thực hành phát âm và ngữ điệu theo bài học: {lesson.title}
          </p>
        </div>

        <button
          onClick={() => setShowSettings(!showSettings)}
          className="px-3 py-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-semibold shadow-2xs cursor-pointer w-fit"
        >
          <Settings2 className="w-4 h-4 text-blue-600" />
          <span>Tùy chỉnh âm thanh</span>
        </button>
      </div>

      {showSettings && (
        <div
          className="p-4 rounded-md border bg-slate-50 dark:bg-slate-900/50 space-y-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold opacity-80" style={{ color: "var(--text-color)" }}>
                Tốc độ mẫu: {rate}x
              </label>
              <div className="flex items-center gap-2">
                {[0.3 , 0.5 , 0.7, 0.9, 1.0].map((spd) => (
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
                Giọng mẫu (Voice)
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

      {/* KHUNG LUYỆN NÓI TỪNG CÂU */}
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

        <div className="space-y-2 max-w-2xl">
          <h3
            className="text-base sm:text-3xl font-extrabold tracking-tight"
            style={{ color: "var(--text-color)" }}
          >
            "{currentSentence.text}"
          </h3>

          <p className="text-[25px] font-inter font-medium text-blue-800 dark:text-blue-400 mt-1">
            {currentSentence.ipa}
          </p>
        </div>

        {/* Nút nghe mẫu + nút luyện nói */}
        <div className="flex items-center gap-4">
          <button
            onClick={speakCurrent}
            className="w-16 h-16 rounded-2xl bg-blue-800 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title="Nghe mẫu câu này"
          >
            <Volume2 className="w-8 h-8" />
          </button>

          <button
            onClick={isRecording ? stopRecording : startRecording}
            disabled={!isSupported}
            className={`w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !isSupported
                ? "bg-slate-300 dark:bg-slate-700 cursor-not-allowed"
                : isRecording
                ? "bg-red-500 hover:bg-red-600 animate-pulse"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
            }`}
            title={isRecording ? "Dừng ghi âm" : "Bấm để nói theo câu này"}
          >
            {isRecording ? <Square className="w-7 h-7" /> : <Mic className="w-8 h-8" />}
          </button>
        </div>

        {!isSupported && (
          <p className="text-xs text-red-500 -mt-2">
            Trình duyệt này chưa hỗ trợ nhận diện giọng nói. Hãy dùng Chrome hoặc Edge nhé.
          </p>
        )}

        {isRecording && (
          <p className="text-xs font-semibold text-red-500 -mt-2">🔴 Đang nghe... hãy nói câu trên</p>
        )}

        {/* KẾT QUẢ CHẤM ĐIỂM */}
        {result && (
          <div
            className="w-full rounded-lg border p-5 space-y-3 text-left"
            style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold opacity-70" style={{ color: "var(--text-color)" }}>
                Kết quả phát âm
              </span>
              <span className={`text-2xl font-extrabold ${scoreColor(result.score)}`}>
                {result.score}%
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-center py-2">
              {result.words.map((w, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 rounded-md text-sm font-semibold ${
                    w.correct
                      ? "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400"
                      : "bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 line-through decoration-2"
                  }`}
                >
                  {w.word}
                </span>
              ))}
            </div>

            <p className="text-xs opacity-60 text-center" style={{ color: "var(--text-color)" }}>
              Bạn đã nói: "{result.spokenText}"
            </p>

            <button
              onClick={startRecording}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Thử lại</span>
            </button>
          </div>
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
            <span className="text-xs font-semibold opacity-60" style={{ color: "var(--text-color)" }}>Phát âm chuẩn &amp; rõ ràng</span>
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

      {/* 👉 3. THAY THẾ KHUNG HOÀN THÀNH CUỐI TAB BẰNG NÚT ĐỒ BỘ MỚI */}
      <div 
        className="flex items-center justify-between p-4 rounded-lg border bg-slate-50 dark:bg-slate-900/50"
        style={{ borderColor: "var(--border-color)" }}
        >
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold" style={{ color: "var(--text-color)" }}>
            Tự luyện có thấy ổn hong!
          </span>
          <span className="text-[12px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Không ai soi phát âm đâu, luyện nhiều lần, quen miệng là nói được à!
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