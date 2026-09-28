import { useState, useEffect } from "react";
import { LevelCoursePage } from "@/components/LevelCoursePage";
import { PaywallModal } from "@/components/PaywallModal";
import { LoginModal } from "@/components/LoginModal";
import { LessonDetail } from "@/components/lesson/LessonDetail";
import { findLesson, categoriesA1, categoriesA2, categoriesB1 } from "@/data/lessonData";
import { useAuth } from "@/auth/AuthContext";
import { isLessonLocked } from "@/auth/accessControl";
import type { UserTier } from "@/auth/types";
import { Sidebar } from "@/components/Sidebar";
import { VocabularyTopicPage } from "@/components/VocabularyTopicPage";
import type { VocabTopic } from "@/data/types";
import { AllTopicsPage } from "@/components/AllTopicsPage";
import { StoryPage } from "@/components/StoryPage";
import { AllStoriesPage } from "@/components/AllStoriesPage";
import { HomePage } from "@/components/HomePage";
import { Header } from "@/components/Header";
import type { Story } from "@/data/types";
import { AllCoursesPage } from "@/components/AllCoursesPage";
import { IPAPage } from "@/pages/IPAPage";
import { GrammarPage } from "./components/Pages/GrammarPage";
import { ProfilePage } from "@/components/ProfilePage";
import { SettingsModal } from "@/components/SettingsModal"; // Hoặc đường dẫn tương ứng với nơi bà lưu file SettingsModal
import { HelpCenterPage } from "@/components/HelpCenterPage";
import { PrivacyPolicyPage } from "@/components/PrivacyPolicyPage";

type Level = "A1" | "A2" | "B1";

// Bài học gần nhất user đã mở (dùng cho widget "Continue learning")
type LastLesson = { level: Level; day: number };

const LAST_LESSON_KEY = "last_lesson";

// Cùng luật với CourseList: >= 4 tab và tất cả đều true mới là "hoàn thành"
const isLessonComplete = (level: string, day: number): boolean => {
  try {
    const raw = localStorage.getItem(`lesson_progress_${level}_${day}`);
    if (!raw) return false;
    const values = Object.values(JSON.parse(raw));
    return values.length >= 4 && values.every((v) => v === true);
  } catch {
    return false;
  }
};

// Đã bắt đầu học bài này chưa (có ít nhất 1 tab đã hoàn thành)
const hasStarted = (level: string, day: number): boolean => {
  try {
    const raw = localStorage.getItem(`lesson_progress_${level}_${day}`);
    if (!raw) return false;
    return Object.values(JSON.parse(raw)).some((v) => v === true);
  } catch {
    return false;
  }
};

const getCategories = (level: Level) =>
  level === "B1" ? categoriesB1 : level === "A1" ? categoriesA1 : categoriesA2;

// Nếu chưa có last_lesson (user đã học từ trước khi có tính năng này)
// thì suy ra từ các key lesson_progress_<LEVEL>_<DAY> đã có sẵn.
// Bài nào đã xong hết các kỹ năng (toàn true) -> trỏ sang bài kế tiếp.
const deriveLastLesson = (): LastLesson | null => {
  let best: LastLesson | null = null;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;
    const m = key.match(/^lesson_progress_(A1|A2|B1)_(\d+)$/);
    if (!m) continue;
    const level = m[1] as Level;
    let day = Number(m[2]);
    if (isLessonComplete(level, day)) day += 1; // xong rồi -> trỏ sang bài kế tiếp
    if (!best || day > best.day) best = { level, day };
  }
  return best;
};

export default function App() {
  const { user, signOut, upgradeToPremium } = useAuth();
  const [activeLevel, setActiveLevel] = useState<Level>("A1");
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Level | null>(null);
  const [paywallContext, setPaywallContext] = useState<"GENERAL" | "A2_LESSON" | "B1_LESSON">("GENERAL");
  const [selectedVocabTopic, setSelectedVocabTopic] = useState<VocabTopic | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  // STATE VIEW
  const [currentView, setCurrentView] = useState<
  "home" | "all-topics" | "all-stories" | "all-courses" | "ipa" | "grammar" | "profile" | "help" | "privacy"
>("home");

  // LOGIC SIDEBAR ACTIVE SECTION
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

  // ================= DARK MODE =================
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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // ================= BÀI HỌC ĐANG MỞ =================
  // (dùng để F5 vẫn còn ở trong bài học; key này bị xóa khi thoát bài, đúng ý đồ ban đầu)
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

  // ================= CONTINUE LEARNING =================
  // Key RIÊNG, KHÔNG bị xóa khi thoát bài -> trang chủ vẫn đọc được.
  // Chỉ bị xóa khi đăng xuất.
  const [lastLesson, setLastLesson] = useState<LastLesson | null>(() => {
    try {
      const raw = localStorage.getItem(LAST_LESSON_KEY);
      return raw ? (JSON.parse(raw) as LastLesson) : deriveLastLesson();
    } catch {
      return null;
    }
  });

  const saveLastLesson = (level: Level, day: number) => {
    const data: LastLesson = { level, day };
    setLastLesson(data);
    localStorage.setItem(LAST_LESSON_KEY, JSON.stringify(data));
  };

  // Bất kỳ lúc nào đang mở một bài (kể cả bài được khôi phục sau F5) đều lưu lại
  useEffect(() => {
    if (user && openLessonDay !== null) {
      saveLastLesson(activeLevel, openLessonDay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openLessonDay, user]);

  const handleSignOut = () => {
    localStorage.removeItem(LAST_LESSON_KEY);
    setLastLesson(null);
    signOut();
  };

  const tier: UserTier = user?.tier ?? "free";

  const openLesson =
    user && openLessonDay !== null ? findLesson(openLessonDay, activeLevel) : undefined;

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
      saveLastLesson(activeLevel, day); // 👈 lưu lại để hiện ở Continue learning
      setOpenLessonDay(day);
    }
  };

  // Reset toàn bộ về 1 màn hình (dùng cho sidebar cho gọn)
  const resetSelections = () => {
    setSelectedTrack(null);
    setOpenLessonDay(null);
    setSelectedVocabTopic(null);
    setSelectedStory(null);
  };

  // ================= MÀN HÌNH HỌC BÀI =================
  if (openLesson) {
    return (
      <div className="h-screen w-screen bg-[#fcfcfc] dark:bg-[#111827] overflow-y-auto">
        <LessonDetail
          lesson={openLesson}
          level={activeLevel}
          onBack={() => setOpenLessonDay(null)}
        />
      </div>
    );
  }

  // ================= WIDGET CONTINUE LEARNING =================
  // Chỉ hiện khóa học ĐÃ CÓ TIẾN ĐỘ (đã làm ít nhất 1 phần) và chưa học xong.
  // Mở bài xem thử mà chưa làm gì thì KHÔNG tính.
  // Ưu tiên khóa vừa mở gần nhất; bài hiện tại = bài đầu tiên chưa hoàn thành.
  let activeCourse:
    | {
        level: string;
        title: string;
        currentLessonTitle: string;
        progressPercent: number;
        timeLeft: string;
        image?: string;
      }
    | undefined;
  let resumeTarget: { level: Level; day: number } | null = null;

  if (user) {
    const allLevels: Level[] = ["A1", "A2", "B1"];
    const ordered = lastLesson
      ? [lastLesson.level, ...allLevels.filter((l) => l !== lastLesson.level)]
      : allLevels;

    for (const level of ordered) {
      const allDays = getCategories(level).flatMap((c) => c.lessons.map((l) => l.day));
      const total = allDays.length;
      const done = allDays.filter((d) => isLessonComplete(level, d)).length;
      const started = allDays.some((d) => hasStarted(level, d));
      const nextDay = allDays.find((d) => !isLessonComplete(level, d));

      if (total > 0 && started && done < total && nextDay !== undefined) {
        const lesson = findLesson(nextDay, level);
        activeCourse = {
          level,
          title: `Khóa ${level}`,
          currentLessonTitle: lesson ? `Day ${nextDay}: ${lesson.title}` : `Day ${nextDay}`,
          progressPercent: Math.round((done / total) * 100),
          timeLeft: `${done}/${total} bài học`,
          image: lesson?.image,
        };
        resumeTarget = { level, day: nextDay };
        break;
      }
    }
  }

  const handleResumeCourse = () => {
    if (!user || !resumeTarget) return;
    setActiveLevel(resumeTarget.level); // set level trước để findLesson tìm đúng
    if (isLessonLocked(resumeTarget.day, tier, resumeTarget.level)) {
      setPaywallContext(
        resumeTarget.level === "A2" ? "A2_LESSON" : resumeTarget.level === "B1" ? "B1_LESSON" : "GENERAL"
      );
      setPaywallOpen(true);
      return;
    }
    saveLastLesson(resumeTarget.level, resumeTarget.day);
    setOpenLessonDay(resumeTarget.day);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fcfcfc] dark:bg-[#111827]">
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
          resetSelections();
          setCurrentView("home");
        }}
        onGoToCourses={() => {
          resetSelections();
          setCurrentView("all-courses");
        }}
        onGoToVocab={() => {
          resetSelections();
          setCurrentView("all-topics");
        }}
        onGoToStories={() => {
          resetSelections();
          setCurrentView("all-stories");
        }}
        onGoToIPA={() => {
          resetSelections();
          setCurrentView("ipa");
        }}
        onGoToGrammar={() => {
          resetSelections();
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
        onOpenProfile={() => setCurrentView("profile")}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHelp={() => setCurrentView("help")}
        onOpenPrivacy={() => setCurrentView("privacy")}
        onLogoutClick={handleSignOut}
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
        onBackToTopics={() => setSelectedVocabTopic(null)}
      />
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
          onCompleteStory={(storyId) => {
            const saved = localStorage.getItem("completed_stories");
            const completed = saved ? JSON.parse(saved) : {};
            completed[storyId] = true;
            localStorage.setItem("completed_stories", JSON.stringify(completed));
          }}
        />
      </div>
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
    ) : currentView === "profile" ? (
      <ProfilePage
        user={user}
        onLogout={() => {
          signOut();
          setCurrentView("home");
        }}
        onUpgradeClick={() => {
          setPaywallContext("GENERAL");
          setPaywallOpen(true);
        }}
        onUpdateProfile={(updatedData) => {
          console.log("Updated:", updatedData);
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />
      ) : currentView === "help" ? (
      <HelpCenterPage onBack={() => setCurrentView("home")} />
    ) : currentView === "privacy" ? (
      <PrivacyPolicyPage onBack={() => setCurrentView("home")} />
    ) : (
      <HomePage
        user={user}
        onLoginClick={() => setLoginOpen(true)}
        onLogoutClick={handleSignOut}
        onSelectLevel={(level) => {
          setActiveLevel(level);
          setSelectedTrack(level);
        }}
        onSelectVocabTopic={(topic) => setSelectedVocabTopic(topic)}
        onViewAllTopics={() => setCurrentView("all-topics")}
        onSelectStory={(story) => setSelectedStory(story)}
        onViewAllStories={() => setCurrentView("all-stories")}
        onViewAllCourses={() => setCurrentView("all-courses")}
        onSelectGrammar={() => setCurrentView("grammar")}
        handleUpgrade={(purchasedTier) => {
          if (purchasedTier) upgradeToPremium(purchasedTier);
          setPaywallOpen(true);
        }}
        activeCourse={activeCourse}
        onResumeCourse={handleResumeCourse}
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

      {/* Modal Cài đặt (SettingsModal) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        user={user}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onLogout={handleSignOut}
        tier={tier} // 👈 Truyền tier xuống đây
      />

    </div>
  );
}