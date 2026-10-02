import { Bookmark, BookOpen, CheckCircle2 } from "lucide-react";
import type { Story } from "@/data/types";

// Ước lượng thời gian đọc
function estimateReadTime(paragraph: string): number {
  const wordCount = paragraph.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 40));
}

// Đếm số câu từ đoạn văn
function countSentences(paragraph: string): number {
  if (!paragraph) return 0;
  const sentences = paragraph.match(/[^.!?]+[.!?]+/g);
  return sentences ? sentences.length : 0;
}

interface StoryCardProps {
  story: Story;
  isSaved: boolean;
  isCompleted: boolean;
  onSelect: (story: Story) => void;
  onToggleSave: (storyId: string) => void;
}

export function StoryCard({ story, isSaved, isCompleted, onSelect, onToggleSave }: StoryCardProps) {
  const text = (story as any).content || (story as any).paragraph || "";
  const readTime = estimateReadTime(text);
  const sentenceCount = countSentences(text);

  return (
    <div
      onClick={() => onSelect(story)}
      className="bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-[#191A20] dark:hover:border-zinc-700 hover:border-2 hover:-m-[1px] dark:hover:border-zinc-600 rounded-2xl p-3.5 flex items-center gap-4 transition-all duration-200 cursor-pointer group"
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
        onClick={(e) => {
          e.stopPropagation();
          onToggleSave(story.id);
        }}
        className={`shrink-0 self-start hover:scale-110 transition-transform cursor-pointer ${
          isSaved ? "text-brand-600" : "text-slate-300 hover:text-brand-600"
        }`}
        aria-label="Lưu truyện"
      >
        <Bookmark className={`w-5 h-5 ${isSaved ? "fill-brand-600 text-brand-600" : ""}`} />
      </button>
    </div>
  );
}