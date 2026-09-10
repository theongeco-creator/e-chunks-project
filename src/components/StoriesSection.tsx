import { useState } from "react";
import { stories } from "../data/stories";
import type { Story, Level } from "../data/types";

// Bảng màu pastel nhẹ nhàng cho card nhỏ
const CARD_THEMES = [
  { bg: "bg-[#e4e4cc]", badgeBg: "bg-[#c1c189]", patternUrl: "/patterns/shape1.svg" },
  { bg: "bg-[#ffe4e6]", badgeBg: "bg-[#ff979e]", patternUrl: "/patterns/shape2.svg" },
  { bg: "bg-[#fee5ca]", badgeBg: "bg-[#fcc080]", patternUrl: "/patterns/shape3.svg" },
  { bg: "bg-[#d1fae5]", badgeBg: "bg-[#8ef2bf]", patternUrl: "/patterns/shape4.svg" },
  { bg: "bg-[#CFE4FF]", badgeBg: "bg-[#86baff]", patternUrl: "/patterns/shape5.svg" },
  { bg: "bg-[#FFF4A7]", badgeBg: "bg-[#EAD750]", patternUrl: "/patterns/shape6.svg" },
];

interface StoriesSectionProps {
  onSelectStory: (story: Story) => void;
  onViewAll: () => void;
}

// Icon nhỏ inline
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

// Cắt câu làm excerpt
function getExcerpt(paragraph: string, sentenceCount = 2): string {
  const sentences = paragraph.match(/[^.!?]+[.!?]+/g) ?? [paragraph];
  return sentences.slice(0, sentenceCount).join(" ").trim();
}

// Ước lượng thời gian đọc
function estimateReadTime(paragraph: string): number {
  const wordCount = paragraph.trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 40)); // Chia cho 80 từ/phút thì bài dài hơn sẽ nhích lên 2-3 phút ngay
}

type StoryWithMeta = Story;

function StoryMeta({
  story,
  size = "sm",
}: {
  story: StoryWithMeta;
  size?: "sm" | "lg";
}) {
  const readTime = estimateReadTime(story.paragraph);
  const textSize = size === "lg" ? "text-[13px]" : "text-[12px]";

  return (
    <div className={`flex items-center gap-1 text-slate-500 font-medium ${textSize}`}>
      <ClockIcon />
      {readTime} phút đọc
    </div>
  );
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
    <div className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        Truyện <span className="text-slate-400">•ᴗ•</span>
      </h2>

      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {LEVEL_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveLevel(key)}
              className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
                activeLevel === key
                  ? "bg-slate-900 text-white shadow-md scale-105"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={onViewAll}
          className="text-sm font-semibold text-zinc-600 hover:text-blue-700 transition-colors flex items-center gap-1 ml-auto group cursor-pointer"
        >
          Xem tất cả <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </button>
      </div>

      {!bigStory ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          Chưa có truyện nào ở trình độ này.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* CARD TO BÊN TRÁI: Màu vàng cố định và badge đậm màu style conts */}
          <div
            onClick={() => onSelectStory(bigStory)}
            className="lg:col-span-5 rounded-2xl bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-200/80 flex flex-col justify-between group"
          >
            <div className="w-full rounded-xl bg-[#fef3c7] p-4 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[0.98]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-1.5 rounded-md bg-[#ffe521] text-slate-900 shadow-2xs inline-block">
                  {bigStory.level}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1.5 rounded-md bg-blue-500 text-white uppercase tracking-wider">
                  Mới
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <h3 
                  className="font-bold text-xl text-slate-900 leading-snug group-hover:text-blue-900 transition-colors"
                  dangerouslySetInnerHTML={{ __html: bigStory.title }}
                />
                <p className="text-sm text-slate-700/80 leading-relaxed line-clamp-3">
                  {getExcerpt(bigStory.paragraph)}
                </p>
              </div>

              {/* Ảnh minh họa card to */}
              <div className="w-full h-48 rounded-lg overflow-hidden shadow-xs mt-4 bg-slate-200">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${bigStory.image}')` }}
                ></div>
              </div>
            </div>

            <div className="pt-3 px-2 pb-1 flex items-center justify-between mt-2">
              <StoryMeta story={bigStory} size="sm" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectStory(bigStory);
                }}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-xs hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Đọc ngay
              </button>
            </div>
          </div>

          {/* 6 CARD NHỎ BÊN PHẢI */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {smallStories.map((story, index) => {
              const theme = CARD_THEMES[index % CARD_THEMES.length];
              return (
                <div
                  key={story.id}
                  onClick={() => onSelectStory(story)}
                  className="rounded-xl bg-white p-3 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-200/80 flex flex-col justify-between group"
                >
                  
                  {/* --- DÁN ĐOẠN NÀY VÀO THAY CHO KHUNG CŨ --- */}
                  <div 
                    className={`w-full h-full min-h-[130px] rounded-xl ${theme.bg} p-4 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[0.98] relative overflow-hidden`}
                    style={{
                      backgroundImage: `url(${theme.patternUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {/* Lớp phủ mờ nhẹ giúp hoa văn SVG chìm sâu và nghệ thuật hơn */}
                    <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

                    {/* Nội dung bên trong card (được đẩy lên trên nhờ relative z-10) */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <span className={`text-[11px] font-bold px-2.5 py-1.5 rounded-md ${theme.badgeBg} text-slate-900 shadow-2xs inline-block`}>
                          {story.level}
                        </span>
                      </div>

                      <h4 
                        className="font-bold text-base text-slate-900 leading-snug group-hover:text-blue-900 transition-colors mt-2"
                        dangerouslySetInnerHTML={{ __html: story.title }}
                      />
                    </div>
                  </div>
                  {/* ------------------------------------------- */}

                  <div className="pt-3 px-1 pb-1 flex items-center justify-between mt-2">
                    <StoryMeta story={story} size="sm" />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectStory(story);
                      }}
                      className="px-3.5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-xs hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      Đọc
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}