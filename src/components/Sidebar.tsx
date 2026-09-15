import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  LogOut,
  Library,
  GraduationCap,
  Crown,
} from "lucide-react";

interface SidebarProps {
  activeLevel: "A1" | "A2" | "B1";
  onSelectLevel: (level: "A1" | "A2" | "B1") => void;
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
  selectedTrack: "A1" | "A2" | "B1" | null;
  activeSection: "home" | "vocab" | "stories";
  
}

export function Sidebar({
  activeLevel,
  onSelectLevel,
  user,
  onLoginClick,
  onLockedClick, // 👈 THÊM DÒNG NÀY VÀO ĐÂY LÀ XONG!
  isCollapsed,
  onToggleCollapse,
  onGoHome,
  onGoToVocab,
  onGoToStories,
  selectedTrack,
  activeSection,
}: SidebarProps) {
  return (
    <aside
      className={`flex flex-col justify-between hidden md:flex h-full py-3.5 transition-all duration-300 shrink-0 bg-[#4149D0] rounded-r-lg overflow-hidden ${
        isCollapsed ? "w-18 px-3" : "w-64 px-4"
      }`}
      style={{ color: "var(--text-color)" }}
    >
      <div>
        {/* Logo & Nút thu nhỏ */}
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center flex-col gap-3" : "justify-between"
          } px-2 py-3 mb-3`}
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
            className="p-1.5 rounded-md border hover:opacity-85 transition shadow-sm bg-white/20 border-white/20 text-white shrink-0 cursor-pointer"
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
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-3 px-3"
            } py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
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
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-3 px-3"
            } py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
              selectedTrack === null && activeSection === "stories"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Câu chuyện"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Truyện</span>}
          </button>

          <button
            onClick={onGoToVocab}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-3 px-3"
            } py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
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

        {/* Nhóm 2: Lộ trình học - Khi thu gọn sẽ hiện chữ A1, A2, B1 */}
        <div className="space-y-1 mb-4">
          {!isCollapsed && (
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2">
              Lộ trình học
            </p>
          )}

          {/* Level A1 */}
          <button
            onClick={() => onSelectLevel("A1")}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-3 px-3"
            } py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
              selectedTrack === "A1"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="A1 - Căn bản"
          >
            {isCollapsed ? (
              <span className="font-extrabold text-xs tracking-wider">A1</span>
            ) : (
              <>
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>A1 - Căn bản</span>
              </>
            )}
          </button>

          {/* Level A2 */}
          <button
            onClick={() => onSelectLevel("A2")}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-3 px-3"
            } py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
              selectedTrack === "A2"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="A2 - Sơ cấp"
          >
            {isCollapsed ? (
              <span className="font-extrabold text-xs tracking-wider">A2</span>
            ) : (
              <>
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>A2 - Sơ cấp</span>
              </>
            )}
          </button>

          {/* Level B1 */}
          <button
            onClick={() => onSelectLevel("B1")}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-3 px-3"
            } py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
              selectedTrack === "B1"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="B1 - Trung cấp"
          >
            {isCollapsed ? (
              <span className="font-extrabold text-xs tracking-wider">B1</span>
            ) : (
              <>
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>B1 - Trung cấp</span>
              </>
            )}
          </button>
        </div> 
      </div>

      {/* Khu vực Đáy Sidebar */}
      <div className="pt-4 border-t border-white/20 space-y-2">
        
        {/* ================= VỊ TRÍ 1: NÚT NÂNG CẤP PRO ================= */}
        {user && user.tier !== "premium" && (
          <button
            onClick={onLockedClick} // 👈 Bấm mở Popup Paywall sáng card Combo
            className={`w-full py-2.5 px-3 bg-amber-300 hover:bg-amber-300 text-white-900 font-extrabold text-xs rounded-md shadow-md flex items-center justify-center gap-2 transition cursor-pointer mb-2 ${
              isCollapsed ? "px-1" : ""
            }`}
            title="Nâng cấp Pro"
          >
            <Crown className="w-4 h-4 text-slate-900 shrink-0" />
            {!isCollapsed && <span>Nâng cấp Pro</span>}
          </button>
        )}
      </div>
    </aside>
  );
}