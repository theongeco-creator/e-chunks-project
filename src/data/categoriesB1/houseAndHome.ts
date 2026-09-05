import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson16Content } from "../lessons/lesson16";
import { lesson17Content } from "../lessons/lesson17";
import { lesson18Content } from "../lessons/lesson18";
import { lesson19Content } from "../lessons/lesson19";
import { lesson20Content } from "../lessons/lesson20";

export const houseAndHome: Category = {
  id: "house-and-home",
  number: "04",
  title: "House & Home",
  emoji: "🏠",
  lessons: [
    mk(16, "Rooms", "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=870&auto=format&fit=crop", lesson16Content),
    mk(17, "Furniture", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop", lesson17Content),
    mk(18, "Appliances", "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop", lesson18Content),
    mk(19, "Neighborhoods", "https://images.unsplash.com/photo-1627927518258-b67557570840?q=80&w=774&auto=format&fit=crop", lesson19Content),
    mk(20, "Moving", "https://images.unsplash.com/photo-1580709839515-54b8991e2813?q=80&w=829&auto=format&fit=crops", lesson20Content),
  ],
};