import type { Category } from "../types";
import { mk } from "../lessonUtils";

import { lesson17Content } from "../lessonsa1/lesson17";

export const FinalReiew: Category = {
  id: "final-review",
  number: "05",
  title: "Final Review & Master Challenge",
  emoji: "🎨",
  lessons: [
    mk(
      17,
      "Final Review",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
      lesson17Content
    ),

  ],
};