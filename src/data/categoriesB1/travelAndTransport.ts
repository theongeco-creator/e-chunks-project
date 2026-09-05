import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson11Content } from "../lessons/lesson11";
import { lesson12Content } from "../lessons/lesson12";
import { lesson13Content } from "../lessons/lesson13";
import { lesson14Content } from "../lessons/lesson14";
import { lesson15Content } from "../lessons/lesson15";

export const travelAndTransport: Category = {
  id: "travel-and-transport",
  number: "10",
  title: "Travel & Transport",
  emoji: "✈️",
  lessons: [
    mk(46, "Transport", "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop", lesson11Content),
    mk(47, "Airports", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop", lesson12Content),
    mk(48, "Holidays", "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop", lesson13Content),
    mk(49, "Directions", "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&auto=format&fit=crop", lesson14Content),
    mk(50, "Travel problems", "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop", lesson15Content),
  ],
};