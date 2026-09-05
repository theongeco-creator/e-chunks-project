import { Sparkles, ArrowRightLeft } from "lucide-react";
import type { Lesson } from "@/data/lessonData";

export function ExtraVocabTab({ lesson }: { lesson: Lesson }) {
  if (!lesson.extraVocab || lesson.extraVocab.length === 0) {
    return (
      <div 
        className="text-center py-12 rounded-2xl border shadow-sm p-6 transition-colors duration-300"
        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
      >
        <p className="font-medium opacity-80" style={{ color: 'var(--text-color)' }}>Bài học này chưa có từ vựng mở rộng.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="text-sm font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
          Mở rộng vốn từ vựng và các cụm từ đồng nghĩa có thể thay thế linh hoạt theo chủ đề.
        </p>
      </div>

      {/* Danh sách từ vựng mở rộng */}
      <div className="space-y-4">
        {lesson.extraVocab.map((item, idx) => (
          <div 
            key={idx} 
            className="rounded-2xl shadow-sm p-6 border transition-colors duration-300"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-base font-bold" style={{ color: 'var(--text-color)' }}>{item.term}</h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-full">
                {item.meaning}
              </span>
            </div>

            <p className="text-sm italic mb-4 pl-9 opacity-90" style={{ color: 'var(--text-color)' }}>
              💡 <span className="font-medium" style={{ color: 'var(--text-color)' }}>{item.example}</span>
            </p>

            {/* 🚀 Hiển thị phần cụm từ có thể thay thế ở dưới */}
            {item.alternatives && item.alternatives.length > 0 && (
              <div className="mt-4 pt-3 border-t pl-9" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  Có thể thay thế bằng các cụm:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.alternatives.map((alt, altIdx) => (
                    <span
                      key={altIdx}
                      className="text-xs font-medium px-3 py-1 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800 text-blue-800 dark:text-blue-200 rounded-xl"
                    >
                      {alt}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}