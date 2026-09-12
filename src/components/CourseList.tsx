import { useState, useEffect } from "react";
import { Lock, Check, ChevronDown, ChevronUp, BookOpen, CheckCircle2, ChevronRight, Crown } from "lucide-react";
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
  onBackToHome: () => void;
}

function isLessonComplete(lessonId: number): boolean {
  try {
    const raw = localStorage.getItem(`lesson_progress_${lessonId}`);
    if (!raw) return false;

    const tabs = JSON.parse(raw);

    // Dữ liệu lưu từ LessonDetail là OBJECT { reading: true, listening: true, ... }
    // chứ không phải mảng, nên phải check theo values chứ không dùng .length
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

export function CourseList({ tier, activeLevel, onLessonClick, onLockedClick, onBackToHome }: CourseListProps) {
  const currentCategories = activeLevel === "B1" ? categoriesB1 : categoriesA2;
  const levelInfo = courseLevelDescriptions[activeLevel] || courseLevelDescriptions["A2"];

  const allLessonIds: number[] = [];
  currentCategories.forEach((cat) => cat.lessons.forEach((l) => allLessonIds.push(l.day)));
  const completedIds = useCompletionMap(allLessonIds);

  let currentLesson: Lesson | undefined;
  let currentCategoryTitle = "";
  let needsUpgrade = false; // 👈 thêm cờ này: true khi bài đang hiện là bài BỊ KHOÁ

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

// 👇 THÊM MỚI: nếu không tìm được bài nào (đã học hết phần mở khoá),
// tìm bài KHOÁ tiếp theo để mời nâng cấp, thay vì quay về Ngày 1
if (!currentLesson) {
  for (const cat of currentCategories) {
    for (const l of cat.lessons) {
      if (isLessonLocked(l.day, tier)) {
        currentLesson = l;
        currentCategoryTitle = cat.title;
        needsUpgrade = true;
        break;
      }
    }
    if (currentLesson) break;
  }
}

// Fallback cuối cùng, chỉ khi thật sự không có bài nào cả (dữ liệu rỗng)
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
    <div className="w-full text-slate-800 min-h-screen pb-16 space-y-4">
      
      {/* ================= THANH BREADCRUMB ĐƯỜNG ĐI ================= */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 flex-wrap px-1">
        <button
          onClick={onBackToHome}
          className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
        >
          Trang chủ
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

        <span className="text-slate-800 font-semibold">
          Lộ trình học {activeLevel}
        </span>
      </nav>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        {/* ================= CỘT TRÁI: TEXT CHI TIẾT CẤP ĐỘ ================= */}
        <div className="lg:col-span-8 p-6 lg:p-10 flex flex-col space-y-6 border-r border-slate-200 bg-white">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {levelInfo.levelTitle}
            </h1>
          </div>

          <div className="mt-auto bg-blue-50 p-6 rounded-lg border-2 border-blue-600 flex items-center justify-between">
            <div>
              <span className="text-[13px] text-blue-900 font-bold uppercase tracking-wide">
                Bài đang học: {currentCategoryTitle}
              </span>
              <h4 className="text-lg font-semibold text-slate-900 mt-0.5">
                {currentLesson && (
                  <span className="text-slate-900 font-bold mr-1.5">
                    Day {currentLesson.day} -
                  </span>
                )}
                {currentLesson?.title}
              </h4>
            </div>

            <button
                onClick={() => {
                  if (!currentLesson) return;
                  if (needsUpgrade) {
                    onLockedClick();
                  } else if (!isLessonLocked(currentLesson.day, tier)) {
                    onLessonClick(currentLesson.day);
                  }
                }}
                className={`px-4 py-3 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer ${
                  needsUpgrade
                    ? "bg-amber-400 text-slate-900 hover:bg-amber-5600"   // 👈 Chỉnh chữ thành text-slate-900 trên nền vàng cho dễ đọc
                    : "bg-blue-800 text-white hover:bg-blue-700"          // 👈 Màu xanh giữ nguyên chữ trắng
                }`}
              >
                {/* Chỉ hiện icon Vương miện khi ở trạng thái cần nâng cấp, hoặc thích hiện cả hai chỗ thì cứ bỏ ra ngoài điều kiện cũng được nha ní */}
                {needsUpgrade && <Crown className="w-4 h-4 text-slate-900" />}
                <span>{needsUpgrade ? "Nâng cấp để học tiếp" : "Tiếp tục học"}</span>
              </button>
            </div>

          <div className="bg-slate-50 p-6 lg:p-8 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 flex items-center gap-2">
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

          <div className="p-5 rounded-lg bg-blue-50/50 border border-blue-100 text-sm text-slate-700 italic leading-relaxed">
            "{levelInfo.sampleText}"
          </div>

          
        </div>

        {/* ================= CỘT PHẢI: COURSE CONTENT ================= */}
        <div className="lg:col-span-4 bg-slate-50/50 flex flex-col h-full border-t lg:border-t-0 border-slate-200">
          
          {/* 👇 ĐÂY LÀ PHẦN HEADER: Ôm trọn cả chữ, nút và thanh progress bar */}
            <div className="p-5 border-b border-slate-200 bg-white flex flex-col gap-4">
              
              {/* 1. Phần Text và Button */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-lg text-slate-900">Course content</h2>
                  <p className="text-sm font-semibold text-slate-500 mt-0.5">{percent}% hoàn thành</p>
                </div>
                <span className="text-xs font-semibold px-5 py-3 rounded-lg bg-[#3749B8] text-white">
                  {completedCount}/{totalLessons} bài
                </span>
              </div>

              {/* 2. Thanh Process Bar (Nằm gọn bên trong khung bg-white) */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#169C2E] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>

            </div>
            {/* 👆 KẾT THÚC PHẦN HEADER */}

          <div className="divide-y divide-slate-200 overflow-y-auto max-h-[calc(100vh-140px)]">
            {currentCategories.map((category, catIdx) => {
  const isOpen = openSections[catIdx] ?? false;
  const catLessons = category.lessons;
  const catCompletedCount = catLessons.filter((l) => completedIds.has(l.day)).length;
  
  {/* Kiểm tra xem tuần này đã hoàn thành sạch sẽ 100% chưa */}
  const isWeekComplete = catLessons.length > 0 && catCompletedCount === catLessons.length;

  return (
    <div key={catIdx} className="bg-white">
      <button
        onClick={() => toggleSection(catIdx)}
        className={`w-full p-4 flex items-center justify-between transition-colors text-left border-b border-slate-100 cursor-pointer ${
          isWeekComplete ? "bg-slate-100/60" : "bg-slate-50/85 hover:bg-slate-100/80"
        }`}
      >
        <div>
          {/* Chữ Tuần sẽ dịu lại hoặc đổi màu xám nếu hoàn thành */}
          <span className={`text-[11px] font-bold uppercase tracking-wider ${
            isWeekComplete ? "text-slate-400" : "text-blue-600"
          }`}>
            Tuần {catIdx + 1} {isWeekComplete && "✓"}
          </span>
          
          {/* Tiêu đề tuần mờ đi và chuyển sang màu xám cho đồng bộ */}
          <h3 className={`text-base font-bold flex items-center gap-2 mt-0.5 ${
            isWeekComplete ? "text-slate-400" : "text-slate-800"
          }`}>
            <span>{category.title}</span>
          </h3>
          
          <p className={`text-[12px] font-semibold mt-0.5 ${
            isWeekComplete ? "text-emerald-600 font-bold" : "text-slate-500"
          }`}>
            {catCompletedCount}/{catLessons.length} bài {isWeekComplete && "• Đã hoàn thành"}
          </p>
        </div>
        
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-slate-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-400" />
        )}
      </button>

      {/* Danh sách bài học bên trong... */}

                  {/* Danh sách bài học */}
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
                            <div className="flex items-center gap-3.5 min-w-0 pr-3">
                              {/* Hình ảnh chữ nhật ngang giống Coursera */}
                                <div className={`w-22 h-16 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden relative shadow-2xs transition-all ${
                                  isComplete ? "grayscale contrast-75 opacity-50" : ""
                                }`}>
                                  <img
                                    src={lesson.image}
                                    alt={lesson.title}
                                    className="w-full h-full object-cover"
                                  />
                                  {locked && (
                                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center backdrop-grayscale-[0.5]">
                                      <Lock className="w-3.5 h-3.5 text-white" />
                                    </div>
                                  )}
                                </div>

                              {/* Day ở trên, Title ở dưới */}
                                <div className="flex flex-col min-w-0 space-y-0.5">
                                  <span className={`text-[12px] font-bold tracking-wider transition-colors ${
                                    isComplete ? "text-slate-400" : "text-blue-600"
                                  }`}>
                                    Day {lesson.day}
                                  </span>

                                  <span
                                    className={`text-[14px] truncate ${
                                      isSelected
                                        ? "text-blue-900 font-bold"
                                        : isComplete
                                        ? "text-slate-400 line-through"
                                        : "text-slate-700 font-medium"
                                    }`}
                                  >
                                    {lesson.title}
                                  </span>
                                </div>
                            </div>

                            {/* Icon trạng thái hoàn thành ở góc phải thay vì thời gian */}
                            <div className="shrink-0">
                              {isComplete && (
                                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-2xs">
                                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                </div>
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
    </div>
  );
}