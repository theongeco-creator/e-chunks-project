import { useState } from "react";
import { Volume2, HelpCircle, BookOpen, Lightbulb } from "lucide-react";
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
      {/* Khung đầu trang: Tiêu đề & Mô tả */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-800 relative">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Vocabulary</span>
          </div>
          <p className="text-[14px] font-medium text-slate-500 dark:text-slate-400">
            {lesson.chunks.length} cụm từ &amp; collocation quan trọng trong bài này, được nhóm theo loại ngữ pháp.
          </p>
        </div>

        {/* Nút chú thích màu */}
        <div className="flex items-center gap-2 relative flex-shrink-0">
          <button
              onClick={() => setShowLegendModal(!showLegendModal)}
              className="w-9 h-9 rounded-lg border border-neutral-border text-neutral-textSecondary flex items-center justify-center hover:bg-neutral-bg transition cursor-pointer"
              title="Chú thích màu sắc các cụm từ"
              aria-label="Chú thích màu"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

          {/* MODAL CHÚ THÍCH MÀU */}
          {showLegendModal && (
            <div className="absolute right-0 top-full mt-2 w-80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 z-20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold opacity-80">Phân loại cụm từ ngữ pháp</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
                {CHUNK_COLOR_LIST.map((c) => (
                  <span
                    key={c.type}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md ${c.bg} ${c.border} border text-[11px] ${c.text} font-semibold`}
                  >
                    {c.labelVi}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DANH SÁCH BÀI HỌC THEO NHÓM */}
      {grouped.map(({ color, items }) => {
        const groupConfig = CHUNK_COLOR_LIST.find((c) => c.type === color.type) || color;

        return (
          <div key={color.type as ChunkType} className="space-y-3">
            {/* Tiêu đề nhóm */}
            <div className="flex items-center gap-2">
              <h3 className={`text-sm font-bold ${groupConfig.text}`}>{groupConfig.labelVi}</h3>
              <span className="text-xs font-semibold text-slate-400">({items.length})</span>
            </div>

            {/* Dàn trang 2 cột Card chuẩn style VocabWord */}
            <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-3">
              {items.map((chunk, i) => {
                const chunkConfig = CHUNK_COLOR_LIST.find((c) => c.type === chunk.type) || groupConfig;

                return (
                  /* 1. KHUNG NGOÀI (OUTER CONTAINER): NỀN TRẮNG + BORDER MỜ */
                  <div
                    key={i}
                    onClick={() => speak(chunk.phrase)}
                    className="group relative bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-800 hover:border-2 hover:-m-[1px] hover:border-slate-400 dark:hover:border-slate-600 rounded-2xl p-3 shadow-sm hover:shadow-[0_4px_0_0_#94A3B8] dark:hover:shadow-[0_4px_0_0_#475569] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full space-y-2.5"                  >
                    {/* HEADER TÊN LOẠI TỪ */}
                    <div className="px-2 pt-1 flex items-center justify-between">
                      <span className={`text-xs font-bold capitalize ${chunkConfig.text}`}>
                        {chunkConfig.labelVi}
                      </span>
                    </div>

                    {/* 2. KHUNG TRONG (INNER CARD): NỀN XÁM NHẸ + BORDER TRONG LỒNG VÀO */}
                    <div className="bg-[#FBFBFB] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-lg p-4 flex-1 flex flex-col justify-between space-y-3">
                      
                      {/* NỘI DUNG CHÍNH */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            {/* 🚀 TỪ TIẾNG ANH MÀU XANH */}
                            <h4 className="font-bold text-lg tracking-tight text-brand-500 dark:text-blue-400 transition-colors">
                              {chunk.phrase}
                            </h4>
                            
                            {/* PHIÊN ÂM */}
                            {chunk.pronunciation && (
                              <p className="text-xs font-mono font-semibold text-slate-400 mt-0.5">
                                {chunk.pronunciation}
                              </p>
                            )}
                          </div>

                          {/* NÚT PHÁT ÂM */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speak(chunk.phrase);
                            }}
                            className="p-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition cursor-pointer border border-slate-200/60 dark:border-slate-700 flex-shrink-0"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          </button>
                        </div>

                        {/* 🚀 NGHĨA TIẾNG VIỆT MÀU ĐEN */}
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100 pt-0.5">
                          {chunk.meaning}
                        </p>
                      </div>

                      {/* FOOTER NGỮ CẢNH / VÍ DỤ */}
                      {chunk.context && (
                        <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <p className="text-xs leading-relaxed font-medium text-slate-600 dark:text-slate-400">
                            {chunk.context}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}