import { useState } from "react";
import { Eye, EyeOff, Check, RotateCcw, PenLine } from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { LessonCompletion } from "./LessonCompletion";

interface WordResult {
  word: string;
  userWord: string;
  correct: boolean;
}

export function WritingTab({ lesson }: { lesson: Lesson }) {
  const [showSample, setShowSample] = useState(true);
  const [userText, setUserText] = useState("");
  const [results, setResults] = useState<WordResult[] | null>(null);

  // 🚀 TỰ ĐỘNG LƯU TIẾN ĐỘ KHI HOÀN THÀNH WRITING
  const markWritingComplete = () => {
    const key = `lesson_progress_${lesson.day}`;
    const savedTabs: string[] = JSON.parse(localStorage.getItem(key) || "[]");
    
    if (!savedTabs.includes("writing")) {
      const updated = [...savedTabs, "writing"];
      localStorage.setItem(key, JSON.stringify(updated));
      window.dispatchEvent(new Event("lesson-progress-changed"));
    }
  };

  const normalize = (s: string) =>
    s.toLowerCase().replace(/[.,!?;:"']/g, "").replace(/\s+/g, " ").trim();

  const handleCheck = () => {
    const originalWords = normalize(lesson.paragraph).split(" ").filter(Boolean);
    const userWords = normalize(userText).split(" ").filter(Boolean);
    const out: WordResult[] = originalWords.map((word, i) => ({
      word,
      userWord: userWords[i] ?? "",
      correct: (userWords[i] ?? "").toLowerCase() === word.toLowerCase(),
    }));
    setResults(out);
    markWritingComplete();
  };

  const handleReset = () => {
    setUserText("");
    setResults(null);
  };

  const accuracy =
    results && results.length > 0
      ? Math.round((results.filter((r) => r.correct).length / results.length) * 100)
      : 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-sm font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
        <PenLine className="w-4 h-4 text-blue-600" />
        Sau khi học thuộc hãy chép lại toàn bộ đoạn văn mẫu từ trí nhớ – luyện nhớ sâu &amp; chính tả.
      </div>

      {/* Sample text toggle */}
      <button
        onClick={() => setShowSample((s) => !s)}
        className="flex items-center gap-2 text-sm font-semibold transition-colors opacity-80 hover:opacity-100 hover:text-blue-600"
        style={{ color: 'var(--text-color)' }}
      >
        {showSample ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        {showSample ? "Ẩn đoạn văn mẫu" : "Hiện đoạn văn mẫu"}
      </button>

      {showSample && (
        <div 
          className="rounded-2xl border p-5 shadow-sm transition-colors duration-300"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
        >
          <p className="leading-relaxed text-sm font-medium" style={{ color: 'var(--text-color)' }}>{lesson.paragraph}</p>
        </div>
      )}

      {/* Textarea */}
      <textarea
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        disabled={results !== null}
        placeholder="Gõ lại toàn bộ đoạn văn tại đây..."
        rows={8}
        className="w-full border rounded-2xl px-5 py-4 outline-none transition-colors resize-none leading-relaxed font-medium shadow-sm disabled:opacity-60"
        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
      />

      {/* Results */}
      {results && (
        <div className="space-y-4">
          <div 
            className="flex items-center justify-between p-4 rounded-xl border shadow-sm transition-colors duration-300"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          >
            <span className="text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
              Độ chính xác:{" "}
              <span
                className={`font-bold text-lg ${
                  accuracy >= 80
                    ? "text-emerald-600"
                    : accuracy >= 50
                    ? "text-amber-600"
                    : "text-rose-600"
                }`}
              >
                {accuracy}%
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

          <div 
            className="rounded-2xl border p-5 shadow-sm transition-colors duration-300"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          >
            <p className="text-xs font-semibold mb-3 opacity-60" style={{ color: 'var(--text-color)' }}>
              <span className="text-emerald-600">●</span> Đúng &nbsp;·&nbsp;
              <span className="text-rose-600">●</span> Sai / thiếu (đáp án đúng bên cạnh)
            </p>
            <p className="leading-loose font-medium" style={{ color: 'var(--text-color)' }}>
              {results.map((r, i) =>
                r.correct ? (
                  <span key={i} className="text-emerald-600 mr-1">
                    {r.word}
                  </span>
                ) : (
                  <span key={i} className="mr-1">
                    <span className="text-rose-600 line-through font-semibold">
                      {r.userWord || "___"}
                    </span>
                    <span className="text-emerald-600 ml-0.5 font-bold">→ {r.word}</span>
                  </span>
                )
              )}
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      {!results && (
        <div className="flex gap-3">
          <button
            onClick={handleCheck}
            disabled={!userText.trim()}
            className="flex-1 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Kiểm tra đáp án
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-3.5 rounded-xl border transition-colors shadow-sm flex items-center justify-center"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      )}
      <LessonCompletion lessonId={lesson.day} currentTab="writing" />
    </div>
  );
}