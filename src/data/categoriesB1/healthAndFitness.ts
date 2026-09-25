import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson26Content } from "../lessonsb1/lesson26";
import { lesson27Content } from "../lessonsb1/lesson27";
import { lesson28Content } from "../lessonsb1/lesson28";
import { lesson29Content } from "../lessonsb1/lesson29";
import { lesson30Content } from "../lessonsb1/lesson30";

export const healthAndFitness: Category = {
  id: "health-and-fitness",
  number: "06",
  title: "Health & Fitness",
  emoji: "💪",
  lessons: [
    mk(26, "Body", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop", lesson26Content),
    mk(27, "Illnesses", "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop", lesson27Content),
    mk(28, "Pharmacy", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop", lesson28Content),
    mk(29, "Sports", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop", lesson29Content),
    mk(30, "Healthy living", "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop", lesson30Content),
  ],
};