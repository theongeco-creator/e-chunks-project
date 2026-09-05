import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson06Content } from "../lessons/lesson06";
import { lesson07Content } from "../lessons/lesson07";
import { lesson08Content } from "../lessons/lesson08";
import { lesson09Content } from "../lessons/lesson09";
import { lesson10Content } from "../lessons/lesson10";

export const dailyLife: Category = {
  id: "daily-life",
  number: "02",
  title: "Daily Life",
  emoji: "",
  lessons: [
    mk(6, "Places in Town", "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop", lesson06Content),
    mk(7, "Weather & Seasons", "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=600&auto=format&fit=crop", lesson07Content),
    mk(8, "Hobbies & Free time", "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop", lesson08Content),
    mk(9, "School & Classroom", "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop", lesson09Content),
    mk(10, "Jobs & Work", "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop", lesson10Content),
  ],
};
