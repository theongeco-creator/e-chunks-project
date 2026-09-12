import { useState } from "react";
import { Volume2, Lightbulb, HelpCircle, BookOpen } from "lucide-react";
import type { Lesson, ChunkType } from "@/data/lessonData";
import { CHUNK_COLOR_LIST } from "@/data/lessonData";

export function VocabularyTab({ lesson }: { lesson: Lesson }) {
  // 🚀 TRẠNG THÁI ĐÓNG/MỞ MODAL CHÚ THÍCH MÀU
  const [showLegendModal, setShowLegendModal] = useState(false);

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
      {/* Khung đầu trang: Tiêu đề & Mô tả nằm dọc, bên phải là nút chú thích màu */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-800 relative">
        
        {/* Cột bên trái: Tiêu đề và Mô tả */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: 'var(--text-color)' }}>
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Từ vựng</span>
          </div>
          <p className="text-[14px] font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
            {lesson.chunks.length} cụm từ &amp; collocation quan trọng trong bài này, được nhóm theo loại ngữ pháp.
          </p>
        </div>

        {/* Cột bên phải: Nút chú thích màu */}
        <div className="flex items-center gap-2 relative flex-shrink-0">
          <button
              onClick={() => setShowLegendModal(!showLegendModal)}
              className="p-3 rounded-md border flex items-center gap-2 text-xs font-semibold shadow-2xs cursor-pointer transition"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
              title="Chú thích màu sắc các cụm từ"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Chú thích màu</span>
            </button>

          {/* MODAL HIỂN THỊ CHÚ THÍCH MÀU */}
          {showLegendModal && (
            <div className="absolute right-0 top-full mt-2 w-80 p-4 rounded-xl border shadow-xl bg-white dark:bg-slate-900 z-20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold uppercase opacity-80" style={{ color: 'var(--text-color)' }}>
                  Phân loại cụm từ ngữ pháp
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
                {CHUNK_COLOR_LIST.map((c) => (
                  <span
                    key={c.type}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg ${c.bg} ${c.border} border text-[11px] ${c.text} font-semibold`}
                  >
                    {c.labelVi}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {grouped.map(({ color, items }) => {
        const groupConfig = CHUNK_COLOR_LIST.find((c) => c.type === color.type) || color;

        return (
          <div key={color.type as ChunkType} className="space-y-3">
            {/* Tiêu đề nhóm (Đã bỏ chấm tròn theo ý ní) */}
            <div className="flex items-center gap-2">
              <h3 className={`text-sm font-bold ${groupConfig.text}`}>{groupConfig.labelVi}</h3>
              <span className="opacity-60 text-xs font-semibold" style={{ color: 'var(--text-color)' }}>({items.length})</span>
            </div>

            {/* Dàn trang thành 3 cột, card tự đổi màu nền theo loại từ (chunkConfig.bg) */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {items.map((chunk, i) => {
                const chunkConfig = CHUNK_COLOR_LIST.find((c) => c.type === chunk.type) || groupConfig;

                return (
                  <div
                    key={i}
                    onClick={() => speak(chunk.phrase)}
                    className={`rounded-md border p-5 shadow-sm bg-[#F9F9F9] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-blue-500 hover:shadow-md`}
                    style={{
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-color)'
                    }}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="min-w-0">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-[12px] font-semibold bg-white/80 dark:bg-slate-900/80 ${chunkConfig.text} ${chunkConfig.border} ${chunkConfig.bg} border mb-1.5`}
                          >
                            {chunkConfig.labelVi}
                          </span>
                          <h4 className="font-bold text-base" style={{ color: 'var(--text-color)' }}>
                            {chunk.phrase}
                          </h4>
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
                            e.stopPropagation();
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
                );
              })}
            </div>
          </div>
        );
      })}
      {/* 🚀 ĐÃ GỠ BỎ COMPONENT LessonCompletion Ở ĐÂY THEO ĐÚNG Ý NÍ */}
    </div>
  );
}