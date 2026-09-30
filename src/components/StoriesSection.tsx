import React, { useState, useEffect } from "react";
import { BookOpen, Bookmark, CheckCircle2 } from "lucide-react";
import { stories } from "@/data/stories";
import type { Story } from "@/data/types";

interface StoriesSectionProps {
  onSelectStory: (story: Story) => void;
  onViewAll: () => void;
}

// Ước lượng thời gian đọc
function estimateReadTime(paragraph: string): number {
  const wordCount = paragraph.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 40));
}

// Hàm đếm số câu từ đoạn văn
function countSentences(paragraph: string): number {
  if (!paragraph) return 0;
  const sentences = paragraph.match(/[^.!?]+[.!?]+/g);
  return sentences ? sentences.length : 0;
}

export function StoriesSection({ onSelectStory, onViewAll }: StoriesSectionProps) {
  // Lấy đúng 4 bài học để chia 2 cột x 2 hàng
  const displayStories = stories.slice(0, 4);

  // Đồng bộ trạng thái Bookmark từ localStorage giống AllStoriesPage
  const [savedStories, setSavedStories] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("saved_stories");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("saved_stories", JSON.stringify(savedStories));
  }, [savedStories]);

  // Đồng bộ trạng thái Hoàn thành từ localStorage
  const [completedStories] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("completed_stories");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleBookmark = (e: React.MouseEvent, storyId: string) => {
    e.stopPropagation();
    setSavedStories((prev) => ({
      ...prev,
      [storyId]: !prev[storyId],
    }));
  };

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
        {displayStories.map((story) => {
          const readTime = estimateReadTime((story as any).content || (story as any).paragraph || "");
          const sentenceCount = countSentences((story as any).content || (story as any).paragraph || "");
          const isSaved = !!savedStories[story.id];
          const isCompleted = !!completedStories[story.id];

          return (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-[#191A20] dark:hover:border-zinc-700 hover:border-2 hover:-m-[1px] dark:hover:border-zinc-600 rounded-2xl p-3.5 flex  items-center gap-4 transition-all duration-200 cursor-pointer group"
            >
              {/* 1. KHỐI HÌNH / ICON BÊN TRÁI (KHUÔN VUÔNG BỌC GÓC) */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-dark-bg flex items-center justify-center relative">
                {story.image || (story as any).image ? (
                  <img
                    src={story.image || (story as any).image}
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
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-[#37383F] text-slate-500 dark:text-slate-200">
                    {story.level}
                  </span>
                  {/* HUY HIỆU ĐÃ HOÀN THÀNH */}
                  {isCompleted && (
                    <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Đã hoàn thành
                    </span>
                  )}
                </div>

                <h3
                  className="text-base font-bold text-slate-900 dark:text-white truncate transition-colors"
                  dangerouslySetInnerHTML={{ __html: story.title }}
                />

                {/* THỜI GIAN ĐỌC VÀ SỐ CÂU */}
                <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-400 dark:text-slate-400 pt-0.5">
                  <span>{readTime} phút đọc</span>
                  <span>•</span>
                  <span>{sentenceCount} câu</span>
                </div>
              </div>

              {/* 3. BOOKMARK ICON */}
              <button
                onClick={(e) => toggleBookmark(e, story.id)}
                className={`shrink-0 self-start hover:scale-110 transition-transform cursor-pointer ${
                  isSaved ? "text-brand-600" : "text-slate-300 hover:text-brand-600"
                }`}
                aria-label="Lưu truyện"
              >
                <Bookmark className={`w-5 h-5 ${isSaved ? "fill-brand-600 text-brand-600" : ""}`} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}