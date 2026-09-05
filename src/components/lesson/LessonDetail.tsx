import { useState } from "react";
import { BookOpen, Layers, PencilLine, PenLine, Sparkles } from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { ReadingTab } from "./ReadingTab";
import { VocabularyTab } from "./VocabularyTab";
import { ExtraVocabTab } from "./ExtraVocabTab";
import { PracticeTab } from "./PracticeTab";
import { WritingTab } from "./WritingTab";

interface LessonDetailProps {
  lesson: Lesson;
  onBack: () => void;
}

type TabKey = "reading" | "vocab" | "extravocab" | "practice" | "writing";

const tabs: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
  { key: "reading", label: "Reading", icon: BookOpen },
  { key: "vocab", label: "Vocabulary", icon: Layers },
  { key: "practice", label: "Listening", icon: PencilLine },
  { key: "writing", label: "Writing", icon: PenLine },
  { key: "extravocab", label: "Từ Vựng Mở rộng", icon: Sparkles },
];

export function LessonDetail({ lesson }: LessonDetailProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("reading");

  return (
    <div className="w-full text-slate-900 dark:text-slate-100 space-y-0">
      <div className="w-full pt-4">
        
        {/* KHU VỰC TAB CỐ ĐỊNH KHI SCROLL */}
        <div className="sticky top-16 z-30 pt-2 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)' }}>
          <div className="flex items-end gap-1 pr-3 overflow-x-auto w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-t border-x ${
                    active
                      ? "z-10 -mb-[2px] pt-3 pb-3 shadow-sm"
                      : "opacity-80 hover:opacity-100 border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                  }`}
                  style={{
                    backgroundColor: active ? 'var(--card-bg)' : 'transparent',
                    borderColor: active ? 'var(--border-color)' : 'transparent',
                    color: active ? 'var(--text-color)' : undefined,
                    borderRadius: '0px' // 👈 Bỏ bo tròn của tab, thành góc vuông sắc cạnh
                  }}
                >
                  {active && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600" />
                  )}
                  <Icon className={`w-4 h-4 ${active ? "text-blue-600 dark:text-blue-400" : ""}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* KHUNG HỘP NỘI DUNG CHÍNH: Vuông vức hoàn toàn không bo tròn */}
        <div 
          className="w-full p-5 md:p-8 border shadow-sm transition-all relative z-0"
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--border-color)',
            color: 'var(--text-color)',
            borderRadius: '0px' // 👈 Dỡ sạch bo tròn tất cả các góc của khung hộp
          }}
        >
          {activeTab === "reading" && <ReadingTab lesson={lesson} />}
          {activeTab === "vocab" && <VocabularyTab lesson={lesson} />}
          {activeTab === "practice" && <PracticeTab lesson={lesson} />}
          {activeTab === "writing" && <WritingTab lesson={lesson} />}
          {activeTab === "extravocab" && <ExtraVocabTab lesson={lesson} />}
        </div>

      </div>
    </div>
  );
}