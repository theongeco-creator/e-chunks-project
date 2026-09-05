import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson11Content } from "../lessons/lesson11";
import { lesson12Content } from "../lessons/lesson12";
import { lesson13Content } from "../lessons/lesson13";
import { lesson14Content } from "../lessons/lesson14";
import { lesson15Content } from "../lessons/lesson15";

export const healthAndFitness: Category = {
  id: "health-and-fitness",
  number: "06",
  title: "Health & Fitness",
  emoji: "💪",
  lessons: [
    mk(26, "Body", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop", lesson11Content),
    mk(27, "Illnesses", "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop", lesson12Content),
    mk(28, "Pharmacy", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop", lesson13Content),
    mk(29, "Sports", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop", lesson14Content),
    mk(30, "Healthy living", "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop", lesson15Content),
  ],
};