import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson51Content } from "../lessonsb1/lesson51";
import { lesson52Content } from "../lessonsb1/lesson52";
import { lesson53Content } from "../lessonsb1/lesson53";
import { lesson54Content } from "../lessonsb1/lesson54";
import { lesson55Content } from "../lessonsb1/lesson55";

export const entertainmentAndMedia: Category = {
  id: "entertainment-and-media",
  number: "11",
  title: "Entertainment & Media",
  emoji: "🎬",
  lessons: [
    mk(51, "Hobbies", "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop", lesson51Content),
    mk(52, "Movies & TV", "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop", lesson52Content),
    mk(53, "Music", "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop", lesson53Content),
    mk(54, "Reading", "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=600&auto=format&fit=crop", lesson54Content),
    mk(55, "Internet", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", lesson55Content),
  ],
};