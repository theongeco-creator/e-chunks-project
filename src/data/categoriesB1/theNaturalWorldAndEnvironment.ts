import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson26Content } from "../lessons/lesson26";
import { lesson27Content } from "../lessons/lesson27";
import { lesson28Content } from "../lessons/lesson28";
import { lesson29Content } from "../lessons/lesson29";
import { lesson30Content } from "../lessons/lesson30";

export const theNaturalWorldAndEnvironment: Category = {
  id: "the-natural-world-and-environment",
  number: "12",
  title: "The Natural World & Environment",
  emoji: "🌍",
  lessons: [
    mk(56, "Weather", "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=600&auto=format&fit=crop", lesson26Content),
    mk(57, "Nature", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop", lesson27Content),
    mk(58, "Landscapes", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop", lesson28Content),
    mk(59, "City vs Country", "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=600&auto=format&fit=crop", lesson29Content),
    mk(60, "Environment", "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop", lesson30Content),
  ],
};