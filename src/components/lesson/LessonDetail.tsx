import { useState } from "react";
import {
  BookOpen,
  Headphones,
  Mic,
  PenLine,
  Layers,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { ReadingTab } from "./ReadingTab";
import { VocabularyTab } from "./VocabularyTab";
import { ListeningTab } from "./ListeningTab";
import { ListeningQuizTab } from "./ListeningQuizTab"; // 👈 import file mới
import { SpeakingTab } from "./SpeakingTab";
import { WritingTab } from "./WritingTab";

interface LessonDetailProps {
  lesson: Lesson;
  onBack: () => void;
}

type TabKey = "reading" | "vocabulary" | "listening" | "listening-quiz" | "speaking" | "writing";
// Khai báo type riêng ở ngoài, thay vì viết inline nhiều dòng bên trong useState<...>
type CompletionState = Record<"reading" | "listening" | "speaking" | "writing", boolean>;

// Mỗi tab cha có thể có children (tab con) - nếu có thì luôn hiện sẵn, không cần bấm mũi tên
const tabs: {
  key: TabKey;
  label: string;
  icon: typeof BookOpen;
  desc: string;
  children?: { key: TabKey; label: string; icon: typeof Layers }[];
}[] = [
  {
    key: "reading",
    label: "Reading",
    icon: BookOpen,
    desc: "Đọc hiểu văn bản",
    children: [{ key: "vocabulary", label: "Vocabulary", icon: Layers }],
  },
  {
    key: "listening",
    label: "Listening",
    icon: Headphones,
    desc: "Luyện tập nghe hiểu",
    children: [{ key: "listening-quiz", label: "Listening Quiz", icon: HelpCircle }],
  },
  { key: "speaking", label: "Speaking", icon: Mic, desc: "Thực hành phát âm & nói" },
  { key: "writing", label: "Writing", icon: PenLine, desc: "Thực hành viết câu/đoạn" },
];

export function LessonDetail({ lesson }: LessonDetailProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("reading");

  const [completedTabs, setCompletedTabs] = useState<CompletionState>(() => {
    try {
      const saved = localStorage.getItem(`lesson_progress_${lesson.day}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return { reading: false, listening: false, speaking: false, writing: false };
  });

  const toggleTabCompletion = (tabKey: "reading" | "listening" | "speaking" | "writing") => {
    setCompletedTabs((prev) => {
      const updated = { ...prev, [tabKey]: !prev[tabKey] };
      localStorage.setItem(`lesson_progress_${lesson.day}`, JSON.stringify(updated));
      window.dispatchEvent(new Event("lesson-progress-changed"));
      return updated;
    });
  };

  const mainTabsKeys = ["reading", "listening", "speaking", "writing"] as const;
  const completedTasks = mainTabsKeys.filter((key) => completedTabs[key]).length;
  const totalTasks = mainTabsKeys.length;

  return (
    <div className="w-full text-slate-800 min-h-screen pb-16 space-y-4">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        {/* ================= CỘT TRÁI: HIỂN THỊ NỘI DUNG TƯƠNG ỨNG ================= */}
        <div
          className="lg:col-span-8 p-6 lg:p-10 flex flex-col space-y-6 border-r border-slate-200 bg-white min-h-[600px]"
          style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
        >
          {activeTab === "reading" && (
            <ReadingTab
              lesson={lesson}
              isCompleted={completedTabs.reading}
              onToggleComplete={() => toggleTabCompletion("reading")}
            />
          )}
          {activeTab === "vocabulary" && <VocabularyTab lesson={lesson} />}
          {activeTab === "listening" && (
            <ListeningTab
              lesson={lesson}
              isCompleted={completedTabs.listening}
              onToggleComplete={() => toggleTabCompletion("listening")}
            />
          )}
          {activeTab === "listening-quiz" && <ListeningQuizTab lesson={lesson} />}
          {activeTab === "speaking" && (
            <SpeakingTab
              lesson={lesson}
              isCompleted={completedTabs.speaking}
              onToggleComplete={() => toggleTabCompletion("speaking")}
            />
          )}
          {activeTab === "writing" && (
            <WritingTab
              lesson={lesson}
              isCompleted={completedTabs.writing}
              onToggleComplete={() => toggleTabCompletion("writing")}
            />
          )}
        </div>

        {/* ================= CỘT PHẢI: SIDEBAR TAB CHÍNH ================= */}
        <div className="lg:col-span-4 bg-slate-50/50 flex flex-col h-full border-t lg:border-t-0 border-slate-200">
          <div className="p-5 border-b border-slate-200 bg-white flex flex-col gap-2">
            <span className="text-[11px] text-emerald-600 font-bold uppercase tracking-wider">
              Day {lesson.day}
            </span>
            <h2 className="font-bold text-lg text-slate-900 truncate">{lesson.title}</h2>

            <div className="flex items-center justify-between mt-1 pt-2 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500">Lộ trình học tập chi tiết</p>
              <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200 text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-bold">
                  {completedTasks}/{totalTasks} task
                </span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-200 overflow-y-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              const isDone =
                tab.key === "reading" ||
                tab.key === "listening" ||
                tab.key === "speaking" ||
                tab.key === "writing"
                  ? completedTabs[tab.key]
                  : false;

              return (
                <div key={tab.key}>
                  <div
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative w-full p-4 flex items-center justify-between transition-colors cursor-pointer text-left ${
                      isActive ? "bg-emerald-50/70" : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600" />}

                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                          isActive
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col min-w-0 space-y-0.5">
                        <span
                          className={`text-[14px] font-bold truncate ${
                            isActive ? "text-emerald-600" : "text-slate-800"
                          }`}
                        >
                          {tab.label}
                        </span>
                        <span className="text-[12px] text-slate-500 truncate font-medium">
                          {tab.desc}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isDone && (
                        <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tab con - LUÔN HIỆN SẴN, không cần bấm mũi tên mở ra nữa */}
                  {tab.children?.map((child) => {
                    const ChildIcon = child.icon;
                    const isChildActive = activeTab === child.key;

                    return (
                      <div
                        key={child.key}
                        onClick={() => setActiveTab(child.key)}
                        className={`relative w-full pl-14 pr-4 py-3 flex items-center justify-between transition-colors cursor-pointer text-left border-t border-slate-100 ${
                          isChildActive ? "bg-emerald-50/70" : "bg-white hover:bg-slate-50"
                        }`}
                      >
                        {isChildActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600" />
                        )}
                        <div className="flex items-center gap-3 min-w-0">
                          <ChildIcon
                            className={`w-4 h-4 shrink-0 ${
                              isChildActive ? "text-emerald-600" : "text-slate-400"
                            }`}
                          />
                          <span
                            className={`text-[13px] font-semibold truncate ${
                              isChildActive ? "text-emerald-600" : "text-slate-700"
                            }`}
                          >
                            {child.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}