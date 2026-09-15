import type { Category } from "../types";
import { mk } from "../lessonUtils";

import { lesson09Content } from "../lessonsa1/lesson09";
import { lesson10Content } from "../lessonsa1/lesson10";
import { lesson11Content } from "../lessonsa1/lesson11";
import { lesson12Content } from "../lessonsa1/lesson12";

export const workAndWorldAroundUs: Category = {
  id: "work-and-world-around-us",
  number: "03",
  title: "Work & World Around Us",
  emoji: "🌍",
  lessons: [
    mk(
      9,
      "Work",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
      lesson09Content
    ),
    mk(
      10,
      "Travel",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
      lesson10Content
    ),
    mk(
      11,
      "Animals",
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=600&auto=format&fit=crop",
      lesson11Content
    ),
    mk(
      12,
      "Body & Health",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop",
      lesson12Content
    ),
  ],
};