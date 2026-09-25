import { useState } from "react";
import { BookOpen, Sparkles, ArrowRight, Layers, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { ALL_GRAMMAR_DATA } from "@/data/grammar/grammarData";
import { GrammarSentenceItem, GrammarChunk } from "@/types/grammar";

// Bảng màu cho các thành phần ngữ pháp
const GRAMMAR_COLORS: Record<string, { bg: string; text: string }> = {
  subject: { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-300" },
  verb: { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-700 dark:text-rose-300" },
  object: { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-300" },
  time: { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-300" },
  place: { bg: "bg-purple-50 dark:bg-purple-950/40", text: "text-purple-700 dark:text-purple-300" },
  method: { bg: "bg-indigo-50 dark:bg-indigo-950/40", text: "text-indigo-700 dark:text-indigo-300" },
  connector: { bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-300" },
  default: { bg: "bg-slate-100 dark:bg-slate-800", text: "text-slate-700 dark:text-slate-300" }
};

export function GrammarPage() {
  const [selectedLevel, setSelectedLevel] = useState<"A1" | "A2" | "B1">("A1");
  
  const sentences = ALL_GRAMMAR_DATA[selectedLevel] || ALL_GRAMMAR_DATA.A1;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const selectedSentence = sentences[currentIndex] || sentences[0];
  const [activeChunk, setActiveChunk] = useState<GrammarChunk>(sentences[0]?.chunks[0]);

  // Hàm xử lý khi đổi Level (Reset lại index về 0 để tránh lỗi tràn mảng)
  const handleSelectLevel = (lvl: "A1" | "A2" | "B1") => {
    setSelectedLevel(lvl);
    setCurrentIndex(0);
    const newSentences = ALL_GRAMMAR_DATA[lvl];
    if (newSentences && newSentences.length > 0 && newSentences[0].chunks.length > 0) {
      setActiveChunk(newSentences[0].chunks[0]);
    }
  };

  // Hàm chuyển câu qua lại
  const handlePrevSentence = () => {
    if (currentIndex > 0) {
      const newIdx = currentIndex - 1;
      setCurrentIndex(newIdx);
      setActiveChunk(sentences[newIdx].chunks[0]);
    }
  };

  const handleNextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      const newIdx = currentIndex + 1;
      setCurrentIndex(newIdx);
      setActiveChunk(sentences[newIdx].chunks[0]);
    }
  };

  // Lấy màu tương ứng với chunk đang chọn
  const activeColor = GRAMMAR_COLORS[activeChunk?.colorType] || GRAMMAR_COLORS.default;
  

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* ============ HEADER PAGE ============ */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
            Ngữ pháp theo cụm câu (Chunking Grammar)
        </h1>
      </div>

      {/* ============ BỘ LỌC LEVEL ============ */}
      <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {(["A1", "A2", "B1"] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => handleSelectLevel(lvl)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                selectedLevel === lvl
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800"
              }`}
            >
              Level {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* ============ LAYOUT CHÍNH ============ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* CỘT TRÁI (2 PHẦN) */}
        <div className="lg:col-span-2 space-y-2">
          
          {/* Box 1: Cấu trúc câu mẫu */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-8 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-brand-600">Cấu trúc câu mẫu</span>
                <span className="text-xs px-2.5 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                  Câu {currentIndex + 1} / {sentences.length}
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevSentence}
                  disabled={currentIndex === 0}
                  className={`p-2 rounded-lg border text-xs font-semibold transition flex items-center gap-1 ${
                    currentIndex === 0
                      ? "opacity-40 cursor-not-allowed bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer shadow-xs"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Trước</span>
                </button>

                <button
                  onClick={handleNextSentence}
                  disabled={currentIndex === sentences.length - 1}
                  className={`p-2 rounded-lg border text-xs font-semibold transition flex items-center gap-1 ${
                    currentIndex === sentences.length - 1
                      ? "opacity-40 cursor-not-allowed bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer shadow-xs"
                  }`}
                >
                  <span className="hidden sm:inline">Sau</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-2xl font-bold">
              {selectedSentence?.chunks?.map((chunk: GrammarChunk) => {
                const color = GRAMMAR_COLORS[chunk.colorType] || GRAMMAR_COLORS.default;
                const isSelected = activeChunk?.id === chunk.id;

                return (
                  <span
                  key={chunk.id}
                  onClick={() => setActiveChunk(chunk)}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg cursor-pointer transition border ${color.bg} ${color.text} ${
                    isSelected
                      ? "ring-2 ring-brand-500 border-transparent shadow-md scale-105"
                      : "border-transparent hover:opacity-80"
                  }`}
                >
                  {/* Chữ Tiếng Anh */}
                  <span className="text-2xl font-bold">{chunk.chunkEn}</span>
                  
                  {/* Chữ Tiếng Việt bên dưới */}
                  <span className="text-sm font-semibold opacity-80 mt-0.5">
                    {chunk.chunkVi}
                  </span>
                </span>
                );
              })}
            </div>

            {/* Phần hiển thị giải thích chi tiết dạng danh sách sạch sẽ */}
            {selectedSentence?.detailedExplanation && selectedSentence.detailedExplanation.length > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">
                  Phân tích chi tiết cấu trúc:
                </div>
                {selectedSentence.detailedExplanation.map((item, index) => (
                  <div key={index} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-1 leading-relaxed">
                    <span className="font-semibold text-brand-600 dark:text-brand-400 shrink-0">- {item.label}:</span>
                    <span>{item.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CỘT PHẢI (1 PHẦN) */}
        <div className="lg:col-span-1 space-y-2 lg:sticky lg:top-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            
            {/* 1. Thẻ vai trò */}
            <div>
              <div className={`inline-flex px-3.5 py-1.5 rounded-lg text-xs font-bold ${activeColor.bg} ${activeColor.text} shadow-xs w-fit`}>
                {activeChunk?.roleLabelVi}
              </div>
            </div>

            {/* 2. Text Anh + Việt (Đã sửa text-state-900 thành text-slate-900) */}
            <div className="pt-1">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{activeChunk?.chunkEn}</span>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-2">({activeChunk?.chunkVi})</span>
            </div>   

            {/* 3. Đường line ngang phân cách */}
            <hr className="border-slate-100 dark:border-slate-800 my-3" />     

            {/* Danh sách cụm từ thay thế */}
            <div className="space-y-3 pt-2">
              <span className="text-sm font-bold text-brand-600 dark:text-white block">Cụm từ thay thế:</span>
              
              <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                {activeChunk?.alternatives && activeChunk.alternatives.length > 0 ? (
                  activeChunk.alternatives.map((alt: { en: string; vi: string }, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 transition"
                    >
                      <div className="space-y-0.5">
                        <span className="text-sm font-bold text-slate-900 dark:text-white block">{alt.en}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 block">{alt.vi}</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-1 py-1 rounded">
                        {idx + 1}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic py-4 text-center">Không có cụm thay thế cho thành phần này.</p>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}