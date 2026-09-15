import type { Category } from "../types";
import { mk } from "../lessonUtils";

import { lesson13Content } from "../lessonsa1/lesson13";
import { lesson14Content } from "../lessonsa1/lesson14";
import { lesson15Content } from "../lessonsa1/lesson15";
import { lesson16Content } from "../lessonsa1/lesson16";

export const schoolAndFun: Category = {
  id: "school-and-fun",
  number: "04",
  title: "School & Fun",
  emoji: "🎨",
  lessons: [
    mk(
      13,
      "Clothes",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
      lesson13Content
    ),
    mk(
      14,
      "School",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
      lesson14Content
    ),
    mk(
      15,
      "Sports & Leisure",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop",
      lesson15Content
    ),
    mk(
      16,
      "Toys",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600&auto=format&fit=crop",
      lesson16Content
    ),
  ],
};