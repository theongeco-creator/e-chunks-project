import { useState, useEffect } from "react";
import { CourseList } from "@/components/CourseList";
import { PaywallModal } from "@/components/PaywallModal";
import { LoginModal } from "@/components/LoginModal";
import { LessonDetail } from "@/components/lesson/LessonDetail";
import { findLesson } from "@/data/lessonData";
import { useAuth } from "@/auth/AuthContext";
import { isLessonLocked } from "@/auth/accessControl";
import type { UserTier } from "@/auth/types";
import { uploadLessonsToSupabase } from "./seedLessons";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  LogOut,
  Library,
  ChevronDown,
} from "lucide-react";
import { VocabularyTopicsSection } from "@/components/VocabularyTopicsSection";
import { VocabularyTopicPage } from "@/components/VocabularyTopicPage";
import type { VocabTopic } from "@/data/vocabulary";
import { AllTopicsPage } from "@/components/AllTopicsPage";
import { StoriesSection } from "@/components/StoriesSection";
import { StoryPage } from "@/components/StoryPage";
import { AllStoriesPage } from "@/components/AllStoriesPage";
import type { Story } from "@/data/types";

interface SidebarProps {
  activeLevel: "A2" | "B1";
  onSelectLevel: (level: "A2" | "B1") => void;
  onLockedClick: () => void;
  user: any;
  onLoginClick: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onGoHome: () => void;
  selectedTrack: "A2" | "B1" | null;
}

function Sidebar({
  activeLevel,
  onSelectLevel,
  user,
  onLoginClick,
  isCollapsed,
  onToggleCollapse,
  onGoHome,
  selectedTrack,
}: SidebarProps) {
  const [vocabOpen, setVocabOpen] = useState(false);
  return (
    <aside
      className={`flex flex-col justify-between hidden md:flex h-full py-3.5 transition-all duration-300 shrink-0 ${
        isCollapsed ? "w-16 px-1.5" : "w-64 px-2"
      }`}
      style={{ color: "var(--text-color)" }}
    >
      <div>
        {/* Logo & Nút thu nhỏ */}
        <div
          className={`flex items-center ${isCollapsed ? "justify-center flex-col gap-3" : "justify-between"} px-2 py-3 mb-3`}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <img
              src="/images/e-chunk-logo.svg"
              alt="EnglishChunks Logo"
              className="w-8 h-8 rounded-md object-cover shadow-sm shrink-0"
            />
            {!isCollapsed && (
              <span className="font-extrabold text-lg tracking-tight truncate text-white">
                E-Chunks
              </span>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-md border hover:opacity-85 transition shadow-sm bg-white/20 border-white/20 text-white shrink-0"
            title={isCollapsed ? "Mở rộng thanh menu" : "Thu gọn thanh menu"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="border-b mb-4 opacity-20 border-white" />

        {/* Nhóm 1: Menu chính */}
        {!isCollapsed && (
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2">
            Overview
          </p>
        )}
        <nav className="space-y-1 mb-4">
          <button
            onClick={onGoHome}
            className={`w-full flex items-center ${isCollapsed ? "justify-center px-1" : "gap-3 px-3"} py-2.5 rounded-md text-sm font-semibold transition-all ${
              selectedTrack === null
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Trang chủ"
          >
            <Home className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Trang chủ</span>}
          </button>

          <a
            href="#"
            className={`w-full flex items-center ${isCollapsed ? "justify-center px-1" : "gap-3 px-3"} py-2.5 rounded-md text-sm font-semibold text-white transition hover:bg-white/20 opacity-80 hover:opacity-100`}
            title="Stories"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Câu chuyện</span>}
          </a>

          {/* Menu Từ vựng */}
          <div>
            <button
              onClick={() => {
                if (!isCollapsed) {
                  setVocabOpen(!vocabOpen);
                }
              }}
              className={`w-full flex items-center py-2.5 rounded-md text-sm font-semibold text-white transition hover:bg-white/20 opacity-80 hover:opacity-100 ${
                isCollapsed ? "justify-center px-0" : "justify-between px-3"
              }`}
              title="Từ vựng theo chủ đề"
            >
              <div className="flex items-center gap-3">
                <Library className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span>Từ vựng</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${vocabOpen ? "rotate-180" : ""}`}
                />
              )}
            </button>

            {!isCollapsed && vocabOpen && (
              <div className="pl-6 pr-1 py-1.5 space-y-1 mt-1 border-l border-white/10 ml-4">
                <button
                  onClick={() => onSelectLevel("A2")}
                  className="w-full text-left px-3 py-2 rounded-md text-xs font-semibold text-white/80 hover:text-white hover:bg-white/15 transition"
                >
                  <span>A1 - Cơ bản</span>
                </button>
                <button
                  onClick={() => onSelectLevel("A2")}
                  className="w-full text-left px-3 py-2 rounded-md text-xs font-semibold text-white/80 hover:text-white hover:bg-white/15 transition"
                >
                  <span>A2 - Nền tảng</span>
                </button>
                <button
                  onClick={() => onSelectLevel("B1")}
                  className="w-full text-left px-3 py-2 rounded-md text-xs font-semibold text-white/80 hover:text-white hover:bg-white/15 transition"
                >
                  <span>B1 - Nâng cao</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        <div className="border-b mb-4 opacity-20 border-white" />

        {/* Nhóm 2: Phân loại lộ trình */}
        <div className="space-y-2 mb-4">
          {!isCollapsed && (
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
              Lộ trình học
            </p>
          )}

          <button
            onClick={() => onSelectLevel("A2")}
            className={`w-full flex items-center ${isCollapsed ? "justify-center py-3 px-0" : "justify-between px-3.5 py-2.5"} rounded-md text-sm font-semibold transition text-white ${
              selectedTrack === "A2"
                ? "bg-blue-600 shadow-md shadow-blue-500/25"
                : "hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Cấp độ A1"
          >
            <span className={isCollapsed ? "font-extrabold text-xs tracking-wider" : ""}>
              {isCollapsed ? "A1" : "A1 - Cơ bản"}
            </span>
          </button>

          <button
            onClick={() => onSelectLevel("A2")}
            className={`w-full flex items-center ${isCollapsed ? "justify-center py-3 px-0" : "justify-between px-3.5 py-2.5"} rounded-md text-sm font-semibold transition text-white ${
              selectedTrack === "A2"
                ? "bg-blue-600 shadow-md shadow-blue-500/25"
                : "hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Cấp độ A2"
          >
            <span className={isCollapsed ? "font-extrabold text-xs tracking-wider" : ""}>
              {isCollapsed ? "A2" : "A2 - Nền tảng"}
            </span>
          </button>

          <button
            onClick={() => onSelectLevel("B1")}
            className={`w-full flex items-center ${isCollapsed ? "justify-center py-3 px-0" : "justify-between px-3.5 py-2.5"} rounded-md text-sm font-semibold transition text-white ${
              selectedTrack === "B1"
                ? "bg-blue-600 shadow-md shadow-blue-500/20"
                : "hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Cấp độ B1"
          >
            <span className={isCollapsed ? "font-extrabold text-xs tracking-wider" : ""}>
              {isCollapsed ? "B1" : "B1 - Nâng cao"}
            </span>
          </button>
        </div>
      </div>

      {/* Khu vực Đáy Sidebar */}
      <div className="pt-4 border-t border-white/20 space-y-2">
        {user ? (
          <>
            <div
              className={`p-2.5 rounded-md flex items-center gap-2.5 bg-white shadow-sm ${isCollapsed ? "justify-center p-2" : ""}`}
            >
              <div className="w-8 h-8 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                {user.email ? user.email.charAt(0).toUpperCase() : "U"}
              </div>
              {!isCollapsed && (
                <div className="min-w-0 flex-1 flex flex-col justify-center gap-0.5">
                  <p className="text-xs font-bold truncate text-slate-900 leading-tight">
                    {user.email ? user.email.split("@")[0] : "Tài khoản"}
                  </p>
                  {user.tier === "premium" ? (
                    <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded w-fit">
                      Premium
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500 font-medium leading-tight">
                      Free Member
                    </span>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-white opacity-90 hover:opacity-100 hover:bg-white/15 rounded-md transition ${isCollapsed ? "justify-center px-0" : ""}`}
              title="Đăng xuất"
            >
              <LogOut className="w-4 h-4 shrink-0 text-white" />
              {!isCollapsed && <span>Đăng xuất</span>}
            </button>
          </>
        ) : (
          <button
            onClick={onLoginClick}
            className={`w-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs py-2.5 rounded-md transition shadow-sm text-center ${isCollapsed ? "px-1 text-[10px]" : ""}`}
            title="Đăng nhập / Đăng ký"
          >
            {isCollapsed ? "Login" : "Đăng nhập / Đăng ký"}
          </button>
        )}
      </div>
    </aside>
  );
}

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
                  <div className="space-y-6">
                    {/* 1. Dòng chào mừng kiểu minimalist */}
                    <div className="space-y-1 px-1">
                      <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                        <span>
                          {user
                            ? `Xin chào, ${user.email ? user.email.split("@")[0] : "Học viên"}`
                            : "Xin chào bạn"}
                        </span>
                        <span className="inline-block animate-bounce">👋</span>
                      </h1>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Chúc bạn một ngày học tập hiệu quả cùng E-Chunks.
                      </p>
                    </div>

                    {/* 2. Lưới tổng thể 2 cột (Trái: Nội dung, Phải: Banner + Quảng cáo) */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
                      {/* CỘT TRÁI (col-span-3) */}
                      <div className="lg:col-span-3 flex flex-col">
                        {/* KHUNG BENTO LỚN BỌC 3 CARD COURSE */}
                        <div className="bg-[#f9f9ff] dark:bg-slate-900 border-4 border-indigo-300 rounded-2xl p-5 shadow-sm space-y-4">
                          <div className="flex items-center justify-between">
                            <h2
                              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
                              style={{ color: "#0F172A" }}
                            >
                              Chọn lộ trình học phù hợp với bạn để bắt đầu.
                            </h2>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* CARD 1: LEVEL A1 REDESIGN LẠI*/}
                            <div
                              onClick={() => {
                                setActiveLevel("A2");
                                setSelectedTrack("A2");
                              }}
                              className="p-4 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between bg-cover bg-center min-h-[180px] relative overflow-hidden"
                              style={{ backgroundImage: "url('/images/card-1.png')" }}
                            >
                              <div className="space-y-3">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900">
                                    #Beginner
                                  </span>
                                </div>
                                <div>
                                  <h3
                                    className="font-bold text-lg mb-1"
                                    style={{ color: "#0F172A" }}
                                  >
                                    A1 – Cơ bản
                                  </h3>
                                  <p
                                    className="text-xs font-medium leading-relaxed"
                                    style={{ color: "#0F172A" }}
                                  >
                                    Hiểu và nói được vài câu đơn giản, quen thuộc về bản thân.
                                  </p>
                                  <p
                                    className="text-xs leading-relaxed"
                                    style={{ color: "#1C8D47" }}
                                  ></p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between my-2 py-1.5">
                                <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-[#bbade8] text-[#0F172A]">
                                  800 từ vựng
                                </span>
                              </div>
                            </div>

                            {/* CARD 2: LEVEL A2 REDESIGN LẠI*/}
                            <div
                              onClick={() => {
                                setActiveLevel("A2");
                                setSelectedTrack("A2");
                              }}
                              className="p-4 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between bg-cover bg-center min-h-[180px] relative overflow-hidden"
                              style={{ backgroundImage: "url('/images/card-2.png')" }}
                            >
                              <div className="space-y-3">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900">
                                    #Elementary
                                  </span>
                                </div>
                                <div>
                                  <h3
                                    className="font-bold text-lg mb-1"
                                    style={{ color: "#0F172A" }}
                                  >
                                    A2 – Sơ cấp
                                  </h3>
                                  <p
                                    className="text-xs font-medium leading-relaxed"
                                    style={{ color: "#0F172A" }}
                                  >
                                    Giao tiếp được trong các tình huống quen thuộc, đơn giản hằng
                                    ngày.
                                  </p>
                                  <p
                                    className="text-xs leading-relaxed"
                                    style={{ color: "#1C8D47" }}
                                  ></p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between my-2 py-1.5">
                                <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-[#efb0bc] text-[#0F172A]">
                                  1500 từ vựng
                                </span>
                              </div>
                            </div>

                            {/* CARD 3: LEVEL B1 REDESIGN LẠI*/}
                            <div
                              onClick={() => {
                                setActiveLevel("B1");
                                setSelectedTrack("B1");
                              }}
                              className="p-4 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between bg-cover bg-center min-h-[180px] relative overflow-hidden"
                              style={{ backgroundImage: "url('/images/card-3.png')" }}
                            >
                              <div className="space-y-3">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900">
                                    #Intermediate
                                  </span>
                                </div>
                                <div>
                                  <h3
                                    className="font-bold text-lg mb-1"
                                    style={{ color: "#0F172A" }}
                                  >
                                    B1 – Trung cấp
                                  </h3>
                                  <p
                                    className="text-xs font-medium leading-relaxed"
                                    style={{ color: "#0F172A" }}
                                  >
                                    Nói và viết được về công việc, du lịch, sở thích — dù đôi lúc
                                    chưa trôi chảy.
                                  </p>
                                  <p
                                    className="text-xs leading-relaxed"
                                    style={{ color: "#1C8D47" }}
                                  ></p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between my-2 py-1.5">
                                <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-[#85FBAE] text-[#0F172A]">
                                  3000 từ vựng
                                </span>
                              </div>
                            </div>

                            {/* end card*/}
                          </div>
                        </div>
                      </div>

                      {/* CỘT PHẢI (col-span-1): chiều cao khớp với khung "Chọn lộ trình" bên trái */}
                      <div className="lg:col-span-1 h-full">
                        <div
                          className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 bg-cover bg-center h-full min-h-[220px] shadow-sm"
                          style={{ backgroundImage: "url('/images/Home-banner.jpg')" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-12">
                      {/* TỪ VỰNG THEO CHỦ ĐỀ */}
                      <div className="space-y-4">
                        <VocabularyTopicsSection
                          onSelectTopic={(topic: VocabTopic) => setSelectedVocabTopic(topic)}
                          onViewAll={() => setCurrentView("all-topics")}
                        />
                      </div>

                      {/* TRUYỆN */}
                      <div className="space-y-4">
                        <StoriesSection
                          onSelectStory={(story: Story) => setSelectedStory(story)}
                          onViewAll={() => setCurrentView("all-stories")}
                        />
                      </div>
                    </div>
                  </div>
                )
              ) : (
                // Trường hợp khi bấm vào level
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedTrack(null)}
                      className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-xs hover:text-blue-700 bg-blue-50 dark:bg-blue-950/60 px-3 py-2 rounded-md transition"
                    >
                      ← Quay lại trang chủ
                    </button>
                    <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-600 text-white">
                      Lộ trình: {selectedTrack}
                    </span>
                  </div>

                  <div>
                    <h2
                      className="text-lg font-bold tracking-tight mb-4"
                      style={{ color: "var(--text-color)" }}
                    >
                      Danh sách bài học cấp độ {selectedTrack}
                    </h2>
                    <CourseList
                      tier={tier}
                      activeLevel={selectedTrack}
                      onLessonClick={handleLessonClick}
                      onLockedClick={() => {
                        if (!user) {
                          setLoginOpen(true);
                        } else {
                          setPaywallOpen(true);
                        }
                      }}
                    />
                  </div>
                </div>
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