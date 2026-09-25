import { useState, useEffect } from "react";
import { LevelCoursePage } from "@/components/LevelCoursePage";
import { PaywallModal } from "@/components/PaywallModal";
import { LoginModal } from "@/components/LoginModal";
import { LessonDetail } from "@/components/lesson/LessonDetail";
import { findLesson } from "@/data/lessonData";
import { useAuth } from "@/auth/AuthContext";
import { isLessonLocked } from "@/auth/accessControl";
import type { UserTier } from "@/auth/types";
import { Sidebar } from "@/components/Sidebar";
import { VocabularyTopicPage } from "@/components/VocabularyTopicPage";
import type { VocabTopic } from "@/data/vocabulary";
import { AllTopicsPage } from "@/components/AllTopicsPage";
import { StoryPage } from "@/components/StoryPage";
import { AllStoriesPage } from "@/components/AllStoriesPage";
import { HomePage } from "@/components/HomePage";
import { Header } from "@/components/Header";
import type { Story } from "@/data/types";
import { AllCoursesPage } from "@/components/AllCoursesPage";
import { IPAPage } from "@/pages/IPAPage";
import { GrammarPage } from "./components/Pages/GrammarPage"; // 👈 Sửa import { GrammarPage }

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

  // STATE VIEW
  const [currentView, setCurrentView] = useState<"home" | "all-topics" | "all-stories" | "all-courses" | "ipa" | "grammar">("home");

  // LOGIC SIDEBAR ACTIVE SECTION (Bổ sung grammar)
  const sidebarSection: "home" | "vocab" | "stories" | "courses" | "ipa" | "grammar" =
    currentView === "grammar"
      ? "grammar"
      : currentView === "ipa"
      ? "ipa"
      : currentView === "all-courses"
      ? "courses"
      : selectedVocabTopic !== null || currentView === "all-topics"
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
    if (user) {
      const saved = localStorage.getItem("current_lesson_day"); 
      return saved ? Number(saved) : null; 
    }
    return null;
  });

  useEffect(() => { 
    if (!user) {
      if (openLessonDay !== null) {
        setOpenLessonDay(null);
      }
      localStorage.removeItem("current_lesson_day");
      return;
    }

    if (openLessonDay !== null) { 
      localStorage.setItem("current_lesson_day", openLessonDay.toString()); 
    } else { 
      localStorage.removeItem("current_lesson_day"); 
    } 
  }, [openLessonDay, user]);

  const tier: UserTier = user?.tier ?? "free";

  const openLesson = (user && openLessonDay !== null) 
    ? findLesson(openLessonDay, activeLevel) 
    : undefined;

  const handleLessonClick = (day: number) => {
    if (isLessonLocked(day, tier, activeLevel)) {
      if (!user) {
        setLoginOpen(true);
      } else {
        if (activeLevel === "A2") setPaywallContext("A2_LESSON");
        else if (activeLevel === "B1") setPaywallContext("B1_LESSON");
        else setPaywallContext("GENERAL");
        setPaywallOpen(true);
      }
    } else {
      if (!user) {
        setLoginOpen(true);
        return;
      }
      setOpenLessonDay(day);
    }
  };

  if (openLesson) {
    return (
      <div className="h-screen w-screen bg-[#fcfcfc] dark:bg-[#111827] overflow-y-auto">
        <LessonDetail 
          lesson={openLesson} 
          onBack={() => setOpenLessonDay(null)} 
        />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f9f9f9] dark:bg-[#111827]">
      {/* 1. SIDEBAR */}
      <Sidebar
        activeLevel={activeLevel}
        onSelectLevel={(level) => {
          setActiveLevel(level);
          setSelectedTrack(level);
          setOpenLessonDay(null);
        }}
        onLockedClick={() => {
          if (activeLevel === "A2") setPaywallContext("A2_LESSON");
          else if (activeLevel === "B1") setPaywallContext("B1_LESSON");
          else setPaywallContext("GENERAL");
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
        onGoToCourses={() => {
          setSelectedTrack(null);
          setOpenLessonDay(null);
          setSelectedVocabTopic(null);
          setSelectedStory(null);
          setCurrentView("all-courses");
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
        onGoToIPA={() => {
          setSelectedTrack(null);
          setOpenLessonDay(null);
          setSelectedVocabTopic(null);
          setSelectedStory(null);
          setCurrentView("ipa");
        }}
        onGoToGrammar={() => { // 👈 Truyền hàm xử lý chuyển trang Grammar
          setSelectedTrack(null);
          setOpenLessonDay(null);
          setSelectedVocabTopic(null);
          setSelectedStory(null);
          setCurrentView("grammar");
        }}
        selectedTrack={selectedTrack}
        activeSection={sidebarSection}
        currentView={currentView}
      />

      {/* 2. AREA BÊN PHẢI (HEADER + MAIN) */}
      <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
        <Header
          user={user}
          streakCount={5}
          onLoginClick={() => setLoginOpen(true)}
          onUpgradeClick={() => {
            setPaywallContext("GENERAL");
            setPaywallOpen(true);
          }}
        onLogoutClick={signOut} // 👈 Thêm dòng này để kết nối hàm đăng xuất từ AuthContext
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto overflow-x-auto p-6 md:p-8">
          <div className="w-full max-w-[1240px] mx-auto">
            {selectedTrack !== null ? (
              <LevelCoursePage
                selectedTrack={selectedTrack}
                tier={tier}
                title="Tiêu đề khóa học"
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
            ) : selectedVocabTopic ? (
              <VocabularyTopicPage
                topic={selectedVocabTopic}
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
            ) : currentView === "all-courses" ? (
              <AllCoursesPage
                onBack={() => setCurrentView("home")}
                onSelectLevel={(level) => {
                  setActiveLevel(level);
                  setSelectedTrack(level);
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
            ) : currentView === "grammar" ? (
              <GrammarPage />
            ) : currentView === "ipa" ? (
              <IPAPage />
            ) : (
              <HomePage
                user={user}
                onLoginClick={() => setLoginOpen(true)}
                onLogoutClick={() => {
                  localStorage.clear();
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
                onViewAllCourses={() => setCurrentView("all-courses")}
                handleUpgrade={(purchasedTier) => {
                  upgradeToPremium(purchasedTier || "premium");
                }}
                onSelectGrammar={() => {
  // Dùng đúng hàm setCurrentView của App.tsx (chuyển đến view hiển thị trang GrammarPage, ví dụ là "grammar" hoặc "grammarpage")
  setCurrentView("grammar"); // Hoặc "grammarpage" tùy theo tên view mà app của nị đang bắt sự kiện để render trang Grammar
}}
              />
            )}
          </div>
        </main>
      </div>

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