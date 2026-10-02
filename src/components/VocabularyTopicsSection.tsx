import { vocabularyCategories } from "../data/vocabulary";
import type { VocabTopic } from "../data/types";
import { TopicCard } from "@/components/TopicCard";
import { useSavedTopics, toggleSavedTopic } from "@/utils/savedTopics";

interface VocabularyTopicsSectionProps {
  onSelectTopic: (topic: VocabTopic) => void;
  onViewAll: () => void;
}

export function VocabularyTopicsSection({
  onSelectTopic,
  onViewAll,
}: VocabularyTopicsSectionProps) {
  const savedIds = useSavedTopics();

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
        {displayTopics.map((topic: VocabTopic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            isSaved={savedIds.includes(String(topic.id))}
            onSelect={onSelectTopic}
            onToggleSave={toggleSavedTopic}
          />
        ))}
      </div>
    </div>
  );
}