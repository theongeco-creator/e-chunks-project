import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson01Content } from "../lessons/lesson01";
import { lesson02Content } from "../lessons/lesson02";
import { lesson03Content } from "../lessons/lesson03";
import { lesson04Content } from "../lessons/lesson04";
import { lesson05Content } from "../lessons/lesson05";

export const clothesAndFashion: Category = {
  id: "clothes-and-fashion",
  number: "02",
  title: "Clothes & Fashion",
  emoji: "👕",
  lessons: [
    mk(6, "Outfits", "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop", lesson01Content),
    mk(7, "Accessories", "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?q=80&w=870&auto=format&fit=crop", lesson02Content), // Đổi hình Accessories mới (Trang sức, đồng hồ, kính...)
    mk(8, "Fabrics", "https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?q=80&w=387&auto=format&fit=crop", lesson03Content), // Đổi hình Fabrics mới (Cuộn chỉ, vải vóc màu sắc)s
    mk(9, "Occasions", "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop", lesson04Content),
    mk(10, "Shopping", "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop", lesson05Content),
  ],
};
