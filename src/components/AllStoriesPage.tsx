import { useState } from "react";
import { Bookmark, BookOpen, Clock } from "lucide-react";
import { stories } from "../data/stories";
import type { Story, Level } from "../data/types";

interface AllStoriesPageProps {
  onBack: () => void;
  onSelectStory: (story: Story) => void;
}

// Ước lượng thời gian đọc
function estimateReadTime(paragraph: string): number {
  const wordCount = paragraph.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 40));
}

export function AllStoriesPage({ onBack, onSelectStory }: AllStoriesPageProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");
  const [savedStories, setSavedStories] = useState<Record<string, boolean>>({});

  const toggleBookmark = (e: React.MouseEvent, storyId: string) => {
    e.stopPropagation();
    setSavedStories((prev) => ({
      ...prev,
      [storyId]: !prev[storyId],
    }));
  };

  const LEVEL_TABS: { key: Level | "all"; label: string }[] = [
    { key: "all", label: "All" },
    { key: "A1", label: "A1" },
    { key: "A2", label: "A2" },
    { key: "B1", label: "B1" },
  ];

  const filteredStories = stories.filter(
    (s) => activeLevel === "all" || s.level === activeLevel
  );

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

      {/* HEADER PAGE */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Tất cả truyện
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Khám phá trọn bộ câu chuyện luyện đọc được thiết kế theo từng trình độ.
        </p>
      </div>

      {/* THANH BỘ LỌC + ĐƯỜNG LINE PHÂN CÁCH */}
      <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* BÊN TRÁI: DÃY NÚT LEVEL */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {LEVEL_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveLevel(key)}
              className={`px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                activeLevel === key
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* BÊN PHẢI: SỐ LƯỢNG HIỂN THỊ */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm">
            Hiển thị <span className="font-bold text-slate-900 dark:text-white">{filteredStories.length}</span>
            &nbsp;/{stories.length} truyện
          </div>
        </div>
      </div>

      {/* GRID 2 CỘT (LIST NGANG) */}
      {filteredStories.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400 py-10 text-center">
          Chưa có truyện nào ở trình độ này.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {filteredStories.map((story) => {
            const readTime = estimateReadTime((story as any).content || (story as any).paragraph || "");
            const isSaved = !!savedStories[story.id];

            return (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-2 hover:-m-[1px] hover:border-slate-400 dark:hover:border-slate-600 rounded-2xl p-3.5 flex items-center gap-4 hover:shadow-[0_4px_0_0_#94A3B8] dark:hover:shadow-[0_4px_0_0_#475569] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"              >
                {/* 1. KHỐI ICON BÊN TRÁI (KHUÔN VUÔNG BỌC GÓC) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center relative">
                  <div className="w-full h-full bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* 2. KHỐI THÔNG TIN BÊN PHẢI */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      Trình độ {story.level}
                    </span>
                  </div>

                  <h3
                    className="text-base font-bold text-slate-900 dark:text-white truncate group-hover:text-brand-600 transition-colors"
                    dangerouslySetInnerHTML={{ __html: story.title }}
                  />

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {readTime} phút
                    </span>
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
      )}
    </div>
  );
}