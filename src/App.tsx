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
import { Header } from "@/components/Header";
import type { Story } from "@/data/types";

export default function App() {
  const { user, signOut, upgradeToPremium } = useAuth();
  const [activeLevel, setActiveLevel] = useState<"A1" | "A2" | "B1">("A1");
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<"A1" | "A2" | "B1" | null>(null);
  const [paywallContext, setPaywallContext] = useState<"GENERAL" | "A2_LESSON" | "B1_LESSON">("GENERAL");
  const [selectedVocabTopic, setSelectedVocabTopic] = useState<VocabTopic | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentView, setCurrentView] = useState<"home" | "all-topics" | "all-stories">("home");

  // 🚀 FIX LỖI TERNARY LỒNG NHAU SAI CÚ PHÁP
  const sidebarSection: "home" | "vocab" | "stories" =
    selectedVocabTopic !== null || currentView === "all-topics"
      ? "vocab"
      : selectedStory !== null || currentView === "all-stories"
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
    if (isLessonLocked(activeLevel, day, tier)) {
      if (!user) {
        setLoginOpen(true);
      } else {
        if (activeLevel === "A2") setPaywallContext("A2_LESSON");
        else if (activeLevel === "B1") setPaywallContext("B1_LESSON");
        else setPaywallContext("GENERAL");
        setPaywallOpen(true);
      }
    } else {
      setOpenLessonDay(day);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F9F9F9] dark:bg-[#111827]">
      {/* 1. SIDEBAR */}
      <Sidebar
        activeLevel={activeLevel}
        onSelectLevel={(level) => {
          setActiveLevel(level);
          setSelectedTrack(level);
        }}
        onLockedClick={() => {
          setPaywallContext("GENERAL");
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

      {/* 2. AREA BÊN PHẢI (HEADER + MAIN) */}
      <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
        {/* HEADER */}
        <Header
          user={user}
          streakCount={5}
          onLoginClick={() => setLoginOpen(true)}
          onUpgradeClick={() => {
            setPaywallContext("GENERAL");
            setPaywallOpen(true);
          }}
        />

        {/* 🚀 MAIN CONTENT: Đã thêm overflow-x-auto & min-w-[1080px] để KHÔNG BỊ BÓP CARD khi mở Sidebar */}
        <main className="flex-1 overflow-y-auto overflow-x-auto p-6 md:p-8">
          {/* 🔧 đổi w-[1140px] thành w-full max-w-[1140px] */}
          <div className="w-full max-w-[1240px] mx-auto">
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
              <div>
                {selectedTrack === null ? (
                  selectedVocabTopic ? (
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
                  ) : selectedStory ? (
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
                  ) : currentView === "all-topics" ? (
                    <AllTopicsPage
                      onBack={() => setCurrentView("home")}
                      onSelectTopic={(topic: VocabTopic) => {
                        setSelectedVocabTopic(topic);
                      }}
                    />
                  ) : currentView === "all-stories" ? (
                    <AllStoriesPage
                      onBack={() => setCurrentView("home")}
                      onSelectStory={(story: Story) => {
                        setSelectedStory(story);
                      }}
                    />
                  ) : (
                    <HomePage
                      user={user}
                      onLoginClick={() => setLoginOpen(true)}
                      onLogoutClick={() => {
                        signOut();
                      }}
                      onSelectLevel={(level) => {
                        setActiveLevel(level);
                        setSelectedTrack(level);
                      }}
                      onSelectVocabTopic={(topic) => setSelectedVocabTopic(topic)}
                      onViewAllTopics={() => setCurrentView("all-topics")}
                      onSelectStory={(story) => setSelectedStory(story)}
                      onViewAllStories={() => setCurrentView("all-stories")}
                      handleUpgrade={(purchasedTier) => {
                        upgradeToPremium(purchasedTier || "premium");
                      }}
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
                        if (selectedTrack === "A2") setPaywallContext("A2_LESSON");
                        else if (selectedTrack === "B1") setPaywallContext("B1_LESSON");
                        else setPaywallContext("GENERAL");

                        setPaywallOpen(true);
                      }
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* MODALS */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

      <PaywallModal
        open={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        onUpgrade={(purchasedTier: "A2" | "B1" | "premium") => {
          upgradeToPremium(purchasedTier);
          setPaywallOpen(false);
        }}
        triggerContext={paywallContext}
        userTier={tier}
      />
    </div>
  );
}