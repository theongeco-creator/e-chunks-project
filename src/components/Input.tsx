import { InputHTMLAttributes, ReactNode } from "react";

/**
 * Input dùng chung cho: search bar (Header), form field (Settings...).
 * Viền/nền LUÔN trung tính — màu brand chỉ xuất hiện ở viền khi focus,
 * không dùng ở trạng thái bình thường.
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // vd "Tên hiển thị" — hiện phía trên input
  icon?: ReactNode; // icon bên trái, vd kính lúp cho search
  error?: string; // dòng chữ đỏ nhỏ phía dưới nếu có lỗi
}

export function Input({ label, icon, error, disabled, className, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-neutral-textPrimary">
          {label}
        </label>
      )}

      <div
        className={[
          "flex items-center gap-2 rounded-input border bg-neutral-surface px-3 py-2.5",
          error ? "border-red-400" : "border-neutral-border",
          disabled ? "bg-neutral-bg cursor-not-allowed" : "focus-within:border-brand-500",
          className || "",
        ].join(" ")}
      >
        {icon && <span className="text-neutral-textMuted">{icon}</span>}
        <input
          disabled={disabled}
          className="flex-1 bg-transparent outline-none text-sm text-neutral-textPrimary placeholder:text-neutral-textMuted disabled:cursor-not-allowed"
          {...rest}
        />
      </div>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

/**
 * VÍ DỤ DÙNG — search bar (Header, không cần label):
 * <Input icon={<Search size={16} />} placeholder="Search" />
 *
 * VÍ DỤ DÙNG — form field (Settings):
 * <Input label="Tên hiển thị" value={name} onChange={(e) => setName(e.target.value)} />
 * <Input label="Email tài khoản" value={email} disabled />
 */