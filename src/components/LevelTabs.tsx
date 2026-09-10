import { useState } from "react";

interface LevelTabsProps {
  activeTab: string;
  onSelect: (tab: string) => void;
}

export function LevelTabs({ activeTab, onSelect }: LevelTabsProps) {
  // Danh sách 4 (hoặc 5) tab của ní đây, thích đổi tên gì thì gõ vào đây nha
  const tabs = ["Tất cả", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];

  return (
    <div className="flex items-center gap-6 border-b border-slate-200 mb-6 overflow-x-auto scrollbar-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onSelect(tab)}
            className={`pb-3 text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              isActive
                ? "text-blue-600"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab}
            {/* Thanh gạch chân màu xanh chạy theo tab đang active */}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}