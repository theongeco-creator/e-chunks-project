import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson46Content } from "../lessonsb1/lesson46";
import { lesson47Content } from "../lessonsb1/lesson47";
import { lesson48Content } from "../lessonsb1/lesson48";
import { lesson49Content } from "../lessonsb1/lesson49";
import { lesson50Content } from "../lessonsb1/lesson50";

export const travelAndTransport: Category = {
  id: "travel-and-transport",
  number: "10",
  title: "Travel & Transport",
  emoji: "✈️",
  lessons: [
    mk(46, "Transport", "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop", lesson46Content),
    mk(47, "Airports", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop", lesson47Content),
    mk(48, "Holidays", "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop", lesson48Content),
    mk(49, "Directions", "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&auto=format&fit=crop", lesson49Content),
    mk(50, "Travel problems", "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop", lesson50Content),
  ],
};