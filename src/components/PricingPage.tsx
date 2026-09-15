import { useState, useMemo } from "react";
import { Check, Sparkles, Crown, ArrowLeft } from "lucide-react";
import { useAuth } from "../auth/AuthContext";

export type TriggerContext = "A2_LESSON" | "B1_LESSON" | "GENERAL";

interface PricingPageProps {
  onBack: () => void;
  triggerContext?: TriggerContext;
}

export function PricingPage({ onBack, triggerContext = "GENERAL" }: PricingPageProps) {
  const { user, upgradeToPremium } = useAuth();
  const [upgradingPlan, setUpgradingPlan] = useState<string | null>(null);

  const userTier = user?.tier || "free";

  const basePlans = {
    A2: {
      id: "A2" as const,
      name: "LỘ TRÌNH A2",
      price: "150k",
      originalPrice: "300.000",
      description: "Phù hợp cho người muốn lấy lại gốc tiếng Anh giao tiếp.",
      features: [
        "Toàn bộ bài học cấp độ A2",
        "Hơn 150 cụm từ & collocation",
        "Luyện phản xạ giao tiếp cơ bản",
        "Truy cập trọn đời",
      ],
      buttonText: "Đăng ký A2",
    },
    premium: {
      id: "premium" as const,
      name: "COMBO FULL (A2 + B1)",
      price: "350k",
      originalPrice: "800.000",
      description: "Tiết kiệm nhất! Mở khóa toàn bộ lộ trình từ cơ bản đến nâng cao.",
      features: [
        "Trọn bộ bài học A2 + B1",
        "Hơn 350+ cụm từ & collocation",
        "Tất cả tính năng luyện tập chuyên sâu",
        "Hỗ trợ cập nhật bài học mới",
        "Truy cập trọn đời",
      ],
      buttonText: "Sở hữu Combo A2 + B1",
    },
    B1: {
      id: "B1" as const,
      name: "LỘ TRÌNH B1",
      price: "250k",
      originalPrice: "500.000",
      description: "Dành cho người đã có nền tảng, muốn giao tiếp thành thạo.",
      features: [
        "Toàn bộ bài học cấp độ B1",
        "Hơn 200 cụm từ công sở & thực tế",
        "Chép chính tả & điền từ nâng cao",
        "Truy cập trọn đời",
      ],
      buttonText: "Đăng ký B1",
    },
  };

  const { focusedPlanId, focusBadgeText, orderedPlans } = useMemo(() => {
    let focusId: "A2" | "B1" | "premium" = "premium";
    let badgeText = "TIẾT KIỆM NHẤT";

    if (userTier === "A2") {
      focusId = "B1";
      badgeText = triggerContext === "B1_LESSON" ? "TIẾP TỤC LỘ TRÌNH" : "GÓI TIẾP THEO";
    } else if (triggerContext === "A2_LESSON") {
      focusId = "A2";
      badgeText = "PHÙ HỢP VỚI BẠN";
    } else if (triggerContext === "B1_LESSON") {
      focusId = "B1";
      badgeText = "PHÙ HỢP VỚI BẠN";
    } else {
      focusId = "premium";
      badgeText = "TIẾT KIỆM NHẤT";
    }

    let sortedList = [basePlans.A2, basePlans.premium, basePlans.B1];
    if (focusId === "A2") sortedList = [basePlans.premium, basePlans.A2, basePlans.B1];
    if (focusId === "B1") sortedList = [basePlans.A2, basePlans.B1, basePlans.premium];

    return { focusedPlanId: focusId, focusBadgeText: badgeText, orderedPlans: sortedList };
  }, [triggerContext, userTier]);

  const handleUpgrade = (planId: "A2" | "B1" | "premium") => {
    setUpgradingPlan(planId);
    setTimeout(() => {
      setUpgradingPlan(null);
      upgradeToPremium(planId);
      onBack();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Nút Quay Lại */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách bài học
        </button>

        {/* Header Trang */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> Nâng Cấp Lộ Trình Học
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Chọn Gói Học Phù Hợp
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Đầu tư một lần, sở hữu kiến thức trọn đời. Cấp độ A1 hoàn toàn miễn phí!
          </p>
        </div>

        {/* 3 Cột Hiển Thị Dải Rộng - Nhìn Rõ Hết Không Cần Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {orderedPlans.map((plan) => {
            const isFocused = plan.id === focusedPlanId;
            const isComboCard = plan.id === "premium";

            let currentBadge: string | null = null;
            if (isFocused) currentBadge = focusBadgeText;
            else if (isComboCard) currentBadge = "TIẾT KIỆM NHẤT";

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFocused
                    ? "bg-white dark:bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/10 md:-translate-y-3 z-10"
                    : "bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {currentBadge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide whitespace-nowrap ${
                      isFocused
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                    }`}
                  >
                    {isFocused && <Crown className="w-3.5 h-3.5" />}
                    {currentBadge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isFocused ? "text-blue-600 dark:text-blue-400" : "text-slate-500"
                      }`}
                    >
                      {plan.name}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 min-h-[40px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span className="text-sm text-slate-400 line-through">
                        {plan.originalPrice}đ
                      </span>
                      <span className="text-xs font-semibold text-slate-500">/ Trọn đời</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mb-8 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isFocused
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                          }`}
                        >
                          <Check className="w-3 h-3 font-bold" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={upgradingPlan !== null}
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    isFocused
                      ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02]"
                      : "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white"
                  } disabled:opacity-50`}
                >
                  {upgradingPlan === plan.id ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-pulse" /> Đang xử lý...
                    </>
                  ) : (
                    plan.buttonText
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}