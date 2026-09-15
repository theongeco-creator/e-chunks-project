import React, { useState } from "react";
import { X, User, Bell, Check, ShieldCheck } from "lucide-react";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  user: { email?: string; name?: string; avatarUrl?: string } | null;
  onUpdateProfile?: (data: { name: string; avatarUrl: string }) => void;
}

// 1. Dàn Avatar tự tạo của bà (đặt hình trong thư mục public/avatars/)
const AVATAR_OPTIONS = [
  "/avatars/avar1.png",
  "/avatars/avar2.png",
  "/avatars/avar3.png",
  "/avatars/avar4.png",
  "/avatars/avar5.png",
  "/avatars/avar6.png",
  "/avatars/avar7.png",
  "/avatars/avar8.png",
  "/avatars/avar9.png",
  "/avatars/avar10.png",
  "/avatars/avar11.png",
];

export const SettingsModal: React.FC<SettingsModalProps> = ({
  open,
  onClose,
  user,
  onUpdateProfile,
}) => {
  const [activeTab, setActiveTab] = useState<"account" | "notifications">("account");
  const [displayName, setDisplayName] = useState(
    user?.name || (user?.email ? user.email.split("@")[0] : "")
  );
  // Chọn avatar mặc định là hình đầu tiên hoặc hình user đang có
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    user?.avatarUrl || AVATAR_OPTIONS[0]
  );
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [reminderTime, setReminderTime] = useState("20:00");
  const [saved, setSaved] = useState(false);

  if (!open) return null;

  const handleSave = () => {
    if (onUpdateProfile) {
      onUpdateProfile({
        name: displayName,
        avatarUrl: selectedAvatar,
      });
    }
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
        
        {/* HEADER */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800 text-base">Cài đặt cá nhân</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* TABS MENU */}
        <div className="flex border-b border-slate-100 bg-slate-50/50 p-1 gap-1 px-4">
          <button
            onClick={() => setActiveTab("account")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "account"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Tài khoản</span>
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "notifications"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Nhắc nhở học</span>
          </button>
        </div>

        {/* BODY CONTENT */}
        <div className="p-5 space-y-4">
          {activeTab === "account" ? (
            <div className="space-y-4">
              
              {/* PREVIEW & DÀN AVATAR TỰ CHỌN */}
              <div className="flex flex-col items-center justify-center space-y-3 pb-3 border-b border-slate-100">
                {/* Xem trước Avatar đang chọn */}
                <img
                  src={selectedAvatar}
                  alt="Avatar Preview"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50 shadow-md transition-all"
                />

                {/* Danh sách các Avatar tự tạo để chọn */}
                <div className="flex items-center gap-2 pt-1">
                  {AVATAR_OPTIONS.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAvatar(imgUrl)}
                      className={`w-9 h-9 rounded-full overflow-hidden transition cursor-pointer border ${
                        selectedAvatar === imgUrl
                          ? "ring-2 ring-blue-600 border-transparent scale-110 shadow-xs"
                          : "opacity-60 hover:opacity-100 border-slate-200"
                      }`}
                    >
                      <img src={imgUrl} alt={`Avatar ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* TÊN HIỂN THỊ */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Tên hiển thị
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-hidden focus:border-blue-500 transition"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Email tài khoản
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.email || ""}
                  className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm font-medium text-slate-400 cursor-not-allowed"
                />
              </div>

              <div className="p-3 bg-blue-50/60 rounded-xl flex items-start gap-2.5 border border-blue-100">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-blue-700 leading-relaxed">
                  Tài khoản đã đồng bộ dữ liệu tiến độ bài học trên toàn bộ thiết bị.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <p className="text-xs font-bold text-slate-800">Nhắc học hằng ngày</p>
                  <p className="text-[11px] text-slate-500">Gửi thông báo duy trì streak</p>
                </div>
                <button
                  onClick={() => setReminderEnabled(!reminderEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                    reminderEnabled ? "bg-blue-600 justify-end" : "bg-slate-300 justify-start"
                  }`}
                >
                  <span className="w-5 h-5 bg-white rounded-full shadow-md" />
                </button>
              </div>

              {reminderEnabled && (
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-semibold text-slate-600">Thời gian nhắc:</span>
                  <input
                    type="time"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-hidden focus:border-blue-500"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/60 transition cursor-pointer"
          >
            Hủy
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            {saved ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Đã lưu!</span>
              </>
            ) : (
              <span>Lưu thay đổi</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};