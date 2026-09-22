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
    /* 1. KHUNG NGOÀI (OUTER CONTAINER): NỀN TRẮNG + BORDER MỜ */
        <div
          onClick={onClick}
          className="group relative bg-[#fcfcfc] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-2 hover:-m-[1px] hover:border-slate-400 dark:hover:border-slate-600 rounded-2xl p-3 shadow-sm hover:shadow-[0_4px_0_0_#94A3B8] dark:hover:shadow-[0_4px_0_0_#475569] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full space-y-2.5"
        >
      {/* HEADER TÊN LOẠI TỪ & LEVEL (TEXT CÓ MÀU, CHỮ THƯỜNG NORMAL) */}
      <div className="px-2 pt-1 flex items-center justify-between">
        <span className={`text-sm capitalize ${color?.text || "text-slate-900 dark:text-white"}`}>
  {color?.labelVi || word.type}
</span>

        <span className="text-[12px] font-bold px-3 py-1.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
          {word.level}
        </span>
      </div>

      {/* 2. KHUNG TRONG (INNER CARD): NỀN TRẮNG + BORDER TRONG LỒNG VÀO */}
      <div className="bg-[#ffffff] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex-1 flex flex-col justify-between space-y-3">
        {/* NỘI DUNG CHÍNH: TỪ VỰNG & PHÁT ÂM */}
        <div className="space-y-1.5">
         <div className="flex items-start justify-between gap-2">
            {/* 🚀 TỪ VỰNG DÙNG MÀU CHÍNH XÁC THEO CHUNK TYPE */}
            <h3 
              className="text-lg text-brand-600 font-extrabold tracking-tight transition-colors"
            >
              {word.word}
            </h3>

            {/* Nút phát âm */}
            <button
              onClick={handleSpeak}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition cursor-pointer border border-slate-200/60 dark:border-slate-700"
              title="Nghe phát âm"
            >
              <Volume2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </button>
          </div>

          {/* Phiên âm */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium italic">
              {word.phonetic}
            </span>
            {word.respelling && (
              <span className="text-brand-600 dark:text-brand-400 font-semibold">
                {word.respelling}
              </span>
            )}
          </div>

          {/* Nghĩa tiếng Việt */}
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 pt-0.5">
            {word.meaning}
          </p>
        </div>

        {/* FOOTER: VÍ DỤ & NÚT THAO TÁC */}
        <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-end justify-between gap-2">
          <div className="space-y-0.5">
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-tight line-clamp-1">
              {word.example}
            </p>
            <p className="text-[11px] text-slate-400 italic line-clamp-1">
              {word.exampleMeaning}
            </p>
          </div>

          {/* Các nút icon */}
          <div className="flex items-center gap-1 text-slate-400 shrink-0">
            <button
              className="hover:text-slate-700 dark:hover:text-slate-200 p-1 cursor-pointer"
              title="Thêm vào danh sách"
              onClick={(e) => e.stopPropagation()}
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              className="hover:text-slate-700 dark:hover:text-slate-200 p-1 cursor-pointer"
              title="Tùy chọn khác"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}