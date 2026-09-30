import { useEffect, useState } from "react";
import {
  SparklesIcon,
  BoltIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { BoltIcon as BoltSolid } from "@heroicons/react/24/solid";
import { Clock } from "lucide-react";
import { Button } from "@/components/Button";
import { PageContainer } from "@/components/PageContainer";
import {
  LEVELS,
  getLevelProgress,
  getStreak,
} from "@/utils/progress";
import type { Level } from "@/utils/progress";
import { MembershipBanner } from "@/components/MembershipBanner";

interface ProfilePageProps {
  user?: any;
  onLogout?: () => void;
  onUpgradeClick?: () => void;
  onUpdateProfile?: (updatedData: { name: string; email: string }) => void;
  onSelectLevel?: (level: Level) => void;
  onOpenSettings?: () => void;
  onOpenEditProfile?: () => void;

  activeCourse?: {
    level: string;
    title: string;
    currentLessonTitle: string;
    progressPercent: number;
    timeLeft: string;
    image?: string;
  };
  onResumeCourse?: () => void;
}

const CARD =
  "bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/80 dark:border-slate-700 shadow-xs";
const TITLE = "text-slate-900 dark:text-white";
const MUTED = "text-slate-500 dark:text-slate-400";

export function ProfilePage({
  user,
  onLogout,
  onUpgradeClick,
  onUpdateProfile,
  onSelectLevel,
  onOpenSettings,
  onOpenEditProfile,
  activeCourse,
  onResumeCourse,
}: ProfilePageProps) {
  const [name, setName] = useState<string>(user?.name || "");
  const [activeTab, setActiveTab] = useState<"ca-nhan" | "truyen" | "course">("ca-nhan");

  useEffect(() => {
    setName(user?.name || "");
  }, [user?.name]);

  const levelStats = {
    A1: getLevelProgress("A1"),
    A2: getLevelProgress("A2"),
    B1: getLevelProgress("B1"),
  };
  const streak = getStreak();
  const displayName = name || "Người dùng";

  const filterTabs = [
    { key: "ca-nhan", label: "Cá nhân" },
    { key: "course", label: "Course" },
    { key: "truyen", label: "Truyện" },
  ];

  return (
    <PageContainer className="py-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* ================= CỘT TRÁI (1/3): THÔNG TIN USER ================= */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-[#191A22] rounded-2xl border border-gray-200/80 dark:border-zinc-700 shadow-xs p-6 relative">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-3 min-w-0">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={displayName}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-800 shadow-md shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#513DEB] text-white flex items-center justify-center font-bold text-2xl shadow-md ring-4 ring-slate-100 dark:ring-slate-800 shrink-0">
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                )}

                <div className="flex flex-col items-start min-w-0 pt-1">
                  <h1 className={`text-lg font-bold tracking-tight truncate w-full ${TITLE}`}>
                    {displayName}
                  </h1>
                  <p className={`text-sm font-medium truncate w-full ${MUTED}`}>
                    {user?.email || "Chưa cập nhật email"}
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenSettings}
                className="p-2 rounded-xl bg-[#37383F] text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-[#37383F] transition cursor-pointer shrink-0 -mt-1 -mr-1"
                title="Cài đặt"
              >
                <Cog6ToothIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center text-center gap-1 py-3 rounded-xl bg-orange-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-1.5">
                  <BoltSolid className="w-4 h-4 text-amber-500" />
                  <span className={`text-lg font-extrabold ${TITLE}`}>{streak}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-semibold">Chuỗi học tập</p>
              </div>

              <div className="flex flex-col items-center text-center gap-1 py-3 rounded-xl bg-orange-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-1.5">
                  <SparklesIcon className="w-4 h-4 text-[#513DEB]" />
                  <span className={`text-lg font-extrabold ${TITLE}`}>2</span>
                </div>
                <p className="text-[11px] text-slate-400 font-semibold">Khóa đã mua</p>
              </div>
            </div>

            <div className="mt-5">
              <MembershipBanner
                tier={user?.tier}
                onAction={() => {
                  if (user?.tier === "free" || !user?.tier) {
                    onOpenSettings();
                  } else {
                    console.log("Xem chi tiết khóa học");
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* ================= CỘT PHẢI (2/3): KHUNG TỔNG HỢP TAB VÀ NỘI DUNG ================= */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-[#191A22] rounded-2xl border border-gray-200/80 dark:border-zinc-700 shadow-xs p-6 space-y-6">
            
            {/* Thanh chuyển tab dạng gạch chân tối giản */}
            <div className="flex items-center gap-6 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`pb-3 text-xs sm:text-sm font-semibold transition cursor-pointer relative whitespace-nowrap ${
                      isActive
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                    {/* Đường gạch chân chạy ngang khi active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 dark:bg-white rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Nội dung tương ứng của từng tab */}
            <div className="space-y-6">
              {activeTab === "ca-nhan" && (
                <div className="space-y-6">
                  {/* 👉 Chỉ cần có activeCourse là hiển thị, không kén chọn progress nữa để tránh bị mất hình */}
              {activeCourse ? (
                <section className="space-y-4">
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Tiếp tục học
                  </h2>

                  <div className="relative">
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[minmax(0,42%)_1fr] gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 dark:bg-dark-bg border border-slate-200 dark:border-zinc-700">
                      
                      <div className="rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden aspect-[4/3] sm:aspect-auto sm:min-h-[160px] flex items-center justify-center">
                        {activeCourse.image ? (
                          <img
                            src={activeCourse.image}
                            alt={activeCourse.currentLessonTitle}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={`/images/${activeCourse.level}.svg`}
                            alt={activeCourse.title}
                            className="w-20 h-20 object-contain"
                          />
                        )}
                      </div>

                      <div className="flex flex-col justify-center gap-3 min-w-0">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                            Khóa học
                          </p>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug truncate">
                            {activeCourse.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed truncate">
                            Bài hiện tại: {activeCourse.currentLessonTitle}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#513DEB] transition-all duration-500"
                              style={{ width: `${Math.max(activeCourse.progressPercent || 0, 3)}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tabular-nums">
                            {activeCourse.progressPercent || 0}%
                          </span>
                          <span className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            <Clock className="w-3.5 h-3.5" />
                            {activeCourse.timeLeft || "Đang cập nhật"}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            if (onResumeCourse) {
                              onResumeCourse();
                            } else {
                              onSelectLevel?.(activeCourse.level as Level);
                            }
                          }}
                          className="w-full py-2.5 rounded-xl bg-[#513DEB] hover:bg-[#4230c9] text-white font-bold text-xs transition cursor-pointer active:scale-[0.99]"
                        >
                          Tiếp tục khóa học
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}
                </div>
              )}

              {activeTab === "truyen" && (
                <div className="py-12 text-center space-y-2">
                  <h3 className={`text-base font-bold ${TITLE}`}>Truyện đã lưu / Đã đọc</h3>
                  <p className={`text-xs ${MUTED}`}>Khu vực hiển thị danh sách các câu chuyện bạn đã đọc hoặc đánh dấu.</p>
                </div>
              )}

              {activeTab === "course" && (
                <div className="py-12 text-center space-y-2">
                  <h3 className={`text-base font-bold ${TITLE}`}>Khóa học của tôi</h3>
                  <p className={`text-xs ${MUTED}`}>Khu vực hiển thị các khóa học bạn đang tham gia hoặc sở hữu.</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </PageContainer>
  );
}