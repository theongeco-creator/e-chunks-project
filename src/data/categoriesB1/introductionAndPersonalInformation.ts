import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson26Content } from "../lessons/lesson26";
import { lesson27Content } from "../lessons/lesson27";
import { lesson28Content } from "../lessons/lesson28";
import { lesson29Content } from "../lessons/lesson29";
import { lesson30Content } from "../lessons/lesson30";

export const introductionAndPersonalInformation: Category = {
  id: "introduction-and-personal-information",
  number: "01",
  title: "Introduction & Personal Information",
  emoji: "👋",
  lessons: [
    mk(1, "Personal details", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop", lesson26Content),
    mk(2, "Appearance", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop", lesson27Content),
    mk(3, "Personality", "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop", lesson28Content),
    mk(4, "Family", "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop", lesson29Content),
    mk(5, "Friends", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop", lesson30Content),
  ],
};