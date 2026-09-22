import { useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  PenTool,
  RotateCcw,
  CheckCircle,
  Award,
  Trophy,
} from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { Button } from "@/components/Button";


interface WritingTabProps {
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
  onNavigateTab?: (tab: "listening" | "reading" | "writing" | "speaking") => void;
  onBack?: () => void;
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function WritingTab({
  lesson,
  isCompleted,
  onToggleComplete,
  onBack,
}: WritingTabProps) {
  const englishSentences = splitSentences(lesson.paragraph || lesson.title || "");
  const vietnameseSentences = splitSentences(lesson.translation || "");

  const sentences = englishSentences.map((text, i) => ({
    text,
    translation: vietnameseSentences[i] ?? "Luyện tập gõ lại câu này từ trí nhớ.",
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wordResults, setWordResults] = useState<
    { word: string; userWord?: string; isCorrect: boolean }[]
  >([]);

  // State quản lý kết quả gõ từng câu ({ 0: true, 1: false, ... })
  const [completedSentences, setCompletedSentences] = useState<Record<number, boolean>>({});

  // State quản lý Modal kết thúc — CHỈ 1 biến duy nhất, dùng thống nhất từ nút
  // mở tới cả 2 nút đóng bên trong modal.
  const [showConfirmNextModal, setShowConfirmNextModal] = useState(false);

  const currentSentence = sentences[currentIndex] || sentences[0];

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
        isCorrect: match,
      };
    });

    const correctState = allMatch && userWords.length === targetWords.length;
    setIsCorrect(correctState);
    setWordResults(results);
    setIsSubmitted(true);

    // Cập nhật trạng thái làm đúng/sai cho câu hiện tại
    setCompletedSentences((prev) => ({
      ...prev,
      [currentIndex]: correctState,
    }));
  };

  const handleReset = () => {
    setUserInput("");
    setIsSubmitted(false);
    setIsCorrect(false);
    setWordResults([]);
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
    <div className="space-y-4 pb-28">
      {/* ============ 1. HEADER NHẸ: tiêu đề + nút reset ============ */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <div
            className="flex items-center gap-2 text-base font-bold"
            style={{ color: "var(--text-color)" }}
          >
            <PenTool className="w-5 h-5 text-brand-500" />
            <span>Writing</span>
          </div>
          <p
            className="text-[13px] font-medium opacity-60"
            style={{ color: "var(--text-color)" }}
          >
            Ghi nhớ và gõ lại chính xác các câu trong bài: {lesson.title}
          </p>
        </div>

        <button
          onClick={handleReset}
          className="w-9 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer shrink-0 hover:bg-slate-50 dark:hover:bg-slate-800"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
          title="Bắt đầu lại câu này"
          aria-label="Làm lại"
        >
          <RotateCcw className="w-4 h-4 opacity-70" />
        </button>
      </div>

      {/* ============ 2. THANH TIẾN ĐỘ ============ */}
      <div className="flex items-center gap-3">
        <div
          className="flex-1 h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--border-color)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / sentences.length) * 100}%`,
              backgroundColor: "#4F46E5",
            }}
          />
        </div>
        <span
          className="text-xs font-bold shrink-0 flex items-center gap-1.5"
          style={{ color: "var(--text-color)" }}
        >
          <Award className="w-3.5 h-3.5 text-amber-500" />
          {currentIndex + 1}/{sentences.length}
        </span>
      </div>

      {/* ============ 3. CARD CHÍNH NHẬP LIỆU ============ */}
      <div
        className="rounded-2xl shadow-card p-6 sm:p-8 flex flex-col items-center text-center space-y-6"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        {/* Gợi ý tiếng Việt */}
        <div className="space-y-2 max-w-xl w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Bản dịch gợi ý
          </span>
          <p className="text-2xl font-bold" style={{ color: "var(--text-color)" }}>
            "{currentSentence.translation}"
          </p>
        </div>

        {/* Khung Textarea nhập liệu */}
        <div className="w-full max-w-2xl">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isSubmitted && isCorrect}
            placeholder="Gõ lại câu tiếng Anh theo trí nhớ của bạn..."
            rows={3}
            className={`w-full p-4 rounded-xl border-2 text-base sm:text-lg font-medium transition-all outline-none resize-none ${
              isSubmitted
                ? isCorrect
                  ? "border-[#30B83D] bg-[#EBFFEF] text-[#232323] dark:text-emerald-200"
                  : "border-[#DB2323] bg-[#fff8f8] text-[#232323] dark:text-red-200"
                : "focus:border-indigo-600 bg-white dark:bg-slate-900"
            }`}
            style={{
              borderColor: !isSubmitted ? "var(--border-color)" : undefined,
              color: "var(--text-color)",
            }}
          />
        </div>

        {/* Bảng so sánh từ khi gõ chưa chính xác */}
        {isSubmitted && !isCorrect && (
          <div className="w-full max-w-2xl p-4 rounded-xl border-2 border-slate-200 bg-[#ffffff] dark:bg-red-950/30 dark:border-red-900/50 space-y-2 text-left">
            <span className="text-xs font-bold text-[#DB2323] dark:text-red-400 block">
              So sánh đáp án chuẩn:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {wordResults.map((item, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-2 rounded-lg text-base font-bold ${
                    item.isCorrect
                      ? "bg-[#EBFFEF] border-2 border-[#30B83D] text-[#232323] dark:bg-emerald-900/60 dark:text-emerald-200"
                      : "bg-[#FFF0F0] border-2 border-[#DC2B2B] text-[#232323] dark:bg-red-900/80 dark:text-red-200 line-through decoration-red-600"
                  }`}
                  title={
                    !item.isCorrect
                      ? `Bạn đã gõ: "${item.userWord || "bỏ trống"}"`
                      : ""
                  }
                >
                  {item.word}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ============ 4. TOOLBAR CUỐI ============ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition shadow-xs hover:bg-slate-100 dark:hover:bg-slate-800"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-color)",
              backgroundColor: "var(--card-bg)",
            }}
            title="Câu trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="flex items-center gap-2 min-w-0 px-2 animate-in fade-in duration-200">
              <span
                className={`text-base font-extrabold truncate ${
                  isCorrect ? "text-[#30B83D]" : "text-[#DB2323]"
                }`}
              >
                {isCorrect ? "Chính xác tuyệt vời!" : "Có nhầm lẫn chút xíu!"}
              </span>
            </div>
          ) : (
            <div className="hidden sm:block text-xs font-semibold text-slate-400 dark:text-slate-500">
              Gõ câu tiếng Anh dựa trên bản dịch rồi chọn Kiểm tra
            </div>
          )}

          <div className="shrink-0 ml-auto flex items-center gap-2">
            {!isSubmitted ? (
              <Button
                variant="primary"
                size="sm"
                onClick={handleCheck}
                disabled={!userInput.trim()}
              >
                Kiểm tra
              </Button>
            ) : (
              <>
                {!isCorrect && (
                  <Button variant="secondary" size="sm" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4 mr-1 inline-block" />
                    Thử lại
                  </Button>
                )}

                {currentIndex < sentences.length - 1 ? (
                  <Button variant="primary" size="sm" onClick={handleNext}>
                    Tiếp theo
                    <ChevronRight className="w-4 h-4 ml-1.5 inline-block" />
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      const newCompletedSentences = {
                        ...completedSentences,
                        [currentIndex]: isCorrect,
                      };
                      setCompletedSentences(newCompletedSentences);

                      const correctCount = Object.values(newCompletedSentences).filter(Boolean).length;
                      const total = sentences.length;
                      const passed = total > 0 ? correctCount / total >= 0.7 : true;

                      // 👉 Chỉ LƯU hoàn thành khi ĐẠT và CHƯA từng hoàn thành trước
                      // đó — thêm điều kiện !isCompleted để tránh lỡ bấm lại lần 2
                      // (vd quay lại ôn câu cuối rồi bấm nút này lần nữa) khiến
                      // onToggleComplete() chạy lại và ĐẢO NGƯỢC trạng thái đã lưu
                      // về false, vì đây là hàm toggle chứ không phải "set = true".
                      if (!isCompleted && passed && onToggleComplete) {
                        onToggleComplete();
                      }

                      // 👉 Chỉ hiện popup "Hoàn thành!" khi thực sự đã lưu được
                      // (đạt hoặc đã hoàn thành từ trước) — không hiện popup nếu
                      // chưa đạt, tránh gây hiểu lầm là đã lưu trong khi chưa lưu.
                      if (passed || isCompleted) {
                        setShowConfirmNextModal(true);
                      }
                    }}
                  >
                    {isCompleted ? "Đã hoàn thành" : "Hoàn thành kỹ năng"}
                    <CheckCircle className="w-4 h-4 ml-1.5 inline-block" />
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ============ MODAL TỔNG KẾT ============ */}
      {showConfirmNextModal &&
    createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl p-6 shadow-2xl border space-y-6 text-center bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            {/* Icon & Tiêu đề */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-yellow-100 dark:bg-emerald-950/50 text-yellow-600 dark:text-emerald-400">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Hoàn thành Lesson {lesson?.day || 1}! 🎉
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Bạn đã hoàn thành phần luyện tập kỹ năng viết cho bài học này.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  setShowConfirmNextModal(false);
                  if (onBack) onBack();
                }}
              >
                Quay lại danh sách bài học
                <ChevronRight className="w-4 h-4 ml-1 inline-block" />
              </Button>

              <button
                type="button"
                onClick={() => setShowConfirmNextModal(false)}
                className="w-full py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
              >
                Ở lại ôn thêm
              </button>
            </div>
          </div>
        </div>,
      document.body
    )}
    </div>
  );
}