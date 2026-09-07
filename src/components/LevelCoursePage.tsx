import { CourseList } from "@/components/CourseList";
import type { UserTier } from "@/auth/types";

interface LevelCoursePageProps {
  selectedTrack: "A2" | "B1";
  tier: UserTier;
  onBack: () => void;
  onLessonClick: (day: number) => void;
  onLockedClick: () => void;
}

export function LevelCoursePage({
  selectedTrack,
  tier,
  onBack,
  onLessonClick,
  onLockedClick,
}: LevelCoursePageProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-xs hover:text-blue-700 bg-blue-50 dark:bg-blue-950/60 px-3 py-2 rounded-md transition"
        >
          ← Quay lại trang chủ
        </button>
        <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-600 text-white">
          Lộ trình: {selectedTrack}
        </span>
      </div>

      <div>
        <h2
          className="text-lg font-bold tracking-tight mb-4"
          style={{ color: "var(--text-color)" }}
        >
          Danh sách bài học cấp độ {selectedTrack}
        </h2>
        <CourseList
          tier={tier}
          activeLevel={selectedTrack}
          onLessonClick={onLessonClick}
          onLockedClick={onLockedClick}
        />
      </div>
    </div>
  );
}