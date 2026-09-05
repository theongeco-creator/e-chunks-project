import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson16Content } from "../lessons/lesson16";
import { lesson17Content } from "../lessons/lesson17";
import { lesson18Content } from "../lessons/lesson18";
import { lesson19Content } from "../lessons/lesson19";
import { lesson20Content } from "../lessons/lesson20";

export const feelingsPersonal: Category = {
  id: "feelings-personal",
  number: "04",
  title: "Feelings & Personal Life",
  emoji: "",
  lessons: [
    mk(16, "Countries & Nationalities", "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&auto=format&fit=crop", lesson16Content),
    mk(17, "Describing People", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop", lesson17Content),
    mk(18, "Nature & Environment", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop", lesson18Content),
    mk(19, "Health & Body", "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop", lesson19Content),
    mk(20, "Directions & Locations", "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&auto=format&fit=crop", lesson20Content),
  ],
};
