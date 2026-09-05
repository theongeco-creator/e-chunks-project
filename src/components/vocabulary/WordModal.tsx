import { useState } from "react";
import { X, Volume2 } from "lucide-react";

interface WordModalProps {
  word: any; // Hoặc kiểu VocabWord của ní
  isOpen: boolean;
  onClose: () => void;
}

export function WordModal({ word, isOpen, onClose }: WordModalProps) {
  if (!isOpen || !word) return null;

  return (
    // Lớp nền mờ che toàn màn hình (Click vào đây sẽ tắt popup)
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Khung nội dung popup chính (Click vào đây không bị tắt nhầm) */}
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative space-y-6 border border-slate-100 dark:border-slate-800 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng popup (X) ở góc trên bên phải */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Nội dung bên trong popup */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              {word.level}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {word.type}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {word.word}
              </h2>
              <p className="text-base text-slate-500 italic mt-1">{word.phonetic}</p>
            </div>
            {/* Nút phát âm to rõ trong popup */}
            <button
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance(word.word);
                utterance.lang = "en-US";
                window.speechSynthesis.speak(utterance);
              }}
              className="p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 transition cursor-pointer flex items-center gap-2"
            >
              <Volume2 className="w-6 h-6" />
              <span className="text-sm font-semibold pr-1">Nghe</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{word.meaning}</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Ví dụ minh họa</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{word.example}</p>
            <p className="text-sm text-slate-500">{word.exampleMeaning}</p>
          </div>
        </div>

        {/* Nút hành động phía dưới */}
        <div className="pt-4 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            Đã hiểu từ này ✨
          </button>
        </div>
      </div>
    </div>
  );
}