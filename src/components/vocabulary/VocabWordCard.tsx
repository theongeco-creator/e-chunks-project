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
      className={`rounded-xl p-3 ${color.bg} shadow-sm hover:scale-[1.01] transition-all cursor-pointer flex flex-col justify-between h-full relative group`}
    >
      {/* 1. Tiêu đề bên ngoài */}
      <div className="flex items-center justify-between px-1 mb-1">
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

      {/* 2. Khung trắng bên trong */}
      <div className="bg-white dark:bg-slate-900 rounded-lg p-3.5 shadow-xs dark:border-slate-800 flex flex-col justify-between flex-1 gap-2 relative">
        
        <div className="space-y-2">
          {/* Nhãn level và nút loa */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2 py-1 rounded-md bg-slate-100 dark:bg-[#232323] text-[#232323] dark:text-slate-300">
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

          {/* Từ vựng & Phiên âm xếp dọc nhưng thoáng hơn */}
          <div className="space-y-0.5">
            <h4 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              {word.word}
            </h4>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium italic">
                {word.phonetic}
              </span>

              {word.respelling && (
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  {word.respelling}
                </span>
              )}
            </div>
          </div>

          {/* Nghĩa của từ */}
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 pt-0.5">
            {word.meaning}
          </p>
        </div>

        {/* Phần ví dụ */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-0.5 mt-auto">
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