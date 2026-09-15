import { useState, useEffect } from "react";
import { VocabularyTopicsSection } from "@/components/VocabularyTopicsSection";
import { StoriesSection } from "@/components/StoriesSection";
import type { VocabTopic } from "@/data/vocabulary";
import type { Story } from "@/data/types";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ArrowUpRight, LogIn, LogOut, User, Crown, MoreVertical, Settings } from "lucide-react";
import { MethodModal } from "@/components/MethodModal";
import { SettingsModal } from "./SettingsModal";

interface HomePageProps {
  user: any;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  onSelectLevel: (level: "A1" | "A2" | "B1") => void;
  onSelectVocabTopic: (topic: VocabTopic) => void;
  onViewAllTopics: () => void;
  onSelectStory: (story: Story) => void;
  onViewAllStories: () => void;
}

/* ================= COMPONENT LỊCH REALTIME ================= */
function RealtimeCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startingPoint = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const today = new Date();
  const isToday = (d: number) =>
    d === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const calendarDays = [];

  for (let i = startingPoint - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push({
      day: d,
      isCurrentMonth: true,
      today: isToday(d),
    });
  }

  const remainingSlots = 35 - calendarDays.length;
  for (let i = 1; i <= (remainingSlots < 0 ? remainingSlots + 7 : remainingSlots); i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: false,
    });
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-4 shadow-2xs flex flex-col justify-between h-full space-y-3">
      {/* HEADER LỊCH */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
        <button
          onClick={prevMonth}
          className="w-8 h-8 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-100 text-sm">
          <CalendarIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          <span>{monthNames[month]} {year}</span>
        </div>

        <button
          onClick={nextMonth}
          className="w-8 h-8 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* HÀNG TIÊU ĐỀ THỨ */}
      <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400">
        <span>Mon</span>
        <span>Tues</span>
        <span>Wed</span>
        <span>Thurs</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

      {/* LƯỚI CÁC NGÀY REALTIME */}
      <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs font-semibold items-center">
        {calendarDays.map((item, index) => {
          if (!item.isCurrentMonth) {
            return (
              <span key={index} className="text-slate-300 dark:text-slate-600 py-1">
                {item.day}
              </span>
            );
          }

          if (item.today) {
            return (
              <span
                key={index}
                className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto shadow-xs"
              >
                {item.day}
              </span>
            );
          }

          return (
            <span
              key={index}
              className="w-7 h-7 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mx-auto cursor-pointer transition"
            >
              {item.day}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function HomePage({
  user,
  onLoginClick,
  onLogoutClick,
  onSelectLevel,
  onSelectVocabTopic,
  onViewAllTopics,
  onSelectStory,
  onViewAllStories,
}: HomePageProps) {
  const [isMethodModalOpen, setIsMethodModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleUpdateProfile = (updatedData: { name: string; avatarBg?: string }) => {
  if (user) {
    const updatedUser = {
      ...user,
      name: updatedData.name,
      avatarBg: updatedData.avatarBg,
    };
    
    // 1. Ghi vào localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));
    
    // 2. Bắn event thông báo để AuthContext / App nhận biết và cập nhật State UI ngay lập tức
    window.dispatchEvent(new Event("storage"));
    
    // 3. Nếu ứng dụng dùng AuthContext, gọi trực tiếp để sync ngay
    if (user && typeof user === "object") {
      Object.assign(user, updatedUser);
    }
  }
};

  return (
    <div className="space-y-8 pb-10">
      
      {/* ================= HÀNG 1: BANNER TỔNG HỢP (TRÁI) & KHỐI ĐĂNG NHẬP / PROFILE (PHẢI) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* BANNER PHƯƠNG PHÁP HỌC (3 CỘT TRÁI) */}
        <div className="lg:col-span-3 rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-[#EBF3FE] border border-blue-100 flex flex-col justify-between shadow-xs min-h-[220px]">
          
          {/* HÌNH BANNER NẰM ÉP GÓC PHẢI */}
          <img 
            src="/images/banner-home.jpg" 
            alt="Banner Illustration" 
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none z-0"
          />

          {/* KHỐI NỘI DUNG VĂN BẢN (NẰM BÊN TRÁI) */}
          <div className="relative z-10 space-y-3 max-w-md sm:max-w-lg">
            {/* Lời chào mừng nhỏ */}
            <p className="text-xs font-bold text-blue-700 tracking-wide flex items-center gap-1.5">
              <span>₍^. .^₎Ⳋ</span>
              <span>
                {user
                  ? `Xin chào, ${user.email ? user.email.split("@")[0] : "Học viên"}`
                  : "Xin chào bạn"}
              </span>
            </p>
            {/* Tiêu đề */}
            <div className="space-y-1">
              <h3 className="text-slate-800 text-xl sm:text-xl font-extrabold tracking-tight leading-snug">
                Self-talk — Luyện nói tiếng Anh bằng cách độc thoại
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                Luyện phản xạ nói mà không cần người đối thoại, qua những cụm từ dùng nhiều nhất trong giao tiếp thực tế.
              </p>
            </div>
            
          </div>

          {/* CỤM NÚT BẤM (XANH DƯƠNG & TRẮNG) */}
          <div className="relative z-10 pt-4">
            <button 
              onClick={() => setIsMethodModalOpen(true)}
              className="bg-[#4F46E5] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Tìm hiểu ngay</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* KHỐI ĐĂNG NHẬP / PROFILE CÁ NHÂN (1 CỘT PHẢI - THEO STYLE CARD MẪU) */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 flex flex-col justify-between shadow-xs min-h-[220px]">
          
          {!user ? (
            /* TRẠNG THÁI 1: CHƯA ĐĂNG NHẬP */
            <div className="flex flex-col justify-between h-full space-y-3">
              {/* Header card */}
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100 font-bold text-sm">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
                  <LogIn className="w-4 h-4" />
                </div>
                <span>Tài khoản học viên</span>
              </div>

              {/* Khối Blue Card nổi bật ở giữa */}
              <div className="bg-[#4F46E5] rounded-xl p-4 text-white flex flex-col items-center text-center space-y-3 shadow-md">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-4 ring-white/10">
                  <User className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <p className="font-bold text-sm">Tham gia cùng chúng tôi</p>
                </div>

                <button
                  onClick={onLoginClick}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold text-xs py-3 rounded-lg transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Đăng nhập</span>
                </button>
              </div>
            </div>
          ) : (
            /* TRẠNG THÁI 2: ĐÃ ĐÃ ĐĂNG NHẬP (PROFILE DASHBOARD THEO MẪU 2 TẦNG) */
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-200/100 shadow-none flex flex-col justify-between h-full">
              
              {/* TẦNG 1 (ĐEN): AVATAR, THÔNG TIN & NÚT CÀI ĐẶT 3 CHẤM */}
              <div className="p-4 flex rounded-xl items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <img
                      src={user.avatarUrl || "/avatars/avar1.png"}
                      alt="Avatar"
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20 shadow-xs"
                    />
                    <span className="w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full absolute bottom-0 right-0" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-sm truncate leading-snug">
                    {user.name || (user.email ? user.email.split("@")[0] : "Học viên")}
                  </h4>
                    <p className="text-[11px] text-slate-400 truncate leading-tight">
                      {user.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer shrink-0"
                  title="Cài đặt"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {/* TẦNG 2 (SÁNG): KHỐI VÀNG VÀNG THÔNG TIN GÓI + NÚT ĐĂNG XUẤT */}
              <div className="bg-white dark:bg-slate-950 p-3 rounded-t-xl flex flex-col justify-between space-y-3 flex-1 border-t border-slate-800/20">
                
                {/* Ô VÀNG VÀNG HÌNH CHỮ NHẬT HIỂN THỊ TAG MUA / CHƯA MUA */}
                <div className="bg-amber-200/80 dark:bg-amber-950/40 dark:border-amber-900/50 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-200">
                      {user?.tier === "premium"
                        ? "Combo Pro (Trọn đời)"
                        : user?.tier === "A2"
                        ? "Đã sở hữu gói A2"
                        : user?.tier === "B1"
                        ? "Đã sở hữu gói B1"
                        : "Tài khoản Free"}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold text-amber-600 dark:text-amber-400/70 uppercase">
                    {user?.tier && user?.tier !== "free" ? "ACTIVE" : "FREE"}
                  </span>
                </div>

                {/* NÚT ĐĂNG XUẤT PHÍA DƯỚI */}
                <button
                  onClick={onLogoutClick}
                  className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs py-3 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <LogOut className="w-3.5 h-3.5 text-slate-500" />
                  <span>Đăng xuất</span>
                </button>

              </div>
            </div>
          )}

        </div>

      </div>

      {/* ================= HÀNG 2: CHỌN LỘ TRÌNH & LỊCH THÁNG ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* CỘT TRÁI (3 CỘT): 3 CARD LỘ TRÌNH STYLE DOUBLE CARD */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Chọn lộ trình để bắt đầu.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            
            {/* CARD 1: A1 - Cơ bản */}
            <div
              onClick={() => onSelectLevel("A1")}
              className="bg-rose-500 p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.04] shadow-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-white px-2 pb-2.5 font-bold text-base">
                <span>A1 — Beginner</span>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 flex flex-col justify-between h-full space-y-4 shadow-inner">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-200 dark:bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-200 dark:bg-slate-700" />
                  </div>
                  <p className="text-[18px] font-bold leading-snug text-slate-800 dark:text-slate-100">
                    Chưa có nền tảng, hoặc chỉ biết vài từ lẻ tẻ? Ngay cả chào hỏi, tự giới thiệu cũng phải nghĩ mãi? Bắt đầu từ những điều cơ bản nhất tại dây!
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold px-3 py-2 rounded-xl bg-rose-50 dark:bg-slate-800 text-rose-600 dark:text-rose-400">
                    A1 – Cơ bản
                  </span>
                  <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    ↗
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: A2 - Sơ cấp */}
            <div
              onClick={() => onSelectLevel("A2")}
              className="bg-indigo-600 p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.04] shadow-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-white px-2 pb-2.5 font-bold text-base">
                <span>A2 — Elementary</span>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 flex flex-col justify-between h-full space-y-4 shadow-inner">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-200 dark:bg-slate-700" />
                  </div>
                  <p className="text-[18px] font-bold leading-snug text-slate-800 dark:text-slate-100">
                    Nói được về bản thân, gia đình, công việc hàng ngày, nhưng gặp chủ đề lạ là "đứng hình"? Mở rộng vốn từ và phản xạ để trao đổi tự nhiên hơn.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold px-3 py-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                    A2 – Sơ cấp
                  </span>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    ↗
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: B1 - Trung cấp */}
            <div
              onClick={() => onSelectLevel("B1")}
              className="bg-emerald-600 p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.04] shadow-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-white px-2 pb-2.5 font-bold text-base">
                <span>B1 — Intermediate</span>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 flex flex-col justify-between h-full space-y-4 shadow-inner">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  </div>
                  <p className="text-[18px] font-bold leading-snug text-slate-800 dark:text-slate-100">
                    Giao tiếp hàng ngày không còn là rào cản, nhưng muốn dùng tiếng Anh linh hoạt hơn trong công việc, học tập hay khi đi du lịch?
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold px-3 py-2 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                    B1 – Trung cấp
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    ↗
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CỘT PHẢI (1 CỘT): LỊCH DẠNG THÁNG REALTIME */}
        <div className="lg:col-span-1 h-full flex flex-col justify-end pt-9">
          <RealtimeCalendar />
        </div>

      </div>

      {/* ================= SECTION TỪ VỰNG & TRUYỆN ================= */}
      <div className="space-y-10 pt-4">
        <VocabularyTopicsSection
          onSelectTopic={onSelectVocabTopic}
          onViewAll={onViewAllTopics}
        />

        <StoriesSection
          onSelectStory={onSelectStory}
          onViewAll={onViewAllStories}
        />
      </div>

      {/* MODAL POPUP HƯỚNG DẪN 5 BƯỚC */}
      <MethodModal
        isOpen={isMethodModalOpen}
        onClose={() => setIsMethodModalOpen(false)}
        onSelectLevel={onSelectLevel}
      />

      /* Đặt Modal này ở cuối file HomePage.tsx */
      <SettingsModal
      open={isSettingsOpen}
      onClose={() => setIsSettingsOpen(false)}
      user={user}
      onUpdateProfile={handleUpdateProfile} // 👈 Truyền callback này vào
    />

    </div>
  );
}