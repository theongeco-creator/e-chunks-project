import { Lock } from "lucide-react";

interface LevelTabsProps {
  activeLevel: "A2" | "B1";
  onSelect: (level: "A2" | "B1") => void;
  onLockedClick: () => void;
}

export function LevelTabs({ activeLevel, onSelect, onLockedClick }: LevelTabsProps) {
  return (
    // Đã đổi từ justify-center thành justify-start để canh trái
    <div className="flex items-center gap-3 justify-start mb-6">
      <button
        onClick={() => onSelect("A2")}
        className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
          activeLevel === "A2"
            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
            : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
        }`}
      >
        🌟 A2 · Nền tảng
      </button>
      <button
        onClick={onLockedClick}
        className="px-5 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-400 border border-slate-200 hover:border-slate-300 flex items-center gap-2 transition-all"
      >
        <Lock className="w-3.5 h-3.5 text-slate-400" />
        B1 · Nâng cao (sắp ra mắt)
      </button>
    </div>
  );
}