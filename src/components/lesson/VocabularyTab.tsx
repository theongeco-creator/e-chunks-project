import { Volume2, Lightbulb } from "lucide-react";
import type { Lesson, ChunkType } from "@/data/lessonData";
import { CHUNK_COLOR_LIST } from "@/data/lessonData";
import { LessonCompletion } from "./LessonCompletion";

export function VocabularyTab({ lesson }: { lesson: Lesson }) {
  // 🚀 KIỂM TRA TRẠNG THÁI HOÀN THÀNH KHI MỞ TAB
  const key = `lesson_progress_${lesson.day}`;
  const savedTabs: string[] = JSON.parse(localStorage.getItem(key) || "[]");
  const isCompleted = savedTabs.includes("vocabulary"); // Biến check xem tab này đã xong chưa

  // 🚀 HÀM PHÁT ÂM THUẦN TÚY
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  };

  const grouped = CHUNK_COLOR_LIST.map((color) => ({
    color,
    items: lesson.chunks.filter((c) => c.type === color.type),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="space-y-6">
      {/* Tiêu đề & Trạng thái đã học */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-sm font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
          {lesson.chunks.length} cụm từ &amp; collocation quan trọng trong bài này,
          được nhóm theo loại ngữ pháp.
        </p>
        
        {/* HIỆN THỊ DẤU TÍCH XANH NẾU TAB NÀY ĐÃ HOÀN THÀNH */}
        {isCompleted && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold w-fit">
            ✓ Đã hoàn thành từ vựng
          </span>
        )}
      </div>

      {/* Color legend */}
      <div className="flex flex-wrap gap-2">
        {CHUNK_COLOR_LIST.map((c) => (
          <span
            key={c.type}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${c.bg} ${c.border} border text-xs ${c.text} font-semibold`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: c.hex }}
            />
            {c.label}
          </span>
        ))}
      </div>

      {grouped.map(({ color, items }) => (
        <div key={color.type as ChunkType} className="space-y-3">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color.hex }}
            />
            <h3 className={`text-sm font-bold ${color.text}`}>{color.label}</h3>
            <span className="opacity-60 text-xs font-semibold" style={{ color: 'var(--text-color)' }}>({items.length})</span>
          </div>

          {/* Dàn trang thành 3 cột (lg:grid-cols-3) */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((chunk, i) => (
              <div
                key={i}
onClick={() => speak(chunk.phrase)}
className="rounded-2xl border p-5 shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-blue-500 hover:shadow-md"
style={{
  backgroundColor: 'var(--bg-color)', // 👈 Đổi từ var(--card-bg) thành var(--bg-color)
  borderColor: 'var(--border-color)',
  color: 'var(--text-color)'
}}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold ${color.bg} ${color.text} ${color.border} border mb-1.5`}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: color.hex }}
                        />
                        {color.label}
                      </span>
                      <h4 className="font-bold text-base" style={{ color: 'var(--text-color)' }}>
                        {chunk.phrase}
                      </h4>
                      {/* Hiển thị phiên âm IPA nếu có trong data, hoặc hiển thị mờ */}
                      {chunk.pronunciation ? (
                        <p className="text-sm font-mono font-semibold mt-1 text-gray-500 dark:text-blue-400">
                          {chunk.pronunciation}
                        </p>
                      ) : (
                        <p className="text-xs font-medium mt-0.5 opacity-60" style={{ color: 'var(--text-color)' }}>
                          {chunk.pronunciation}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Ngăn chặn sự kiện click lan ra card ngoài
                        speak(chunk.phrase);
                      }}
                      className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors flex-shrink-0"
                      aria-label="Phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-color)' }}>
                    {chunk.meaning}
                  </p>
                </div>
                <div className="flex items-start gap-2 pt-3 border-t mt-3" style={{ borderColor: 'var(--border-color)' }}>
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs leading-relaxed font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
                    {chunk.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <LessonCompletion lessonId={lesson.day} currentTab="vocab" />
    </div>
  );
}