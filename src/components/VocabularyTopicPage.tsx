import React, { useState, useEffect } from "react";
import { ChevronRight, Search, ChevronLeft } from "lucide-react";
import { VocabWordCard } from "./vocabulary/VocabWordCard";
import type { VocabTopic, VocabWord } from "../data/types";

interface VocabularyTopicPageProps {
  topic: VocabTopic;
  onBack?: () => void;
  onBackToHome?: () => void;
  onBackToTopics?: () => void;
  onSelectWord?: (word: VocabWord) => void;
}

export function VocabularyTopicPage({ 
  topic, 
  onBack, 
  onBackToHome, 
  onBackToTopics, 
  onSelectWord 
}: VocabularyTopicPageProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 21; // 👈 Cấu hình hiển thị 21 từ 1 trang
  const filterOptions = ["All", "A1", "A2", "B1"];

  // 🔄 Tự động reset về trang 1 mỗi khi người dùng tìm kiếm hoặc đổi bộ lọc level
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, searchQuery]);

  const matchEn = topic.title.match(/\(([^)]+)\)/);
  const englishTitle = topic.titleEn || (matchEn ? matchEn[1] : topic.title);
  const vietnameseTitle = topic.title.split("\n")[0].replace(/\s*\([^)]*\)/, "").trim();

  // 🚀 BƯỚC 1: LỌC TỪ VỰNG THEO LEVEL VÀ TỪ KHÓA TÌM KIẾM
  const filteredVocabulary = topic.vocabulary?.filter((word: VocabWord) => {
    const matchesLevel = 
      selectedFilter === "All" || 
      word.level?.toUpperCase() === selectedFilter.toUpperCase();
    
    const matchesSearch = 
      word.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
      word.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (word.phonetic && word.phonetic.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesLevel && matchesSearch;
  }) || [];

  // 📄 BƯỚC 2: TÍNH TOÁN PHÂN TRANG TRÊN KẾT QUẢ ĐÃ LỌC
  const totalPages = Math.ceil(filteredVocabulary.length / ITEMS_PER_PAGE);
  const paginatedVocabulary = filteredVocabulary.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* 1. BREADCRUMB */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
        <button 
          onClick={() => {
            if (onBackToTopics) onBackToTopics();
            else if (onBack) onBack();
          }}
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
          Tổng hợp {filteredVocabulary.length} từ vựng quan trọng kèm phiên âm và ví dụ thực tế.
        </p>
      </div>

      {/* 3. BỘ LỌC LEVEL + THANH TÌM KIẾM */}
      <div className="pb-5 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-4">
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

      {/* 4. GRID CÁC TỪ VỰNG (HIỂN THỊ THEO TRANG) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {paginatedVocabulary.length === 0 ? (
          <div className="col-span-full py-12 text-center text-sm text-slate-500">
            Không tìm thấy từ vựng nào phù hợp với từ khóa của ní.
          </div>
        ) : (
          paginatedVocabulary.map((word: VocabWord) => (
            <VocabWordCard
              key={word.id || word.word}
              word={word}
              onClick={() => onSelectWord && onSelectWord(word)}
            />
          ))
        )}
      </div>

      {/* 5. THANH PHÂN TRANG (PAGINATION CONTROLS) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6 border-t border-slate-200 dark:border-zinc-700">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3.5 py-3 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-[#0F0F15] hover:bg-slate-50 dark:hover:bg-[#0F0F15] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Trang Trước
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition cursor-pointer ${
                    currentPage === pageNumber
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 dark:bg-[#37383F] dark:text-slate-300 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-[#0F0F15]"
                }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3.5 py-3 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-[#0F0F15] hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer flex items-center gap-1"
          >
            Trang Sau <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}