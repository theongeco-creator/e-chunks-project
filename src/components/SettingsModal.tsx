import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { 
  UserIcon, 
  MoonIcon, 
  BellIcon, 
  ShieldCheckIcon, 
  XMarkIcon,
  SpeakerWaveIcon
} from "@heroicons/react/24/outline";
import { Button } from "@/components/Button";

type Tab = "general" | "account" | "subscription" | "notifications";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: any;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onLogout?: () => void;
  onDeleteAccount?: () => void;
  tier?: string;
  onUpdateProfile?: (newName: string) => Promise<void> | void; // 👈 Thêm dòng này vào
  onUpdateAvatar?: (file: Blob) => Promise<void> | void;
}

export function SettingsModal({
  isOpen,
  onClose,
  user,
  darkMode,
  onToggleDarkMode,
  onDeleteAccount,
  tier = "free",
  onUpdateProfile,
  onUpdateAvatar, // 👈 thêm
}: SettingsModalProps) {
  // 1. GOM TẤT CẢ CÁC HOOK LÊN ĐẦU TIÊN (TUYỆT ĐỐI KHÔNG ĐẶT SAU IF)
  const [activeTab, setActiveTab] = useState<Tab>("general");
  
  const [soundOn, setSoundOn] = useState<boolean>(() => {
    try {
      return localStorage.getItem("sound-effects") !== "off";
    } catch {
      return true;
    }
  });

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteText, setDeleteText] = useState("");
  const [name, setName] = useState(user?.name || "");

  const confirmWord = user?.name || "XOA";

  // Các useEffect cũng để ở trên này luôn
  useEffect(() => {
    if (!isOpen) {
      setConfirmDelete(false);
      setDeleteText("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user, isOpen]);

  // 2. ĐIỀU KIỆN RETURN NULL ĐẶT SAU CÙNG KHI ĐÃ KHAI BÁO XONG HẾT HOOK
  if (!isOpen) return null;

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    try {
      localStorage.setItem("sound-effects", next ? "on" : "off");
    } catch {
      // bỏ qua nếu localStorage bị chặn
    }
  };

  const resizeImage = (file: File, maxSize = 256): Promise<Blob> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error("Không xử lý được ảnh"))),
        "image/jpeg",
        0.85
      );
    };
    img.onerror = reject;
    img.src = url;
  });
  
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white dark:bg-dark-bg rounded-2xl max-w-4xl w-full h-[600px] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-zinc-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cài đặt hệ thống</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer p-1 rounded-lg"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Chia 2 cột: Menu trái và Nội dung phải) */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Sidebar menu cài đặt */}
          <div className="w-52 border-r border-slate-100 dark:border-slate-800 p-4 space-y-1 bg-slate-50/50 dark:bg-[#191A20] shrink-0">
            <button
              onClick={() => setActiveTab("general")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "general"
                  ? "bg-indigo-50 text-[#513DEB] dark:bg-[#37383F] dark:text-white"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#37383F]"
              }`}
            >
              <MoonIcon className="w-4 h-4" />
              Giao diện & Chung
            </button>

            <button
              onClick={() => setActiveTab("account")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "account"
                  ? "bg-indigo-50 text-[#513DEB] dark:bg-[#37383F] dark:text-white"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#37383F]"
              }`}
            >
              <UserIcon className="w-4 h-4" />
              Tài khoản
            </button>

            <button
              onClick={() => setActiveTab("subscription")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "subscription"
                  ? "bg-indigo-50 text-[#513DEB] dark:bg-[#37383F] dark:text-white"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#37383F]"
              }`}
            >
              <ShieldCheckIcon className="w-4 h-4" />
              Nâng cấp Pro
            </button>

            <button
              onClick={() => setActiveTab("notifications")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "notifications"
                  ? "bg-indigo-50 text-[#513DEB] dark:bg-[#37383F] dark:text-white"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#37383F]"
              }`}
            >
              <BellIcon className="w-4 h-4" />
              Thông báo
            </button>
          </div>

          {/* Phần nội dung chi tiết bên phải */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            
            {/* 1. TAB GIAO DIỆN & CHUNG */}
            {activeTab === "general" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Giao diện hiển thị</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tùy chỉnh giao diện sáng hoặc tối cho ứng dụng.</p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50/50 dark:bg-[#37383F]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-[#292A2F] text-[#513DEB] dark:text-white flex items-center justify-center">
                      <MoonIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Chế độ tối (Dark Mode)</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Giảm mỏi mắt khi học vào ban đêm.</p>
                    </div>
                  </div>

                  <button
                    onClick={onToggleDarkMode}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                      darkMode ? "bg-[#513DEB]" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                        darkMode ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50/50 dark:bg-[#37383F]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-[#292A2F]  text-[#513DEB] dark:text-white flex items-center justify-center">
                      <SpeakerWaveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Âm thanh hiệu ứng</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Phát âm báo khi trả lời đúng hoặc sai.</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={soundOn}
                    onClick={toggleSound}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                      soundOn ? "bg-[#513DEB]" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                        soundOn ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* 2. TAB TÀI KHOẢN */}
            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Thông tin tài khoản</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Quản lý thông tin cá nhân và ảnh đại diện.</p>
                </div>

                {/* Bỏ hẳn khung bọc ngoài, để trực tiếp ra đây */}
                <div className="flex items-center gap-4 py-2">
                  <div className="relative group w-24 h-24 rounded-full overflow-hidden shadow-md cursor-pointer border-2 border-slate-200 dark:border-slate-700 shrink-0">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user?.name || "Avatar"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-2xl">
                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                      </div>
                    )}

                    <label className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer text-white">
                      <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[10px] font-medium text-center px-1">Đổi ảnh</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        try {
                          const blob = await resizeImage(file);   // 👈 đổi
                          await onUpdateAvatar?.(blob); 
                        } catch (err) {
                          console.error(err);
                          alert("Không đọc được ảnh này!");
                        }
                        e.target.value = "";
                      }}
                                            />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Ảnh đại diện</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Chọn tệp hình ảnh từ máy tính (PNG, JPG).</p>
                    <p className="text-[11px] text-slate-400">Khuyên dùng: 600x600px</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Tên hiển thị (Username)</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên hiển thị của bạn..."
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-[#191A20] border border-slate-200 dark:border-zinc-700 rounded-lg text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#4F46E5] transition-all shadow-2xs"
                  />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email đăng nhập</label>
                    <input
                      type="email"
                      disabled
                      defaultValue={user?.email || ""}
                      className="w-full px-3.5 py-2.5 bg-slate-100 dark:bg-[#191A20] border border-slate-200 dark:border-zinc-700 rounded-lg text-sm font-medium text-slate-400 dark:text-slate-500 cursor-not-allowed select-none shadow-2xs"
                    />
                    <p className="text-[11px] text-slate-400">Email không thể thay đổi để bảo mật tài khoản.</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={async () => {
                      try {
                        if (onUpdateProfile) {
                          await onUpdateProfile(name);
                        }
                        alert("Đã cập nhật tên thành công!");
                        onClose();
                      } catch (error) {
                        console.error(error);
                        alert("Có lỗi khi cập nhật tên!");
                      }
                    }}
                  >
                    Lưu thay đổi
                  </Button>
                </div>

                {/* Xóa tài khoản */}
                <div className="pt-6 border-t border-slate-100 dark:border-zinc-700 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Xóa tài khoản</h4>
                    {!confirmDelete && (
                      <button
                        type="button"
                        onClick={() => setConfirmDelete(true)}
                        className="text-sm font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition cursor-pointer"
                      >
                        Xóa tài khoản
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Bạn có thể xóa tài khoản bất cứ lúc nào. Lưu ý: sau khi xóa, toàn bộ dữ liệu và tiến độ học sẽ mất vĩnh viễn.
                  </p>

                  {confirmDelete && (
                    <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20 space-y-3">
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        Nhập <span className="font-bold">{confirmWord}</span> để xác nhận xóa:
                      </p>
                      <input
                        type="text"
                        value={deleteText}
                        onChange={(e) => setDeleteText(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-all"
                      />
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            setConfirmDelete(false);
                            setDeleteText("");
                          }}
                        >
                          Hủy
                        </Button>
                        <button
                          type="button"
                          disabled={deleteText !== confirmWord}
                          onClick={() => {
                            onDeleteAccount?.();
                            onClose();
                          }}
                          className="px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Xóa vĩnh viễn
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 3. TAB SUBSCRIPTION (NÂNG CẤP PRO) */}
            {activeTab === "subscription" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Gói thành viên</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Quản lý gói đăng ký và quyền lợi học tập của bạn.</p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-100 dark:border-zinc-700 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 dark:from-[#191A20] dark:to-[#191A20] flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white rounded-md">
                        {tier === "free" ? "Gói Miễn Phí" : "Gói Pro"}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {tier === "free" ? "Khám phá cơ bản Self-Talk" : "Đã mở khóa toàn bộ nội dung"}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {tier === "free" ? "Nâng cấp lên Pro để mở khóa tất cả chủ đề và không giới hạn." : "Bạn đang tận hưởng trọn vẹn mọi tính năng cao cấp."}
                    </p>
                  </div>

                  {tier === "free" && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      Nâng cấp ngay
                    </Button>
                  )}
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Quyền lợi khi lên Pro:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                      Mở khóa toàn bộ chủ đề Self-Talk nâng cao cho người mới bắt đầu
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                      Luyện phát âm và chấm điểm AI không giới hạn
                    </div>
                    <div className="flex items-center text-sm font-medium gap-3 text-slate-600 dark:text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                      Không bị gián đoạn, học tập mượt mà xuyên suốt
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. TAB THÔNG BÁO */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Cài đặt thông báo</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Nhận nhắc nhở lịch học và tin tức mới.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50/50 dark:bg-dark-bg text-center py-8">
                  <BellIcon className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tính năng thông báo đang được cập nhật thêm.</p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}