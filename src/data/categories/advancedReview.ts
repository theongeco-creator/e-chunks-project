import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson26Content } from "../lessons/lesson26";
import { lesson27Content } from "../lessons/lesson27";
import { lesson28Content } from "../lessons/lesson28";
import { lesson29Content } from "../lessons/lesson29";
import { lesson30Content } from "../lessons/lesson30";

export const advancedReview: Category = {
  id: "advanced-review",
  number: "06",
  title: "Advanced Communication & Review",
  emoji: "",
  lessons: [
    mk(26, "Time & Timetables", 
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop", lesson26Content),

    mk(27, "Technology in Everyday Life", 
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop", lesson27Content),

    mk(28, "Emergency & Safety", 
      "https://images.unsplash.com/photo-1600091474842-83bb9c05a723?q=80&w=774&auto=format&fit=crop", lesson28Content),

    mk(29, "Socializing & Small Talk",
       "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop", lesson29Content),

    mk(30, "Final Review & Master Challenge",
       "https://images.unsplash.com/photo-1586542276867-832a2309a705?q=80&w=871&auto=format&fit=crop", lesson30Content),
  ],
};
