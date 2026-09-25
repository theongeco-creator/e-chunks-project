import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson01Content } from "../lessonsb1/lesson01";
import { lesson02Content } from "../lessonsb1/lesson02";
import { lesson03Content } from "../lessonsb1/lesson03";
import { lesson04Content } from "../lessonsb1/lesson04";
import { lesson05Content } from "../lessonsb1/lesson05";

export const introductionAndPersonalInformation: Category = {
  id: "introduction-and-personal-information",
  number: "01",
  title: "Introduction & Personal Information",
  emoji: "👋",
  lessons: [
    mk(1, "Personal details", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop", lesson01Content),
    mk(2, "Appearance", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop", lesson02Content),
    mk(3, "Personality", "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop", lesson03Content),
    mk(4, "Family", "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop", lesson04Content),
    mk(5, "Friends", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop", lesson05Content),
  ],
};