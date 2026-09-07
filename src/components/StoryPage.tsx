import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import type { Story } from "../data/types";

interface StoryPageProps {
  story: Story;
  onBack: () => void;
}

export function StoryPage({ story, onBack }: StoryPageProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-slate-500 hover:text-slate-800 transition p-1 -ml-1 cursor-pointer"
          title="Quay lại"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-[12px] font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900">
          {story.level}
        </span>
      </div>

      <h1 className="text-2xl font-bold text-slate-900">{story.title}</h1>

      <div
        className="w-full h-64 rounded-2xl bg-cover bg-center shadow-sm"
        style={{ backgroundImage: `url('${story.image}')` }}
      ></div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
        <p className="text-base leading-relaxed text-slate-800">{story.paragraph}</p>

        <button
          onClick={() => setShowTranslation((v) => !v)}
          className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer"
        >
          {showTranslation ? "Ẩn bản dịch" : "Xem bản dịch tiếng Việt"}
        </button>

        {showTranslation && (
          <p className="text-base leading-relaxed text-slate-500 italic border-t border-slate-100 pt-4">
            {story.translation}
          </p>
        )}
      </div>
    </div>
  );
}