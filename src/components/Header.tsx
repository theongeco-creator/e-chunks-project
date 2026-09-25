import { useState, useRef, useEffect } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  UserIcon,
  Cog6ToothIcon,
  UserPlusIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  ArrowRightOnRectangleIcon,
  CheckIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { BoltIcon as BoltSolid } from "@heroicons/react/24/solid";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

interface HeaderProps {
  user?: any;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  onUpgradeClick?: () => void;
  streakCount?: number;
  saversCount?: number;
  weekData?: {
    day: string;
    completed: boolean;
    isToday: boolean;
  }[];
}

// Dữ liệu giả lập thông báo
const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    title: "Chào mừng bạn!",
    description: "Bắt đầu bài học đầu tiên trong lộ trình A1 ngay nào.",
    time: "5 phút trước",
    unread: true,
  },
  {
    id: 2,
    title: "Chuỗi học tập 🔥",
    description: "Bạn đã duy trì chuỗi học 5 ngày liên tiếp!",
    time: "1 giờ trước",
    unread: true,
  },
  {
    id: 3,
    title: "Cập nhật khóa học",
    description: "Bài học Day 12 Ngữ pháp mới đã được thêm vào.",
    time: "1 ngày trước",
    unread: false,
  },
];

export function Header({
  user,
  onLoginClick,
  onLogoutClick,
  onUpgradeClick,
  streakCount = 1,
  saversCount = 1,
  weekData = [
    { day: "M", completed: true, isToday: false },
    { day: "T", completed: true, isToday: false },
    { day: "W", completed: true, isToday: false },
    { day: "T", completed: true, isToday: false },
    { day: "F", completed: false, isToday: true },
    { day: "S", completed: false, isToday: false },
    { day: "S", completed: false, isToday: false },
  ],
}: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");
  
  // States quản lý trạng thái Đóng/Mở các Popover
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpenNotif, setIsOpenNotif] = useState(false);
  const [isOpenStreak, setIsOpenStreak] = useState(false);
  
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);

  // Số lượng thông báo chưa đọc
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Đánh dấu tất cả thông báo là đã đọc
  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  // Lắng nghe sự kiện click ngoài để tự động đóng các popup menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setIsOpenNotif(false);
      }
      if (
        streakRef.current &&
        !streakRef.current.contains(event.target as Node)
      ) {
        setIsOpenStreak(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between gap-4 sticky top-0 z-20">
      {/* 1. Ô Tìm Kiếm */}
      <div className="flex-1 max-w-md">
        <Input
          type="text"
          icon={<MagnifyingGlassIcon className="w-4 h-4 stroke-[4]" />}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Tìm kiếm khóa học, từ vựng..."
        />
      </div>

      {/* 2. Cụm Tiện ích bên phải */}
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        {/* Nút Upgrade */}
        <Button variant="primary" size="sm" onClick={onUpgradeClick}>
          Upgrade
        </Button>

        {/* ⚡️ STREAK BUTTON & POPOVER (DẠNG UXCEL) */}
        <div className="relative" ref={streakRef}>
          <button
            onClick={() => {
              setIsOpenStreak(!isOpenStreak);
              setIsOpenNotif(false);
              setIsDropdownOpen(false);
            }}
            className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition"
          title={`Chuỗi học tập: ${streakCount} ngày`}
        >
          <BoltSolid className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-bold text-gray-500">{streakCount}</span>
          </button>

          {/* Popup Streak Xổ Xuống */}
          {isOpenStreak && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              {/* Header Popover */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-gray-900 text-base leading-tight">
                      {streakCount} day streak
                    </h4>
                    <InformationCircleIcon className="w-4 h-4 text-gray-400" />
                  </div>

                  {/* Savers */}
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 font-medium">
                    <span>Savers</span>
                    <div className="flex items-center gap-1">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          saversCount >= 1 ? "bg-brand-500" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          saversCount >= 2 ? "bg-brand-500" : "bg-gray-300"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Icon Sét Vàng Uxcel */}
                <div className="text-amber-400 drop-shadow-sm">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                  </svg>
                </div>
              </div>

              {/* Dải 7 ngày trong tuần */}
              <div className="flex items-center justify-between gap-1 pt-2">
                {weekData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center py-1.5 px-1.5 rounded-md transition ${
                      item.isToday ? "bg-gray-100/80 " : ""
                    }`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center mb-1">
                      {item.completed ? (
                        <div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-xs">
                          <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-200" />
                      )}
                    </div>
                    <span
                      className={`text-[12px] font-bold ${
                        item.isToday ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 🔔 NÚT & POPOVER THÔNG BÁO */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setIsOpenNotif(!isOpenNotif);
              setIsOpenStreak(false);
              setIsDropdownOpen(false);
            }}
            className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition cursor-pointer"
            title="Thông báo"
          >
            <BellIcon className="w-5 h-5 stroke-[1.8]" />
            {/* Chấm đỏ nếu còn thông báo chưa đọc */}
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            )}
          </button>

          {/* Popup Menu Xổ Xuống Của Thông Báo */}
          {isOpenNotif && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
              {/* Header của Popup */}
              <div className="p-3.5 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-slate-800">Thông báo</h3>
                  {unreadCount > 0 && (
                    <span className="bg-brand-soft text-brand-500 text-[11px] font-bold px-2 py-1 rounded-md">
                      {unreadCount} mới
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={handleMarkAllAsRead}
                    className="text-xs font-semibold text-brand-500 hover:underline cursor-pointer"
                  >
                    Đánh dấu đã đọc
                  </button>
                )}
              </div>

              {/* Danh sách Thông báo */}
              <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-xs text-gray-400">
                    Không có thông báo nào
                  </div>
                ) : (
                  notifications.map((item) => (
                    <div
                    key={item.id}
                    className={`p-3.5 hover:bg-slate-50 transition cursor-pointer flex gap-3 items-start ${
                      item.unread ? "bg-brand-soft/40" : ""
                    }`}
                  >
                    {/* Chỉnh mt-0.5 để icon thẳng hàng chuẩn đỉnh với dòng tiêu đề */}
                    <div className="mt-0.5 p-2 rounded-md bg-brand-soft text-brand-500 shrink-0">
                      <SparklesIcon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p
                          className={`text-[13px] font-semibold ${
                            item.unread ? "text-slate-900" : "text-slate-600"
                          }`}
                        >
                          {item.title}
                        </p>
                        <span className="text-[13px] text-gray-400">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  ))
                )}
              </div>

              {/* Footer nhỏ */}
              <div className="p-2 border-t border-gray-100 bg-slate-50/50 text-center">
                <span className="text-[13px] text-gray-400 font-medium">
                  Tất cả thông báo gần đây
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="h-5 w-[1px] bg-gray-200 mx-0.5" />

        {/* 👤 KHU VỰC USER (AVATAR + DROPDOWN PROFILE) */}
        {user ? (
          <div className="relative" ref={profileRef}>
            {/* Nút bấm mở Avatar */}
            <button
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setIsOpenNotif(false);
                setIsOpenStreak(false);
              }}
              className="flex items-center gap-1.5 p-1 pl-1.5 pr-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
              title={user.name || "Hồ sơ của bạn"}
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-500/20"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
              )}

              <svg
                className="w-3.5 h-3.5 text-gray-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Popup Menu Dropdown Profile */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50 text-gray-700 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex flex-col items-center px-4 pb-3 border-b border-gray-100 text-center">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-14 h-14 rounded-full object-cover mb-2"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xl mb-2 shadow-sm">
                      {user.name ? user.name.charAt(0).toUpperCase() : "L"}
                    </div>
                  )}
                  <h4 className="font-bold text-gray-900 text-base leading-tight">
                    {user.name || "Linh Lan Phạm"}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium truncate max-w-full">
                    {user.email || "phamlinhlan40@gmail.com"}
                  </p>
                </div>

                <div className="py-2 border-b border-gray-100 text-sm font-medium">
                  <a
                    href="#profile"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition"
                  >
                    <UserIcon className="w-4 h-4 text-gray-500" />
                    <span>Profile</span>
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition"
                  >
                    <Cog6ToothIcon className="w-4 h-4 text-gray-500" />
                    <span>Settings</span>
                  </a>
                </div>

                <div className="py-2 border-b border-gray-100 text-sm font-medium">
                  <a
                    href="#invite"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition"
                  >
                    <UserPlusIcon className="w-4 h-4 text-gray-500" />
                    <span>Invite friends & get paid</span>
                  </a>
                </div>

                <div className="pt-2 text-sm font-medium">
                  <div className="flex items-center justify-between px-4 py-2 text-gray-700">
                    <span>Theme</span>
                    <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full text-gray-500">
                      <button className="p-1 hover:text-gray-900 rounded-full transition">
                        <SunIcon className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1 hover:text-gray-900 rounded-full transition">
                        <MoonIcon className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1 text-gray-900 bg-white rounded-full shadow-xs">
                        <ComputerDesktopIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <a
                    href="#help"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition"
                  >
                    <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500" />
                    <span>Help Center</span>
                  </a>

                  <button
                    onClick={onLogoutClick}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-red-600 hover:text-red-700 transition text-left cursor-pointer"
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4 text-red-500" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Button variant="dark" size="sm" onClick={onLoginClick}>
            Đăng nhập
          </Button>
        )}
      </div>
    </header>
  );
}