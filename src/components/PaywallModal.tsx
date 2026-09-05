import { useState } from "react";
import { X, Crown, Check, Sparkles } from "lucide-react";

interface PaywallModalProps {
  open: boolean;
  onClose: () => void;
  onUpgrade: (level: "A2" | "B1") => void;
  selectedLevel?: "A2" | "B1"; // Nhận vào cấp độ hiện tại để hiển thị đúng gói
}

export function PaywallModal({ open, onClose, onUpgrade, selectedLevel = "A2" }: PaywallModalProps) {
  const [upgrading, setUpgrading] = useState(false);

  if (!open) return null;

  // Cấu hình thông tin riêng biệt cho từng gói lộ trình
  const packageInfo = {
    A2: {
      title: "Lộ Trình A2 - Nền Tảng",
      subtitle: "Mở khóa toàn bộ bài học nền tảng A2",
      price: "150k",
      originalPrice: "300.000",
      features: [
        "Toàn bộ bài học cấp độ A2 (Nền tảng)",
        "Hơn 150 cụm từ & collocation cơ bản",
        "Luyện tập phản xạ giao tiếp hàng ngày",
        "Truy cập trọn đời, không giới hạn thời gian",
      ]
    },
    B1: {
      title: "Lộ Trình B1 - Nâng Cao",
      subtitle: "Mở khóa toàn bộ bài học nâng cao & chuyên sâu",
      price: "250k",
      originalPrice: "500.000",
      features: [
        "Toàn bộ bài học cấp độ B1 (Nâng cao)",
        "Hơn 200 cụm từ & collocation thực tế, công sở",
        "Luyện tập Điền từ & Chép chính tả chuyên sâu",
        "Truy cập trọn đời, không giới hạn thời gian",
      ]
    }
  };

  const currentPkg = packageInfo[selectedLevel] || packageInfo.A2;

  const handleUpgrade = () => {
    setUpgrading(true);
    setTimeout(() => {
      setUpgrading(false);
      onUpgrade(selectedLevel);
      onClose();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-2xl overflow-hidden transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Glow background nhẹ nhàng */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative p-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center mb-5 shadow-sm">
            <Crown className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
            Mở khóa {currentPkg.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-center text-sm leading-relaxed mb-6 font-medium">
            {currentPkg.subtitle}
          </p>

          <ul className="space-y-3 mb-7">
            {currentPkg.features.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 font-bold" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 p-4 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">
                Gói Trọn Đời ({selectedLevel})
              </span>
              <span className="text-xs text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Tiết kiệm 50%
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{currentPkg.price}</span>
              <span className="text-slate-400 dark:text-slate-500 text-sm line-through">{currentPkg.originalPrice}</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold">VND</span>
            </div>
          </div>

          <button
            onClick={handleUpgrade}
            disabled={upgrading}
            className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {upgrading ? (
              <>
                <Sparkles className="w-4 h-4 animate-pulse" />
                Đang kích hoạt...
              </>
            ) : (
              <>
                <Crown className="w-4 h-4" />
                Nâng cấp gói {selectedLevel} ngay
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 mt-2 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            Để sau
          </button>
        </div>
      </div>
    </div>
  );
}