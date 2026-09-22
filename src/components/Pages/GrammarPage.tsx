// src/pages/GrammarPage.tsx
import React, { useState } from "react";
// Lùi ra 2 cấp thư mục để vào src/data/grammarData
import { grammarData, type GrammarItem } from '../../data/grammarData';
import { Info, Check, HelpCircle, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export function GrammarPage() {
  const [activeLevel, setActiveLevel] = useState<"A1" | "A2" | "B1">("A1");
  const [selectedItem, setSelectedItem] = useState<GrammarItem | null>(
    grammarData.A1[0]?.items[0] || null
  );
  const [showAnswer, setShowAnswer] = useState(false);

  // Khai báo danh sách 3 level
  const levels = [
    { key: "A1", label: "Sơ cấp A1" },
    { key: "A2", label: "Trung cấp A2" },
    { key: "B1", label: "Trung cấp B1" },
  ] as const;

  // Khi đổi level thì mặc định chọn bài đầu tiên của level đó
  const handleSelectLevel = (level: "A1" | "A2" | "B1") => {
    setActiveLevel(level);
    const firstItem = grammarData[level][0]?.items[0] || null;
    setSelectedItem(firstItem);
    setShowAnswer(false);
  };

  const handleSelectItem = (item: GrammarItem) => {
    setSelectedItem(item);
    setShowAnswer(false);
  };

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* HEADER PAGE */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ngữ pháp tiếng Anh
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
          Tổng hợp toàn bộ ngữ pháp trọng tâm phân loại theo cấp độ. Chọn bài học để xem công thức, ví dụ và mẹo ghi nhớ.
        </p>
      </div>

      {/* BỘ LỌC 3 LEVEL + ĐƯỜNG LINE PHÂN CÁCH (CHUẨN IPAPAGE) */}
      <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {levels.map((option) => (
            <button
              key={option.key}
              onClick={() => handleSelectLevel(option.key)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                activeLevel === option.key
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* BỐ CỤC CHÍNH: CHIA ĐÔI 1:1 (GRID 2 CỘT BẰNG NHAU) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* CỘT TRÁI (1/2): DANH SÁCH BÀI HỌC THEO NHÓM */}
        <div className="space-y-6">
          {grammarData[activeLevel].length === 0 ? (
            <div className="p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              Đang cập nhật bài học cho trình độ {activeLevel}...
            </div>
          ) : (
            grammarData[activeLevel].map((group: any, idx: number) => (
              <div
                key={idx}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    {group.groupName}
                  </h2>
                  <span className="text-xs text-slate-400 font-medium">
                    {group.items.length} bài
                  </span>
                </div>

                {/* Grid hiển thị danh sách các thẻ bài học xếp ngang */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {group.items.map((item: any) => {
                    const isSelected = selectedItem?.id === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectItem(item)}
                        className={`p-3.5 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between h-20 border ${
                          isSelected
                            ? "bg-indigo-50/60 dark:bg-indigo-950/40 border-2  border-indigo-600 dark:border-indigo-500 uppercase ring-2 ring-indigo-600/30 shadow-xs"
                            : "bg-white dark:bg-slate-900 uppercase border-2 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs"
                        }`}
                      >
                        <span
                          className={`line-clamp-1 font-bold text-sm ${
                            isSelected
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-slate-900 dark:text-slate-100"
                          }`}
                        >
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium truncate">
                          {item.enTitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* CỘT PHẢI (1/2): BẢNG GIẢI THÍCH NGỮ PHÁP (STICKY BOARD) */}
        <div className="lg:sticky lg:top-6 space-y-6">
          {selectedItem ? (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-4 border-state-500 dark:border-slate-800 shadow-sm space-y-5">
              
              {/* TAGS & HEADER */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {selectedItem.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold px-2 py-1.5 rounded-md text-state-600 bg-indigo-100  dark:bg-brand-950/50 dark:text-brand-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[25px] font-extrabold  text-brand-600 dark:text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium">{selectedItem.enTitle}</p>
              </div>

              {/* 1. HÌNH MINH HỌA (DEMO IMAGE / SVG) */}
              <div className="space-y-1.5">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-auto h-full max-w-full object-contain rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* 2. CÔNG THỨC */}
              <div className="space-y-1.5">
                <p className="text-[14px] font-bold text-slate-400">
                  1. Công thức
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm space-y-1.5 font-mono">
                  <div className="grid grid-cols-12">
                    <span className="col-span-3 font-sans font-semibold text-slate-400">Khẳng định</span>
                    <span className="col-span-9 font-sans font-bold text-brand-600 dark:text-slate-200">
                      {selectedItem.formula.affirmative}
                    </span>
                  </div>
                  <div className="grid grid-cols-12">
                    <span className="col-span-3 font-sans font-semibold text-slate-400">Phủ định</span>
                    <span className="col-span-9 font-sans font-bold text-brand-600 dark:text-slate-200">
                      {selectedItem.formula.negative}
                    </span>
                  </div>
                  <div className="grid grid-cols-12">
                    <span className="col-span-3 font-sans font-semibold text-slate-400">Nghi vấn</span>
                    <span className="col-span-9 font-sans font-bold text-brand-600 dark:text-slate-200">
                      {selectedItem.formula.interrogative}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. KHI NÀO DÙNG */}
              <div className="space-y-1.5">
                <p className="text-[14px] font-bold text-slate-400 ">
                  2. Khi nào dùng
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedItem.usage}
                </div>
              </div>

              {/* 4. DẤU HIỆU NHẬN BIẾT */}
              <div className="space-y-1.5">
                <p className="text-[14px] font-bold text-slate-400 ">
                  3. Dấu hiệu nhận biết và mẹo nhớ
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {selectedItem.signals}
                </div>
              </div>

              {/* 5. VÍ DỤ */}
              <div className="space-y-1.5">
                <p className="text-[14px] font-bold text-slate-400 ">
                  4. Ví dụ
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm space-y-1">
                  <p className="font-bold text-slate-900 dark:text-white">{selectedItem.example.en}</p>
                  <p className="text-slate-500 italic">{selectedItem.example.vi}</p>
                </div>
              </div>

              {/* 6. NGƯỜI VIỆT HAY SAI */}
              <div className="space-y-1.5">
                <p className="text-[14px] font-bold text-slate-400 ">
                  5. Người Việt hay sai
                </p>
                <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-sm space-y-1.5">
                  <div className="text-rose-600 font-bold dark:text-rose-400 line-through font-medium">
                    ✕ {selectedItem.commonMistakes.wrong}
                  </div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ {selectedItem.commonMistakes.correct}
                  </div>
                  <p className="text-amber-900 dark:text-amber-200 text-[12px] font-bold pt-1 leading-relaxed">
                    💡 {selectedItem.commonMistakes.note}
                  </p>
                </div>
              </div>

              {/* 7. BÀI TẬP NHỎ */}
              <div className="space-y-1.5">
                <p className="text-[14px] font-bold text-slate-400 ">
                  6. Bài tập nhỏ
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm flex items-center justify-between gap-2">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {selectedItem.quickQuiz.question}
                  </span>
                  {showAnswer ? (
                    <span className="font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded border border-emerald-200">
                      {selectedItem.quickQuiz.answer}
                    </span>
                  ) : (
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="text-brand-600 hover:underline font-bold text-[11px] cursor-pointer shrink-0"
                    >
                      Xem đáp án
                    </button>
                  )}
                </div>
              </div>

            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              Bấm vào bất kỳ mục ngữ pháp nào để xem chi tiết
            </div>
          )}
        </div>

      </div>
    </div>
  );
}