import React, { useState } from "react";
import { ChevronRight, SlidersHorizontal, ChevronDown } from "lucide-react";
import { VocabWordCard } from "./vocabulary/VocabWordCard";
import type { VocabTopic, VocabWord } from "../data/types";

interface VocabularyTopicPageProps {
  topic: VocabTopic;
  onBack: () => void;
  onSelectWord?: (word: VocabWord) => void;
}

export function VocabularyTopicPage({ topic, onBack, onSelectWord }: VocabularyTopicPageProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // 🚀 ĐỔI THÀNH LEVEL A1, A2, B1 NÈ NÍ
  const filterOptions = ["All", "A1", "A2", "B1"];

  const matchEn = topic.title.match(/\(([^)]+)\)/);
  const englishTitle = topic.titleEn || (matchEn ? matchEn[1] : topic.title);
  const vietnameseTitle = topic.title.split("\n")[0].replace(/\s*\([^)]*\)/, "").trim();

  // 🚀 THÊM LOGIC TỰ ĐỘNG LỌC TỪ VỰNG THEO LEVEL DỰA TRÊN TAG ĐƯỢC CHỌN
  const filteredVocabulary = topic.vocabulary?.filter((word: VocabWord) => {
    if (selectedFilter === "All") return true;
    return word.level?.toUpperCase() === selectedFilter.toUpperCase();
  });

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* 1. BREADCRUMB */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
        <button 
          onClick={onBack}
          className="hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
        >
          Từ vựng theo chủ đề
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-900 dark:text-white truncate">
          {vietnameseTitle}
        </span>
      </nav>

      {/* 2. HEADER TÊN CHỦ ĐỀ */}
      <div className="space-y-1">
        <span className="text-xs font-bold tracking-wider uppercase text-brand-600 dark:text-brand-400">
          {englishTitle}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {vietnameseTitle}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Tổng hợp {filteredVocabulary?.length || 0} từ vựng quan trọng kèm phiên âm và ví dụ thực tế.
        </p>
      </div>

      {/* 3. BỘ LỌC LEVEL + LINE */}
      <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                selectedFilter === option
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-sm">
            <span>Dành cho bạn</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          <button className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span>Bộ lọc</span>
          </button>
        </div>
      </div>

      {/* 4. GRID CÁC TỪ VỰNG ĐÃ ĐƯỢC LỌC THEO LEVEL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredVocabulary?.map((word: VocabWord) => (
          <VocabWordCard
            key={word.id || word.word}
            word={word}
            onClick={() => onSelectWord && onSelectWord(word)}
          />
        ))}
      </div>
    </div>
  );
}