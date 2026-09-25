import React, { useState } from "react";
import {
  SparklesIcon,
  BookOpenIcon,
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/Card";

interface AllCoursesPageProps {
  onBack: () => void;
  onSelectLevel: (level: "A1" | "A2" | "B1") => void;
}

export function AllCoursesPage({ onSelectLevel }: AllCoursesPageProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "A1", "A2", "B1"];

  // Danh sách dữ liệu các khóa học
  const coursesData = [
    {
      id: "A1",
      badgeText: "A1 — Beginner",
      title: "Khóa A1 — Căn bản & Phản xạ",
      description:
        "Chưa có nền tảng, hoặc chỉ biết vài từ lẻ tẻ? Ngay cả chào hỏi, tự giới thiệu cũng phải nghĩ mãi? Bắt đầu từ đây!",
      icon: (
        <div className="w-full h-full bg-slate-100 dark:from-rose-950/40 dark:to-slate-900 flex items-center justify-center relative overflow-hidden group">
                  {/* 🌟 THÊM BADGE FREE VÀO ĐÂY */}
                    <span className="absolute top-3 left-3 bg-amber-300 dark:bg-slate-800/90 backdrop-blur-xs text-state-800 dark:text-emerald-400 font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs border state-emerald-500/20 z-10">
                      Free
                    </span>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                    {/* Thay Sparkles bằng img */}
                    <img 
                      src="/images/A1.svg" 
                      alt="Icon" 
                      className="w-20 h-20 object-contain" 
                    />
                  </div>
                </div>
              ),
              meta: [{ label: "Sơ cấp" }, { label: "Phản xạ câu đơn" }],
              ctaLabel: "Bắt đầu học A1",
              level: "A1",
            },
            {
              id: "A2",
              badgeText: "A2 — Elementary",
              title: "Khóa A2 — Mở rộng & Giao tiếp",
              description:
                "Nói được về bản thân, gia đình nhưng gặp chủ đề lạ là 'đứng hình'? Mở rộng vốn từ và phản xạ giao tiếp tự nhiên.",
              icon: (
        <div className="w-full h-full bg-slate-100 dark:from-rose-950/40 dark:to-slate-900 flex items-center justify-center relative overflow-hidden group">
                  {/* 🌟 THÊM BADGE FREE VÀO ĐÂY */}
                    <span className="absolute top-3 left-3 bg-brand-500 dark:bg-slate-800/90 backdrop-blur-xs text-white dark:text-emerald-400 font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs border state-emerald-500/20 z-10">
                      - 50%
                    </span>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                    {/* Thay Sparkles bằng img */}
                    <img 
                      src="/images/A2.svg" 
                      alt="Icon" 
                      className="w-20 h-20 object-contain" 
                    />
                  </div>
                </div>
      ),
      meta: [{ label: "Sơ - Trung cấp" }, { label: "Phản xạ giao tiếp" }],
      ctaLabel: "Bắt đầu học A2",
      level: "A2",
    },
    {
      id: "B1",
      badgeText: "B1 — Intermediate",
      title: "Khóa B1 — Tự tin & Thành thạo",
      description:
        "Luyện tập phản xạ nâng cao, tự tin thảo luận các chủ đề phức tạp và diễn đạt ý kiến cá nhân trôi chảy.",
      icon: (
        <div className="w-full h-full bg-slate-100 dark:from-rose-950/40 dark:to-slate-900 flex items-center justify-center relative overflow-hidden group">
          {/* 🌟 THÊM BADGE FREE VÀO ĐÂY */}
                    <span className="absolute top-3 left-3 bg-brand-500 dark:bg-slate-800/90 backdrop-blur-xs text-white dark:text-emerald-400 font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs border state-emerald-500/20 z-10">
                      - 50%
                    </span>
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
          {/* Thay Sparkles bằng img */}
          <img 
            src="/images/B1.svg" 
            alt="Icon" 
            className="w-30 h-30 object-contain" 
            />
          </div>
        </div>
      ),
      meta: [{ label: "Trung cấp" }, { label: "Phản xạ nâng cao" }],
      ctaLabel: "Bắt đầu học B1",
      level: "B1",
    },
  ];

  // Logic lọc theo Level đã chọn
  const filteredCourses = coursesData.filter((course) => {
    if (selectedFilter === "All") return true;
    return course.level === selectedFilter;
  });

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

      {/* THANH BỘ LỌC + ĐƯỜNG LINE PHÂN CÁCH (BORDER-B) */}
      <div className="pb-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* BÊN TRÁI: CÁC NÚT BỘ LỌC LEVEL */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                selectedFilter === option
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* BÊN PHẢI: NÚT DROPDOWN VÀ BỘ LỌC phụ */}
        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-sm">
            <span>Dành cho bạn</span>
            <ChevronDownIcon className="w-3.5 h-3.5 text-slate-500" />
          </button>

          <button className="flex items-center gap-1.5 px-3 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-sm">
            <AdjustmentsHorizontalIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>Bộ lọc</span>
          </button>
        </div>
      </div>

      {/* DANH SÁCH KHÓA HỌC ĐÃ LỌC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            badgeText={course.badgeText}
            title={course.title}
            description={course.description}
            media={course.icon}
            meta={course.meta}
            ctaLabel={course.ctaLabel}
            onClick={() => onSelectLevel(course.level as "A1" | "A2" | "B1")}
          />
        ))}
      </div>
    </div>
  );
}