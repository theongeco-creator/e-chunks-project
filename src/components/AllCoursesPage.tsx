import React, { useState } from "react";
import { Card } from "@/components/Card";

interface AllCoursesPageProps {
  onBack: () => void;
  onSelectLevel: (level: "A1" | "A2" | "B1") => void;
}

const COURSES_DATA = [
  {
    id: "A1",
    badgeText: "A1 — Beginner",
    title: "Khóa A1 — Căn bản & Phản xạ",
    description: "Chưa có nền tảng, hoặc chỉ biết vài từ lẻ tẻ? Ngay cả chào hỏi, tự giới thiệu cũng phải nghĩ mãi? Bắt đầu từ đây!",
    level: "A1" as const,
    badgeBg: "bg-amber-300 dark:bg-[#62636B] text-slate-800 dark:text-white",
    badgeLabel: "Free",
    imgSrc: "/images/A1.svg",
    meta: [{ label: "Sơ cấp" }, { label: "Phản xạ câu đơn" }],
    ctaLabel: "Bắt đầu học A1",
  },
  {
    id: "A2",
    badgeText: "A2 — Elementary",
    title: "Khóa A2 — Mở rộng & Giao tiếp",
    description: "Nói được về bản thân, gia đình nhưng gặp chủ đề lạ là 'đứng hình'? Mở rộng vốn từ và phản xạ giao tiếp tự nhiên.",
    level: "A2" as const,
    badgeBg: "bg-brand-500 dark:bg-[#62636B] text-white dark:text-white",
    badgeLabel: "- 50%",
    imgSrc: "/images/A2.svg",
    meta: [{ label: "Sơ - Trung cấp" }, { label: "Phản xạ giao tiếp" }],
    ctaLabel: "Bắt đầu học A2",
  },
  {
    id: "B1",
    badgeText: "B1 — Intermediate",
    title: "Khóa B1 — Tự tin & Thành thạo",
    description: "Luyện tập phản xạ nâng cao, tự tin thảo luận các chủ đề phức tạp và diễn đạt ý kiến cá nhân trôi chảy.",
    level: "B1" as const,
    badgeBg: "bg-brand-500 dark:bg-[#62636B] text-white dark:text-white",
    badgeLabel: "- 50%",
    imgSrc: "/images/B1.svg",
    meta: [{ label: "Trung cấp" }, { label: "Phản xạ nâng cao" }],
    ctaLabel: "Bắt đầu học B1",
  },
];

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
          <Card
            key={course.id}
            badgeText={course.badgeText}
            title={course.title}
            description={course.description}
            media={
              <div className="w-full h-full bg-slate-100 dark:bg-[#37383F] flex items-center justify-center relative overflow-hidden group">
                <span className={`absolute top-3 left-3 backdrop-blur-xs font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs border border-emerald-500/20 z-10  dark:border-zinc-700 ${course.badgeBg}`}>
                  {course.badgeLabel}
                </span>
                <div className="w-20 h-20 rounded-full  flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                  <img
                    src={course.imgSrc}
                    alt={course.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            }
            meta={course.meta}
            ctaLabel={course.ctaLabel}
            onClick={() => onSelectLevel(course.level)}
          />
        ))}
      </div>
    </div>
  );
}