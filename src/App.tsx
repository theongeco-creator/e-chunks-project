import { useState, useEffect } from "react";
import { LevelCoursePage } from "@/components/LevelCoursePage";
import { PaywallModal } from "@/components/PaywallModal";
import { LoginModal } from "@/components/LoginModal";
import { LessonDetail } from "@/components/lesson/LessonDetail";
import { findLesson } from "@/data/lessonData";
import { useAuth } from "@/auth/AuthContext";
import { isLessonLocked } from "@/auth/accessControl";
import type { UserTier } from "@/auth/types";
import { uploadLessonsToSupabase } from "./seedLessons";
import { Sidebar } from "@/components/Sidebar";
import { VocabularyTopicsSection } from "@/components/VocabularyTopicsSection";
import { VocabularyTopicPage } from "@/components/VocabularyTopicPage";
import type { VocabTopic } from "@/data/vocabulary";
import { AllTopicsPage } from "@/components/AllTopicsPage";
import { StoriesSection } from "@/components/StoriesSection";
import { StoryPage } from "@/components/StoryPage";
import { AllStoriesPage } from "@/components/AllStoriesPage";
import { HomePage } from "@/components/HomePage";
import type { Story } from "@/data/types";

export default function App() {
  const { user, upgradeToPremium } = useAuth();
  const [activeLevel, setActiveLevel] = useState<"A2" | "B1">("A2");
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<"A2" | "B1" | null>(null);
  // Thêm state lưu chủ đề từ vựng đang được chọn
  const [selectedVocabTopic, setSelectedVocabTopic] = useState<VocabTopic | null>(null);
  // Thêm state lưu truyện đang được chọn
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  // Thêm state để biết đang ở trang chủ, trang "Xem tất cả" chủ đề từ vựng, hay trang "Xem tất cả" truyện
  const [currentView, setCurrentView] = useState<"home" | "all-topics" | "all-stories">("home");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("theme-dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [openLessonDay, setOpenLessonDay] = useState<number | null>(() => {
    const saved = localStorage.getItem("current_lesson_day");
    return saved ? Number(saved) : null;
  });

  useEffect(() => {
    uploadLessonsToSupabase();
  }, []);

  useEffect(() => {
    if (openLessonDay !== null) {
      localStorage.setItem("current_lesson_day", openLessonDay.toString());
    } else {
      localStorage.removeItem("current_lesson_day");
    }
  }, [openLessonDay]);

  const tier: UserTier = user?.tier ?? "free";
  const openLesson = openLessonDay !== null ? findLesson(openLessonDay, activeLevel) : undefined;

  const handleLessonClick = (day: number) => {
    if (!user) {
      setLoginOpen(true);
      return;
    }
    if (isLessonLocked(day, tier)) {
      setPaywallOpen(true);
      return;
    }
    setOpenLessonDay(day);
  };

  return (
    <div
      className="h-screen w-screen flex overflow-hidden p-3 gap-3 transition-colors duration-300 relative"
      style={{ backgroundColor: "#384ab9" }}
    >
      <Sidebar
        activeLevel={activeLevel}
        onSelectLevel={(level) => {
          setActiveLevel(level);
          setSelectedTrack(level);
          setOpenLessonDay(null);
        }}
        onLockedClick={() => setPaywallOpen(true)}
        user={user}
        onLoginClick={() => setLoginOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onGoHome={() => {
          setSelectedTrack(null);
          setOpenLessonDay(null);
          setCurrentView("home"); // <-- Thêm dòng này để dọn sạch state về trang chủ
        }}
        selectedTrack={selectedTrack}
      />

      {/* Main Content Khung Trắng Bự */}
      <main className="flex-1 bg-white dark:bg-[#111827] rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-800 overflow-y-auto p-6 md:p-8 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full space-y-6">
          {openLesson ? (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <button
                  onClick={() => setOpenLessonDay(null)}
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 bg-blue-50 dark:bg-blue-950/60 px-3 py-1.5 rounded-md transition"
                >
                  ← Quay lại
                </button>
                <span>/</span>
                <span className="font-medium" style={{ color: "var(--text-color)" }}>
                  Day {openLesson.day}: {openLesson.title}
                </span>
              </div>

              <LessonDetail lesson={openLesson} onBack={() => setOpenLessonDay(null)} />
            </div>
          ) : (
            <div className="space-y-6">
              {/* TRƯỜNG HỢP 1: TRANG CHỦ THEO GIAO DIỆN WIREFRAME MỚI */}
              {selectedTrack === null ? (
                selectedVocabTopic ? (
                  // 👈 ƯU TIÊN 1: đang xem chi tiết 1 chủ đề từ vựng
                  <div className="space-y-6">
                    <VocabularyTopicPage
                      topic={selectedVocabTopic}
                      onBack={() => setSelectedVocabTopic(null)}
                    />
                  </div>
                ) : selectedStory ? (
                  // 👈 ƯU TIÊN 2: đang xem chi tiết 1 truyện
                  <div className="space-y-6">
                    <StoryPage story={selectedStory} onBack={() => setSelectedStory(null)} />
                  </div>
                ) : currentView === "all-topics" ? (
                  // 👈 Chỉ check cái này SAU KHI đã chắc chắn không có topic/truyện nào đang chọn
                  <div className="space-y-6">
                    <AllTopicsPage
                      onBack={() => setCurrentView("home")}
                      onSelectTopic={(topic: VocabTopic) => {
                        setSelectedVocabTopic(topic);
                      }}
                    />
                  </div>
                ) : currentView === "all-stories" ? (
                  <div className="space-y-6">
                    <AllStoriesPage
                      onBack={() => setCurrentView("home")}
                      onSelectStory={(story: Story) => {
                        setSelectedStory(story);
                      }}
                    />
                  </div>
                ) : (
                  <HomePage
                    user={user}
                    onSelectLevel={(level) => {
                      setActiveLevel(level);
                      setSelectedTrack(level);
                    }}
                    onSelectVocabTopic={(topic) => setSelectedVocabTopic(topic)}
                    onViewAllTopics={() => setCurrentView("all-topics")}
                    onSelectStory={(story) => setSelectedStory(story)}
                    onViewAllStories={() => setCurrentView("all-stories")}
                  />
                )
              ) : (
                // Trường hợp khi bấm vào level
                <LevelCoursePage
                  selectedTrack={selectedTrack}
                  tier={tier}
                  onBack={() => setSelectedTrack(null)}
                  onLessonClick={handleLessonClick}
                  onLockedClick={() => {
                    if (!user) {
                      setLoginOpen(true);
                    } else {
                      setPaywallOpen(true);
                    }
                  }}
                />
              )}
            </div>
          )}
        </div>
      </main>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <PaywallModal
        open={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        onUpgrade={upgradeToPremium}
      />
    </div>
  );
}