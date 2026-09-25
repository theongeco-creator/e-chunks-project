import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson06Content } from "../lessonsb1/lesson06";
import { lesson07Content } from "../lessonsb1/lesson07";
import { lesson08Content } from "../lessonsb1/lesson08";
import { lesson09Content } from "../lessonsb1/lesson09";
import { lesson10Content } from "../lessonsb1/lesson10";

export const clothesAndFashion: Category = {
  id: "clothes-and-fashion",
  number: "02",
  title: "Clothes & Fashion",
  emoji: "👕",
  lessons: [
    mk(6, "Outfits", "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop", lesson06Content),
    mk(7, "Accessories", "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?q=80&w=870&auto=format&fit=crop", lesson07Content), // Đổi hình Accessories mới (Trang sức, đồng hồ, kính...)
    mk(8, "Fabrics", "https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?q=80&w=387&auto=format&fit=crop", lesson08Content), // Đổi hình Fabrics mới (Cuộn chỉ, vải vóc màu sắc)s
    mk(9, "Occasions", "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop", lesson09Content),
    mk(10, "Shopping", "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop", lesson10Content),
  ],
};
