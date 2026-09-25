import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson56Content } from "../lessonsb1/lesson56";
import { lesson57Content } from "../lessonsb1/lesson57";
import { lesson58Content } from "../lessonsb1/lesson58";
import { lesson59Content } from "../lessonsb1/lesson59";
import { lesson60Content } from "../lessonsb1/lesson60";

export const theNaturalWorldAndEnvironment: Category = {
  id: "the-natural-world-and-environment",
  number: "12",
  title: "The Natural World & Environment",
  emoji: "🌍",
  lessons: [
    mk(56, "Weather", "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=600&auto=format&fit=crop", lesson56Content),
    mk(57, "Nature", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop", lesson57Content),
    mk(58, "Landscapes", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop", lesson58Content),
    mk(59, "City vs Country", "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=600&auto=format&fit=crop", lesson59Content),
    mk(60, "Environment", "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop", lesson60Content),
  ],
};