import React from "react";
import { Bookmark, BookOpen } from "lucide-react";
// 🚀 Dùng đúng import cũ của ní
import { vocabularyCategories } from "../data/vocabulary";
import type { VocabTopic } from "../data/types";

interface VocabularyTopicsSectionProps {
  onSelectTopic: (topic: VocabTopic) => void;
  onViewAll: () => void;
}

export function VocabularyTopicsSection({
  onSelectTopic,
  onViewAll,
}: VocabularyTopicsSectionProps) {
  // Lấy 4 topic đầu tiên từ vocabularyCategories
  const displayTopics = vocabularyCategories ? vocabularyCategories.slice(0, 4) : [];

  return (
    <div className="space-y-4">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Từ vựng theo chủ đề
        </h2>
        <button
          onClick={onViewAll}
          className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition cursor-pointer"
        >
          Xem tất cả
        </button>
      </div>

      {/* GRID DANH SÁCH CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {displayTopics.map((topic: VocabTopic) => {
          // Tự động tách phần tiếng Anh trong ngoặc (Verbs & Actions) và tiếng Việt
          const matchEn = topic.title.match(/\(([^)]+)\)/);
          const englishTitle = topic.titleEn || (matchEn ? matchEn[1] : topic.title);
          const vietnameseTitle = topic.title.split("\n")[0].replace(/\s*\([^)]*\)/, "").trim();

          return (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-2 hover:-m-[1px] hover:border-slate-400 dark:hover:border-slate-600 rounded-2xl p-5 shadow-sm hover:shadow-[0_4px_0_0_#94A3B8] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              {/* BOOKMARK ICON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute top-5 right-5 text-brand-600 hover:scale-110 transition-transform cursor-pointer"
                title="Lưu chủ đề"
              >
                <Bookmark className="w-5 h-5 fill-brand-600 text-brand-600" />
              </button>

              {/* NỘI DUNG CHÍNH */}
              <div className="space-y-1.5 pr-8">
                {/* TIẾNG ANH (XANH TÍM BOLD UPPERCASE) */}
                <span className="text-xs font-bold tracking-wider uppercase text-brand-600 dark:text-brand-400 block">
                  {englishTitle}
                </span>

                {/* TIẾNG VIỆT (MÀU ĐEN BOLD) */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {vietnameseTitle}
                </h3>
              </div>

              {/* SỐ LƯỢNG TỪ VỰNG */}
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>{topic.vocabulary?.length || 0} từ vựng</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}