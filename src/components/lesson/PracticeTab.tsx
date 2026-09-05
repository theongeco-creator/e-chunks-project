import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, RotateCcw, Volume2, Square } from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { LessonCompletion } from "./LessonCompletion";

export function PracticeTab({ lesson }: { lesson: Lesson }) {
  const [answers, setAnswers] = useState<string[]>(() =>
    lesson.practice.map(() => "")
  );
  const [checked, setChecked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHints, setShowHints] = useState(false);
  
  // State quản lý danh sách giọng đọc từ trình duyệt
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  const markPracticeComplete = () => {
    const key = `lesson_progress_${lesson.day}`;
    const savedTabs: string[] = JSON.parse(localStorage.getItem(key) || "[]");
    
    if (!savedTabs.includes("practice")) {
      const updated = [...savedTabs, "practice"];
      localStorage.setItem(key, JSON.stringify(updated));
      window.dispatchEvent(new Event("lesson-progress-changed"));
    }
  };

  useEffect(() => {
    const handleEnd = () => setIsPlaying(false);
    window.speechSynthesis.addEventListener("end", handleEnd);
    return () => {
      window.speechSynthesis.removeEventListener("end", handleEnd);
    };
  }, []);

  // Lấy danh sách giọng đọc hỗ trợ trên trình duyệt
  useEffect(() => {
    const updateVoices = () => {
      if (!("speechSynthesis" in window)) return;
      const availableVoices = window.speechSynthesis.getVoices();
      const englishVoices = availableVoices.filter(v => v.lang.startsWith("en"));
      setVoices(englishVoices);
      
      if (englishVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(englishVoices[0].name);
      }
    };

    updateVoices();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, [selectedVoice]);

  const togglePlayAudio = () => {
    if (!("speechSynthesis" in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const fullText = lesson.practice
        .map((q) => q.prompt.replace("____", q.answer))
        .join(" ");
      const u = new SpeechSynthesisUtterance(fullText);
      
      if (selectedVoice) {
        const v = voices.find(vo => vo.name === selectedVoice);
        if (v) u.voice = v;
      }

      u.rate = 0.9;
      u.onend = () => setIsPlaying(false);
      
      window.speechSynthesis.speak(u);
      setIsPlaying(true);
    }
  };

  const handleCheck = () => {
    setChecked(true);
    markPracticeComplete();
  };

  const handleReset = () => {
    setAnswers(lesson.practice.map(() => ""));
    setChecked(false);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const isCorrect = (idx: number) =>
    answers[idx].trim().toLowerCase() === lesson.practice[idx].answer.toLowerCase();

  const score = lesson.practice.filter((_, i) => isCorrect(i)).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="text-sm font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
          Nhấn nghe và điền vào chỗ trống trong bài viết sau.
        </p>
      </div>

      {/* Thanh điều khiển âm thanh */}
      <div 
        className="rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
      >
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={togglePlayAudio}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-md ${
              isPlaying 
                ? "bg-rose-600 text-white shadow-rose-500/20 hover:bg-rose-700" 
                : "bg-blue-600 text-white shadow-blue-500/20 hover:bg-blue-700"
            }`}
            title={isPlaying ? "Dừng đọc" : "Phát âm thanh"}
          >
            {isPlaying ? (
              <Square className="w-5 h-5 fill-current" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>

          {isPlaying && (
            <button
              onClick={() => {
                window.speechSynthesis.cancel();
                setIsPlaying(false);
              }}
              className="w-10 h-10 rounded-xl border flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
              title="Dừng hẳn"
            >
              <Square className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2 text-sm font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
            <Volume2 className="w-4 h-4 text-blue-500" />
            <span>{isPlaying ? "Đang phát âm thanh..." : "Sẵn sàng"}</span>
          </div>
        </div>

        {/* Khung chọn giọng đọc */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <div 
            className="flex items-center gap-2 px-3 py-2 border rounded-xl text-xs font-semibold"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          >
            <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">
              🌐
            </span>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="bg-transparent border-none outline-none font-semibold cursor-pointer max-w-[180px] sm:max-w-[220px] truncate"
              style={{ color: 'var(--text-color)' }}
            >
              {voices.map((v) => (
                <option key={v.name} value={v.name} style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Khối đoạn văn luyện tập */}
      <div 
        className="rounded-2xl p-6 md:p-8 shadow-sm space-y-6 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
      >
        <div className="text-lg leading-loose font-medium flex flex-wrap items-center gap-y-3 gap-x-2" style={{ color: 'var(--text-color)' }}>
          {lesson.practice.map((q, i) => {
            const parts = q.prompt.split("____");
            const correct = isCorrect(i);

            return (
              <span key={i} className="inline-flex items-center flex-wrap gap-1.5">
                <span>{parts[0]}</span>
                <span className="relative inline-block mx-1">
                  <input
                    type="text"
                    value={answers[i]}
                    disabled={checked}
                    onChange={(e) => {
                      const next = [...answers];
                      next[i] = e.target.value;
                      setAnswers(next);
                    }}
                    placeholder="..."
                    className={`px-3 py-1 text-center rounded-lg border text-base font-semibold outline-none transition-all w-32 ${
                      checked
                        ? correct
                          ? "border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                          : "border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300"
                        : "border-slate-300 dark:border-slate-700 bg-transparent focus:border-blue-500"
                    }`}
                    style={{ color: checked ? undefined : 'var(--text-color)' }}
                  />
                </span>
                <span>{parts[1]}</span>
                
                {checked && (
                  correct ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 inline-block" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 inline-block" />
                  )
                )}
              </span>
            );
          })}
        </div>

        {/* Gợi ý (Hint) */}
        <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: 'var(--text-color)' }}>
              Trợ giúp:
            </p>
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              {showHints ? "Ẩn gợi ý 🙈" : "Xem gợi ý 💡"}
            </button>
          </div>

          {showHints && (
            <div className="flex flex-wrap gap-2 pt-1 animate-fadeIn">
              {lesson.practice.map((q, i) => (
                <span 
                  key={i} 
                  className="text-xs border px-2.5 py-1 rounded-lg"
                  style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
                >
                  <strong className="text-blue-600">({i + 1})</strong> {q.hint}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {checked && (
        <div 
          className="flex items-center justify-between p-4 rounded-xl border shadow-sm transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
        >
          <span className="text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
            Kết quả toàn đoạn:{" "}
            <span className="font-bold text-blue-600">
              {score}/{lesson.practice.length}
            </span>
          </span>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-sm font-semibold transition-colors opacity-80 hover:opacity-100 hover:text-blue-600"
            style={{ color: 'var(--text-color)' }}
          >
            <RotateCcw className="w-4 h-4" />
            Làm lại
          </button>
        </div>
      )}

      {!checked && (
        <button
          onClick={handleCheck}
          className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors"
        >
          Kiểm tra đáp án
        </button>
      )}

      <LessonCompletion lessonId={lesson.day} currentTab="practice" />
    </div>
  );
}