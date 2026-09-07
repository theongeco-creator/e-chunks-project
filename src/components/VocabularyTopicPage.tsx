import { useState } from "react";
import type { VocabTopic, Level } from "../data/types";
import { VocabLevelFilter } from "./vocabulary/VocabLevelFilter";
import { VocabWordCard } from "./vocabulary/VocabWordCard";
import { WordModal } from "./vocabulary/WordModal";
import { ChevronLeft } from "lucide-react";

interface VocabularyTopicPageProps {
  topic: VocabTopic;
  onBack: () => void;
}

export function VocabularyTopicPage({ topic, onBack }: VocabularyTopicPageProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredWords =
    activeLevel === "all"
      ? topic.vocabulary
      : topic.vocabulary.filter((w) => w.level === activeLevel);

  const isModalOpen = selectedIndex !== null;
  const selectedWord = selectedIndex !== null ? filteredWords[selectedIndex] : null;

  return (
    <div className="space-y-4 pt-4 px-2">
      {/* Nút quay lại + emoji + tiêu đề nằm chung 1 hàng */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-slate-500 hover:text-slate-800 transition p-1 -ml-1 cursor-pointer"
          title="Quay lại"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-slate-900">{topic.title}</h1>
      </div>

      <VocabLevelFilter activeLevel={activeLevel} onSelect={setActiveLevel} />

      {filteredWords.length === 0 ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          Chưa có từ vựng nào ở trình độ này.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredWords.map((word, index) => (
            <VocabWordCard key={word.id} word={word} onClick={() => setSelectedIndex(index)} />
          ))}
        </div>
      )}

      <WordModal
        word={selectedWord}
        isOpen={isModalOpen}
        onClose={() => setSelectedIndex(null)}
        currentIndex={selectedIndex ?? 0}
        total={filteredWords.length}
        onPrev={() => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() =>
          setSelectedIndex((i) => (i !== null && i < filteredWords.length - 1 ? i + 1 : i))
        }
      />
    </div>
  );
}