import type { Category } from "../types";
import { mk } from "../lessonUtils";
import { lesson01Content } from "../lessons/lesson01";
import { lesson02Content } from "../lessons/lesson02";
import { lesson03Content } from "../lessons/lesson03";
import { lesson04Content } from "../lessons/lesson04";
import { lesson05Content } from "../lessons/lesson05";

export const educationAndStudy: Category = {
  id: "education-and-study",
  number: "07",
  title: "Education & Study",
  emoji: "📚",
  lessons: [
    mk(31, "School", "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop", lesson01Content),
    mk(32, "Subjects", "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop", lesson02Content),
    mk(33, "Exams", "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?q=80&w=870&auto=format&fit=crop", lesson03Content),
    mk(34, "Library", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop", lesson04Content),
    mk(35, "Student life", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop", lesson05Content),
  ],
};