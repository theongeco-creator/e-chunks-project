import React from "react";
import { Clock, BookOpen } from "lucide-react";
import { stories } from "@/data/stories";
import type { Story } from "@/data/types";

interface StoriesSectionProps {
  onSelectStory: (story: Story) => void;
  onViewAll: () => void;
}

export function StoriesSection({ onSelectStory, onViewAll }: StoriesSectionProps) {
  // Lấy đúng 4 bài học để chia 2 cột x 2 hàng
  const displayStories = stories.slice(0, 4);

  return (
    <div className="space-y-4">
      {/* HEADER & NÚT XEM TẤT CẢ */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Luyện đọc qua câu chuyện
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Nâng cao vốn từ và ngữ cảnh giao tiếp tự nhiên qua các bài đọc ngắn.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 transition cursor-pointer whitespace-nowrap flex items-center gap-1"
        >
          Xem tất cả
        </button>
      </div>

      {/* GRID 2 CỘT (2x2 = 4 CARDS NGANG) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayStories.map((story) => (
          <div
            key={story.id}
            onClick={() => onSelectStory(story)}
className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-2 hover:-m-[1px] hover:border-slate-400 dark:hover:border-slate-600 rounded-2xl p-3.5 flex items-center gap-4 hover:shadow-[0_4px_0_0_#94A3B8] dark:hover:shadow-[0_4px_0_0_#475569] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"          >
            {/* 1. KHỐI HÌNH / ICON BÊN TRÁI (KHUÔN VUÔNG BỌC GÓC) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center relative">
              {story.imageUrl ? (
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>

            {/* 2. KHỐI THÔNG TIN BÊN PHẢI */}
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Trình độ {story.level}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white truncate group-hover:text-brand-600 transition-colors">
                {story.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {story.readTime ?? "3"} phút
                </span>
                <span>•</span>
                <span>{story.vocabCount ?? "10"} từ vựng</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}