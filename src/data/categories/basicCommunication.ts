import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson01Content } from "../lessons/lesson01";
import { lesson02Content } from "../lessons/lesson02";
import { lesson03Content } from "../lessons/lesson03";
import { lesson04Content } from "../lessons/lesson04";
import { lesson05Content } from "../lessons/lesson05";

export const basicCommunication: Category = {
  id: "basic-communication",
  number: "01",
  title: "Basic Communication",
  emoji: "",
  lessons: [
    mk(1, "Introduction & Greetings", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", lesson01Content),
    mk(2, "Family", "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop", lesson02Content),
    mk(3, "Daily Routines", "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop", lesson03Content),
    mk(4, "Food & Drinks", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop", lesson04Content),
    mk(5, "Clothes", "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=870&auto=format&fit=crop", lesson05Content),
  ],
};
