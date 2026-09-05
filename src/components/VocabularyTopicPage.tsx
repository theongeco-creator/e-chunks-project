import { useState } from "react";
import type { VocabTopic, Level } from "../data/types";
import { VocabLevelFilter } from "./vocabulary/VocabLevelFilter";
import { VocabWordCard } from "./vocabulary/VocabWordCard";

interface VocabularyTopicPageProps {
  topic: VocabTopic;
  onBack: () => void;
}

export function VocabularyTopicPage({ topic, onBack }: VocabularyTopicPageProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");

  const filteredWords =
    activeLevel === "all"
      ? topic.vocabulary
      : topic.vocabulary.filter((w) => w.level === activeLevel);

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition flex items-center gap-1 cursor-pointer"
      >
        &larr; Quay lại
      </button>

      <div className="flex items-center gap-3">
        <span className="text-3xl">{topic.emoji}</span>
        <h1 className="text-2xl font-bold text-slate-900">{topic.title}</h1>
      </div>

      <VocabLevelFilter activeLevel={activeLevel} onSelect={setActiveLevel} />

      {filteredWords.length === 0 ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          Chưa có từ vựng nào ở trình độ này.
        </p>
      ) : (
        /* Đã đổi từ lg:grid-cols-3 thành lg:grid-cols-4 ở đây để hiển thị 4 cột */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredWords.map((word) => (
            <VocabWordCard key={word.id} word={word} />
          ))}
        </div>
      )}
    </div>
  );
}