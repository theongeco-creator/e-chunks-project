import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson11Content } from "../lessons/lesson11";
import { lesson12Content } from "../lessons/lesson12";
import { lesson13Content } from "../lessons/lesson13";
import { lesson14Content } from "../lessons/lesson14";
import { lesson15Content } from "../lessons/lesson15";

export const workStudy: Category = {
  id: "work-study",
  number: "03",
  title: "Work & Study",
  emoji: "",
  lessons: [
    mk(11, "Transportation", "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=600&auto=format&fit=crop", lesson11Content),
    mk(12, "House & Furniture", "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", lesson12Content),
    mk(13, "Shopping", "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop", lesson13Content),
    mk(14, "Holidays & Celebrations", "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop", lesson14Content),
    mk(15, "Numbers & Dates", "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop", lesson15Content),
  ],
};