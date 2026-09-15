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
import { VocabularyTopicPage } from "@/components/VocabularyTopicPage";
import type { VocabTopic } from "@/data/vocabulary";
import { AllTopicsPage } from "@/components/AllTopicsPage";
import { StoryPage } from "@/components/StoryPage";
import { AllStoriesPage } from "@/components/AllStoriesPage";
import { HomePage } from "@/components/HomePage";
import type { Story } from "@/data/types";

export default function App() {
  const { user, upgradeToPremium } = useAuth();
  const [activeLevel, setActiveLevel] = useState<"A1" | "A2" | "B1">("A1");
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<"A1" | "A2" | "B1" | null>(null);
  const [paywallContext, setPaywallContext] = useState<"GENERAL" | "A2_LESSON" | "B1_LESSON">("GENERAL");
  const [selectedVocabTopic, setSelectedVocabTopic] = useState<VocabTopic | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentView, setCurrentView] = useState<"home" | "all-topics" | "all-stories">("home");
  

  const sidebarSection: "home" | "vocab" | "stories" =
    selectedVocabTopic || currentView === "all-topics"
      ? "vocab"
      : selectedStory || currentView === "all-stories"
        ? "stories"
        : "home";

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
    if (isLessonLocked(day, tier, activeLevel)) {
      setPaywallOpen(true);
      return;
    }
    setOpenLessonDay(day);
  };

  return (
    <div
      className="h-screen w-screen flex overflow-hidden transition-colors duration-300 relative"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Sidebar
        activeLevel={activeLevel}
        onSelectLevel={(level) => {
          setActiveLevel(level);
          setSelectedTrack(level);
          setOpenLessonDay(null);
        }}
        onLockedClick={() => {
        setPaywallContext("GENERAL"); // 👈 Thêm dòng này trước khi mở modal
        setPaywallOpen(true);
        }}
        user={user}
        onLoginClick={() => setLoginOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onGoHome={() => {
          setSelectedTrack(null);
          setOpenLessonDay(null);
          setCurrentView("home");
        }}
        onGoToVocab={() => {
          setSelectedTrack(null);
          setOpenLessonDay(null);
          setSelectedVocabTopic(null);
          setSelectedStory(null);
          setCurrentView("all-topics");
        }}
        onGoToStories={() => {
          setSelectedTrack(null);
          setOpenLessonDay(null);
          setSelectedVocabTopic(null);
          setSelectedStory(null);
          setCurrentView("all-stories");
        }}
        selectedTrack={selectedTrack}
        activeSection={sidebarSection}
      />

      {/* Main Content */}
      <main className="flex-1 bg-[#F9F9F9] dark:bg-[#111827] overflow-y-auto p-6 md:p-8 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full space-y-6">
          {openLesson ? (
            <div className="space-y-6">
              <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 flex-wrap">
                <button
                  onClick={() => {
                    setOpenLessonDay(null);
                    setSelectedTrack(null);
                    setCurrentView("home");
                  }}
                  className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
                >
                  Trang chủ
                </button>

                <span className="text-slate-400">/</span>

                <button
                  onClick={() => setOpenLessonDay(null)}
                  className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
                >
                  Lộ trình học {activeLevel}
                </button>

                <span className="text-slate-400">/</span>

                <span className="font-semibold" style={{ color: "var(--text-color)" }}>
                  Day {openLesson.day}: {openLesson.title}
                </span>
              </nav>

              <LessonDetail lesson={openLesson} onBack={() => setOpenLessonDay(null)} />
            </div>
          ) : (
            <div className="space-y-6">
              {selectedTrack === null ? (
                selectedVocabTopic ? (
                  <div className="space-y-6">
                    <VocabularyTopicPage
                      topic={selectedVocabTopic}
                      onBackToHome={() => {
                        setSelectedVocabTopic(null);
                        setCurrentView("home");
                      }}
                      onBackToTopics={() => {
                        setSelectedVocabTopic(null);
                        setCurrentView("all-topics");
                      }}
                    />
                  </div>
                ) : selectedStory ? (
                  <div className="space-y-6">
                    <StoryPage
                      story={selectedStory}
                      onBackToHome={() => {
                        setSelectedStory(null);
                        setCurrentView("home");
                      }}
                      onBackToStories={() => {
                        setSelectedStory(null);
                        setCurrentView("all-stories");
                      }}
                    />
                  </div>
                ) : currentView === "all-topics" ? (
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
                    onLoginClick={() => setLoginOpen(true)} // 👈 Thêm dòng này để mở popup Login
                    onLogoutClick={() => {                 // 👈 Thêm dòng này để bấm Logout thành công
                      localStorage.clear();
                      window.location.reload();
                    }}
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

      {/* Popup Paywall Chuẩn */}
      <PaywallModal
      open={paywallOpen}
      onClose={() => setPaywallOpen(false)}
      onUpgrade={(purchasedTier: "A2" | "B1" | "premium") => {
        upgradeToPremium(purchasedTier);
        setPaywallOpen(false);
      }}
      triggerContext={paywallContext} // 👈 Sửa thành biến này là xong!
      userTier={tier}
    />
    </div>
  );
}