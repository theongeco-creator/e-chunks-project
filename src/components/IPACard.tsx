import React from "react";
import { Volume2 } from "lucide-react";
import { IPASymbol } from "../data/ipaData";

interface IPACardProps {
  item: IPASymbol;
  onSelect?: (item: IPASymbol) => void;
  isSelected?: boolean;
}

export const IPACard: React.FC<IPACardProps> = ({ item, onSelect, isSelected }) => {
  const handlePlaySound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!("speechSynthesis" in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.exampleWord);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={() => onSelect?.(item)}
      className={`relative group p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
        isSelected
          ? "border-2 border-brand-500 bg-brand-50/80 dark:bg-brand-950/20 ring-2 ring-brand-500/20"
          : "border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300"
      }`}
    >
      {/* Nút nghe phát âm góc trên bên phải */}
      <button
        onClick={handlePlaySound}
        className="absolute top-2 right-2 p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        title={`Nghe mẫu từ "${item.exampleWord}"`}
      >
        <Volume2 className="w-3.5 h-3.5" />
      </button>

      {/* Ký tự IPA chính */}
      <div className="mt-1 mb-2">
        <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
          /{item.symbol}/
        </span>
      </div>

      {/* Từ ví dụ kèm highlight chữ cái */}
      <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
        {item.exampleWord.split("").map((char, index) => {
          const isHighlighted = item.highlightLetters.toLowerCase().includes(char.toLowerCase());
          return (
            <span
              key={index}
              className={isHighlighted ? "text-brand-600 dark:text-brand-400 font-extrabold underline decoration-2 decoration-brand-400" : ""}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};