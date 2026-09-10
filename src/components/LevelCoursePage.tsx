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
    <div className="space-y-4">
      {/* Không cần nút quay lại thừa thãi ở đây nữa vì bên trong CourseList đã có Breadcrumb xịn sò rồi */}
      <div>
        <CourseList
          tier={tier}
          activeLevel={selectedTrack}
          onLessonClick={onLessonClick}
          onLockedClick={onLockedClick}
          onBackToHome={onBack} // Truyền hàm quay về trang chủ vào đây để breadcrumb hoạt động
        />
      </div>
    </div>
  );
}