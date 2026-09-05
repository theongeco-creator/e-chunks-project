import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson21Content } from "../lessons/lesson21";
import { lesson22Content } from "../lessons/lesson22";
import { lesson23Content } from "../lessons/lesson23";
import { lesson24Content } from "../lessons/lesson24";
import { lesson25Content } from "../lessons/lesson25";

export const servicesAndShopping: Category = {
  id: "services-and-shopping",
  number: "09",
  title: "Services & Shopping",
  emoji: "🛒",
  lessons: [
    mk(41, "Supermarkets", "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop", lesson21Content),
    mk(42, "Money", "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=600&auto=format&fit=crop", lesson22Content),
    mk(43, "Bank & post", "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=600&auto=format&fit=crop", lesson23Content),
    mk(44, "Hotels", "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop", lesson24Content),
    mk(45, "Public services", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop", lesson25Content),
  ],
};