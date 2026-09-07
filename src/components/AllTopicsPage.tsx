import { useState } from "react";
import { vocabularyCategories } from "../data/vocabulary";
import type { VocabTopic, Level } from "../data/types";
import { ChevronLeft } from "lucide-react";

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
        <ChevronLeft className="w-4 h-6" /> 
      </button>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tất cả chủ đề từ vựng</h1>

      {/* HÀNG LỌC LEVEL - nằm ngang, đặt trên cùng */}
      <div className="flex items-center gap-2 flex-wrap">
        {LEVEL_TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveLevel(key)}
            className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition cursor-pointer ${
              activeLevel === key
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* LƯỚI CARD - 4 card mỗi hàng, full chiều rộng, không còn tách cột trái/phải */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
}