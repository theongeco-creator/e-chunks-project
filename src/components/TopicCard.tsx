import { Bookmark, BookOpen } from "lucide-react";
import type { VocabTopic } from "@/data/types";

interface TopicCardProps {
  topic: VocabTopic;
  isSaved: boolean;
  onSelect: (topic: VocabTopic) => void;
  onToggleSave: (topicId: string) => void;
  level?: string; // 👈 thêm: "All" | "A1" | "A2" | "B1"
}

export function TopicCard({ topic, isSaved, onSelect, onToggleSave, level }: TopicCardProps) {
  const matchEn = topic.title.match(/\(([^)]+)\)/);
  const englishTitle = topic.titleEn || (matchEn ? matchEn[1] : topic.title);
  const vietnameseTitle = topic.title.split("\n")[0].replace(/\s*\([^)]*\)/, "").trim();

  const filtered = !!level && level !== "All";
const wordCount = filtered
  ? topic.vocabulary?.filter((w) => w.level === level).length || 0
  : topic.vocabulary?.length || 0;

  return (
    <div
      onClick={() => onSelect(topic)}
      className="group relative bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-[#191A20] dark:hover:border-zinc-700 hover:border-2 hover:-m-[1px] rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      {/* BOOKMARK ICON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleSave(String(topic.id));
        }}
        className={`absolute top-5 right-5 hover:scale-110 transition-transform cursor-pointer ${
          isSaved ? "text-brand-600" : "text-slate-300 hover:text-brand-600"
        }`}
        title="Lưu chủ đề"
      >
        <Bookmark className={`w-5 h-5 ${isSaved ? "fill-brand-600 text-brand-600" : ""}`} />
      </button>

      {/* NỘI DUNG CHÍNH */}
      <div className="space-y-1.5 pr-8">
        <span className="text-xs font-bold tracking-wider uppercase text-brand-600 dark:text-[#937AFF] block">
          {englishTitle}
        </span>
        <h3 className="text-base font-bold text-slate-900 dark:text-white transition-colors">
          {vietnameseTitle}
        </h3>
      </div>

      {/* SỐ LƯỢNG TỪ VỰNG */}
      <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
        <BookOpen className="w-4 h-4 text-slate-400" />
        <span>
          {wordCount} từ vựng{filtered ? ` ${level}` : ""}
        </span>
      </div>
    </div>
  );
}