import { Card } from "@/components/Card";
import { COURSES_DATA } from "@/data/courses";

type Course = (typeof COURSES_DATA)[number];

interface CourseCardProps {
  course: Course;
  onSelect: (level: Course["level"]) => void;
  badgeLabel?: string; // ghi đè nhãn ở góc ("Free", "- 50%")
  ctaLabel?: string;   // ghi đè chữ nút
  extraMeta?: string;  // thêm một mục nhỏ, ví dụ "3/30 bài"
}

export function CourseCard({ course, onSelect, badgeLabel, ctaLabel, extraMeta }: CourseCardProps) {
  return (
    <Card
      badgeText={course.badgeText}
      title={course.title}
      description={course.description}
      media={
        <div className="w-full h-full bg-slate-100 dark:bg-[#37383F] flex items-center justify-center relative overflow-hidden group">
          <span className={`absolute top-3 left-3 backdrop-blur-xs font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs border border-emerald-500/20 z-10 dark:border-zinc-700 ${course.badgeBg}`}>
            {badgeLabel ?? course.badgeLabel}
          </span>
          <div className="w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
            <img src={course.imgSrc} alt={course.title} className="w-20 h-20 object-contain" />
          </div>
        </div>
      }
      meta={extraMeta ? [...course.meta, { label: extraMeta }] : course.meta}
      ctaLabel={ctaLabel ?? course.ctaLabel}
      onClick={() => onSelect(course.level)}
    />
  );
}