import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { VocabWord } from "../../data/types";
import { CHUNK_COLORS } from "../../data/chunkColors";
import { X, Volume2, Plus, ChevronLeft, ChevronRight } from "lucide-react";

interface WordModalProps {
  word: VocabWord | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const MODAL_BG_BY_TYPE: Record<VocabWord["type"], string> = {
  noun: "bg-red-100 dark:bg-red-950/60",
  verb: "bg-green-100 dark:bg-green-950/60",
  adjective: "bg-sky-100 dark:bg-sky-950/60",
  preposition: "bg-pink-100 dark:bg-pink-950/60",
  time: "bg-purple-100 dark:bg-purple-950/60",
  reason: "bg-amber-100 dark:bg-amber-950/60",
  greeting: "bg-orange-100 dark:bg-orange-950/60",
};

export function WordModal({
  word,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  total,
}: WordModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || !word) return null;

  const color = CHUNK_COLORS[word.type];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < total - 1;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Wrapper duy nhất - vừa định vị 2 nút mũi tên, vừa canh giữa card + số đếm */}
      <div
        className="relative flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút mũi tên trái */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={!hasPrev}
          className="hidden sm:flex absolute -left-[100px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg text-slate-700 dark:text-slate-200 hover:bg-white transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
          title="Từ trước"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Nút mũi tên phải */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={!hasNext}
          className="hidden sm:flex absolute -right-[100px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg text-slate-700 dark:text-slate-200 hover:bg-white transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
          title="Từ tiếp theo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Khung modal - giảm min-h xuống để bớt khoảng trắng dư khi từ ngắn */}
        <div
          className={`w-[420px] min-h-[380px] rounded-xl p-4 ${MODAL_BG_BY_TYPE[word.type]} shadow-2xl relative flex flex-col gap-2.5 animate-in zoom-in-95 duration-200`}
        >
          {/* 1. Tiêu đề bên ngoài giống hệt card */}
          <div className="flex items-center justify-between px-1">
            <h3 className={`text-sm font-bold tracking-wide ${color.text}`}>{color.labelVi}</h3>
            <div className="flex items-center gap-1 text-slate-400">
              <button
                className="hover:text-slate-700 transition p-1 cursor-pointer"
                title="Thêm"
                onClick={(e) => e.stopPropagation()}
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                className="hover:text-slate-700 transition p-1 cursor-pointer"
                title="Đóng"
                onClick={onClose}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Khung trắng bên trong - flex-1 để tự lấp đầy phần cao còn lại của card cố định, nội dung canh giữa theo chiều dọc */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col justify-center gap-4 relative flex-1">
            <div className="space-y-3">
              {/* Nhãn level và nút loa */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold px-3 py-2 rounded-md bg-slate-100 dark:bg-[#232323] text-[#232323] dark:text-slate-300">
                  {word.level}
                </span>

                <button
                  onClick={handleSpeak}
                  className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition cursor-pointer flex items-center justify-center shadow-2xs"
                  title="Nghe phát âm"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Từ vựng & Bộ đôi phiên âm */}
              <div className="space-y-1">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {word.word}
                </h2>

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-400 font-medium italic">{word.phonetic}</span>

                  {word.respelling && (
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                      {word.respelling}
                    </span>
                  )}
                </div>
              </div>

              {/* Nghĩa của từ */}
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 pt-1">
                {word.meaning}
              </p>
            </div>

            {/* Phần ví dụ chi tiết */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Ví dụ minh họa
              </p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {word.example}
              </p>
              <p className="text-xs text-slate-400 italic">{word.exampleMeaning}</p>
            </div>
          </div>
        </div>

        {/* Số thứ tự */}
        <span className="text-sm font-semibold text-white/90 drop-shadow-sm">
          {currentIndex + 1} / {total}
        </span>
      </div>
    </div>,
    document.body
  );
}