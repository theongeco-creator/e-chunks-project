import { useState } from "react";
import { stories } from "../data/stories";
import type { Story, Level } from "../data/types";

const STORY_BG_COLORS = ["#fef3c7", "#e0e7ff", "#ffe4e6", "#ffedd5", "#ede9fe", "#d1fae5", "#bfdbfe", "#fef9c3"];

interface AllStoriesPageProps {
  onBack: () => void;
  onSelectStory: (story: Story) => void;
}

export function AllStoriesPage({ onBack, onSelectStory }: AllStoriesPageProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");

  const LEVEL_TABS: { key: Level | "all"; label: string }[] = [
    { key: "all", label: "Tất cả chủ đề" },
    { key: "A1", label: "Trình độ A1" },
    { key: "A2", label: "Trình độ A2" },
    { key: "B1", label: "Trình độ B1" },
  ];

  const filteredStories = stories.filter(
    (s) => activeLevel === "all" || s.level === activeLevel
  );

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-xs hover:text-blue-700 bg-blue-50 px-3 py-2 rounded-md transition cursor-pointer"
      >
        &larr; Quay lại trang chủ
      </button>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tất cả truyện</h1>

      <div className="flex items-center gap-2 flex-wrap">
        {LEVEL_TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveLevel(key)}
            className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition cursor-pointer ${
              activeLevel === key
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filteredStories.length === 0 ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          Chưa có truyện nào ở trình độ này.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-all cursor-pointer h-56"
              style={{ backgroundColor: STORY_BG_COLORS[index % STORY_BG_COLORS.length] }}
            >
              <div className="space-y-3">
                <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900 inline-block">
                  {story.level}
                </span>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {story.title}
                </h3>
              </div>
              <div
                className="w-full h-24 rounded-xl bg-cover bg-center shadow-sm"
                style={{ backgroundImage: `url('${story.image}')` }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}