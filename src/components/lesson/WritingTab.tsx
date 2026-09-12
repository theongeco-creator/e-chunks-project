import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, PenTool, CheckCircle2, XCircle, RotateCcw, CheckCircle } from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { LessonCompletion } from "./LessonCompletion";

// 👉 1. KHAI BÁO THÊM PROPS CHO INTERFACE
interface WritingTabProps{
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

// Tách 1 đoạn văn thành mảng từng câu dựa theo dấu . ! ? (tương tự như tab Listening/Speaking)[cite: 1]
function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// 👇 THÊM HÀM NÀY VÀO ĐÂY (giữa splitSentences và export function WritingTab)
function normalize(text: string): string[] {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:"'“”‘’]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

export function WritingTab({ lesson, isCompleted, onToggleComplete }: WritingTabProps) {
  // Lấy danh sách câu từ đoạn văn của bài học[cite: 1]
  const englishSentences = splitSentences(lesson.paragraph || lesson.title || "");
  const vietnameseSentences = splitSentences(lesson.translation || "");

  const sentences = englishSentences.map((text, i) => ({
    text,
    translation: vietnameseSentences[i] ?? "Luyện tập gõ lại câu này từ trí nhớ.",
    ipa: "/præktɪs wraɪtɪŋ/", // Có thể thay bằng IPA thực tế nếu có
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentSentence = sentences[currentIndex] || sentences[0];

  // Kiểm tra kết quả người dùng gõ
  // 👉 THAY HÀM HANDLECHECK CŨ BẰNG ĐOẠN NÀY:
  const [wordResults, setWordResults] = useState<{ word: string; userWord?: string; isCorrect: boolean }[]>([]);

  const handleCheck = () => {
    if (!userInput.trim()) return;
    
    const userWords = userInput.trim().replace(/[.,!?]/g, "").split(/\s+/);
    const targetWords = currentSentence.text.trim().replace(/[.,!?]/g, "").split(/\s+/);

    let allMatch = true;
    const results = targetWords.map((targetWord, index) => {
      const userWord = userWords[index] || "";
      const match = userWord.toLowerCase() === targetWord.toLowerCase();
      if (!match) allMatch = false;
      return {
        word: targetWord,
        userWord: userWords[index],
        isCorrect: match
      };
    });

    setIsCorrect(allMatch && userWords.length === targetWords.length);
    setWordResults(results);
    setIsSubmitted(true);
  };

  // Reset khi chuyển câu
  const handleReset = () => {
    setUserInput("");
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      handleReset();
    }
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      handleReset();
    }
  };

  if (sentences.length === 0) {
    return (
      <p className="text-sm text-slate-500 py-10 text-center">
        Bài học này chưa có nội dung để luyện viết.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tiêu đề tab */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: 'var(--text-color)' }}>
            <PenTool className="w-5 h-5 text-blue-600" />
            <span>Luyện viết thuộc lòng từng câu</span>
          </div>
          <p className="text-[14px] font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
            Ghi nhớ và gõ lại chính xác các câu trong bài: {lesson.title}
          </p>
        </div>
      </div>

      {/* KHUNG LUYỆN VIẾT TỪNG CÂU */}
      <div
        className="rounded-xl border p-8 shadow-sm flex flex-col items-center text-center space-y-6 relative overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-color)",
        }}
      >
        <span className="px-3 py-2.5 rounded-md text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
          Câu {currentIndex + 1} / {sentences.length}
        </span>

        {/* Gợi ý nghĩa tiếng Việt hoặc IPA để gợi nhớ */}
        <div className="space-y-2 max-w-xl w-full">
          <p className="text-base font-semibold opacity-70" style={{ color: "var(--text-color)" }}>
            Gợi ý nghĩa: "{currentSentence.translation}"
          </p>

          {/* Ô nhập liệu để người dùng gõ lại câu tiếng Anh */}
          <div className="relative max-w-3xl mt-2">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={isSubmitted && isCorrect}
              placeholder="Gõ lại câu tiếng Anh vào đây..."
              rows={4}
              className={`w-full p-5 rounded-md border text-lg font-medium transition-all outline-none resize-none ${
                isSubmitted
                  ? isCorrect
                    ? "border-blue-500 bg-blue-50/30 text-blue-900 dark:text-blue-200"
                    : "border-red-400 bg-red-50/30 text-red-900 dark:text-red-200"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-blue-600"
              }`}
              style={{ color: "var(--text-color)" }}
            />
          </div>

          {/* 👉 THAY PHẦN HIỂN THỊ KẾT QUẢ CŨ BẰNG ĐOẠN NÀY: */}
          {isSubmitted && (
            <div className={`p-4 rounded-md space-y-3 text-xs font-bold animate-fadeIn ${
              isCorrect ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : "bg-red-50 dark:bg-red-950/50 text-red-800 dark:text-red-300 border border-red-200"
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  {isCorrect ? (
                    <span className="text-emerald-700 font-bold"> Chính xác tuyệt vời! Bạn đã gõ đúng hoàn toàn.</span>
                  ) : (
                    <span className="text-red-600 font-bold">❌ Có nhầm lẫn một chút, xem chi tiết bên dưới nhé:</span>
                  )}
                </div>
                <button 
                  onClick={handleReset} 
                  className="flex items-center gap-1 underline cursor-pointer hover:opacity-80"
                >
                  <RotateCcw className="w-3 h-3" /> Thử lại
                </button>
              </div>

              {/* Phần gạch ngang từ sai, bôi xanh từ đúng */}
              {!isCorrect && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-red-200 dark:border-red-900">
                  <span className="w-full text-left font-medium opacity-70 mb-1">So sánh đáp án chuẩn:</span>
                  {wordResults.map((item, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-1 rounded text-xs ${
                        item.isCorrect 
                          ? "bg-emerald-200/60 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" 
                          : "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200 line-through decoration-red-600 font-bold"
                      }`}
                      title={!item.isCorrect ? `Bạn đã gõ: "${item.userWord || 'bỏ trống'}"` : ''}
                    >
                      {item.word}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Nút kiểm tra đáp án */}
        {!isCorrect && (
          <button
            onClick={handleCheck}
            disabled={!userInput.trim()}
            className={`px-6 py-4 rounded-md text-xs font-bold transition-all ${
              !userInput.trim() 
                ? "opacity-40 cursor-not-allowed bg-slate-200 text-slate-500" 
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
            }`}
          >
            Kiểm tra đáp án
          </button>
        )}

        {/* CẶP NÚT ĐIỀU HƯỚNG XANH LÁ, BO GÓC ROUNDED-MD */}
        <div
          className="flex items-center justify-between w-full pt-4 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-3 rounded-md border flex items-center gap-1.5 text-xs font-bold transition-all ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <div className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-semibold opacity-60" style={{ color: "var(--text-color)" }}>Ghi nhớ &amp; luyện chính tả</span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === sentences.length - 1}
            className={`px-4 py-3 rounded-md border flex items-center gap-1.5 text-xs font-bold transition-all ${
              currentIndex === sentences.length - 1
                ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
            }`}
          >
            <span>Câu sau</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 👉 3. THAY THẾ KHUNG HOÀN THÀNH CUỐI TAB BẰNG NÚT ĐỒ BỘ MỚI */}
      <div 
        className="flex items-center justify-between p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/50"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold" style={{ color: "var(--text-color)" }}>
            Cứ từ từ thôi bà ơi
          </span>
          <span className="text-[12px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Nhớ được mí chunks trên thì sau học nhanh lắm á
          </span>
        </div>
        
        <button
          onClick={onToggleComplete}
          className={`px-5 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer ${
            isCompleted
              ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/20"
              : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-slate-900/10"
          }`}
        >
          <CheckCircle className={`w-4 h-4 ${isCompleted ? "fill-white text-emerald-600" : "text-slate-400"}`} />
          <span>  {isCompleted ? "Ngon lành cành đào " : "Hiểu rùi thì cho 1 tick"}
         </span>
        </button>
      </div>
    </div>
  );
}