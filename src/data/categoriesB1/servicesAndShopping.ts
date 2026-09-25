import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson41Content } from "../lessonsb1/lesson41";
import { lesson42Content } from "../lessonsb1/lesson42";
import { lesson43Content } from "../lessonsb1/lesson43";
import { lesson44Content } from "../lessonsb1/lesson44";
import { lesson45Content } from "../lessonsb1/lesson45";

export const servicesAndShopping: Category = {
  id: "services-and-shopping",
  number: "09",
  title: "Services & Shopping",
  emoji: "🛒",
  lessons: [
    mk(41, "Supermarkets", "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop", lesson41Content),
    mk(42, "Money", "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=600&auto=format&fit=crop", lesson42Content),
    mk(43, "Bank & post", "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=600&auto=format&fit=crop", lesson43Content),
    mk(44, "Hotels", "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop", lesson44Content),
    mk(45, "Public services", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop", lesson45Content),
  ],
};