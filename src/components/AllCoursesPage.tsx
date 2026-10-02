import React, { useState } from "react";
import { Card } from "@/components/Card";
  import { CourseCard } from "@/components/CourseCard";
  import { COURSES_DATA } from "@/data/courses";

interface AllCoursesPageProps {
  onBack: () => void;
  onSelectLevel: (level: "A1" | "A2" | "B1") => void;
}


const FILTER_OPTIONS = ["All", "A1", "A2", "B1"] as const;

export function AllCoursesPage({ onSelectLevel }: AllCoursesPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredCourses = COURSES_DATA.filter(
    (course) => selectedFilter === "All" || course.level === selectedFilter
  );

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* HEADER PAGE */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tất cả khóa học
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Chọn lộ trình phù hợp với trình độ hiện tại của bạn để bắt đầu luyện tập.
        </p>
      </div>

      {/* THANH BỘ LỌC */}
      <div className="pb-5 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                selectedFilter === option
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-[#37383F] dark:text-white dark:border-zinc-500 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-dark-bg dark:text-slate-300 dark:border-zinc-700 dark:hover:bg-[#37383F]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* DANH SÁCH KHÓA HỌC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredCourses.map((course) => (
    <CourseCard key={course.id} course={course} onSelect={onSelectLevel} />
  ))}
      </div>
    </div>
  );
}