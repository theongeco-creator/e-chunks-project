import { useState, useEffect } from "react";
import { Lock, Check, Play, ChevronDown, ChevronUp, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import { categoriesA2, categoriesB1 } from "@/data/lessonData";
import { courseLevelDescriptions } from "@/data/courseDescriptions";
import type { Lesson } from "@/data/lessonData";
import { isLessonLocked } from "@/auth/accessControl";
import type { UserTier } from "@/auth/types";

interface CourseListProps {
  tier: UserTier;
  activeLevel: "A2" | "B1";
  onLessonClick: (day: number) => void;
  onLockedClick: () => void;
}

function isLessonComplete(lessonId: number): boolean {
  try {
    const tabs = JSON.parse(localStorage.getItem(`lesson_progress_${lessonId}`) || "[]");
    return tabs.length >= 4;
  } catch {
    return false;
  }
}

function useCompletionMap(lessonIds: number[]) {
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());

  const read = () => {
    const next = new Set<number>();
    lessonIds.forEach((id) => {
      if (isLessonComplete(id)) next.add(id);
    });
    setCompletedIds(next);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonIds.join(",")]);

  return completedIds;
}

export function CourseList({ tier, activeLevel, onLessonClick, onLockedClick }: CourseListProps) {
  const currentCategories = activeLevel === "B1" ? categoriesB1 : categoriesA2;
  const levelInfo = courseLevelDescriptions[activeLevel] || courseLevelDescriptions["A2"];

  const allLessonIds: number[] = [];
  currentCategories.forEach((cat) => cat.lessons.forEach((l) => allLessonIds.push(l.day)));
  const completedIds = useCompletionMap(allLessonIds);

  let currentLesson: Lesson | undefined;
  let currentCategoryTitle = "";

  for (const cat of currentCategories) {
    for (const l of cat.lessons) {
      if (!isLessonLocked(l.day, tier) && !completedIds.has(l.day)) {
        currentLesson = l;
        currentCategoryTitle = cat.title;
        break;
      }
    }
    if (currentLesson) break;
  }

  if (!currentLesson && currentCategories[0]?.lessons[0]) {
    currentLesson = currentCategories[0].lessons[0];
    currentCategoryTitle = currentCategories[0].title;
  }

  const [openSections, setOpenSections] = useState<Record<number, boolean>>({ 0: true });

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const totalLessons = allLessonIds.length;
  const completedCount = completedIds.size;
  const percent = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="w-full bg-white text-slate-800 min-h-screen pb-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        {/* ================= CỘT TRÁI: TEXT CHI TIẾT CẤP ĐỘ (NỀN TRẮNG) ================= */}
        <div className="lg:col-span-8 p-6 lg:p-10 flex flex-col space-y-6 border-r border-slate-200 bg-white">
          
          {/* Header thông tin cấp độ */}
          <div className="space-y-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
              Lộ trình chuyên sâu
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight pt-2">
              {levelInfo.levelTitle}
            </h1>
          </div>

          {/* Box danh sách nội dung/ngữ pháp trọng tâm */}
          <div className="bg-slate-50 p-6 lg:p-8 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Nội dung trọng tâm cấp độ này:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {levelInfo.topics.map((topic, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text mẫu mô tả mục tiêu */}
          <div className="p-5 rounded-lg bg-blue-50/50 border border-blue-100 text-sm text-slate-700 italic leading-relaxed">
            "{levelInfo.sampleText}"
          </div>

          {/* Phần bài học hiện tại đang học nhanh */}
          <div className="mt-auto bg-slate-50 p-5 rounded-lg border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-blue-600 font-semibold uppercase tracking-wide">Bài đang học: {currentCategoryTitle}</span>
              <h4 className="text-base font-bold text-slate-900 mt-0.5">{currentLesson?.title}</h4>
            </div>
            <button
              onClick={() => currentLesson && !isLessonLocked(currentLesson.day, tier) && onLessonClick(currentLesson.day)}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-white" /> Tiếp tục học
            </button>
          </div>

        </div>


        {/* ================= CỘT PHẢI: COURSE CONTENT (GIAO DIỆN SÁNG GỌN GÀNG) ================= */}
        <div className="lg:col-span-4 bg-slate-50/50 flex flex-col h-full border-t lg:border-t-0 border-slate-200">
          
          <div className="p-5 border-b border-slate-200 bg-white flex items-center justify-between">
            <div>
              <h2 className="font-bold text-base text-slate-900">Course content</h2>
              <p className="text-xs text-slate-500 mt-0.5">{percent}% hoàn thành</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              {completedCount}/{totalLessons} bài
            </span>
          </div>

          <div className="divide-y divide-slate-200 overflow-y-auto max-h-[calc(100vh-140px)]">
            {currentCategories.map((category, catIdx) => {
              const isOpen = openSections[catIdx] ?? false;
              const catLessons = category.lessons;
              const catCompletedCount = catLessons.filter((l) => completedIds.has(l.day)).length;

              return (
                <div key={catIdx} className="bg-white">
                  <button
                    onClick={() => toggleSection(catIdx)}
                    className="w-full p-4 flex items-center justify-between bg-slate-50/80 hover:bg-slate-100/80 transition-colors text-left border-b border-slate-100"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                        <span>{category.emoji}</span>
                        <span>{category.title}</span>
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {catCompletedCount}/{catLessons.length} bài | {catLessons.length * 15} phút
                      </p>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="divide-y divide-slate-100 bg-white">
                      {catLessons.map((lesson) => {
                        const locked = isLessonLocked(lesson.day, tier);
                        const isComplete = completedIds.has(lesson.day);
                        const isSelected = lesson.day === currentLesson?.day;

                        return (
                          <div
                            key={lesson.day}
                            onClick={() => (locked ? onLockedClick() : onLessonClick(lesson.day))}
                            className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-blue-50/70 border-l-4 border-blue-600"
                                : "hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 pr-3">
                              <div className="shrink-0">
                                {locked ? (
                                  <Lock className="w-4 h-4 text-slate-400" />
                                ) : isComplete ? (
                                  <Check className="w-4 h-4 text-emerald-600" />
                                ) : (
                                  <Play className="w-3.5 h-3.5 text-slate-400" />
                                )}
                              </div>

                              <span
                                className={`text-xs truncate ${
                                  isSelected
                                    ? "text-blue-900 font-bold"
                                    : isComplete
                                    ? "text-slate-400 line-through"
                                    : "text-slate-700"
                                }`}
                              >
                                {lesson.title}
                              </span>
                            </div>

                            <span className="text-[11px] text-slate-400 shrink-0 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> 15m
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}