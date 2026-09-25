import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson11Content } from "../lessonsb1/lesson11";
import { lesson12Content } from "../lessonsb1/lesson12";
import { lesson13Content } from "../lessonsb1/lesson13";
import { lesson14Content } from "../lessonsb1/lesson14";
import { lesson15Content } from "../lessonsb1/lesson15";

export const dailyLifeAndRoutine: Category = {
  id: "daily-life-and-routine",
  number: "03",
  title: "Daily Life & Routine",
  emoji: "⏰",
  lessons: [
    mk(11, "Routines", "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop", lesson11Content),
    mk(12, "Chores", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop", lesson12Content),
    mk(13, "Time & dates", "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=600&auto=format&fit=crop", lesson13Content),
    mk(14, "Weekends", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop", lesson14Content),
    mk(15, "Habits", "https://images.unsplash.com/photo-1688679024841-702d5fa41bf5?q=80&w=812&auto=format&fit=crop", lesson15Content),
  ],
};