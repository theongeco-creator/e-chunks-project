import { useState } from "react";
import { stories } from "../data/stories";
import type { Story, Level } from "../data/types";

// Bảng màu pastel nhẹ nhàng cho card
const CARD_THEMES = [
  { bg: "bg-[#CECECE]", badgeBg: "bg-[#939393]", patternUrl: "/patterns/shape1.svg" },
  { bg: "bg-[#ffe4e6]", badgeBg: "bg-[#ff979e]", patternUrl: "/patterns/shape2.svg" },
  { bg: "bg-[#fee5ca]", badgeBg: "bg-[#fcc080]", patternUrl: "/patterns/shape3.svg" },
  { bg: "bg-[#d1fae5]", badgeBg: "bg-[#8ef2bf]", patternUrl: "/patterns/shape4.svg" },
  { bg: "bg-[#CFE4FF]", badgeBg: "bg-[#86baff]", patternUrl: "/patterns/shape5.svg" },
  { bg: "bg-[#FFF4A7]", badgeBg: "bg-[#EAD750]", patternUrl: "/patterns/shape6.svg" },
];

interface AllStoriesPageProps {
  onBack: () => void;
  onSelectStory: (story: Story) => void;
}

// Icon nhỏ inline cho thời gian đọc
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

// Icon Bookmark
function BookmarkIcon({ isSaved }: { isSaved: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
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
    { key: "all", label: "Tất cả chủ đề" },
    { key: "A1", label: "Trình độ A1" },
    { key: "A2", label: "Trình độ A2" },
    { key: "B1", label: "Trình độ B1" },
  ];

  const filteredStories = stories.filter(
    (s) => activeLevel === "all" || s.level === activeLevel
  );

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-xs hover:text-blue-700 bg-blue-50 px-3 py-2 rounded-md transition cursor-pointer"
      >
        &larr; Quay lại trang chủ
      </button>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tất cả truyện</h1>

      {/* Thanh filter và số lượng ở góc phải */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {LEVEL_TABS.map(({ key, label }) => {
            // Tính số lượng bài viết cho từng tab
            const count = key === "all" 
              ? stories.length 
              : stories.filter((s) => s.level === key).length;

            return (
              <button
                key={key}
                onClick={() => setActiveLevel(key)}
                className={`text-sm font-semibold px-3 py-2.5 rounded-md transition cursor-pointer flex items-center gap-2 ${
                  activeLevel === key
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
                }`}
              >
                <span>{label}</span>
                <span className={`text-xs px-2 py-1 rounded-md ${
                  activeLevel === key 
                    ? "bg-white text-black font-bold  " 
                    : "bg-slate-200 text-slate-00"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Text tổng số bài nằm đúng ô đỏ góc phải */}
        <div className="text-xs sm:text-sm font-medium text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-2xs">
            Hiển thị <span className="font-bold text-slate-900">{filteredStories.length}</span> / {stories.length} truyện
          </div>
        </div>

      {filteredStories.length === 0 ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          Chưa có truyện nào ở trình độ này.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredStories.map((story, index) => {
            const theme = CARD_THEMES[index % CARD_THEMES.length];
            const readTime = estimateReadTime(story.paragraph);
            const isSaved = !!savedStories[story.id];

            return (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="rounded-xl bg-white p-3 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-200/80 flex flex-col justify-between group"
              >
                <div 
  className={`w-full h-[130px] min-h-[130px] rounded-xl ${theme.bg} p-4 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[0.98] relative overflow-hidden`}
  style={{
    backgroundImage: `url(${theme.patternUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Lớp phủ mờ nhẹ giúp hoa văn SVG chìm sâu và nghệ thuật hơn */}
  <div className="absolute inset-0 bg-white/15 pointer-events-none"></div>

  {/* Nội dung bên trong được đẩy lên trên nhờ relative z-10 */}
  <div className="relative z-10 flex flex-col justify-between h-full">
    <div className="flex items-center justify-between">
      <span className={`text-[11px] font-bold px-2.5 py-1.5 rounded-md ${theme.badgeBg} text-slate-900 shadow-2xs inline-block`}>
        {story.level}
      </span>

      <button
        onClick={(e) => toggleBookmark(e, story.id)}
        className={`w-7 h-7 rounded-lg bg-white/90 text-slate-700 flex items-center justify-center shadow-xs hover:scale-110 transition-all cursor-pointer ${
          isSaved ? "text-rose-600 bg-white shadow-sm" : "hover:text-slate-900"
        }`}
        aria-label="Lưu truyện"
      >
        <BookmarkIcon isSaved={isSaved} />
      </button>
    </div>

    <h4 
      className="font-bold text-base text-slate-900 leading-snug group-hover:text-blue-900 transition-colors mt-2"
      dangerouslySetInnerHTML={{ __html: story.title }}
    />
  </div>
</div>

                <div className="pt-3 px-1 pb-1 flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-slate-500 font-medium text-[12px]">
                    <ClockIcon />
                    {readTime} phút đọc
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectStory(story);
                    }}
                    className="px-3.5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-xs hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    Đọc
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}