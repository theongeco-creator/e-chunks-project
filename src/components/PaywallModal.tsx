import { X, Check, Crown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/Button"; // Import component Button chuẩn

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

  // Logic Highlight theo ngữ cảnh
  const isA2Focus = triggerContext === "A2_LESSON";
  const isB1Focus = triggerContext === "B1_LESSON";
  const isComboFocus = triggerContext === "GENERAL";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container: Dùng rounded-modal (16px) & shadow-modal từ design tokens */}
      <div className="relative w-full max-w-5xl bg-neutral-surface dark:bg-slate-900 rounded-modal py-6 px-8 sm:px-12 shadow-modal border border-neutral-border dark:border-slate-800 max-h-[90vh] overflow-y-auto">
        
        {/* Nút Đóng Close Modal */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-textMuted hover:text-neutral-textPrimary dark:hover:text-slate-200 rounded-badge hover:bg-neutral-activePill dark:hover:bg-slate-800 transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tiêu đề & Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-textPrimary dark:text-white tracking-tight">
            Nâng Cấp Tài Khoản Để Học Tiếp
          </h2>
          <p className="text-sm text-neutral-textSecondary dark:text-slate-400 mt-1">
            Chọn gói cước phù hợp với mục tiêu chinh phục tiếng Anh của bạn
          </p>
        </div>

        {/* Danh sách 3 Thẻ Gói Cước */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          
          {/* ================= CARD 1: A2 ================= */}
          <div
            className={`rounded-card p-6 border transition-all flex flex-col justify-between relative ${
              userTier === "A2" || userTier === "premium"
                ? "bg-neutral-bg dark:bg-slate-900/40 border-neutral-border dark:border-slate-800 opacity-60"
                : isA2Focus
                ? "border-[3px] border-brand-500 shadow-card scale-[1.06] ring-[3px] ring-brand-600/20  bg-neutral-surface dark:bg-slate-900"
                : "border-2 border-neutral-border dark:border-slate-800 bg-neutral-surface dark:bg-slate-900"
            }`}
          >
            {(userTier === "A2" || userTier === "premium") && (
              <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 font-extrabold text-[10px] px-3 py-2 rounded-md uppercase">
                ✓ Đã sở hữu
              </span>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-card bg-brand-soft dark:bg-indigo-950/80 text-brand-500 flex items-center justify-center">
                  <Crown className="w-5 h-5" />
                </div>

                {isA2Focus && (
                  <span className="bg-amber-300 text-neutral-textPrimary text-[11px] font-bold px-3 py-2 rounded-md shadow-xs">
                    Phù hợp với bạn
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-neutral-textPrimary dark:text-white mb-1">
                Mở khóa lộ trình A2
              </h3>
              <p className="text-xs text-neutral-textSecondary dark:text-slate-400 min-h-[32px]">
                Học hết nền tảng, giao tiếp tự tin hơn mỗi ngày.
              </p>

              <div className="space-y-2.5 my-6">
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span> Trọn bộ 30+ bài học cấp độ A2</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Hơn 150 cụm từ & collocation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Luyện phản xạ giao tiếp cơ bản</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span> Không giới hạn thời gian</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-extrabold text-neutral-textPrimary dark:text-white">
                  150k
                </span>
                <span className="text-xs text-neutral-textMuted line-through">300.000đ</span>
              </div>

              <Button
                variant={isA2Focus ? "primary" : "dark"}
                fullWidth
                disabled={userTier === "A2" || userTier === "premium"}
                onClick={() => onUpgrade("A2")}
              >
                {userTier === "A2" || userTier === "premium" ? "Đã mở khóa gói này" : "Đăng ký A2 ngay"}
              </Button>
            </div>
          </div>

          {/* ================= CARD 2: COMBO A2 + B1 (MẶC ĐỊNH / GENERAL) ================= */}
          <div
            className={`relative flex flex-col justify-between rounded-card p-6 bg-neutral-surface  dark:bg-slate-900 transition-all duration-200 ${
              isComboFocus
                ? "border-[3px] border-brand-500 shadow-card scale-[1.06] ring-[3px] ring-brand-600/20"
                : "border-2 border-neutral-border dark:border-slate-800 opacity-90 hover:opacity-100"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-card bg-brand-soft dark:bg-indigo-950/80 text-brand-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>

                {isComboFocus && (
                  <span className="bg-amber-300 text-neutral-textPrimary text-[11px] font-bold px-3 py-2 rounded-md shadow-xs">
                    Tiết kiệm nhất
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-neutral-textPrimary dark:text-white mb-1">
                Combo Trọn Bộ A2 + B1
              </h3>
              <p className="text-xs text-neutral-textSecondary dark:text-slate-400 min-h-[32px]">
                Lộ trình hoàn chỉnh từ mất gốc đến giao tiếp thành thạo.
              </p>

              <div className="space-y-2.5 my-6">
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span> Hơn 90+ bài học cấp độ A2 & B1</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Hơn 350+ cụm từ & collocation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Luyện nghe và luyện phản xạ</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Không giới hạn thời gian</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-extrabold text-brand-500 dark:text-white">
                  380k
                </span>
                <span className="text-xs text-neutral-textMuted line-through">999.000đ</span>
              </div>

              <Button
                variant={isComboFocus ? "primary" : "dark"}
                fullWidth
                onClick={() => onUpgrade("premium")}
              >
                Sở hữu Combo ngay
              </Button>
            </div>
          </div>

          {/* ================= CARD 3: B1 ================= */}
          <div
            className={`rounded-card p-6 border transition-all flex flex-col justify-between relative ${
              userTier === "B1" || userTier === "premium"
                ? "bg-neutral-bg dark:bg-slate-900/40 border-neutral-border dark:border-slate-800 opacity-60"
                : isB1Focus
                ? "border-[3px] border-brand-500 shadow-card scale-[1.06] ring-[3px] ring-brand-600/20 bg-neutral-surface dark:bg-slate-900"
                : "border-2 border-neutral-border dark:border-slate-800 bg-neutral-surface dark:bg-slate-900"
            }`}
          >
            {(userTier === "B1" || userTier === "premium") && (
              <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 font-extrabold text-[10px] px-3 py-2 rounded-md uppercase">
                ✓ Đã sở hữu
              </span>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-card bg-brand-soft dark:bg-indigo-950/80 text-brand-500 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>

                {isB1Focus && (
                  <span className="bg-amber-300 text-neutral-textPrimary text-[11px] font-bold px-3 py-2 rounded-md shadow-xs">
                    Sẵn sàng lên B1
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-neutral-textPrimary dark:text-white mb-1">
                Lộ trình nâng cao B1
              </h3>
              <p className="text-xs text-neutral-textSecondary dark:text-slate-400 min-h-[32px]">
                Nâng cấp kỹ năng giao tiếp công sở & thực tế.
              </p>

              <div className="space-y-2.5 my-6">
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span> 60+ bài học cấp độ B1</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Hơn 200 cụm từ công sở & thực tế</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Chép chính tả & điền từ nâng cao</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-textPrimary dark:text-slate-300">
                  <Check className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Không giới hạn thời gian</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-extrabold text-neutral-textPrimary dark:text-white">
                  300k
                </span>
                <span className="text-xs text-neutral-textMuted line-through">600.000đ</span>
              </div>

              <Button
                variant={isB1Focus ? "primary" : "dark"}
                fullWidth
                disabled={userTier === "B1" || userTier === "premium"}
                onClick={() => onUpgrade("B1")}
              >
                {userTier === "B1" || userTier === "premium" ? "Đã mở khóa gói này" : "Đăng ký B1 ngay"}
              </Button>
            </div>
          </div>

        </div>

        {/* Nút "Để sau" bên dưới Modal */}
        <div className="text-center mt-6">
          <Button variant="ghost" onClick={onClose}>
            Để sau
          </Button>
        </div>

      </div>
    </div>
  );
}