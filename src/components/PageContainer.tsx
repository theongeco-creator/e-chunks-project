import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  /**
   * Chỉ dùng để truyền thêm class RIÊNG của từng trang: padding-top/bottom,
   * space-y, min-h-screen, màu nền... KHÔNG truyền max-w / mx-auto / px- vào đây,
   * vì phần đó đã được khóa cứng bên trong component để đảm bảo mọi trang
   * luôn có cùng 1 chiều ngang, bất kể Sidebar đang mở hay thu gọn.
   */
  className?: string;
}

/**
 * Khung chuẩn DÙNG CHUNG cho mọi trang nội dung (Home, Course, Stories, Topics, ...).
 *
 * Vì sao cần cái này:
 * Trước đây mỗi trang tự viết lại "w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8",
 * chỉ cần 1 trang gõ thiếu (vd thiếu lg:px-8, hoặc lồng 2 lớp div padding chồng nhau)
 * là chiều ngang trang đó lệch so với các trang còn lại — đây chính là lỗi đã gặp ở
 * CourseList. Sidebar mở/đóng không phải nguyên nhân chính, nó chỉ làm lỗi dễ lộ ra hơn
 * ở màn hình hẹp.
 *
 * Cách dùng — LUÔN bọc nội dung chính của mọi trang mới bằng component này thay vì
 * tự viết class max-w/px-/mx-auto:
 *
 *   <PageContainer className="py-8 space-y-6">
 *     ...nội dung trang...
 *   </PageContainer>
 *
 * Nếu trang cần thêm nền/min-h-screen bao ngoài (như CourseList), vẫn được, chỉ cần
 * đừng đặt max-w/px-/mx-auto ở div ngoài đó nữa — để tất cả nằm trong PageContainer.
 */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
