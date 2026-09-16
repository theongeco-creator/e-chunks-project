import { useState } from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BoltIcon as BoltSolid } from "@heroicons/react/24/solid";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input"; // 👈 Import component Input tái sử dụng

interface HeaderProps {
  user?: any;
  onLoginClick?: () => void;
  onUpgradeClick?: () => void;
  streakCount?: number;
}

export function Header({
  user,
  onLoginClick,
  onUpgradeClick,
  streakCount = 0,
}: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="w-full h-16 bg-white border-b border-gray-150 px-6 flex items-center justify-between gap-4 sticky top-0 z-10">
      {/* 1. Ô Tìm Kiếm (Dùng component Input tái sử dụng) */}
      <div className="flex-1 max-w-md">
        <Input
          type="text"
          icon={<MagnifyingGlassIcon className="w-4 h-4 stroke-[2]" />} // 👈 2. Truyền icon vào đây nè!
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Tìm kiếm khóa học, từ vựng..."
        />
      </div>

      {/* 2. Cụm Tiện ích bên phải */}
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        {/* Nút Upgrade */}
        <Button
          variant="primary"
          size="sm"
          onClick={onUpgradeClick}
        >
          Upgrade
        </Button>

        {/* Streak Count: Bỏ khung, Icon Bolt to màu xám & Số 0 */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition"
          title={`Chuỗi học tập: ${streakCount} ngày`}
        >
          <BoltSolid className="w-5 h-5 text-gray-400" /> {/* 👈 Icon to size 6 (24px) và màu xám */}
          <span className="text-sm font-bold text-gray-500">{streakCount}</span> {/* 👈 Đang nhận giá trị 0 */}
        </div>

        {/* Nút Thông báo (Notification) */}
        <button
          className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition cursor-pointer"
          title="Thông báo"
        >
          <BellIcon className="w-5 h-5 stroke-[1.8]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        <div className="h-5 w-[1px] bg-gray-200 mx-0.5" />

        {/* Khu vực User (Avatar / Đăng nhập) */}
        {user ? (
          <button
            className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-full transition cursor-pointer"
            title={user.name || "Hồ sơ của bạn"}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/20"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
            )}
          </button>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            onClick={onLoginClick}
          >
            Đăng nhập
          </Button>
        )}
      </div>
    </header>
  );
}