import { useEffect, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import {
  SparklesIcon,
  BookOpenIcon,
  AcademicCapIcon,
  TrophyIcon,
  BoltIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { BoltIcon as BoltSolid } from "@heroicons/react/24/solid";
import { Button } from "@/components/Button";
import { PageContainer } from "@/components/PageContainer";
import {
  LEVELS,
  getLevelProgress,
  getCompletedStoriesCount,
  getStreak,
} from "@/utils/progress";
import type { Level } from "@/utils/progress";
import { createPortal } from "react-dom";

interface ProfilePageProps {
  user?: any;
  onLogout?: () => void;
  onUpgradeClick?: () => void;
  onUpdateProfile?: (updatedData: { name: string; email: string }) => void;
  onSelectLevel?: (level: Level) => void;
  onOpenSettings?: () => void;
  onOpenEditProfile?: () => void;
}

// ---------- Style dùng chung ----------
const CARD =
  "bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/80 dark:border-slate-700 shadow-xs";
const TITLE = "text-slate-900 dark:text-white";
const MUTED = "text-slate-500 dark:text-slate-400";

// ---------- Gói tài khoản ----------
function planLabel(tier?: string) {
  if (tier === "premium") return "Gói Premium";
  if (tier === "A2") return "Gói A2";
  if (tier === "B1") return "Gói B1";
  return "Tài khoản Free";
}

// ---------- Huy hiệu ----------
type Achievement = {
  id: string;
  title: string;
  desc: string;
  current: number;
  target: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function buildAchievements(
  totalLessons: number,
  levelDone: Record<Level, { done: number; total: number }>,
  stories: number,
  streak: number
): Achievement[] {
  const list: Achievement[] = [];

  [
    { n: 1, title: "Khởi động", desc: "Hoàn thành 1 bài học" },
    { n: 10, title: "Chăm học", desc: "Hoàn thành 10 bài học" },
    { n: 30, title: "Bền bỉ", desc: "Hoàn thành 30 bài học" },
  ].forEach((m) =>
    list.push({
      id: `lessons-${m.n}`,
      title: m.title,
      desc: m.desc,
      current: totalLessons,
      target: m.n,
      icon: BookOpenIcon,
    })
  );

  LEVELS.forEach((level) =>
    list.push({
      id: `level-${level}`,
      title: `Chinh phục ${level}`,
      desc: `Hoàn thành toàn bộ khóa ${level}`,
      current: levelDone[level].done,
      target: Math.max(levelDone[level].total, 1),
      icon: AcademicCapIcon,
    })
  );

  [
    { n: 1, title: "Người kể chuyện", desc: "Đọc xong 1 câu chuyện" },
    { n: 5, title: "Mọt truyện", desc: "Đọc xong 5 câu chuyện" },
  ].forEach((m) =>
    list.push({
      id: `stories-${m.n}`,
      title: m.title,
      desc: m.desc,
      current: stories,
      target: m.n,
      icon: TrophyIcon,
    })
  );

  [
    { n: 3, title: "Vào nhịp", desc: "Học 3 ngày liên tiếp" },
    { n: 7, title: "Một tuần lửa", desc: "Học 7 ngày liên tiếp" },
  ].forEach((m) =>
    list.push({
      id: `streak-${m.n}`,
      title: m.title,
      desc: m.desc,
      current: streak,
      target: m.n,
      icon: BoltIcon,
    })
  );

  return list;
}

const HEX = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";

// ---------- Trang Profile ----------
export function ProfilePage({
  user,
  onLogout,
  onUpgradeClick,
  onUpdateProfile,
  onSelectLevel,
  onOpenSettings,
  onOpenEditProfile,
}: ProfilePageProps) {
  const [name, setName] = useState<string>(user?.name || "");
  const [isAchievementsModalOpen, setIsAchievementsModalOpen] = useState(false); // 👈 ĐÃ THÊM STATE Ở ĐÂY

  useEffect(() => {
    setName(user?.name || "");
  }, [user?.name]);

  // ----- Dữ liệu thật từ localStorage -----
  const levelStats = {
    A1: getLevelProgress("A1"),
    A2: getLevelProgress("A2"),
    B1: getLevelProgress("B1"),
  };
  const totalLessons = LEVELS.reduce((sum, l) => sum + levelStats[l].done, 0);
  const stories = getCompletedStoriesCount();
  const streak = getStreak();

  const achievements = buildAchievements(totalLessons, levelStats, stories, streak);
  const displayName = name || "Người dùng";

  const unlockedAchievements = achievements.filter((a) => a.current >= a.target);
  const displayAchievements = unlockedAchievements.length > 0 ? unlockedAchievements : achievements.slice(0, 3);

  useEffect(() => {
  if (!isAchievementsModalOpen) return;
  const prev = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = prev;
  };
}, [isAchievementsModalOpen]);

  return (
    <PageContainer className="py-6 space-y-6">

      

      {/* 2. CHIA LÀM 2 CỘT THEO TỈ LỆ 2/3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* CỘT TRÁI (2 PHẦN) */}
        <div className="lg:col-span-2 space-y-6">

          <div className="space-y-4">
        {/* Avatar */}
        <div className="relative shrink-0 w-fit">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={displayName}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-100 dark:ring-slate-800 shadow-sm"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-[#513DEB] text-white flex items-center justify-center font-bold text-3xl shadow-sm">
              {displayName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="space-y-2">
          {/* Hàng: Tên + nút, cùng 1 đường ngang */}
          <div className="flex items-center justify-between gap-4">
            <h1 className={`text-4xl font-bold tracking-tight truncate min-w-0 ${TITLE}`}>
              {displayName}
            </h1>

            <div className="flex items-center gap-2.5 shrink-0">
              <Button
                variant="dark"
                size="sm"
                icon={<Cog6ToothIcon className="w-4 h-4" />}
                onClick={onOpenSettings}
              >
                Cài đặt
              </Button>
            </div>
          </div>

          {/* Badge gói */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              
              {planLabel(user?.tier)}
            </span>
          </div>
        </div>
      </div>
      {/* LINE MỎNG NGĂN CÁCH */}
      <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800 my-2" />
          
          {/* Tiến độ học tập */}
          <div className={`${CARD} p-6 space-y-4`}>
            <h2 className={`text-base font-bold ${TITLE}`}>Tiến độ học tập</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LEVELS.map((level) => {
                const s = levelStats[level];
                return (
                  <button
                    key={level}
                    onClick={() => onSelectLevel?.(level)}
                    className="text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[#513DEB] transition cursor-pointer space-y-2.5 bg-slate-50/50 dark:bg-slate-800/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${TITLE}`}>Khóa {level}</span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tabular-nums">
                        {s.percent}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#513DEB] transition-all duration-500"
                        style={{ width: `${s.percent}%` }}
                      />
                    </div>
                    <p className={`text-[11px] ${MUTED}`}>
                      {s.done}/{s.total} bài học
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Phần lưu lại */}
          <div className={`${CARD} p-6 space-y-3`}>
            <h2 className={`text-base font-bold ${TITLE}`}>Phần lưu lại</h2>
            <div className="p-8 text-center border border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
              <p className={`text-xs ${MUTED}`}>Chưa có từ vựng hoặc bài học nào được lưu lại.</p>
            </div>
          </div>

        </div>

        {/* CỘT PHẢI (1 PHẦN) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Streak (Chuỗi học tập) */}
          <div className={`${CARD} p-5 flex items-center gap-4`}>
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center shrink-0">
              <BoltSolid className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">Chuỗi học tập</p>
              <p className={`text-xl font-extrabold ${TITLE}`}>{streak} ngày liên tiếp</p>
            </div>
          </div>

          {/* Huy hiệu */}
          <div className={`${CARD} p-6 space-y-4`}>
            <div className="flex items-center justify-between">
              <h2 className={`text-base font-bold ${TITLE}`}>Achievements</h2>
              <button
                onClick={() => setIsAchievementsModalOpen(true)}
                className="text-xs font-semibold text-slate-500 hover:text-[#513DEB] transition cursor-pointer"
              >
                View all
              </button>
            </div>

            <div className="flex items-center gap-3 flex-wrap pt-2">
              {displayAchievements.slice(0, 4).map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.id}
                    className="w-20 h-20 shrink-0 rounded-xl flex items-center justify-center bg-indigo-50 text-[#513DEB] dark:bg-indigo-950 dark:text-indigo-300 shadow-2xs"
                    style={{ clipPath: HEX }}
                    title={`${a.title}: ${a.desc}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                );
              })}
              {displayAchievements.length === 0 && (
                <p className={`text-xs ${MUTED}`}>Chưa có huy hiệu nào được mở khóa.</p>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* POPUP MODAL TẤT CẢ HUY HIỆU (GIAO DIỆN VÒNG TRÒN, CHIA 3 NHÓM 3-3-4) */}
      {isAchievementsModalOpen &&
      createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full max-h-full flex flex-col shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className={`text-lg font-bold ${TITLE}`}>Tất cả huy hiệu</h3>
              <button
                onClick={() => setIsAchievementsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold text-lg cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Body List Huy hiệu chia theo 3 nhóm: 3 - 3 - 4 */}
            <div className="p-6 overflow-y-auto space-y-6">
              {(() => {
                // Đảm bảo đủ danh sách để cắt nhóm 3 - 3 - 4
                const groups = [
                  { title: "Chặng khởi động", items: achievements.slice(0, 3) },
                  { title: "Chinh phục cấp độ", items: achievements.slice(3, 6) },
                  { title: "Thử thách bền bỉ", items: achievements.slice(6, 10) },
                ];

                return groups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {group.title}
                    </h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      {group.items.map((a) => {
                        const Icon = a.icon;
                        const isUnlocked = a.current >= a.target;

                        return (
                          <div
                            key={a.id}
                            className={`flex flex-col items-center text-center space-y-2 p-2 rounded-xl transition ${
                              isUnlocked ? "opacity-100" : "opacity-40 grayscale"
                            }`}
                            title={`${a.title}: ${a.desc} (${a.current}/${a.target})`}
                          >
                            {/* Vòng tròn huy hiệu */}
                            <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-indigo-50 dark:bg-indigo-950 text-[#513DEB] dark:text-indigo-300 ring-4 ring-indigo-100/50 dark:ring-indigo-900/30 shadow-xs">
                              <Icon className="w-7 h-7" />
                            </div>

                            {/* Tiêu đề ngắn & Tiến độ */}
                            <div className="space-y-1">
                              <p className={`text-sm font-bold truncate max-w-[120px] ${TITLE}`}>
                                {a.title}
                              </p>
                              <p className="text-[12px] text-slate-500 font-bold dark:text-slate-400 tabular-nums">
                                {a.current}/{a.target}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Footer Modal */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsAchievementsModalOpen(false)}
              >
                Đóng
              </Button>
            </div>
          </div>
        </div>,
    document.body
      )}
    </PageContainer>
  );
}