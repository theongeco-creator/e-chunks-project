import type { Lesson } from "@/data/lessonData";

interface ListeningTabProps {
  lesson: Lesson;
}

export function ListeningTab({ lesson }: ListeningTabProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-slate-900">🎧 Listening Practice</h2>
        <p className="text-sm text-slate-500 mt-1">Luyện tập nghe hiểu theo bài học: {lesson.title}</p>
      </div>
      {/* Nội dung luyện nghe hiện tại của ní giữ nguyên ở đây */}
    </div>
  );
}