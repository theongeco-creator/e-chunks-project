import { supabase } from "@/lib/supabase"; // đổi đường dẫn nếu file client của bà nằm chỗ khác

const PROGRESS_KEY = /^lesson_progress_(A1|A2|B1)_(\d+)$/;
const OWNER_KEY = "progress_owner";
const STUDY_DAYS_KEY = "study_days";
const STORIES_KEY = "completed_stories";
const META_KEY = "kv_meta";

// Các key "lặt vặt" đồng bộ theo kiểu bản nào sửa sau thì thắng.
// Làm thêm tính năng mới cần lưu thì thêm tên key vào đây.
const KV_PATTERNS = [
  /^(blank|dictation)_progress_/,
  /^last_lesson$/,
  /^saved_stories$/,
  /^saved_words$/,
  /^saved_topics$/,   // 👈 thêm
];

type Meta = Record<string, { h: string; at: string }>;

let lastPushed = "";
const pushedKv = new Map<string, string>();

const readJSON = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const isKvKey = (k: string) => KV_PATTERNS.some((p) => p.test(k));

const keysWhere = (test: (k: string) => boolean): string[] => {
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && test(k)) keys.push(k);
  }
  return keys;
};

const localProgressKeys = () => keysWhere((k) => PROGRESS_KEY.test(k));
const localKvKeys = () => keysWhere(isKvKey);

// Supabase (jsonb) có thể đảo thứ tự key, nên so sánh phải sắp xếp key trước
const sortKeys = (v: any): any =>
  Array.isArray(v)
    ? v.map(sortKeys)
    : v && typeof v === "object"
    ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, sortKeys(v[k])]))
    : v;
const canon = (v: any) => JSON.stringify(sortKeys(v));

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return String(h);
};

const localCanon = (k: string) => {
  const raw = localStorage.getItem(k);
  if (raw === null) return "";
  try {
    return canon(JSON.parse(raw));
  } catch {
    return raw;
  }
};

const readMeta = (): Meta => readJSON<Meta>(META_KEY, {});
const writeMeta = (m: Meta) => localStorage.setItem(META_KEY, JSON.stringify(m));

// Key nào vừa thay đổi so với lần trước thì đánh dấu thời điểm sửa là bây giờ
function touchMeta() {
  const meta = readMeta();
  const now = new Date().toISOString();
  let dirty = false;
  for (const k of localKvKeys()) {
    const h = hash(localCanon(k));
    if (meta[k]?.h !== h) {
      meta[k] = { h, at: now };
      dirty = true;
    }
  }
  if (dirty) writeMeta(meta);
}

// Gộp 2 bản: mục nào bên nào đã là true thì giữ true
const mergeFlags = (a: Record<string, any>, b: Record<string, any>) => {
  const out: Record<string, any> = { ...a, ...b };
  for (const k of Object.keys(out)) {
    if (a[k] === true || b[k] === true) out[k] = true;
  }
  return out;
};

// Xóa tiến độ khỏi máy (gọi khi đăng xuất)
export const clearLocalProgress = () => {
  localProgressKeys().forEach((k) => localStorage.removeItem(k));
  localKvKeys().forEach((k) => localStorage.removeItem(k));
  localStorage.removeItem(STUDY_DAYS_KEY);
  localStorage.removeItem(STORIES_KEY);
  localStorage.removeItem(META_KEY);
  localStorage.removeItem(OWNER_KEY);
  lastPushed = "";
  pushedKv.clear();
};

// Tải từ Supabase về, gộp vào localStorage. Trả về true nếu có gì thay đổi.
export async function pullProgress(userId: string): Promise<boolean> {
  // Máy này đang giữ dữ liệu của tài khoản khác thì dọn trước
  const owner = localStorage.getItem(OWNER_KEY);
  if (owner && owner !== userId) clearLocalProgress();

  let changed = false;

  // 1. Tiến độ từng bài
  const { data: rows, error } = await supabase
    .from("lesson_progress")
    .select("level, day, progress")
    .eq("user_id", userId);
  if (error) throw error;

  for (const r of rows ?? []) {
    const key = `lesson_progress_${r.level}_${r.day}`;
    const local = readJSON<Record<string, any>>(key, {});
    const merged = mergeFlags(local, (r.progress ?? {}) as Record<string, any>);
    if (JSON.stringify(merged) !== JSON.stringify(local)) {
      localStorage.setItem(key, JSON.stringify(merged));
      changed = true;
    }
  }

  // 2. Chuỗi ngày học + truyện đã đọc
  const { data: stats, error: e2 } = await supabase
    .from("user_stats")
    .select("study_days, completed_stories")
    .eq("user_id", userId)
    .maybeSingle();
  if (e2) throw e2;

  if (stats) {
    const localDays = readJSON<string[]>(STUDY_DAYS_KEY, []);
    const days = Array.from(new Set([...localDays, ...((stats.study_days as string[]) ?? [])]))
      .sort()
      .slice(-400);
    if (JSON.stringify(days) !== JSON.stringify(localDays)) {
      localStorage.setItem(STUDY_DAYS_KEY, JSON.stringify(days));
      changed = true;
    }

    const localStories = readJSON<Record<string, boolean>>(STORIES_KEY, {});
    const stories = mergeFlags(localStories, (stats.completed_stories as Record<string, boolean>) ?? {});
    if (JSON.stringify(stories) !== JSON.stringify(localStories)) {
      localStorage.setItem(STORIES_KEY, JSON.stringify(stories));
      changed = true;
    }
  }

  // 3. Các key lặt vặt (bài điền chỗ trống, nghe-chép, bài đang học dở...)
  const { data: kvRows, error: e3 } = await supabase
    .from("user_kv")
    .select("key, value, updated_at")
    .eq("user_id", userId);
  if (e3) throw e3;

  const meta = readMeta();
  const now = Date.now();

  for (const r of kvRows ?? []) {
    if (!isKvKey(r.key)) continue;
    const cloudCanon = canon(r.value);
    const cloudAt = r.updated_at as string;

    // Máy chưa có key này: lấy luôn từ cloud
    if (localStorage.getItem(r.key) === null) {
      localStorage.setItem(r.key, JSON.stringify(r.value));
      meta[r.key] = { h: hash(cloudCanon), at: cloudAt };
      pushedKv.set(r.key, hash(cloudCanon));
      changed = true;
      continue;
    }

    const lc = localCanon(r.key);

    // Giống nhau rồi thì chỉ ghi nhận mốc thời gian
    if (lc === cloudCanon) {
      meta[r.key] = { h: hash(lc), at: cloudAt };
      pushedKv.set(r.key, hash(lc));
      continue;
    }

    // Khác nhau: bản nào sửa sau thì thắng. Key chưa từng đồng bộ trên máy này coi như cũ.
    const m = meta[r.key];
    const localTime = m ? (m.h === hash(lc) ? Date.parse(m.at) : now) : 0;
    if (Date.parse(cloudAt) > localTime) {
      localStorage.setItem(r.key, JSON.stringify(r.value));
      meta[r.key] = { h: hash(cloudCanon), at: cloudAt };
      pushedKv.set(r.key, hash(cloudCanon));
      changed = true;
    }
  }
  writeMeta(meta);

  localStorage.setItem(OWNER_KEY, userId);
  return changed;
}

// Đẩy từ localStorage lên Supabase (bỏ qua phần không có gì mới)
export async function pushProgress(userId: string): Promise<void> {
  touchMeta();
  const meta = readMeta();

  const rows = localProgressKeys().map((k) => {
    const m = k.match(PROGRESS_KEY)!;
    return { user_id: userId, level: m[1], day: Number(m[2]), progress: readJSON(k, {}) };
  });
  const studyDays = readJSON<string[]>(STUDY_DAYS_KEY, []);
  const stories = readJSON<Record<string, boolean>>(STORIES_KEY, {});

  const kvPending = localKvKeys()
    .map((k) => ({
      k,
      h: meta[k]?.h ?? "",
      value: readJSON<any>(k, null),
      at: meta[k]?.at ?? new Date().toISOString(),
    }))
    .filter((x) => x.value !== null && pushedKv.get(x.k) !== x.h);

  // Máy đang trống thì không đẩy, tránh ghi đè dữ liệu trên cloud bằng bản rỗng
  const baseEmpty = rows.length === 0 && studyDays.length === 0 && Object.keys(stories).length === 0;
  const snapshot = JSON.stringify({ rows, studyDays, stories });
  const baseChanged = !baseEmpty && snapshot !== lastPushed;

  if (!baseChanged && kvPending.length === 0) return;

  const now = new Date().toISOString();

  if (baseChanged) {
    if (rows.length > 0) {
      const { error } = await supabase
        .from("lesson_progress")
        .upsert(rows.map((r) => ({ ...r, updated_at: now })), { onConflict: "user_id,level,day" });
      if (error) throw error;
    }

    const { error: e2 } = await supabase
      .from("user_stats")
      .upsert(
        { user_id: userId, study_days: studyDays, completed_stories: stories, updated_at: now },
        { onConflict: "user_id" }
      );
    if (e2) throw e2;

    lastPushed = snapshot;
  }

  if (kvPending.length > 0) {
    const { error: e3 } = await supabase.from("user_kv").upsert(
      kvPending.map((x) => ({ user_id: userId, key: x.k, value: x.value, updated_at: x.at })),
      { onConflict: "user_id,key" }
    );
    if (e3) throw e3;
    kvPending.forEach((x) => pushedKv.set(x.k, x.h));
  }
}

// Bật đồng bộ: tải về trước, xong mới bắt đầu đẩy lên. Trả về hàm để tắt.
export function startProgressSync(userId: string, onPulled?: (changed: boolean) => void) {
  let stopped = false;
  let ready = false;

  const push = () => {
    if (!ready || stopped) return;
    pushProgress(userId).catch((e) => console.warn("Đồng bộ tiến độ lỗi:", e));
  };

  pullProgress(userId)
    .then((changed) => {
      ready = true;
      onPulled?.(changed);
      push();
    })
    .catch((e) => console.warn("Không tải được tiến độ:", e));

  const timer = window.setInterval(push, 15000);
  const onHide = () => {
    if (document.visibilityState === "hidden") push();
  };
  document.addEventListener("visibilitychange", onHide);
  window.addEventListener("pagehide", push);

  return () => {
    stopped = true;
    window.clearInterval(timer);
    document.removeEventListener("visibilitychange", onHide);
    window.removeEventListener("pagehide", push);
  };
}