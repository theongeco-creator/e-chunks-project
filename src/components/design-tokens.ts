/**
 * DESIGN TOKENS — nguồn sự thật duy nhất cho màu/spacing/radius/shadow
 * Mọi component (Sidebar, Card, Badge, Modal...) chỉ được LẤY từ đây,
 * không tự khai màu/spacing riêng trong component.
 *
 * Cách dùng với Tailwind: import object này vào tailwind.config.ts
 * ở phần theme.extend (xem ví dụ cuối file).
 */

export const tokens = {
  // ─── MÀU NHẤN DUY NHẤT (theo tham chiếu Uxcel Home) ────────
  // CHỈ 1 màu này được dùng cho: CTA chính, active state, link,
  // progress bar. Không thêm màu nhấn thứ 2 nào khác trong app.
  brand: {
    500: "#4F46E5",
    600: "#4338ca", // hover/pressed state của nút chính
    soft: "#eef2ff", // nền nhạt khi cần, vd background badge active
  },

  // ─── NỀN & CHỮ TRUNG TÍNH (bám theo tông Uxcel: trắng + xám nhạt) ──
  neutral: {
    bg: "#f9fafb", // nền tổng thể trang
    surface: "#ffffff", // nền card/modal/sidebar
    border: "#e5e7eb",
    activePill: "#f3f4f6", // nền pill khi active trong sidebar (chỉ xám, không màu)
    textPrimary: "#111827",
    textSecondary: "#6b7280",
    textMuted: "#9ca3af",
  },

  // ─── CẤP ĐỘ (A1/A2/B1) — KHÔNG còn màu riêng cho từng cấp độ.
  // Phân biệt bằng CHỮ (badge text xám nhỏ, viết hoa) như "COURSE"
  // trong ảnh Uxcel — không tô nền màu theo từng cấp độ nữa.
  // Nếu sau này thấy cần phân biệt nhanh hơn bằng mắt, có thể thêm
  // lại 1 icon nhỏ (không phải màu nền) — chưa cần bây giờ.

  // ─── TRẠNG THÁI BÀI HỌC (cho syllabus dạng gập/mở) ─────────
  // Vẫn cần màu ở đây vì đây là THÔNG TIN chức năng (đã học/đang
  // học/khoá), không phải trang trí — nhưng dùng đúng brand + xám,
  // không thêm màu ngoài bảng trên.
  lessonState: {
    done: { icon: "#4F46E5", text: "#4F46E5" }, // đã hoàn thành — dùng brand
    current: { icon: "#111827", text: "#111827" }, // đang học — đậm, nổi bật bằng độ đậm chứ không phải màu khác
    locked: { icon: "#d1d5db", text: "#9ca3af" }, // chưa mở khoá — xám nhạt
  },

  // ─── MÀU CHUNK-TAGGING (đọc hiểu) — GIỮ RIÊNG, KHÔNG dùng
  // lại ở nơi khác (card, badge...) để không loãng ý nghĩa chức năng.
  chunkTag: {
    noun: "#f97066",
    verb: "#22c55e",
    adjective: "#a855f7",
    preposition: "#fb923c",
    frequency: "#38bdf8",
  },

  // ─── BO GÓC ─────────────────────────────────────────────
  radius: {
    badge: "999px", // pill tròn hoàn toàn
    card: "12px",
    modal: "16px",
    button: "8px",
    input: "8px", // hiện đang giống button, nhưng tách riêng để sau đổi độc lập được
  },

  // ─── SHADOW ─────────────────────────────────────────────
  shadow: {
    card: "0 1px 2px rgba(0,0,0,0.04), 0 1px 8px rgba(0,0,0,0.04)",
    modal: "0 8px 24px rgba(0,0,0,0.12)",
  },

  // ─── SPACING (nếu cần thêm ngoài scale mặc định Tailwind) ──
  spacing: {
    cardPadding: "20px",
    cardGap: "16px",
  },
} as const;

/**
 * VÍ DỤ GẮN VÀO tailwind.config.ts:
 *
 * import { tokens } from "./design-tokens";
 *
 * export default {
 *   theme: {
 *     extend: {
 *       colors: {
 *         brand: tokens.brand,
 *         neutral: tokens.neutral,
 *       },
 *       borderRadius: {
 *         card: tokens.radius.card,
 *         badge: tokens.radius.badge,
 *         modal: tokens.radius.modal,
 *         button: tokens.radius.button,
 *         input: tokens.radius.input,
 *       },
 *       boxShadow: {
 *         card: tokens.shadow.card,
 *         modal: tokens.shadow.modal,
 *       },
 *     },
 *   },
 * };
 *
 * Sau đó trong component chỉ viết className="bg-neutral-surface rounded-card shadow-card"
 * thay vì tự gõ mã màu/px tay.
 */