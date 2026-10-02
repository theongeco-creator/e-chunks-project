import { useEffect, useState } from "react";
import {   SparklesIcon,   Cog6ToothIcon, } from "@heroicons/react/24/outline";
import { BoltIcon as BoltSolid } from "@heroicons/react/24/solid";
import { Clock } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import {   getLevelProgress,   getStreak, } from "@/utils/progress";
import type { Level } from "@/utils/progress";
import { MembershipBanner } from "@/components/MembershipBanner";
import { stories } from "@/data/stories";
import type { Story, VocabTopic } from "@/data/types";
import { StoryCard } from "@/components/StoryCard";
import { useSavedStories, toggleSavedStory } from "@/utils/savedStories";
import { vocabularyCategories } from "@/data/vocabulary";
import { TopicCard } from "@/components/TopicCard";
import { useSavedTopics, toggleSavedTopic } from "@/utils/savedTopics";
import { COURSES_DATA } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";

interface ProfilePageProps {
  user?: any;
  onLogout?: () => void;
  onUpgradeClick?: () => void;
  onUpdateProfile?: (updatedData: { name: string; email: string; avatar?: string }) => void;
  onSelectLevel?: (level: Level) => void;
  onOpenSettings?: () => void;
  onOpenEditProfile?: () => void;
  onSelectStory?: (story: Story) => void;
  activeCourse?: {
    level: string;
    title: string;
    currentLessonTitle: string;
    progressPercent: number;
    timeLeft: string;
    image?: string;
  };
  onResumeCourse?: () => void;
  onSelectTopic?: (topic: VocabTopic) => void;
}

const TITLE = "text-slate-900 dark:text-white";
const MUTED = "text-slate-500 dark:text-slate-400";

export function ProfilePage({
  user,
  onOpenSettings,
  onUpdateProfile,
  onSelectLevel,
  activeCourse,
  onResumeCourse,
  onSelectStory,   // 👈 thêm
  onSelectTopic
}: ProfilePageProps) {
  const [name, setName] = useState<string>(user?.name || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [avatar, setAvatar] = useState<string>(user?.avatar || "");
  const [activeTab, setActiveTab] = useState<"ca-nhan" | "truyen" | "tu-vung" | "course">("ca-nhan");

  // State chỉnh sửa avatar tại chỗ
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [tempAvatar, setTempAvatar] = useState(user?.avatar || "");

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setAvatar(user?.avatar || "");
    setTempAvatar(user?.avatar || "");
  }, [user]);

  const purchasedCount =
  user?.tier === "premium" ? 2 : user?.tier === "A2" || user?.tier === "B1" ? 1 : 0;
  const streak = getStreak();
  const tier = user?.tier;
  const ownedLevels: Level[] = [
    "A1",
    ...(tier === "A2" || tier === "premium" ? (["A2"] as Level[]) : []),
    ...(tier === "B1" || tier === "premium" ? (["B1"] as Level[]) : []),
  ];
  const myCourses = COURSES_DATA.filter((c) => ownedLevels.includes(c.level));

  const [, setStudyTick] = useState(0);
  useEffect(() => {
  const refresh = () => setStudyTick((t) => t + 1);
  window.addEventListener("study-days-changed", refresh);
  return () => window.removeEventListener("study-days-changed", refresh);
}, []);

  const displayName = name || "Người dùng";

  const filterTabs = [
  { key: "ca-nhan", label: "Cá nhân" },
  { key: "course", label: "Course" },
  { key: "truyen", label: "Truyện" },
  { key: "tu-vung", label: "Từ vựng" },
];

  const handleSaveAvatar = () => {
    setAvatar(tempAvatar);
    onUpdateProfile?.({ name, email, avatar: tempAvatar });
    setIsEditingAvatar(false);
  };

  const savedIds = useSavedStories();
const completedMap: Record<string, boolean> = (() => {
  try {
    return JSON.parse(localStorage.getItem("completed_stories") || "{}");
  } catch {
    return {};
  }
})();
const savedList = stories.filter((s) => savedIds.includes(s.id));
const savedTopicIds = useSavedTopics();
const savedTopicList = vocabularyCategories.filter((t) => savedTopicIds.includes(String(t.id)));
const doneList = stories.filter((s) => completedMap[s.id]);

  return (
    <PageContainer className="py-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* ================= CỘT TRÁI (1/3): THÔNG TIN USER ================= */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-dark-bg rounded-xl border border-gray-200/80 dark:border-zinc-700 shadow-xs p-6 relative">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-3 min-w-0">
                <div className="relative group shrink-0">
                  {avatar ? (
                    <img
                  src={avatar}
                  alt={displayName}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-800 shadow-md"
                />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#513DEB] text-white flex items-center justify-center font-bold text-2xl shadow-md ring-4 ring-slate-100 dark:ring-slate-800">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                  )}

                  {/* Nút bấm thay đổi avatar khi hover */}
                  <button
                    onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                    className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-[10px] font-bold cursor-pointer"
                  >
                    Đổi ảnh
                  </button>
                </div>

                <div className="flex flex-col items-start min-w-0 pt-1">
                  <h1 className={`text-lg font-bold tracking-tight truncate w-full ${TITLE}`}>
                    {displayName}
                  </h1>
                  <p className={`text-sm font-medium truncate w-full ${MUTED}`}>
                    {email || "Chưa cập nhật email"}
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenSettings}
                className="p-2 rounded-xl bg-slate-100 dark:bg-[#37383F] text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-[#37383F] transition cursor-pointer shrink-0 -mt-1 -mr-1"
                title="Cài đặt"
              >
                <Cog6ToothIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Form nhập link đổi avatar trực tiếp */}
            {isEditingAvatar && (
              <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-[#37383F] space-y-2 border border-slate-200 dark:border-zinc-700">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Dán link ảnh đại diện mới (URL):</p>
                <input
                  type="text"
                  value={tempAvatar}
                  onChange={(e) => setTempAvatar(e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-dark-bg text-slate-900 dark:text-white"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setIsEditingAvatar(false)}
                    className="px-3 py-1 text-xs font-semibold text-slate-500 hover:text-slate-400 cursor-pointer"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleSaveAvatar}
                    className="px-3 py-1 text-xs font-bold bg-[#513DEB] text-white rounded-lg hover:bg-[#4230c9] cursor-pointer"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            )}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center text-center gap-1 py-3 rounded-xl bg-indigo-50/50 dark:bg-[#37383F]">
                <div className="flex items-center gap-1.5">
                  <BoltSolid className="w-4 h-4 text-amber-500" />
                  <span className={`text-lg font-extrabold ${TITLE}`}>{streak}</span>
                </div>
                <p className="text-[12px] text-slate-400 font-semibold">Chuỗi học tập</p>
              </div>

              <div className="flex flex-col items-center text-center gap-1 py-3 rounded-xl bg-indigo-50/50 dark:bg-[#37383F]">
                <div className="flex items-center gap-1.5">
                  <SparklesIcon className="w-4 h-4 text-[#513DEB]" />
                  <span className={`text-lg font-extrabold ${TITLE}`}>{purchasedCount}</span>
                </div>
                <p className="text-[12px] text-slate-400 font-semibold">Khóa đã mua</p>
              </div>
            </div>

            <div className="mt-5">
              <MembershipBanner
                tier={user?.tier}
                onAction={() => {
                  if (user?.tier === "free" || !user?.tier) {
                  onOpenSettings?.(); // 👈 Thêm dấu ? vào đây
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
          <div className="bg-white dark:bg-dark-bg rounded-xl border border-gray-200/80 dark:border-zinc-700 shadow-xs p-6 space-y-6">
            
            {/* Thanh chuyển tab dạng gạch chân tối giản */}
            <div className="flex items-center gap-6 border-b border-slate-200 dark:border-zinc-700 overflow-x-auto">
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
                  {activeCourse ? (
                    <section className="space-y-4">
                      <h2 className="text-base font-bold text-slate-900 dark:text-white">
                        Tiếp tục học
                      </h2>

                      <div className="relative">
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[minmax(0,42%)_1fr] gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50/50 dark:bg-[#191A20] border border-slate-200 dark:border-zinc-700">
                          
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
              <section className="space-y-3">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Truyện đã lưu</h2>
                {savedList.length === 0 ? (
                  <p className={`text-xs ${MUTED}`}>
                    Bạn chưa lưu truyện nào. Bấm biểu tượng bookmark trên mỗi truyện để lưu.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedList.map((story) => (
                      <StoryCard
                        key={story.id}
                        story={story}
                        isSaved
                        isCompleted={!!completedMap[story.id]}
                        onSelect={(s) => onSelectStory?.(s)}
                        onToggleSave={toggleSavedStory}
                      />
                    ))}
                  </div>
                )}
              </section>
            )}

              {activeTab === "course" && (
              <section className="space-y-3">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Khóa học của tôi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myCourses.map((course) => {
                    const { done, total } = getLevelProgress(course.level);
                    return (
                      <CourseCard
                        key={course.id}
                        course={course}
                        onSelect={(lv) => onSelectLevel?.(lv)}
                        badgeLabel={course.level === "A1" ? "Free" : "Đã sở hữu"}
                        ctaLabel="Tiếp tục học"
                        extraMeta={`${done}/${total} bài`}
                      />
                    );
                  })}
                </div>
                {ownedLevels.length === 1 && (
                  <p className={`text-xs ${MUTED}`}>
                    Bạn chưa sở hữu khóa trả phí nào. Nâng cấp để mở A2 và B1.
                  </p>
                )}
              </section>
            )}

              {activeTab === "tu-vung" && (
              <section className="space-y-3">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Chủ đề đã lưu</h2>
                {savedTopicList.length === 0 ? (
                  <p className={`text-xs ${MUTED}`}>
                    Bạn chưa lưu chủ đề nào. Bấm biểu tượng bookmark trên mỗi chủ đề để lưu.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedTopicList.map((topic) => (
                      <TopicCard
                        key={topic.id}
                        topic={topic}
                        isSaved
                        onSelect={(t) => onSelectTopic?.(t)}
                        onToggleSave={toggleSavedTopic}
                      />
                    ))}
                  </div>
                )}
              </section>
            )}
            </div>

          </div>
        </div>

      </div>
    </PageContainer>
  );
}