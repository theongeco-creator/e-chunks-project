import type { Category } from "../types";
import { mk } from "../lessonUtils";

import { lesson01Content } from "../lessonsa1/lesson01";
import { lesson02Content } from "../lessonsa1/lesson02";
import { lesson03Content } from "../lessonsa1/lesson03";
import { lesson04Content } from "../lessonsa1/lesson04";

export const everydayBasics: Category = {
  id: "everyday-basics",
  number: "01",
  title: "Everyday Basics",
  emoji: "🌱",
  lessons: [
    mk( 
      1,
      "Greetings",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
      lesson01Content
    ),
    mk(
      2,
      "Numbers",
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
      lesson02Content
    ),
    mk(
      3,
      "Colours",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=600&auto=format&fit=crop",
      lesson03Content
    ),
    mk(
      4,
      "Days",
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
      lesson04Content
    ),
  ],
};