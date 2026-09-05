import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson06Content } from "../lessons/lesson06";
import { lesson07Content } from "../lessons/lesson07";
import { lesson08Content } from "../lessons/lesson08";
import { lesson09Content } from "../lessons/lesson09";
import { lesson10Content } from "../lessons/lesson10";

export const dailyLifeAndRoutine: Category = {
  id: "daily-life-and-routine",
  number: "03",
  title: "Daily Life & Routine",
  emoji: "⏰",
  lessons: [
    mk(11, "Routines", "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop", lesson06Content),
    mk(12, "Chores", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop", lesson07Content),
    mk(13, "Time & dates", "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=600&auto=format&fit=crop", lesson08Content),
    mk(14, "Weekends", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop", lesson09Content),
    mk(15, "Habits", "https://images.unsplash.com/photo-1688679024841-702d5fa41bf5?q=80&w=812&auto=format&fit=crop", lesson10Content),
  ],
};