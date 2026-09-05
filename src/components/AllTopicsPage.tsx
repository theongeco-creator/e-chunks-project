import { useState } from "react";
import { vocabularyCategories } from "../data/vocabulary";
import type { VocabTopic, Level } from "../data/types";

// Bảng màu pastel cho các card
const TOPIC_COLORS = [
  { bg: "#dde4c4", badge: "#bfce89" },
  { bg: "#ffe4e6", badge: "#feb1b2" },
  { bg: "#fed7aa", badge: "#fda784" },
  { bg: "#d1fae5", badge: "#85fbae" },
  { bg: "#bfdbfe", badge: "#94b1fd" },
  { bg: "#fef08a", badge: "#fcc63f" },
  { bg: "#CFC9FB", badge: "#A79FF5" },
  { bg: "#ECD9CB", badge: "#D9B8A0" },
];

interface AllTopicsPageProps {
  onBack: () => void;
  onSelectTopic: (topic: VocabTopic) => void;
}

export function AllTopicsPage({ onBack, onSelectTopic }: AllTopicsPageProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");

  const LEVEL_TABS: { key: Level | "all"; label: string }[] = [
    { key: "all", label: "Tất cả chủ đề" },
    { key: "A1", label: "Trình độ A1" },
    { key: "A2", label: "Trình độ A2" },
    { key: "B1", label: "Trình độ B1" },
  ];

  // Lọc danh sách chủ đề theo level
  const filteredTopics = vocabularyCategories.filter((topic) => {
    if (activeLevel === "all") return true;
    return topic.vocabulary.some((w) => w.level === activeLevel);
  });

  return (
    <div className="space-y-6">
      {/* Nút quay lại trang chủ */}
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-xs hover:text-blue-700 bg-blue-50 px-3 py-2 rounded-md transition cursor-pointer"
      >
        &larr; Quay lại trang chủ
      </button>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tất cả chủ đề từ vựng</h1>

      {/* BỐ CỤC 2 CỘT: TRÁI LÀ FILTER DỌC, PHẢI LÀ LƯỚI CARD 3 CỘT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* CỘT TRÁI: Thanh lọc dọc + Đường line ngăn cách bên phải (lg:col-span-3) */}
        <div className="lg:col-span-3 lg:border-r lg:border-slate-200 lg:pr-6 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Bộ lọc cấp độ
          </p>
          <div className="flex flex-col gap-2">
            {LEVEL_TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveLevel(key)}
                className={`w-full text-left text-sm font-semibold px-4 py-3 rounded-xl transition cursor-pointer ${
                  activeLevel === key
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* CỘT PHẢI: Lưới hiển thị danh sách card chủ đề (Xếp 3 cột - lg:col-span-9) */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, index) => {
              const wordCount =
                activeLevel === "all"
                  ? topic.vocabulary.length
                  : topic.vocabulary.filter((w) => w.level === activeLevel).length;

              const color = TOPIC_COLORS[index % TOPIC_COLORS.length];

              return (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic)}
                  className="rounded-2xl p-5 shadow-sm flex flex-col justify-between h-40 hover:scale-[1.02] transition-all cursor-pointer relative"
                  style={{ backgroundColor: color.bg }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900 shadow-sm">
                      {topic.emoji}
                    </span>
                    <span
                      className="text-[12px] font-bold px-3 py-2 rounded-lg text-slate-900 shadow-sm"
                      style={{ backgroundColor: color.badge }}
                    >
                      {wordCount} từ
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug whitespace-pre-line">
                    {topic.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}