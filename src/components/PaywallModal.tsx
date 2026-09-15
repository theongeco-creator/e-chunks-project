import { X, Check, Crown, Sparkles, Zap } from "lucide-react";

export type TriggerContext = "A2_LESSON" | "B1_LESSON" | "GENERAL";

interface PaywallModalProps {
  open: boolean;
  onClose: () => void;
  onUpgrade: (purchasedTier: "A2" | "B1" | "premium") => void;
  triggerContext?: TriggerContext;
  userTier?: string;
}

export function PaywallModal({
  open,
  onClose,
  onUpgrade,
  triggerContext = "GENERAL",
  userTier = "free",
}: PaywallModalProps) {
  if (!open) return null;

  const isA2Focus = triggerContext === "A2_LESSON";
  const isB1Focus = triggerContext === "B1_LESSON" || userTier === "A2";
  const isComboFocus = !isA2Focus && !isB1Focus;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Khung Popup Lớn */}
      <div className="relative w-full max-w-5xl bg-slate-50 dark:bg-slate-900 rounded-3xl py-6 px-10 sm:px-14 shadow-2xl border-2 border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
        {/* Nút X Đóng Popup */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tiêu đề chung */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Nâng Cấp Tài Khoản Để Học Tiếp
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Chọn gói cước phù hợp với mục tiêu chinh phục tiếng Anh của bạn
          </p>
        </div>

        {/* Lưới 3 Card Nằm Ngang */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          
          {/* ================= CARD 1: A2 ================= */}
          <div
          className={`rounded-2xl p-6 border transition-all flex flex-col justify-between relative ${
            userTier === "A2" || userTier === "premium"
              ? "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          }`}
        >

            {/* Badge Đã mua (nếu sở hữu rồi) */}
            {(userTier === "A2" || userTier === "premium") && (
              <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 font-extrabold text-[10px] px-3 py-2 rounded-lg uppercase">
                ✓ Đã sở hữu
              </span>
            )}
            <div>
              {/* Header Card: Icon bên trái + Badge gọn gàng bên phải (ô màu đỏ) */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Crown className="w-5 h-5" />
                </div>

                {isA2Focus && (
                  <span className="bg-yellow-300 text-black-600 text-[12px] font-bold px-4 py-2.5 rounded-xl shadow-xs">
                    Phù hợp với bạn
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Mở khóa lộ trình A2
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                Học hết nền tảng, giao tiếp tự tin hơn mỗi ngày.
              </p>

              <div className="space-y-2.5 my-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span> 30+ bài học cấp độ A2</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Hơn 150 cụm từ & collocation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Luyện phản xạ giao tiếp cơ bản</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Truy cập trọn đời</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  150k
                </span>
                <span className="text-xs text-slate-400 line-through">300.000đ</span>
              </div>

              {/* Nút bấm Đăng ký A2 */}
                <button
                  disabled={userTier === "A2" || userTier === "premium"} // 👈 Khóa nút không cho bấm lại
                  onClick={() => onUpgrade("A2")}
                  className={`w-full font-bold text-xs py-3 rounded-xl transition mt-4 ${
                    userTier === "A2" || userTier === "premium"
                      ? "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 cursor-not-allowed" // 👈 Style nút khi bị khóa
                      : "bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                  }`}
                >
                  {userTier === "A2" || userTier === "premium" ? "Đã mở khóa gói này" : "Đăng ký A2 ngay"}
                </button>
            </div>
          </div>

          {/* ================= CARD 2: COMBO A2 + B1 ================= */}
          <div
            className={`relative flex flex-col justify-between rounded-2xl p-6 bg-white dark:bg-slate-800 transition-all duration-200 ${
              isComboFocus
                ? "border-4 border-blue-600 shadow-xl scale-[1.02] ring-4 ring-blue-600/10"
                : "border border-slate-200 dark:border-slate-700 opacity-90 hover:opacity-100"
            }`}
          >
            <div>
              {/* Header Card: Icon bên trái + Badge gọn gàng bên phải */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>

                {isComboFocus && (
                  <span className="bg-yellow-300 text-black-600 text-[12px] font-bold px-4 py-2.5 rounded-xl shadow-xs">
                    Tiết kiệm nhất
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Combo Trọn Bộ A2 + B1
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                Lộ trình hoàn chỉnh từ mất gốc đến giao tiếp thành thạo.
              </p>

              <div className="space-y-2.5 my-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span> Hơn 90+ bài học cấp độ A2 & B1</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Hơn 350+ cụm từ & collocation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Luyện nghe và luyện phản xạ </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Truy cập trọn đời</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-extrabold text-blue-600 dark:text-white">
                  380k
                </span>
                <span className="text-xs text-slate-400 line-through">999.000đ</span>
              </div>

              <button
                onClick={() => onUpgrade("premium")}
                className={`w-full h-11 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isComboFocus
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                    : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900"
                }`}
              >
                Sở hữu Combo ngay
              </button>
            </div>
          </div>

          {/* ================= CARD 3: B1 ================= */}
          <div
            className={`rounded-2xl p-6 border transition-all flex flex-col justify-between relative ${
            userTier === "B1" || userTier === "premium"
              ? "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          }`}
        >

            {/* Badge Đã mua (nếu sở hữu rồi) */}
            {(userTier === "B1s" || userTier === "premium") && (
              <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 font-extrabold text-[10px] px-3 py-2 rounded-lg uppercase">
                ✓ Đã sở hữu
              </span>
            )}
            <div>
              {/* Header Card: Icon bên trái + Badge gọn gàng bên phải */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>

                {isB1Focus && (
                  <span className="bg-yellow-300 text-black-600 text-[12px] font-bold px-4 py-2.5 rounded-xl shadow-xs">
                    Sẵn sàng lên B1
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Lộ trình nâng cao B1
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                Nâng cấp kỹ năng giao tiếp công sở & thực tế.
              </p>

              <div className="space-y-2.5 my-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span> 60+ bài học cấp độ B1</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Hơn 200 cụm từ công sở & thực tế</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Chép chính tả & điền từ nâng cao</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Truy cập trọn đời</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  300k
                </span>
                <span className="text-xs text-slate-400 line-through">600.000đ</span>
              </div>

              <button
                disabled={userTier === "B1" || userTier === "premium"}
                onClick={() => onUpgrade("B1")}
                className={`w-full font-bold text-xs py-3 rounded-xl transition mt-4 ${
                  userTier === "B1" || userTier === "premium"
                    ? "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                }`}
              >
                {userTier === "B1" || userTier === "premium" ? "Đã mở khóa gói này" : "Đăng ký B1 ngay"}
              </button>
            </div>
          </div>

        </div>

        {/* Nút Để sau ở dưới cùng */}
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="text-base text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-medium cursor-pointer transition"
          >
            Để sau
          </button>
        </div>

      </div>
    </div>
  );
}