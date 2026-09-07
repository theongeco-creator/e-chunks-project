import { useState } from "react";
import { stories } from "../data/stories";
import type { Story, Level } from "../data/types";

const STORY_BG_COLORS = ["#fef3c7", "#e0e7ff", "#ffe4e6", "#ffedd5", "#ede9fe", "#d1fae5", "#fef9c3"];

interface StoriesSectionProps {
  onSelectStory: (story: Story) => void;
  onViewAll: () => void;
}

export function StoriesSection({ onSelectStory, onViewAll }: StoriesSectionProps) {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");

  const LEVEL_TABS: { key: Level | "all"; label: string }[] = [
    { key: "all", label: "Tất cả chủ đề" },
    { key: "A1", label: "Trình độ A1" },
    { key: "A2", label: "Trình độ A2" },
    { key: "B1", label: "Trình độ B1" },
  ];

  const filtered = stories
    .filter((s) => activeLevel === "all" || s.level === activeLevel)
    .slice(0, 7); // 1 card to + 6 card nhỏ

  const bigStory = filtered[0];
  const smallStories = filtered.slice(1);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        Truyện <span className="text-slate-400">•ᴗ•</span>
      </h2>

      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {LEVEL_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveLevel(key)}
              className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition ${
                activeLevel === key
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={onViewAll}
          className="text-sm font-semibold text-zinc-600 hover:text-blue-700 transition flex items-center gap-1 ml-auto"
        >
          Xem tất cả &rarr;
        </button>
      </div>

      {!bigStory ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          Chưa có truyện nào ở trình độ này.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card to bên trái */}
          <div
            onClick={() => onSelectStory(bigStory)}
            className="lg:col-span-5 rounded-2xl bg-[#fef3c7] p-6 flex flex-col justify-between shadow-sm hover:scale-[1.01] transition-all cursor-pointer relative overflow-hidden group"
          >
            <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900 inline-block w-fit">
              {bigStory.level}
            </span>
            <h3 className="font-bold text-2xl text-slate-900 leading-snug mt-4">
              {bigStory.title}
            </h3>
            <div
              className="w-full h-48 rounded-xl bg-cover bg-center shadow-sm mt-4"
              style={{ backgroundImage: `url('${bigStory.image}')` }}
            ></div>
          </div>

          {/* Lưới nhỏ bên phải - 3x2 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {smallStories.map((story, index) => (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-all cursor-pointer group"
                style={{ backgroundColor: STORY_BG_COLORS[index % STORY_BG_COLORS.length] }}
              >
                <div className="space-y-3">
                  <span className="text-[12px] font-bold px-3 py-1.5 rounded-lg bg-white text-slate-900 inline-block">
                    {story.level}
                  </span>
                  <h4 className="font-bold text-base text-slate-900 leading-snug">
                    {story.title}
                  </h4>
                </div>
                <div
                  className="w-full h-24 rounded-xl bg-cover bg-center shadow-sm mt-4"
                  style={{ backgroundImage: `url('${story.image}')` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}