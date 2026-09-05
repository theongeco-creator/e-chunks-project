import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/auth/AuthContext";

interface LoginModalProps {
  open?: boolean;
  onClose?: () => void;
}

export function LoginModal({ open = true, onClose }: LoginModalProps) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (open === false) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Chỉ check email và password, đã bỏ hoàn toàn check tên
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
    <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Khung Card bọc ngoài toàn bộ giao diện */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-xl shadow-2xl p-4 sm:p-5 flex flex-col md:flex-row relative border border-slate-100 dark:border-slate-800 gap-6">
        
        {/* Nút đóng modal góc phải trên */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-xs font-bold transition"
          >
            ✕
          </button>
        )}

        {/* NỬA TRÁI: Khung ảnh Unsplash bo góc lọt thỏm bên trong */}
        <div 
          className="w-full md:w-1/2 min-h-[550px] bg-cover bg-center rounded-xl p-8 sm:p-10 flex flex-col justify-between text-white relative overflow-hidden shadow-inner"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1679193559811-b3a3a6353230?q=80&w=898&auto=format&fit=crop')"
          }}
        >
          <div className="relative z-10 text-white text-2xl font-light select-none">
            ✦
          </div>

          <div className="relative z-10 space-y-2 pb-8">
            <p className="text-sm text-white-600 font-medium tracking-wide">
              Phương pháp học tiếng anh
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
              Thông qua 4 kỹ năng: Nghe, Nói, Đọc, Viết trong cùng 1 topic.
            </h2>
          </div>
        </div>

        {/* NỬA PHẢI: Form tạo tài khoản / đăng nhập */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center bg-white dark:bg-slate-900">
          
          <div className="max-w-sm w-full mx-auto space-y-6">
            
            <div>
              <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                {mode === "signin" ? "Welcome back" : "Đăng nhập để bắt đầu"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed font-medium">
                Chào mừng bạn đã quay trở lại.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-xs font-semibold mb-1">Email của bạn</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="farazhaidet786@gmail.com"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-md pl-10 pr-3 py-3 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-xs font-semibold mb-1">Nhập mật khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-md pl-10 pr-10 py-3 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-600 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-600 dark:text-red-400 text-xs text-center font-medium bg-red-50 dark:bg-red-950/40 p-2.5 rounded-md">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="w-full py-3.5 rounded-md bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                <span>{busy ? "Processing..." : mode === "signin" ? "Sign in" : "Đăng nhập"}</span>
              </button>
            </form>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              <span className="flex-shrink mx-3 text-[10px] text-slate-400 font-medium">   hoặc tiếp tục với   </span>
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => alert("Behance Login")}
                className="py-2.5 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center transition shadow-sm"
              >
                <span className="font-black text-xs tracking-tighter">Bē</span>
              </button>
              <button
                type="button"
                onClick={() => alert("Google Login")}
                className="py-2.5 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z" />
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" />
                  <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 13s.6 4.6 1.6 6.6l3.7-2.9z" />
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.3L1.6 15.6C3.5 19.4 7.4 23 12 23z" />
                </svg>
                
              </button>
              <button
                type="button"
                onClick={() => alert("Facebook Login")}
                className="py-2.5 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center transition shadow-sm"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                
              </button>
            </div>

            <div className="text-center pt-2">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                Bạn chưa có tài khoản?{" "}
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-bold ml-1"
                >
                  {mode === "signin" ? "Đăng ký" : "Đăng ký"}
                </button>
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}