import { useState, useEffect } from "react";
import {
  Lock,
  Check,
  ChevronRight,
  Sparkles,
  Signal,
  Clock,
  Users,
  Bookmark,
  Share2,
  Crown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { categoriesA1, categoriesA2, categoriesB1 } from "@/data/lessonData";
import { courseLevelDescriptions } from "@/data/courseDescriptions";
import type { Lesson } from "@/data/lessonData";
import { isLessonLocked } from "@/auth/accessControl";
import type { UserTier } from "@/auth/types";
import { PageContainer } from "@/components/PageContainer";
import { Button } from "@/components/Button";

interface CourseListProps {
  tier: UserTier;
  activeLevel: "A1" | "A2" | "B1";
  onLessonClick: (day: number) => void;
  onLockedClick: (level?: "A1" | "A2" | "B1") => void;
  onBackToHome: () => void;
}

function isLessonComplete(lessonId: number): boolean {
  try {
    const raw = localStorage.getItem(`lesson_progress_${lessonId}`);
    if (!raw) return false;
    const tabs = JSON.parse(raw);
    const values = Object.values(tabs);
    return values.length >= 4 && values.every((v) => v === true);
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

export function CourseList({
  tier,
  activeLevel,
  onLessonClick,
  onLockedClick,
  onBackToHome,
}: CourseListProps) {
  const currentCategories =
    activeLevel === "B1"
      ? categoriesB1
      : activeLevel === "A1"
      ? categoriesA1
      : categoriesA2;
  const levelInfo =
    courseLevelDescriptions[activeLevel] || courseLevelDescriptions["A2"];

  const allLessonIds: number[] = [];
  currentCategories.forEach((cat) =>
    cat.lessons.forEach((l) => allLessonIds.push(l.day))
  );
  const completedIds = useCompletionMap(allLessonIds);

  let currentLesson: Lesson | undefined;
  let needsUpgrade = false;

  for (const cat of currentCategories) {
    for (const l of cat.lessons) {
      if (!isLessonLocked(l.day, tier, activeLevel) && !completedIds.has(l.day)) {
        currentLesson = l;
        break;
      }
    }
    if (currentLesson) break;
  }

  if (!currentLesson) {
    for (const cat of currentCategories) {
      for (const l of cat.lessons) {
        if (isLessonLocked(l.day, tier, activeLevel)) {
          currentLesson = l;
          needsUpgrade = true;
          break;
        }
      }
      if (currentLesson) break;
    }
  }

  if (!currentLesson && currentCategories[0]?.lessons[0]) {
    currentLesson = currentCategories[0].lessons[0];
  }

  const [expandedLevels, setExpandedLevels] = useState<Record<number, boolean>>({ 0: true });

  const toggleLevel = (index: number) => {
    setExpandedLevels((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isAllExpanded = currentCategories.every((_, idx) => expandedLevels[idx]);

  const toggleExpandAll = () => {
    if (isAllExpanded) {
      setExpandedLevels({});
    } else {
      const allState: Record<number, boolean> = {};
      currentCategories.forEach((_, idx) => {
        allState[idx] = true;
      });
      setExpandedLevels(allState);
    }
  };

  const totalLessons = allLessonIds.length;
  const completedCount = completedIds.size;
  const percent =
    totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="w-full text-slate-900 min-h-screen pb-20">
      
      {/* ================= WRAPPER BỐ CỤC CHUẨN — DÙNG CHUNG PageContainer VỚI Homepage/AllTopicsPage/AllStoriesPage ================= */}
      <PageContainer className="py-8 space-y-6">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <button
            onClick={onBackToHome}
            className="hover:text-indigo-600 transition cursor-pointer"
          >
            Courses
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-bold">{activeLevel} Track</span>
        </nav>

        {/* GRID CHIA ĐÔI 50/50 NẰM TRONG KHUNG 1140px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* CỘT TRÁI: THÔNG TIN KHÓA HỌC */}
          <div className="space-y-6 sticky top-8">
            <h1 className="text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              {levelInfo.levelTitle}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed font-medium">
              {levelInfo.sampleText}
            </p>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-5 text-xs font-semibold text-slate-600 pt-1">
              <span className="flex items-center gap-1.5 text-indigo-600 font-bold">
                <Sparkles className="w-4 h-4 fill-indigo-600" />
                Phổ biến nhất
              </span>
              <span className="flex items-center gap-1.5">
                <Signal className="w-4 h-4 text-slate-400" />
                {activeLevel === "A1" ? "Beginner" : activeLevel === "A2" ? "Elementary" : "Intermediate"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {totalLessons * 15} phút
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-400" />
                14,570 Người học
              </span>
            </div>

              {/* KHỐI PROGRESS BAR KÈM TEXT (ĐÃ KÉO SÁT LẠI) */}
              <div className="space-y-3 my-2">
                <div className="flex items-center justify-between text-sm font-bold text-slate-600">
                  <span>{percent}% Hoàn thành</span>
                  <span className="text-slate-400 font-medium">{completedCount}/{totalLessons} Bài học</span>
                </div>

                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>

            {/* HÀNG NÚT BẤM DÙNG BUTTON COMPONENT */}
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={needsUpgrade ? <Crown className="w-4 h-4" /> : undefined}
              onClick={() => {
                if (!currentLesson) return;
                if (needsUpgrade) {
                  onLockedClick(activeLevel);
                } else if (!isLessonLocked(currentLesson.day, tier, activeLevel)) {
                  onLessonClick(currentLesson.day);
                }
              }}
            >
              {needsUpgrade
              ? "Nâng cấp để học"
              : completedCount > 0
              ? "Tiếp tục khóa học"
              : "Học miễn phí ngay"}
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="secondary" size="md" icon={<Bookmark className="w-4 h-4" />}>
                {""}
              </Button>
              <Button variant="secondary" size="md" icon={<Share2 className="w-4 h-4" />}>
                {""}
              </Button>
            </div>
          </div>
        </div>

          {/* CỘT PHẢI: SYLLABUS chuẩn UXCEL */}
          <div className="space-y-6">
            
            <div className="border-b border-slate-200/80 pb-4 space-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-[22px] font-bold text-[#513DEB] tracking-tight">
                  Nội dung khóa học
                </h2>
                <button
                  onClick={toggleExpandAll}
                  className="text-[14px] font-bold text-slate-600 hover:text-indigo-600 transition flex items-center gap-1 cursor-pointer"
                >
                  <span>{isAllExpanded ? "Mở rộng tất cả" : "Thu gọn tất cả"}</span>
                  {isAllExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>
              </div>
              
              <p className="text-[14px] font-medium text-slate-400">
                {totalLessons} Bài học • {currentCategories.length} tuần
              </p>
            </div>

            <div className="space-y-8">
              {currentCategories.map((category, catIdx) => {
                const catLessons = category.lessons;
                const isExpanded = expandedLevels[catIdx] ?? false;
                // Chỉ hiện badge PRO nếu KHÔNG PHẢI là A1 VÀ là Level 2 trở lên (catIdx >= 1)
                const isProLevel = activeLevel !== "A1" && catIdx >= 1;         
                
                const completedInCat = catLessons.filter((l) => completedIds.has(l.day)).length;
                const catPercent = catLessons.length === 0 ? 0 : Math.round((completedInCat / catLessons.length) * 100);

                return (
                  <div key={catIdx} className="border-b border-slate-200/80 pb-8 space-y-3">
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[12px] font-bold uppercase text-slate-400">
                          <span> Tuần {catIdx + 1}</span>
                          {isProLevel && (
                            <>
                              <span>|</span>
                              <span className="text-[#5A45FF] font-black">PRO</span>
                            </>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-indigo-600 h-full transition-all duration-300"
                              style={{ width: `${catPercent}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-400 min-w-[28px] text-right">
                            {catPercent}%
                          </span>
                        </div>
                      </div>

                      <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => toggleLevel(catIdx)}
                        className="text-[14px] font-semibold text-slate-600 hover:text-indigo-600 transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>Xem chi tiết bài học</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                        )}
                      </button>

                      <button
                        onClick={() => {
                          const firstUncompleted = catLessons.find((l) => !completedIds.has(l.day)) || catLessons[0];
                          if (!firstUncompleted) return;
                          if (isLessonLocked(firstUncompleted.day, tier, activeLevel)) {
                            onLockedClick(activeLevel);
                          } else {
                            onLessonClick(firstUncompleted.day);
                          }
                        }}
                        className="text-[14px] font-semibold text-[#5A45FF] hover:underline cursor-pointer"
                      >
                        Bắt đầu học
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="space-y-3 pt-3">
                      {catLessons.map((lesson) => {
                        const locked = isLessonLocked(lesson.day, tier, activeLevel);
                        const isComplete = completedIds.has(lesson.day);
                        const isCurrent = lesson.day === currentLesson?.day;

                        return (
                          <div
                            key={lesson.day}
                            onClick={() =>
                              locked
                                ? onLockedClick(activeLevel)
                                : onLessonClick(lesson.day)
                            }
                            className={`relative group flex items-center justify-between p-4 rounded-[20px] transition-all cursor-pointer border ${
                              isCurrent
                                ? "bg-[#ffffff] border-[#5A45FF] border-[4px] shadow-sm"
                                : "bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-2xs"
                            }`}
                          >
                            {isCurrent && (
                              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 flex flex-col animate-bounce items-center">
                                <span className="bg-[#5A45FF] text-white text-[14px] font-bold px-4 py-2 rounded-xl shadow-sm">
                                  Bắt đầu
                                </span>
                                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#5A45FF] -mt-[1px]" />
                              </div>
                            )}

                            <div className="flex items-center gap-4 min-w-0">
                              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden relative">
                                <img
                                  src={lesson.image}
                                  alt={lesson.title}
                                  className={`w-full h-full object-cover ${
                                    isComplete ? "opacity-40" : ""
                                  }`}
                                />
                                {locked && (
                                  <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center backdrop-blur-[1px]">
                                    <Lock className="w-4 h-4 text-white" />
                                  </div>
                                )}
                              </div>

                              <div className="space-y-0.5 min-w-0">
                                <h4
                                  className={`text-base font-bold truncate ${
                                    isComplete
                                      ? "text-slate-400 line-through"
                                      : "text-slate-900 group-hover:text-indigo-600 transition-colors"
                                  }`}
                                >
                                  Day {lesson.day}: {lesson.title}
                                </h4>
                              </div>
                            </div>

                            <div className="shrink-0 pl-4">
                              {isComplete ? (
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              ) : (
                                <span className="text-xs font-bold text-slate-400 tracking-tight">
                                  250 PX
                                </span>
                              )}
                            </div>
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
      </PageContainer>
    </div>
  );
}