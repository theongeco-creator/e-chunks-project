import type { Level, VocabWord } from "../../data/types";

interface VocabLevelFilterProps {
  activeLevel: Level | "all";
  onSelect: (level: Level | "all") => void;
  words: VocabWord[]; // 👈 mới: toàn bộ từ vựng (chưa lọc) để tự tính số lượng mỗi tab
}

const LEVELS: { key: Level | "all"; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "A1", label: "Trình độ A1" },
  { key: "A2", label: "Trình độ A2" },
  { key: "B1", label: "Trình độ B1" },
];

export function VocabLevelFilter({ activeLevel, onSelect, words }: VocabLevelFilterProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {LEVELS.map(({ key, label }) => {
        const count = key === "all" ? words.length : words.filter((w) => w.level === key).length;

        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition flex items-center gap-2 ${
              activeLevel === key
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            <span>{label}</span>
            <span
              className={`text-xs px-2 py-1 rounded-md ${
                activeLevel === key ? "bg-white text-black font-bold" : "bg-slate-100 text-slate-600"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}