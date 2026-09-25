import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import { useAuth } from "@/auth/AuthContext";

interface LoginModalProps {
  open?: boolean;
  onClose?: () => void;
}

export function LoginModal({ open = true, onClose }: LoginModalProps) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (open === false) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Vui lòng nhập email và mật khẩu.");
      return;
    }

    setBusy(true);
    try {
      if (mode === "signin") {
        await signIn(email.trim(), password);
      } else {
        await signUp(email.trim(), password, email.split("@")[0]);
      }
      reset();
      if (onClose) onClose();
    } catch {
      setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const switchMode = () => {
    setMode((m) => (m === "signin" ? "signup" : "signin"));
    setError("");
  };

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen flex bg-white dark:bg-neutral-900 overflow-hidden animate-in fade-in duration-200">
      
      {/* Nút Đóng Modal ở góc phải trên */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition cursor-pointer"
          title="Đóng"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* ─── NỬA TRÁI: Hình ảnh minh họa & Thông điệp (Full Height 50%) ─── */}
      <div 
        className="hidden md:flex w-1/2 h-full bg-cover bg-center p-12 lg:p-16 flex-col justify-between text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1032&auto=format&fit=crop')"
        }}
      >
        {/* OverLay mờ tối để tăng độ tương phản cho text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 z-0" />

        {/* Logo / Icon đại diện */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-xl text-white shadow-lg">
              E
          </div>
          <span className="font-bold text-xl tracking-tight text-white"> E-Chunks English</span>
        </div>

        {/* Nội dung thông điệp chính */}
        <div className="relative z-10 space-y-4 max-w-lg">
          <span className="inline-block px-3 py-2 rounded-md text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
            Phương pháp học thông minh
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
            Nâng cao kỹ năng Tiếng Anh qua phương pháp tương tác Self-talk.
          </h2>
          <p className="text-sm text-neutral-200 font-sm leading-relaxed">
            Học ngữ pháp, từ vựng và luyện đọc hiểu trực quan với các bài học thiết kế ngắn gọn, dễ tiếp thu mỗi ngày.
          </p>
        </div>

        {/* Chân trang nửa trái */}
        <div className="relative z-10 text-xs text-neutral-300 font-medium">
          © {new Date().getFullYear()} E-Chunks English. All rights reserved.
        </div>
      </div>

      {/* ─── NỬA PHẢI: Form Đăng nhập / Đăng ký (50%) ─── */}
<div className="w-full md:w-1/2 h-full p-6 sm:p-12 lg:p-20 flex flex-col justify-center items-center bg-white dark:bg-neutral-900 overflow-y-auto">
  <div className="max-w-md w-full space-y-6">
    
    {/* Header Tiêu đề Form */}
    <div className="space-y-2 text-center sm:text-left">
      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
        {mode === "signin" ? "Chào mừng quay trở lại" : "Tạo tài khoản mới 🚀"}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
        {mode === "signin"
          ? "Nhập email và mật khẩu của bạn để tiếp tục hành trình học tập."
          : "Đăng ký ngay để mở khóa các lộ trình và từ vựng phong phú."}
      </p>
    </div>

    {/* 1. ĐĂNG NHẬP NHANH BẰNG GOOGLE (ĐẶT LÊN TRÊN CÙNG) */}
    <div className="space-y-3 pt-2">
      <div className="relative">
        {/* Badge Last used nếu ở chế độ signin */}
        {mode === "signin" && (
          <span className="absolute -top-2.5 right-4 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider z-10 dark:border-indigo-800">
            Gần đây
          </span>
        )}

        <button
          type="button"
          onClick={() => alert("Google Login")}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-750 transition cursor-pointer shadow-xs text-sm"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Tiếp tục với Google</span>
        </button>
      </div>
    </div>

    {/* Đường phân cách */}
    <div className="relative flex py-1 items-center">
      <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800"></div>
      <span className="flex-shrink mx-4 text-xs text-neutral-400 dark:text-neutral-500 font-medium">hoặc</span>
      <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800"></div>
    </div>

    {/* 2. FORM NHẬP EMAIL & PASSWORD */}
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Field Email */}
      <div className="space-y-1.5">
        <label className="block text-neutral-700 dark:text-neutral-300 text-sm font-semibold">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl pl-10 pr-4 py-3 text-sm text-neutral-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition"
          />
        </div>
      </div>

      {/* Field Mật khẩu */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="block text-neutral-700 dark:text-neutral-300 text-sm font-semibold">
            Mật khẩu
          </label>
        </div>
        <div className="relative">
          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••"
            className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl pl-10 pr-10 py-3 text-sm text-neutral-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {mode === "signin" && (
          <div className="pt-1">
            <button
              type="button"
              className="text-xs font-semibold text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 underline cursor-pointer"
            >
              Quên mật khẩu?
            </button>
          </div>
        )}
      </div>

      {/* Thông báo lỗi */}
      {error && (
        <div className="text-red-600 dark:text-red-400 text-xs font-medium bg-red-50 dark:bg-red-950/40 p-3 rounded-xl border border-red-200 dark:border-red-900/50">
          {error}
        </div>
      )}

      {/* Nút Submit chính (Màu Brand #4F46E5) */}
      <button
        type="submit"
        disabled={busy}
        className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center mt-2"
      >
        {busy ? "Đang xử lý..." : mode === "signin" ? "Tiếp tục" : "Tạo tài khoản"}
      </button>
    </form>

    {/* Chuyển đổi giữa Đăng nhập & Đăng ký */}
    <div className="text-center pt-2">
      <p className="text-neutral-500 dark:text-neutral-400 text-xs font-medium">
        {mode === "signin" ? "Bạn chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
        <button
          type="button"
          onClick={switchMode}
          className="text-brand-500 hover:underline font-bold ml-1 cursor-pointer"
        >
          {mode === "signin" ? "Đăng ký ngay" : "Đăng nhập ngay"}
        </button>
      </p>
    </div>

  </div>
</div>

    </div>
  );
}