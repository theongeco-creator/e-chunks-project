import { useState, useEffect } from "react";
import { CheckCircle, Trophy } from "lucide-react";

interface LessonCompletionProps {
  lessonId: number;
  currentTab: "reading" | "listening" | "speaking" | "writing";
}

export function LessonCompletion({ lessonId, currentTab }: LessonCompletionProps) {
  const [completedTabs, setCompletedTabs] = useState<string[]>([]);
  const storageKey = `lesson_progress_${lessonId}`;

  useEffect(() => {
    const saved: string[] = JSON.parse(localStorage.getItem(storageKey) || "[]");
    setCompletedTabs(saved);
  }, [storageKey]);

  const isCurrentTabDone = completedTabs.includes(currentTab);

  const handleToggleCurrentTab = () => {
    let updated: string[];
    if (isCurrentTabDone) {
      updated = completedTabs.filter((t) => t !== currentTab);
    } else {
      updated = [...completedTabs, currentTab];
    }
    
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setCompletedTabs(updated);
    
    // Bắn sự kiện để các component khác cập nhật lại giao diện tổng nếu cần
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event("lesson-progress-changed"));
  };

  const progressPercent = Math.min(completedTabs.length * 25, 100);

  return (
    <div 
      className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl shadow-sm transition-colors duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-color)'
      }}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${progressPercent === 100 ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"}`}>
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm" style={{ color: 'var(--text-color)' }}>Tiến độ bài học</h4>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {progressPercent}% ({completedTabs.length}/4 mục)
            </span>
          </div>
          <p className="text-xs font-medium mt-0.5 opacity-70" style={{ color: 'var(--text-color)' }}>
            {isCurrentTabDone ? `Đã hoàn thành phần này (+25%)` : `Nhấn nút khi hoàn thành phần này để nhận 25%.`}
          </p>
        </div>
      </div>

      <button
  onClick={handleToggleCurrentTab}
  className={`px-5 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer ${
    isCurrentTabDone
      ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/20" // Lúc ĐÃ XONG: Xanh lá đậm rực rỡ
      : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-slate-900/10" // Lúc CHƯA XONG: Màu đen/xám đậm sang trọng, nổi bật
  }`}
>
  <CheckCircle className={`w-4 h-4 ${isCurrentTabDone ? "fill-white text-emerald-600" : "text-slate-400"}`} />
  <span>{isCurrentTabDone ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}</span>
</button>
    </div>
  );
}