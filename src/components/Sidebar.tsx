import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  LogOut,
  Library,
  ChevronDown,
} from "lucide-react";

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
  onGoToVocab: () => void;
  onGoToStories: () => void;
  selectedTrack: "A2" | "B1" | null;
  activeSection: "home" | "vocab" | "stories";
}

export function Sidebar({
  activeLevel,
  onSelectLevel,
  user,
  onLoginClick,
  isCollapsed,
  onToggleCollapse,
  onGoHome,
  onGoToVocab,
  onGoToStories,
  selectedTrack,
  activeSection,
}: SidebarProps) {
  // Đổi tên state cho đúng ý nghĩa mới: đóng/mở menu con của "Lộ trình học"
  const [routeOpen, setRouteOpen] = useState(false);

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
              selectedTrack === null && activeSection === "home"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Trang chủ"
          >
            <Home className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Trang chủ</span>}
          </button>

          <button
            onClick={onGoToStories}
            className={`w-full flex items-center ${isCollapsed ? "justify-center px-1" : "gap-3 px-3"} py-2.5 rounded-md text-sm font-semibold transition-all ${
              selectedTrack === null && activeSection === "stories"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Câu chuyện"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Câu chuyện</span>}
          </button>

          {/* Menu Từ vựng - giờ là link đơn, không còn menu con */}
          <button
            onClick={onGoToVocab}
            className={`w-full flex items-center ${isCollapsed ? "justify-center px-1" : "gap-3 px-3"} py-2.5 rounded-md text-sm font-semibold transition-all ${
              selectedTrack === null && activeSection === "vocab"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Từ vựng theo chủ đề"
          >
            <Library className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Từ vựng</span>}
          </button>
        </nav>

        <div className="border-b mb-4 opacity-20 border-white" />

        {/* Nhóm 2: Lộ trình học - giờ có menu con gồm 3 level */}
        <div className="space-y-2 mb-4">
          {!isCollapsed && (
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
              Lộ trình học
            </p>
          )}

          <button
            onClick={() => {
              if (!isCollapsed) {
                setRouteOpen(!routeOpen);
              }
            }}
            className={`w-full flex items-center py-2.5 rounded-md text-sm font-semibold text-white transition hover:bg-white/20 opacity-80 hover:opacity-100 ${
              isCollapsed ? "justify-center px-0" : "justify-between px-3.5"
            } ${selectedTrack !== null ? "bg-blue-600 shadow-md shadow-blue-500/25 opacity-100" : ""}`}
            title="Lộ trình học"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>Lộ trình học</span>}
            </div>
            {!isCollapsed && (
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${routeOpen ? "rotate-180" : ""}`}
              />
            )}
          </button>

          {!isCollapsed && routeOpen && (
            <div className="pl-6 pr-1 py-1.5 space-y-1 mt-1 border-l border-white/10 ml-4">
              <button
                onClick={() => onSelectLevel("A2")}
                className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition ${
                  selectedTrack === "A2"
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/15"
                }`}
              >
                A1 - Cơ bản
              </button>
              <button
                onClick={() => onSelectLevel("A2")}
                className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition ${
                  selectedTrack === "A2"
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/15"
                }`}
              >
                A2 - Nền tảng
              </button>
              <button
                onClick={() => onSelectLevel("B1")}
                className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition ${
                  selectedTrack === "B1"
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/15"
                }`}
              >
                B1 - Nâng cao
              </button>
            </div>
          )}
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