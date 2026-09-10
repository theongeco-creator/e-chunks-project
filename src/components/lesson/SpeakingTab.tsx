import type { Lesson } from "@/data/lessonData";

interface SpeakingTabProps {
  lesson: Lesson;
}

// Nhớ là phải có chữ export ở đây nha ní
export function SpeakingTab({ lesson }: SpeakingTabProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-slate-900">🎤 Speaking Practice</h2>
        <p className="text-sm text-slate-500 mt-1">Thực hành phát âm và luyện nói theo bài học: {lesson.title}</p>
      </div>

      <div className="p-6 bg-blue-50/50 border border-blue-200 rounded-xl space-y-4">
        <h3 className="font-bold text-blue-900 text-base">Nhiệm vụ luyện nói</h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          Hãy đọc to các câu hội thoại dưới đây, chú ý ngữ điệu và trọng âm của từ.
        </p>
      </div>
    </div>
  );
}