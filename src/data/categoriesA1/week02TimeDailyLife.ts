import type { Category } from "../types";
import { mk } from "../lessonUtils";

import { lesson05Content } from "../lessonsa1/lesson05";
import { lesson06Content } from "../lessonsa1/lesson06";
import { lesson07Content } from "../lessonsa1/lesson07";
import { lesson08Content } from "../lessonsa1/lesson08";

export const timeAndDailyLife: Category = {
  id: "time-and-daily-life",
  number: "02",
  title: "Time & Daily Life",
  emoji: "☀️",
  lessons: [
    
    mk(
      6,
      "Weather",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=600&auto=format&fit=crop",
      lesson05Content
    ),
    mk(
      7,
      "Foods & Drinks",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop",
      lesson06Content
    ),
    mk(
      8,
      "Family & Friends",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
      lesson07Content
    ),
    mk(
      5,
      "Months",
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
      lesson08Content
    ),
  ],
};