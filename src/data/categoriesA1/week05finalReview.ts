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
      "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=871&auto=format&fit=crop",
      lesson17Content
    ),

  ],
};