import React, { useState } from "react";
import { Bookmark, BookOpen, SlidersHorizontal, ChevronDown } from "lucide-react";
import { vocabularyCategories } from "../data/vocabulary";
import { PageContainer } from "@/components/PageContainer";
import type { VocabTopic } from "../data/types";

interface AllTopicsPageProps {
  onBack: () => void;
  onSelectTopic: (topic: VocabTopic) => void;
}

export function AllTopicsPage({ onSelectTopic }: AllTopicsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "A1", "A2", "B1"];

  return (
    <PageContainer className="py-8 space-y-6">
      {/* HEADER PAGE (BỎ MŨI TÊN QUAY LẠI) */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Từ vựng theo chủ đề
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Khám phá trọn bộ từ vựng theo chủ đề được thiết kế chuẩn phản xạ.
        </p>
      </div>

      {/* 🚀 THANH BỘ LỌC + ĐƯỜNG LINE PHÂN CÁCH (BORDER-B) */}
      <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* BÊN TRÁI: DÃY NÚT CHỦ ĐỀ / LEVEL (ALL, A1, A2, B1) */}
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

        {/* BÊN PHẢI: NÚT DROPDOWN "FOR YOU" VÀ NÚT "FILTERS" */}
        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-sm">
            <span>Dành cho bạn</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          <button className="flex items-center gap-1.5 px-3 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span>Bộ lọc</span>
          </button>
        </div>
      </div>

      {/* GRID CHỦ ĐỀ (3 CỘT KHÓP 1140PX) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {vocabularyCategories.map((topic: VocabTopic) => {
          const matchEn = topic.title.match(/\(([^)]+)\)/);
          const englishTitle = topic.titleEn || (matchEn ? matchEn[1] : topic.title);
          const vietnameseTitle = topic.title.split("\n")[0].replace(/\s*\([^)]*\)/, "").trim();

          return (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-2 hover:-m-[1px] hover:border-slate-400 dark:hover:border-slate-600 rounded-2xl p-5 shadow-sm hover:shadow-[0_4px_0_0_#94A3B8] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between" >
              {/* BOOKMARK ICON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute top-5 right-5 text-brand-600 hover:scale-110 transition-transform cursor-pointer"
                title="Lưu chủ đề"
              >
                <Bookmark className="w-5 h-5 fill-brand-600 text-brand-600" />
              </button>

              {/* NỘI DUNG CHÍNH */}
              <div className="space-y-1.5 pr-8">
                <span className="text-xs font-bold tracking-wider uppercase text-brand-600 dark:text-brand-400 block">
                  {englishTitle}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {vietnameseTitle}
                </h3>
              </div>

              {/* SỐ LƯỢNG TỪ VỰNG */}
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>{topic.vocabulary?.length || 0} từ vựng</span>
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}