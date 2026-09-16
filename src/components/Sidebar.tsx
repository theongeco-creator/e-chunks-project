import { useState } from "react";
// 🚀 IMPORT HEROICONS (Bản Outline & Solid)
import {
  HomeIcon as HomeOutline,
  BookOpenIcon as BookOutline,
  AcademicCapIcon as CapOutline,
  CircleStackIcon as VocabOutline,
  ChevronLeftIcon,
  ChevronRightIcon,
  SpeakerWaveIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeSolid,
  BookOpenIcon as BookSolid,
  AcademicCapIcon as CapSolid,
  CircleStackIcon as VocabSolid,
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

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
  onGoToCourses?: () => void; // 👈 Thêm dòng này
}

export function Sidebar({
  activeLevel,
  onSelectLevel,
  user,
  onLoginClick,
  onLockedClick,
  isCollapsed,
  onToggleCollapse,
  onGoHome,
  onGoToVocab,
  onGoToStories,
  selectedTrack,
  activeSection,
  onGoToCourses, // 👈 Thêm prop này vào đây
}: SidebarProps) {
  return (
    <aside
      className={`group relative flex flex-col justify-between hidden md:flex h-full py-3.5 transition-all duration-300 shrink-0 bg-[#513DEB] ${
        isCollapsed ? "w-16 px-2" : "w-52 px-2.5" // 👈 Thu hẹp chiều ngang w-52 (208px)
      }`}
      style={{ color: "var(--text-color)" }}
    >
      {/* 🚀 Nút mũi tên viền tím hiện ở mép khi Hover */}
      <button
        onClick={onToggleCollapse}
        className="absolute top-6 -right-3.5 z-20 flex items-center justify-center w-7 h-7 rounded-full bg-white border-2 border-[#4149D0] text-[#4149D0] shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 cursor-pointer"
        title={isCollapsed ? "Mở rộng thanh menu" : "Thu gọn thanh menu"}
      >
        {isCollapsed ? (
          <ChevronRightIcon className="w-3.5 h-3.5 stroke-[3]" />
        ) : (
          <ChevronLeftIcon className="w-3.5 h-3.5 stroke-[3]" />
        )}
      </button>

      <div>
        {/* Header Logo */}
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "justify-start"
          } px-2 py-2 mb-2`}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <img
              src="/images/e-chunk-logo.svg"
              alt="EnglishChunks Logo"
              className="w-7 h-7 rounded-md object-cover shadow-sm shrink-0"
            />
            {!isCollapsed && (
              <span className="font-extrabold text-base tracking-tight truncate text-white">
                E-Chunks
              </span>
            )}
          </div>
        </div>

        <div className="border-b mb-3 opacity-20 border-white" />

        {/* Nhóm 1: Overview */}
        {!isCollapsed && (
          <p className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1.5">
            Overview
          </p>
        )}
        <nav className="space-y-0.5 mb-3">
          {/* Nút Trang Chủ */}
          <button
            onClick={onGoHome}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === null && activeSection === "home"
                ? "bg-white text-[#513DEB] shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Trang chủ"
          >
            {selectedTrack === null && activeSection === "home" ? (
              <HomeSolid className="w-5 h-5 shrink-0 text-[#513DEB]" />
            ) : (
              <HomeOutline className="w-5 h-5 shrink-0 text-white stroke-[2]" />
            )}
            {!isCollapsed && <span className="truncate"> Trang chủ </span>}
          </button>

          {/* 1. NÚT KHÓA HỌC */}
          <button
            onClick={onGoToCourses}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold text-white hover:bg-white/20 opacity-80 hover:opacity-100 transition-all cursor-pointer`}
            title="Khóa học"
          >
            <AcademicCapIcon className="w-5 h-5 shrink-0 text-white stroke-[2]" />
            {!isCollapsed && <span className="truncate">Khóa học</span>}
          </button>

          {/* Nút Truyện */}
          <button
            onClick={onGoToStories}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === null && activeSection === "stories"
                ? "bg-white text-[#513DEB] shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Câu chuyện"
          >
            {selectedTrack === null && activeSection === "stories" ? (
              <BookSolid className="w-5 h-5 shrink-0 text-[#513DEB]" />
            ) : (
              <BookOutline className="w-5 h-5 shrink-0 text-white stroke-[2]" />
            )}
            {!isCollapsed && <span className="truncate">Truyện</span>}
          </button>

          {/* Nút Từ Vựng */}
          <button
            onClick={onGoToVocab}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === null && activeSection === "vocab"
                ? "bg-white text-[#513DEB] shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="Từ vựng theo chủ đề"
          >
            {selectedTrack === null && activeSection === "vocab" ? (
              <VocabSolid className="w-5 h-5 shrink-0 text-[#513DEB]  " />
            ) : (
              <VocabOutline className="w-5 h-5 shrink-0 text-white stroke-[2]" />
            )}
            {!isCollapsed && <span className="truncate">Từ vựng</span>}
          </button>

          {/* 2. NÚT IPA */}
          <button
            onClick={onGoToVocab}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold text-white hover:bg-white/20 opacity-80 hover:opacity-100 transition-all cursor-pointer`}
            title="Bảng phiên âm IPA"
          >
            <SpeakerWaveIcon className="w-5 h-5 shrink-0 text-white stroke-[2]" />
            {!isCollapsed && <span className="truncate">IPA</span>}
          </button>
        </nav>

        <div className="border-b mb-3 opacity-20 border-white" />

        {/* Nhóm 2: Lộ trình học */}
        <div className="space-y-0.5 mb-3">
          {!isCollapsed && (
            <p className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1.5">
              Lộ trình học
            </p>
          )}

          {/* Level A1 */}
          <button
            onClick={() => onSelectLevel("A1")}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === "A1"
                ? "bg-white text-[#513DEB] shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="A1 - Căn bản"
          >
            {isCollapsed ? (
              <span className="font-extrabold text-xs tracking-wider">A1</span>
            ) : (
              <>
                {selectedTrack === "A1" ? (
                  <CapSolid className="w-5 h-5 shrink-0 text-[#513DEB]" />
                ) : (
                  <CapOutline className="w-5 h-5 shrink-0 text-white stroke-[2]" />
                )}
                <span className="truncate">A1 - Căn bản</span>
              </>
            )}
          </button>

          {/* Level A2 */}
          <button
            onClick={() => onSelectLevel("A2")}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === "A2"
                ? "bg-white text-[#513DEB] shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="A2 - Sơ cấp"
          >
            {isCollapsed ? (
              <span className="font-extrabold text-xs tracking-wider">A2</span>
            ) : (
              <>
                {selectedTrack === "A2" ? (
                  <CapSolid className="w-5 h-5 shrink-0 text-[#513DEB]" />
                ) : (
                  <CapOutline className="w-5 h-5 shrink-0 text-white stroke-[2]" />
                )}
                <span className="truncate">A2 - Sơ cấp</span>
              </>
            )}
          </button>

          {/* Level B1 */}
          <button
            onClick={() => onSelectLevel("B1")}
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center px-1" : "gap-2 px-2.5"
            } py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === "B1"
                ? "bg-white text-[#513DEB] shadow-sm"
                : "text-white hover:bg-white/20 opacity-80 hover:opacity-100"
            }`}
            title="B1 - Trung cấp"
          >
            {isCollapsed ? (
              <span className="font-bold text-xs tracking-wider">B1</span>
            ) : (
              <>
                {selectedTrack === "B1" ? (
                  <CapSolid className="w-5 h-5 shrink-0 text-[#513DEB]" />
                ) : (
                  <CapOutline className="w-5 h-5 shrink-0 text-white stroke-[2]" />
                )}
                <span className="truncate">B1 - Trung cấp</span>
              </>
            )}
          </button>
        </div>
      </div>


    </aside>
  );
}