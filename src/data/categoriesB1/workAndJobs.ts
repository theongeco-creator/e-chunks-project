import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson06Content } from "../lessons/lesson06";
import { lesson07Content } from "../lessons/lesson07";
import { lesson08Content } from "../lessons/lesson08";
import { lesson09Content } from "../lessons/lesson09";
import { lesson10Content } from "../lessons/lesson10";

export const workAndJobs: Category = {
  id: "work-and-jobs",
  number: "08",
  title: "Work & Jobs",
  emoji: "💼",
  lessons: [
    mk(36, "Professions", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop", lesson06Content),
    mk(37, "Workplace", "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop", lesson07Content),
    mk(38, "Job interviews", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", lesson08Content),
    mk(39, "Salary", "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", lesson09Content),
    mk(40, "Meetings", "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop", lesson10Content),
  ],
};