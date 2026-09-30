import React, { useState } from "react";
import { Bookmark, BookOpen, Search } from "lucide-react"; // 👈 Thêm icon Search, bỏ SlidersHorizontal và ChevronDown nếu không dùng tới
import { vocabularyCategories } from "../data/vocabulary";
import { PageContainer } from "@/components/PageContainer";
import type { VocabTopic } from "../data/types";

interface AllTopicsPageProps {
  onBack: () => void;
  onSelectTopic: (topic: VocabTopic) => void;
}

export function AllTopicsPage({ onSelectTopic }: AllTopicsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // 👈 Thêm state quản lý từ khóa tìm kiếm

  const filterOptions = ["All", "A1", "A2", "B1"];

  // Lọc chủ đề theo level và theo từ khóa tìm kiếm (tiêu đề tiếng Việt hoặc tiếng Anh)
  const filteredTopics = vocabularyCategories.filter((topic) => {
    const matchesFilter = 
      selectedFilter === "All" || 
      topic.vocabulary.some((w) => w.level === selectedFilter);
    
    const matchesSearch = 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (topic.titleEn && topic.titleEn.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <PageContainer className="py-8 space-y-6">
      {/* HEADER PAGE */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Từ vựng theo chủ đề
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Khám phá trọn bộ từ vựng theo chủ đề được thiết kế chuẩn phản xạ.
        </p>
      </div>

      {/* 🚀 THANH BỘ LỌC + THANH TÌM KIẾM CÙNG CHIỀU CAO */}
      <div className="pb-5 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-4">
        {/* BÊN TRÁI: DÃY NÚT CHỦ ĐỀ / LEVEL (ALL, A1, A2, B1) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                selectedFilter === option
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-[#37383F] dark:text-white dark:border-zinc-500 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-dark-bg dark:text-slate-300 dark:border-zinc-700 dark:hover:bg-[#37383F]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* BÊN PHẢI: THANH TÌM KIẾM (ĐỒNG BỘ CHIỀU CAO py-3 VÀ TEXT-SIZE) */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm chủ đề..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-dark-bg  text-xs font-semibold text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-all shadow-sm"
          />
        </div>
      </div>

      {/* GRID CHỦ ĐỀ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredTopics.length === 0 ? (
          <div className="col-span-full py-12 text-center text-sm text-slate-500">
            Không tìm thấy chủ đề phù hợp với từ khóa của ní.
          </div>
        ) : (
          filteredTopics.map((topic: VocabTopic) => {
            const matchEn = topic.title.match(/\(([^)]+)\)/);
            const englishTitle = topic.titleEn || (matchEn ? matchEn[1] : topic.title);
            const vietnameseTitle = topic.title.split("\n")[0].replace(/\s*\([^)]*\)/, "").trim();

            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="group relative bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-[#191A20] dark:hover:border-zinc-700 hover:border-2 hover:-m-[1px] rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
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
                  <span>{topic.vocabulary?.length || 0} từ vựng</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </PageContainer>
  );
}