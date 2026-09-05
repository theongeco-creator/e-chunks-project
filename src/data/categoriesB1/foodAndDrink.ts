import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson21Content } from "../lessons/lesson21";
import { lesson22Content } from "../lessons/lesson22";
import { lesson23Content } from "../lessons/lesson23";
import { lesson24Content } from "../lessons/lesson24";
import { lesson25Content } from "../lessons/lesson25";

export const foodAndDrink: Category = {
  id: "food-and-drink",
  number: "05",
  title: "Food & Drink",
  emoji: "🍔",
  lessons: [
    mk(21, "Ingredients", "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop", lesson21Content),
    mk(22, "Drinks & desserts", "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop", lesson22Content),
    mk(23, "Spices", "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop", lesson23Content),
    mk(24, "Cooking", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop", lesson24Content),
    mk(25, "Restaurants", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", lesson25Content),
  ],
};