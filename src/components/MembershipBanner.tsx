interface MembershipBannerProps {
  tier?: string;
  onAction?: () => void;
}

export function MembershipBanner({ tier = "free", onAction }: MembershipBannerProps) {
  const bannerConfig: Record<string, {
    bg: string;
    textColor: string;      // Thêm màu chữ riêng cho từng banner
    descColor: string;      // Thêm màu mô tả riêng
    title: string;
    desc: string;
    showButton: boolean;
    buttonText?: string;
    buttonStyle?: string;
  }> = {
    premium: {
      // Thêm lớp phủ tối mờ (ví dụ: dùng pseudo-element hoặc đơn giản là set màu chữ tối nếu ảnh sáng, hoặc dùng shadow)
      bg: "bg-[url('/images/banner-premium.png')] bg-cover bg-center",
      textColor: "text-slate-900 dark:text-dark-bg", // Chỉnh màu chữ linh hoạt theo nền sáng/tối của ảnh
      descColor: "text-slate-700 dark:text-dark-bg",
      title: "SVIP • Gói Premium",
      desc: "Mở khóa toàn bộ đặc quyền học tập trọn đời",
      showButton: false,
    },
    A2: {
      bg: "bg-[url('/images/banner-course.png')] bg-cover bg-center",
      textColor: "text-white",
      descColor: "text-blue-100",
      title: "Gói Khóa Học A2",
      desc: "Đang học lộ trình phản xạ chuyên sâu",
      showButton: true,
      buttonText: "Chi tiết",
      buttonStyle: "bg-white text-blue-700 hover:bg-blue-50",
    },
    B1: {
      bg: "bg-[url('/images/banner-course.png')] bg-cover bg-center",
      textColor: "text-white",
      descColor: "text-blue-100",
      title: "Gói Khóa Học B1",
      desc: "Đang học lộ trình phản xạ chuyên sâu",
      showButton: true,
      buttonText: "Chi tiết",
      buttonStyle: "bg-white text-blue-700 hover:bg-blue-50",
    },
    free: {
      bg: "bg-[url('/images/banner-free.png')] bg-cover bg-center",
      textColor: "text-slate-900",
      descColor: "text-slate-600",
      title: "Gói Miễn Phí",
      desc: "Nâng cấp để mở khóa toàn bộ bài học",
      showButton: true,
      buttonText: "Nâng cấp",
      buttonStyle: "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
    },
  };

  const current = bannerConfig[tier || "free"] || bannerConfig.free;

  return (
    <div className={`w-full rounded-xl p-4 flex items-center justify-between gap-3 relative overflow-hidden ${current.bg}`}>
      
      
      {/* Phần bên trái: Tiêu đề + Mô tả */}
      <div className="flex items-center gap-3.5 min-w-0 relative z-10">
        <div className="space-y-0.5 min-w-0">
          <p className={`text-sm font-bold ${current.textColor}`}>
            {current.title}
          </p>
          <p className={`text-xs opacity-90 truncate ${current.descColor}`}>
            {current.desc}
          </p>
        </div>
      </div>

      {/* Phần bên phải: Nút hành động */}
      {current.showButton && (
        <button 
          onClick={onAction}
          className={`text-xs font-bold px-3.5 py-2 rounded-lg shadow-xs transition cursor-pointer shrink-0 relative z-10 ${current.buttonStyle}`}
        >
          {current.buttonText}
        </button>
      )}
    </div>
  );
}