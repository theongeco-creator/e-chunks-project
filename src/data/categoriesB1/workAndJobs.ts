import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson36Content } from "../lessonsb1/lesson36";
import { lesson37Content } from "../lessonsb1/lesson37";
import { lesson38Content } from "../lessonsb1/lesson38";
import { lesson39Content } from "../lessonsb1/lesson39";
import { lesson40Content } from "../lessonsb1/lesson40";

export const workAndJobs: Category = {
  id: "work-and-jobs",
  number: "08",
  title: "Work & Jobs",
  emoji: "💼",
  lessons: [
    mk(36, "Professions", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop", lesson36Content),
    mk(37, "Workplace", "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop", lesson37Content),
    mk(38, "Job interviews", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", lesson38Content),
    mk(39, "Salary", "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", lesson39Content),
    mk(40, "Meetings", "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop", lesson40Content),
  ],
};