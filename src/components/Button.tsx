import { ReactNode } from "react";

/**
 * Button dùng chung cho toàn app.
 * "primary" là màu brand (#4F46E5) — CHỈ dùng cho 1 hành động
 * quan trọng nhất trên mỗi màn hình (Bắt đầu học, Upgrade...).
 * Đừng tô nhiều nút primary trên cùng 1 màn hình — mất hết ý
 * nghĩa "đây là hành động chính".
 */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode; // icon bên trái chữ, vd mũi tên trong "Tìm hiểu ngay →"
  fullWidth?: boolean;
  className?: string; // 👈 Thêm dòng này để TypeScript nhận className
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white font-bold rounded-xl shadow-sm hover:bg-brand-600 border border-transparent",
  secondary:
    "bg-white text-neutral-textPrimary border border-neutral-border hover:bg-neutral-bg",
  ghost:
    "bg-transparent text-neutral-textSecondary hover:bg-neutral-activePill border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-sm px-4 py-3",
  lg: "text-base px-5 py-3.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
  icon,
  fullWidth,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        "rounded-button font-medium transition-colors inline-flex items-center justify-center gap-2",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      {icon}
      {children}
    </button>
  );
}

/**
 * VÍ DỤ DÙNG:
 * <Button variant="primary">Bắt đầu học</Button>
 * <Button variant="secondary" size="sm">Xem tất cả</Button>
 * <Button variant="ghost" icon={<ArrowRight size={16} />}>Tìm hiểu ngay</Button>
 */