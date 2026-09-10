import { useState } from "react";
import { vocabularyCategories } from "../data/vocabulary";
import type { VocabTopic, Level } from "../data/types";
import { ChevronRight } from "lucide-react";

// Bảng màu pastel cho các card
const TOPIC_COLORS = [
  { bg: "#dde4c4", badge: "#bfce89" },
  { bg: "#ffe4e6", badge: "#feb1b2" },
  { bg: "#FFE1BF", badge: "#fda784" },
  { bg: "#d1fae5", badge: "#85fbae" },
  { bg: "#cfe5ff", badge: "#94b1fd" },
  { bg: "#FFF5AD", badge: "#fcc63f" },
  { bg: "#dedaff", badge: "#A79FF5" },
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

  const filteredTopics = vocabularyCategories.filter((topic) => {
    if (activeLevel === "all") return true;
    return topic.vocabulary.some((w) => w.level === activeLevel);
  });

  return (
    <div className="space-y-6 pt-2">
      {/* ================= THANH BREADCRUMB CHO TRANG TẤT CẢ CHỦ ĐỀ ================= */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
        <button
          onClick={onBack}
          className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
        >
          Từ vựng
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

        <span className="text-slate-800 font-semibold">
          Tất cả chủ đề từ vựng
        </span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tất cả chủ đề từ vựng</h1>

      {/* HÀNG LỌC LEVEL VÀ SỐ LƯỢNG GÓC PHẢI */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {LEVEL_TABS.map(({ key, label }) => {
            const count = key === "all"
              ? vocabularyCategories.length
              : vocabularyCategories.filter((topic) => topic.vocabulary.some((w) => w.level === key)).length;

            return (
              <button
                key={key}
                onClick={() => setActiveLevel(key)}
                className={`text-sm font-semibold px-3 py-2.5 rounded-md transition cursor-pointer flex items-center gap-2 ${
                  activeLevel === key
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
                }`}
              >
                <span>{label}</span>
                <span className={`text-xs px-2 py-1 rounded-md ${
                  activeLevel === key 
                    ? "bg-white text-black" 
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-xs sm:text-sm font-medium text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-2xs">
          Hiển thị <span className="font-bold text-slate-900">{filteredTopics.length}</span> / {vocabularyCategories.length} chủ đề
        </div>
      </div>

      {filteredTopics.length === 0 ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          Chưa có chủ đề nào ở trình độ này.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTopics.map((topic, index) => {
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
                    {topic.vocabulary.length} từ
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 leading-snug whitespace-pre-line">
                  {topic.title}
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}