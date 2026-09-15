import { useState } from "react";
import { vocabularyCategories } from "../data/vocabulary"; // sửa path nếu khác
import type { VocabTopic, Level } from "../data/types";


// Bảng màu pastel xoay vòng cho từng card - giữ nguyên tông màu bà đã chọn
const TOPIC_COLORS = [
  { bg: "#EAEFD8", badge: "#d2dfa5" },
  { bg: "#FFE6FF", badge: "#FFC0EF" },
  { bg: "#FCE8D3", badge: "#EFCDAA" },
  { bg: "#D8F5EF", badge: "#aaf0c2" },
  { bg: "#E4EBFF", badge: "#b4c9ff" },
  { bg: "#FFF6B4", badge: "#ffdc84" },
  { bg: "#E1DDFF", badge: "#c3bcff" },
  { bg: "#E3D8D0", badge: "#d4b6a2" },
  { bg: "#E5E6EB", badge: "#CFD2E2" },
];

interface VocabularyTopicsSectionProps {
  onSelectTopic: (topic: VocabTopic) => void;
  onViewAll: () => void;
}

export function VocabularyTopicsSection({ onSelectTopic, onViewAll }: VocabularyTopicsSectionProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");

  const LEVEL_TABS: { key: Level | "all"; label: string }[] = [
    { key: "all", label: "Tất cả" },
    { key: "A1", label: "Trình độ A1" },
    { key: "A2", label: "Trình độ A2" },
    { key: "B1", label: "Trình độ B1" },
  ];

  // Lọc danh sách chủ đề dựa theo tab level đang chọn
  // (Chủ đề nào có chứa ít nhất một từ vựng thuộc level đó thì hiển thị)
  const filteredTopics = vocabularyCategories
    .filter((topic) => {
      if (activeLevel === "all") return true;
      return topic.vocabulary.some((w) => w.level === activeLevel);
    })
    .slice(0, 8); // Giới hạn hiển thị tối đa 8 chủ đề

  return (
    <div className="space-y-4">
      {/* Cụm Tiêu đề + Dòng mô tả nhỏ */}
      <div>
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
      Từ vựng theo chủ đề
      </h2>
      <p className="text-sm text-slate-500 mt-1">
      Khám phá các bộ từ vựng được phân loại theo từng cấp độ và chủ đề.
      </p>
  </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {LEVEL_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveLevel(key)}
              className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition ${
                activeLevel === key
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={onViewAll}
          className="text-sm font-semibold text-zinc-600 hover:text-blue-700 transition flex items-center gap-1 ml-auto"
        >
          Xem tất cả &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
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
                  {/* ĐÃ SỬA: Dùng thẻ img để hiển thị icon SVG thay vì span */}
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-xs">
                    <img 
                      src={topic.icon} 
                      alt={topic.title} 
                      className="w-5 h-5 object-contain" 
                    />
                  </div>

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
    </div>
  );
}