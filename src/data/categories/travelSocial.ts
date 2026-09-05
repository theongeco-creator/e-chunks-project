import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson21Content } from "../lessons/lesson21";
import { lesson22Content } from "../lessons/lesson22";
import { lesson23Content } from "../lessons/lesson23";
import { lesson24Content } from "../lessons/lesson24";
import { lesson25Content } from "../lessons/lesson25";

export const travelSocial: Category = {
  id: "travel-social",
  number: "05",
  title: "Travel & Social Life",
  emoji: "",
  lessons: [
    mk(21, "Colors & Shapes", "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop", lesson21Content),
    mk(22, "Music & Arts", "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop", lesson22Content),
    mk(23, "Movies & TV Shows", "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop", lesson23Content),
    mk(24, "Sports & Exercise", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop", lesson24Content),
    mk(25, "Restaurants & Eating Out", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", lesson25Content),
  ],
};
