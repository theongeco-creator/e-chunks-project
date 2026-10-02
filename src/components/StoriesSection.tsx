import { stories } from "@/data/stories";
import type { Story } from "@/data/types";
import { StoryCard } from "@/components/StoryCard";
import { useSavedStories, toggleSavedStory } from "@/utils/savedStories";

interface StoriesSectionProps {
  onSelectStory: (story: Story) => void;
  onViewAll: () => void;
}

// Đọc danh sách truyện đã hoàn thành mỗi lần vẽ, nên luôn mới
function readCompleted(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem("completed_stories") || "{}");
  } catch {
    return {};
  }
}

export function StoriesSection({ onSelectStory, onViewAll }: StoriesSectionProps) {
  // Lấy đúng 4 bài để chia 2 cột x 2 hàng
  const displayStories = stories.slice(0, 4);
  const savedIds = useSavedStories();
  const completed = readCompleted();

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

      {/* GRID 2 CỘT (2x2 = 4 CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayStories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            isSaved={savedIds.includes(story.id)}
            isCompleted={!!completed[story.id]}
            onSelect={onSelectStory}
            onToggleSave={toggleSavedStory}
          />
        ))}
      </div>
    </div>
  );
}