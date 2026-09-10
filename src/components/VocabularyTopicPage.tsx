import { useState } from "react";
import type { VocabTopic, Level } from "../data/types";
import { VocabLevelFilter } from "./vocabulary/VocabLevelFilter";
import { VocabWordCard } from "./vocabulary/VocabWordCard";
import { WordModal } from "./vocabulary/WordModal";
import { ChevronRight } from "lucide-react";

interface VocabularyTopicPageProps {
  topic: VocabTopic;
  onBackToHome: () => void;
  onBackToTopics: () => void;
}

export function VocabularyTopicPage({ topic, onBackToHome, onBackToTopics }: VocabularyTopicPageProps) {
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
      
      {/* ================= THANH BREADCRUMB ĐƯỜNG ĐI ================= */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 flex-wrap">
        {/* Cấp 1: Quay về trang chủ / Từ vựng */}
        <button
          onClick={onBackToHome}
          className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
        >
          Từ vựng
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

        {/* Cấp 2: Quay về danh sách tất cả chủ đề */}
        <button
          onClick={onBackToTopics}
          className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
        >
          Tất cả chủ đề từ vựng
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

        {/* Cấp 3: Tên chủ đề hiện tại */}
        <span className="text-slate-800 font-semibold">
          {topic.title}
        </span>
      </nav>

      {/* Tiêu đề lớn bên dưới */}
      <div className="pt-1">
        <h1 className="text-2xl font-bold text-slate-900">{topic.title}</h1>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
        <VocabLevelFilter
          activeLevel={activeLevel}
          onSelect={setActiveLevel}
          words={topic.vocabulary}
        />

        <div className="text-xs sm:text-sm font-medium text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-2xs">
          Hiển thị <span className="font-bold text-slate-900">{filteredWords.length}</span> /{" "}
          {topic.vocabulary.length} từ
        </div>
      </div>

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