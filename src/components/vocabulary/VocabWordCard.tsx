import type { VocabWord } from "../../data/types";
import { CHUNK_COLORS } from "../../data/chunkColors";
import { Volume2, Plus, MoreHorizontal } from "lucide-react";

interface VocabWordCardProps {
  word: VocabWord;
  onClick?: () => void;
}

export function VocabWordCard({ word, onClick }: VocabWordCardProps) {
  const color = CHUNK_COLORS[word.type];

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!("speechSynthesis" in window)) {
      alert("Trình duyệt của ní không hỗ trợ phát âm!");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={onClick}
      // HÃY XÓA CHỮ "border" Ở ĐÂY 👇 (Chỉ giữ lại ${color.bg} và các class khác)
      className={`rounded-xl p-3.5 ${color.bg} shadow-sm hover:scale-[1.01] transition-all cursor-pointer flex flex-col gap-2.5 relative group`}
    >
      {/* 1. Tiêu đề bên ngoài (Đã bỏ chữ uppercase, thu nhỏ text-sm) */}
      <div className="flex items-center justify-between px-1">
        <h3 className={`text-sm font-bold tracking-wide ${color.text}`}>
          {color.labelVi}
        </h3>
        <div className="flex items-center gap-1 text-slate-400">
          <button 
            className="hover:text-slate-700 transition p-1"
            title="Thêm"
            onClick={(e) => e.stopPropagation()}
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button 
            className="hover:text-slate-700 transition p-1"
            title="Tùy chọn khác"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Khung trắng bên trong (Đã thu nhỏ padding từ p-5 xuống p-4 và giảm gap) */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col gap-2.5 relative">
        
        {/* Nhãn level và nút loa */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {word.level}
          </span>
          
          <button
            onClick={handleSpeak}
            className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition cursor-pointer flex items-center justify-center shadow-2xs"
            title="Nghe phát âm"
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Từ vựng & Phiên âm */}
        <div>
          <h4 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            {word.word}
          </h4>
          <p className="text-[11px] text-slate-400 italic">{word.phonetic}</p>
        </div>

        {/* Nghĩa của từ */}
        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
          {word.meaning}
        </p>

        {/* Phần ví dụ */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-0.5">
          <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300">
            {word.example}
          </p>
          <p className="text-[11px] text-slate-400 italic">
            {word.exampleMeaning}
          </p>
        </div>

      </div>
    </div>
  );
}