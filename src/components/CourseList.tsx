import { useState, useEffect } from "react";
import { Lock, Check } from "lucide-react";
import { categoriesA2, categoriesB1 } from "@/data/lessonData";
import type { Lesson } from "@/data/lessonData";
import { isLessonLocked } from "@/auth/accessControl";
import type { UserTier } from "@/auth/types";

interface CourseListProps {
  tier: UserTier;
  activeLevel: "A2" | "B1"; // Thêm prop này để nhận cấp độ hiện tại
  onLessonClick: (day: number) => void;
  onLockedClick: () => void;
}

export function CourseList({ tier, activeLevel, onLessonClick, onLockedClick }: CourseListProps) {
  // Tự động chuyển đổi nguồn dữ liệu dựa theo cấp độ đang chọn
  const currentCategories = activeLevel === "B1" ? categoriesB1 : categoriesA2;
  const totalLessons = currentCategories.reduce((acc, cat) => acc + cat.lessons.length, 0);

  return (
    <section className="pb-20 max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold" style={{ color: 'var(--text-color)' }}>
            Lộ trình học tập cấp độ {activeLevel}
          </h2>
          <p className="text-sm opacity-70 mt-0.5" style={{ color: 'var(--text-color)' }}>
            {activeLevel === "B1" ? "Hơn 50+ chủ đề nâng cao trong vòng 3 tháng, giúp bạn cải thiện kỹ năng giao tiếp" : "Chia theo 6 tuần khoa học giúp bạn học tập hiệu quả"}
          </p>
        </div>
        <span className="text-sm font-medium px-3 py-1.5 rounded-full border shadow-sm" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
          Tổng số: {totalLessons} bài
        </span>
      </div>

      {/* Render danh sách theo từng Category */}
      <div className="space-y-12">
        {currentCategories.map((category, index) => (
          <div key={category.id} className="space-y-4">
            {/* Tiêu đề tuần/chương */}
            <div className="flex items-center gap-3 border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
              <span className="text-2xl">{category.emoji}</span>
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Phần {index + 1}
                </span>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Lưới các Card hiển thị dạng 3 cột */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.lessons.map((lesson) => {
                const locked = isLessonLocked(lesson.day, tier);
                return (
                  <LessonCard
                    key={lesson.day}
                    lesson={lesson}
                    locked={locked}
                    onLessonClick={onLessonClick}
                    onLockedClick={onLockedClick}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LessonCard({
  lesson,
  locked,
  onLessonClick,
  onLockedClick,
}: {
  lesson: Lesson;
  locked: boolean;
  onLessonClick: (day: number) => void;
  onLockedClick: () => void;
}) {
  const handleClick = () => {
    if (locked) {
      onLockedClick();
    } else {
      onLessonClick(lesson.day);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative rounded-xl border overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-lg hover:-translate-y-1"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-color)'
      }}
    >
      <div>
        {/* Phần hình ảnh phía trên */}
        <div className="relative w-full h-32 bg-slate-100 dark:bg-slate-800 overflow-hidden">
          {lesson.image ? (
            <img 
              src={lesson.image} 
              alt={lesson.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">
              {lesson.emoji || "📚"}
            </div>
          )}
          
          <div className="absolute top-2.5 right-2.5">
            {locked ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100/95 dark:bg-amber-950/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border border-amber-200 dark:border-amber-800">
                <Lock className="w-3 h-3 text-amber-700 dark:text-amber-400" /> Pro
              </span>
            ) : (
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border border-slate-200/50 dark:border-slate-700">
                Day {lesson.day}
              </span>
            )}
          </div>
        </div>

        {/* Tên bài học */}
        <div className="p-4 pb-2">
          <h4 className={`font-bold text-sm line-clamp-2 ${locked ? "opacity-50" : "group-hover:text-blue-600 dark:group-hover:text-blue-400"}`} style={{ color: 'var(--text-color)' }}>
            {lesson.title}
          </h4>
        </div>
      </div>

      {/* Thanh tiến độ */}
      <div className="px-4 pb-4 pt-2 border-t mt-2" style={{ borderColor: 'var(--border-color)' }}>
        {locked ? (
          <div className="text-[12px] opacity-60 bolt" style={{ color: 'var(--text-color)' }}>Dành cho tài khoản Pro</div>
        ) : (
          <LessonCardProgressBar lessonId={lesson.day} />
        )}
      </div>
    </div>
  );
}

function LessonCardProgressBar({ lessonId }: { lessonId: number }) {
  const [completedTabs, setCompletedTabs] = useState<string[]>([]);

  const read = () => {
    try {
      setCompletedTabs(JSON.parse(localStorage.getItem(`lesson_progress_${lessonId}`) || "[]"));
    } catch {
      setCompletedTabs([]);
    }
  };

  useEffect(() => {
    read();
    const handler = () => read();
    window.addEventListener("storage", handler);
    window.addEventListener("lesson-progress-changed", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("lesson-progress-changed", handler);
    };
  }, [lessonId]);

  const done = completedTabs.length;
  const isComplete = done >= 4;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[12px] mb-1.5">
        <span className="opacity-60 font-medium" style={{ color: 'var(--text-color)' }}>Tiến độ</span>
        {isComplete ? (
          <span className="inline-flex items-center gap-0.5 font-bold text-emerald-600 dark:text-emerald-400">
            <Check className="w-3 h-3" /> Xong
          </span>
        ) : (
          <span className="font-bold" style={{ color: 'var(--text-color)' }}>{done}/4 mục</span>
        )}
      </div>
      <div className="flex gap-1 w-full">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full transition-colors duration-300 ${
              i < done ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}