import { categoriesA1, categoriesA2, categoriesB1 } from "@/data/lessonData";

export type Level = "A1" | "A2" | "B1";
export const LEVELS: Level[] = ["A1", "A2", "B1"];

export const getCategories = (level: Level) =>
  level === "B1" ? categoriesB1 : level === "A1" ? categoriesA1 : categoriesA2;

export const getLessonDays = (level: Level): number[] =>
  getCategories(level).flatMap((c) => c.lessons.map((l) => l.day));

// Cùng luật với CourseList: >= 4 tab và tất cả đều true mới là "hoàn thành"
export const isLessonComplete = (level: string, day: number): boolean => {
  try {
    const raw = localStorage.getItem(`lesson_progress_${level}_${day}`);
    if (!raw) return false;
    const values = Object.values(JSON.parse(raw));
    return values.length >= 4 && values.every((v) => v === true);
  } catch {
    return false;
  }
};

// Đã bắt đầu học bài này chưa (có ít nhất 1 tab đã hoàn thành)
export const hasStarted = (level: string, day: number): boolean => {
  try {
    const raw = localStorage.getItem(`lesson_progress_${level}_${day}`);
    if (!raw) return false;
    return Object.values(JSON.parse(raw)).some((v) => v === true);
  } catch {
    return false;
  }
};

// Tiến độ của một khóa: đã xong bao nhiêu / tổng số bài
export const getLevelProgress = (level: Level) => {
  const days = getLessonDays(level);
  const total = days.length;
  const done = days.filter((d) => isLessonComplete(level, d)).length;
  return { total, done, percent: total === 0 ? 0 : Math.round((done / total) * 100) };
};

// Số truyện đã đọc xong (key completed_stories: { [storyId]: true })
export const getCompletedStoriesCount = (): number => {
  try {
    const raw = localStorage.getItem("completed_stories");
    const obj = raw ? JSON.parse(raw) : {};
    return Object.values(obj).filter((v) => v === true).length;
  } catch {
    return 0;
  }
};

// ================= CHUỖI NGÀY HỌC (STREAK) =================
const STUDY_DAYS_KEY = "study_days";

const dayKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const readStudyDays = (): string[] => {
  try {
    const raw = localStorage.getItem(STUDY_DAYS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
};

// Ghi nhận "hôm nay có học" (gọi khi user mở một bài học)
export const recordStudyToday = () => {
  const today = dayKey(new Date());
  const days = readStudyDays();
  if (days.includes(today)) return;
  days.push(today);
  // Giữ tối đa ~400 ngày gần nhất cho nhẹ
  localStorage.setItem(STUDY_DAYS_KEY, JSON.stringify(days.slice(-400)));
  window.dispatchEvent(new Event("study-days-changed")); // 👈 thêm dòng này
};

// Số ngày liên tiếp. Hôm nay chưa học thì vẫn tính chuỗi tới hôm qua (chưa bị đứt).
export const getStreak = (): number => {
  const set = new Set(readStudyDays());
  const cur = new Date();
  if (!set.has(dayKey(cur))) cur.setDate(cur.getDate() - 1);
  let n = 0;
  while (set.has(dayKey(cur))) {
    n++;
    cur.setDate(cur.getDate() - 1);
  }
  return n;
};

const WEEK_LETTERS = ["M", "T", "W", "T", "F", "S", "S"];

// Dải 7 ngày của tuần hiện tại (Thứ Hai → Chủ Nhật) cho popup streak
export const getWeekData = () => {
  const set = new Set(readStudyDays());
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  return WEEK_LETTERS.map((day, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { day, completed: set.has(dayKey(d)), isToday: dayKey(d) === dayKey(today) };
  });
};
