import { ReactNode } from "react";

/**
 * Card dùng chung cho: card cấp độ (A1/A2/B1), card truyện,
 * card chủ đề từ vựng. Nền LUÔN trung tính (trắng + viền xám nhạt)
 * — không tô màu nền theo cấp độ nữa. Badge chỉ là chữ, không nền màu.
 *
 * Nếu 1 chỗ dùng cần thêm thứ mà props dưới đây không đáp ứng được,
 * ĐỪNG thêm ".. && <div className=...>" chắp vá trong Card.tsx —
 * quay lại xem props có đang thiếu gì hợp lý cần bổ sung chính thức không.
 */

interface CardMeta {
  icon?: ReactNode;
  label: string; // vd "1 phút đọc", "16 bài", "4 tuần"
}

interface CardProps {
  badgeText?: string; // vd "A1", "COURSE" — chữ xám nhỏ, không nền màu
  title: string;
  description?: string;
  media?: ReactNode; // vùng ảnh/illustration phía trên, tự truyền <img> hoặc component minh hoạ
  meta?: CardMeta[]; // hàng icon + text nhỏ dưới cùng
  ctaLabel?: string;
  onClick?: () => void;
  locked?: boolean; // hiện overlay mờ + icon khoá nếu true
}

export function Card({
  badgeText,
  title,
  description,
  media,
  meta,
  ctaLabel,
  onClick,
  locked,
}: CardProps) {
  return (
    <div
      onClick={!locked ? onClick : undefined}
      className={[
        "bg-neutral-surface border border-neutral-border rounded-2xl shadow-sm p-4 overflow-hidden", // 👈 Thêm p-4 để tạo khoảng cách thụt lùi chung
        "transition-transform",
        locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:-translate-y-0.5",
      ].join(" ")}
    >
      {/* 🚀 KHỐI HÌNH ẢNH: Thêm border nhẹ bo viền chuẩn Uxcel */}
        {media && (
          <div className="bg-gray-50/80 dark:bg-slate-800/50 h-48 w-full rounded-xl border border-gray-200/80 dark:border-slate-700/60 flex items-center justify-center relative overflow-hidden">
            {media}
            {locked && (
              <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
                {/* icon khoá */}
              </div>
            )}
          </div>
        )}

      {/* NỘI DUNG BÊN DƯỚI */}
      <div className="pt-4 flex flex-col gap-2">
        {badgeText && (
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-textMuted">
            {badgeText}
          </span>
        )}

        <h3 className="text-base font-bold text-neutral-textPrimary">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-neutral-textSecondary line-clamp-2">
            {description}
          </p>
        )}

        {meta && meta.length > 0 && (
          <div className="flex items-center gap-3 mt-1 text-xs text-neutral-textMuted">
            {meta.map((m, i) => (
              <span key={i} className="flex items-center gap-1">
                {m.icon}
                {m.label}
              </span>
            ))}
          </div>
        )}

        {ctaLabel && !locked && (
          <span className="text-sm font-semibold text-brand-500 mt-2 inline-block">
            {ctaLabel}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * VÍ DỤ DÙNG — card cấp độ:
 * <Card
 *   badgeText="A1 – Cơ bản"
 *   title="Chưa có nền tảng?"
 *   description="Ngay cả chào hỏi, tự giới thiệu cũng phải nghĩ mãi?..."
 *   meta={[{ label: "16 bài" }, { label: "4 tuần" }]}
 *   ctaLabel="Bắt đầu"
 *   onClick={() => onSelectLevel("A1")}
 * />
 *
 * VÍ DỤ DÙNG — card truyện:
 * <Card
 *   badgeText="A1"
 *   title="First Day of School"
 *   media={<img src={storyImg} className="w-full h-full object-cover" />}
 *   meta={[{ icon: <Clock size={12} />, label: "1 phút đọc" }]}
 *   ctaLabel="Đọc"
 *   onClick={() => onSelectStory(story)}
 * />
 */
