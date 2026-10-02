import { useState } from "react";
import {
  X,
  BookOpen,
  Headphones,
  Mic,
  PenLine,
  Layers,
  HelpCircle,
  Check,
  ChevronDown, AlertTriangle, Sun, Moon
} from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { ReadingTab } from "./ReadingTab";
import { VocabularyTab } from "./VocabularyTab";
import { ListeningTab } from "./ListeningTab";
import { ListeningQuizTab } from "./ListeningQuizTab";
import { SpeakingTab } from "./SpeakingTab";
import { WritingTab } from "./WritingTab";
import { Button } from "@/components/Button";

interface LessonDetailProps {
  lesson: Lesson;
  level: "A1" | "A2" | "B1";
  onBack: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

type TabKey =
  | "reading"
  | "vocabulary"
  | "listening"
  | "listening-quiz"
  | "speaking"
  | "writing";

type CompletionState = Record<
  "reading" | "listening" | "speaking" | "writing",
  boolean
>;

const tabs: {
  key: TabKey;
  label: string;
  icon: typeof BookOpen;
  children?: { key: TabKey; label: string; icon: typeof Layers }[];
}[] = [
  {
    key: "reading",
    label: "Reading",
    icon: BookOpen,
    children: [{ key: "vocabulary", label: "Vocabulary", icon: Layers }],
  },
  {
    key: "listening",
    label: "Listening",
    icon: Headphones,
    children: [{ key: "listening-quiz", label: "Listening Quiz", icon: HelpCircle }],
  },
  { key: "speaking", label: "Speaking", icon: Mic },
  { key: "writing", label: "Writing", icon: PenLine },
];

const mainTabsKeys = ["reading", "listening", "speaking", "writing"] as const;

export function LessonDetail({
  lesson,
  level,
  onBack,
  darkMode,
  onToggleDarkMode,
}: LessonDetailProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("reading");
  const [showTabMenu, setShowTabMenu] = useState(false);

   const [showExitConfirm, setShowExitConfirm] = useState(false);

  const [completedTabs, setCompletedTabs] = useState<CompletionState>(() => {
    try {
      const saved = localStorage.getItem(`lesson_progress_${level}_${lesson.day}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return { reading: false, listening: false, speaking: false, writing: false };
  });

  const toggleTabCompletion = (
    tabKey: "reading" | "listening" | "speaking" | "writing"
  ) => {
    setCompletedTabs((prev) => {
      const updated = { ...prev, [tabKey]: !prev[tabKey] };
      localStorage.setItem(`lesson_progress_${level}_${lesson.day}`, JSON.stringify(updated));
      window.dispatchEvent(new Event("lesson-progress-changed"));
      return updated;
    });
  };

  const completedTasks = mainTabsKeys.filter(
    (key) => completedTabs[key]
  ).length;
  const totalTasks = mainTabsKeys.length;

  const [isDark, setIsDark] = useState(() =>
  document.documentElement.classList.contains("dark")
);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#f9f9f9] dark:bg-dark-bg">
      {/* ================= 1. HEADER FOCUS MODE ================= */}
      <header className="sticky top-0 z-30 h-16 border-b border-slate-200/80 dark:border-zinc-700 bg-white/90 dark:bg-dark-bg backdrop-blur-md">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
          
          {/* Nhóm Nút Close + Tiêu đề bài học */}
          {/* Nhóm Nút Close + Tiêu đề bài học */}
          <div className="flex items-center gap-3 min-w-0">
            {/* 👉 SỬA ƠI ĐÂY: Thay vì gọi trực tiếp onBack, ta mở popup xác nhận */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowExitConfirm(true)}
              icon={
                <X className="w-5 h-5 text-slate-500 dark:text-white hover:text-slate-900 dark:hover:text-white" />
              }
            >
              <span className="sr-only">Thoát bài học</span>
            </Button>

            <div className="flex items-center gap-2.5 min-w-0">
              <span className="bg-[#513DEB]/10 text-[#513DEB] dark:bg-[#C1B3FF]/20 dark:text-[#9084f3] text-[12px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shrink-0">
                LESSON {lesson.day}
              </span>
              <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 truncate">
                {lesson.title}
              </h1>
            </div>
          </div>

          


          {/* Dropdown danh sách kỹ năng */}
          <div className="relative shrink-0">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowTabMenu(!showTabMenu)}
              className="!px-3 !py-2 flex items-center gap-2"
            >
              <span className="font-bold text-sm">
                {completedTasks}/{totalTasks} kỹ năng
              </span>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform duration-200 ${
                  showTabMenu ? "rotate-180" : ""
                }`}
              />
            </Button>

            {showTabMenu && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl z-50 space-y-3">
                <div className="text-sm font-semibold text-slate-400 px-1 pt-1">
                  Hoàn thành các kỹ năng bên dưới:
                </div>
                <div className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isParentActive =
                      activeTab === tab.key ||
                      tab.children?.some((child) => child.key === activeTab);
                    const isDone =
                      tab.key === "reading" ||
                      tab.key === "listening" ||
                      tab.key === "speaking" ||
                      tab.key === "writing"
                        ? completedTabs[tab.key]
                        : false;

                    return (
                      <div
                        key={tab.key}
                        className={`w-full p-3 rounded-xl border-2 transition-all flex flex-col gap-2 ${
                          isParentActive
                            ? "border-[#513DEB] ring-2 ring-[#513DEB]/15 bg-[#513DEB]/5 dark:bg-[#513DEB]/10"
                            : "border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300"
                        }`}
                      >
                        <div
                          onClick={() => {
                            setActiveTab(tab.key);
                            setShowTabMenu(false);
                          }}
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon
                              className={`w-4 h-4 shrink-0 ${
                                isParentActive
                                  ? "text-[#513DEB] dark:text-[#9084f3]"
                                  : "text-slate-400"
                              }`}
                            />
                            <span
                              className={`text-base font-bold truncate ${
                                isParentActive
                                  ? "text-[#513DEB] dark:text-[#9084f3]"
                                  : "text-slate-700 dark:text-slate-200"
                              }`}
                            >
                              {tab.label}
                            </span>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              isDone
                                ? "bg-[#513DEB] text-white"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600"
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        </div>

                        {isParentActive &&
                          tab.children &&
                          tab.children.length > 0 && (
                            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-2">
                              {tab.children.map((child) => {
                                const ChildIcon = child.icon;
                                const isChildActive = activeTab === child.key;

                                return (
                                  <button
                                    key={child.key}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveTab(child.key);
                                      setShowTabMenu(false);
                                    }}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer border ${
                                      isChildActive
                                        ? "bg-[#513DEB] text-white border-[#513DEB]"
                                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50"
                                    }`}
                                  >
                                    <ChildIcon className="w-3.5 h-3.5" />
                                    <span>{child.label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ================= 2. NỘI DUNG HIỂN THỊ CHÍNH ================= */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        <div className="w-full">
          {activeTab === "reading" && (
            <ReadingTab
              lesson={lesson}
              isCompleted={completedTabs.reading}
              onToggleComplete={() => toggleTabCompletion("reading")}
              onNextTab={() => setActiveTab("listening")}
            />
          )}
          
          {activeTab === "vocabulary" && <VocabularyTab lesson={lesson} />}
          
          {activeTab === "listening" && (
            <ListeningTab
              lesson={lesson}
              isCompleted={completedTabs.listening}
              onToggleComplete={() => toggleTabCompletion("listening")}
              onNextTab={() => setActiveTab("speaking")}
            />
          )}
          
          {activeTab === "listening-quiz" && (
            <ListeningQuizTab lesson={lesson} />
          )}
          
          {activeTab === "speaking" && (
            <SpeakingTab
              lesson={lesson}
              isCompleted={completedTabs.speaking}
              onToggleComplete={() => toggleTabCompletion("speaking")}
              onNextTab={() => setActiveTab("writing")}
            />
          )}
          
          {activeTab === "writing" && (
            <WritingTab
              lesson={lesson}
              isCompleted={completedTabs.writing}
              onToggleComplete={() => toggleTabCompletion("writing")}
              onBack={() => setShowExitConfirm(true)} // 👉 Cập nhật luôn cho nút back ở tab cuối nếu có
            />
          )}
        </div>
      </main>

      {/* ================= 3. POPUP XÁC NHẬN THOÁT BÀI HỌC ================= */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70  p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-dark-bg rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 dark:border-zinc-700 space-y-5 text-center">
            
            {/* Icon hoặc ảnh minh họa nhỏ */}
            <div className="w-14 h-14 bg-amber-100 dark:bg-[#37383F] text-amber-600 rounded-2xl mx-auto flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Muốn thoát bài học này?
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Tiến độ các kỹ năng bạn vừa hoàn thành đã được lưu tự động. Bạn có thể quay lại bất cứ lúc nào để tiếp tục.
              </p>
            </div>

            {/* Nhóm nút bấm */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#1E1F26] transition cursor-pointer"
              >
                Tiếp tục học
              </button>
              <button
                onClick={() => {
                  setShowExitConfirm(false);
                  onBack(); // Thực hiện thoát thực sự ra ngoài
                }}
                className="flex-1 py-3 rounded-xl bg-[#513DEB] hover:bg-[#4230c9] text-white font-bold transition shadow-md shadow-[#513DEB]/20 cursor-pointer"
              >
                Thoát
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Nút dark mode nổi */}
      <button
      onClick={onToggleDarkMode}
      role="switch"
      aria-checked={darkMode}
      aria-label="Bật tắt giao diện tối"
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 w-9 h-16 rounded-full p-1 flex items-start bg-neutral-300 dark:bg-zinc-700 shadow-lg cursor-pointer transition-colors"
    >
      <span
        className={`flex w-7 h-7 items-center justify-center rounded-full bg-white dark:bg-neutral-300 shadow transition-transform duration-200 ${
          darkMode ? "translate-y-7" : "translate-y-0"
        }`}
      >
        {darkMode ? (
          <Moon className="w-4 h-4 text-[#9084f3]" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </span>
    </button>
    </div>
  );
}