import type { Level } from "../../data/types";

interface VocabLevelFilterProps {
  activeLevel: Level | "all";
  onSelect: (level: Level | "all") => void;
}

const LEVELS: { key: Level | "all"; label: string }[] = [
  { key: "all", label: "Tất cả chủ đề" },
  { key: "A1", label: "Trình độ A1" },
  { key: "A2", label: "Trình độ A2" },
  { key: "B1", label: "Trình độ B1" },
];

export function VocabLevelFilter({ activeLevel, onSelect }: VocabLevelFilterProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {LEVELS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
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
  );
}