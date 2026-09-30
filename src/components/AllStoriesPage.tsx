import { useState, useEffect } from "react";
import { Bookmark, BookOpen, Clock, ChevronLeft, ChevronRight, CheckCircle2, Search } from "lucide-react";
import { stories } from "../data/stories";
import type { Story, Level } from "../data/types";

interface AllStoriesPageProps {
  onBack: () => void;
  onSelectStory: (story: Story) => void;
}

const ITEMS_PER_PAGE = 21;

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

export function AllStoriesPage({ onBack, onSelectStory }: AllStoriesPageProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");
  const [showCompletedOnly, setShowCompletedOnly] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const [completedStories, setCompletedStories] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("completed_stories");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("completed_stories", JSON.stringify(completedStories));
  }, [completedStories]);

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

  // Lọc truyện theo level, trạng thái hoàn thành và từ khóa tìm kiếm
  const filteredStories = stories.filter((s) => {
    const matchesLevel = activeLevel === "all" || s.level === activeLevel;
    const matchesCompleted = !showCompletedOnly || completedStories[s.id];
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesCompleted && matchesSearch;
  });

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredStories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStories = filteredStories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleLevelChange = (level: Level | "all") => {
    setActiveLevel(level);
    setCurrentPage(1);
  };

  const toggleShowCompletedOnly = () => {
    setShowCompletedOnly((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

      {/* HEADER PAGE */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tất cả truyện
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Khám phá trọn bộ câu chuyện luyện đọc được thiết kế theo từng trình độ.
        </p>
      </div>

      {/* THANH BỘ LỌC + TÌM KIẾM */}
      <div className="pb-5 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-4">
        {/* BÊN TRÁI: DÃY NÚT LEVEL */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {LEVEL_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleLevelChange(key)}
              className={`px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                activeLevel === key
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-[#37383F] dark:text-white dark:border-zinc-500 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-dark-bg dark:text-slate-300 dark:border-zinc-700 dark:hover:bg-[#37383F]"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={toggleShowCompletedOnly}
            className={`px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer border flex items-center gap-1.5 ${
              showCompletedOnly
                ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50  dark:bg-dark-bg dark:text-slate-300 dark:border-zinc-700 dark:hover:bg-[#37383F]"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành
          </button>
        </div>

        {/* BÊN PHẢI: THANH TÌM KIẾM */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Tìm kiếm truyện..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-dark-bg  text-xs font-semibold text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-all shadow-sm"
          />
        </div>
      </div>

      {/* GRID 3 CỘT */}
      {currentStories.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400 py-10 text-center">
          Không tìm thấy truyện phù hợp với từ khóa của bạn.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {currentStories.map((story) => {
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 relative">
                  {story.image ? (
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-[#37383F] text-slate-500 dark:text-slate-200">
                      {story.level}
                    </span>
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

                  <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-400 dark:text-slate-400 pt-0.5">
                    <span>{readTime} phút đọc</span>
                    <span>•</span>
                    <span>{sentenceCount} câu</span>
                  </div>
                </div>

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

      {/* PHÂN TRANG */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6 border-t border-slate-200 dark:border-zinc-700">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3.5 py-3 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-600 dark:text-slate-300
            bg-white dark:bg-[#0F0F15] hover:bg-slate-50 dark:hover:bg-[#0F0F15] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Trước
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition cursor-pointer flex items-center justify-center ${
                  currentPage === page
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 dark:bg-[#37383F] dark:text-slate-300 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-[#0F0F15]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3.5 py-3 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-[#0F0F15] hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer flex items-center gap-1"
          >
            Sau <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}