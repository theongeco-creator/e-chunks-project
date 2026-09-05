/*
# Create lessons and lesson_progress tables (single-tenant, no auth)

1. Purpose
   This is a single-tenant English-learning app with no sign-in screen. The
   frontend reads lessons (shared content) and writes per-browser progress
   using a stable client_id stored in localStorage. All data is intentionally
   shared/public across the single tenant, so policies allow anon + authenticated.

2. New Tables
   - `lessons`
     - id (uuid, primary key)
     - number (int, unique, not null) — lesson order 1..60
     - title (text, not null)
     - description (text, not null)
     - level (text, not null) — 'beginner' | 'elementary' | 'pre-intermediate'
     - unit (int, not null) — grouping into units
     - topic (text, not null)
     - objectives (text[], not null) — learning goals
     - dialogue (jsonb, not null) — [{speaker, line}]
     - vocabulary (jsonb, not null) — [{word, translation, example}]
     - grammar_point (text, not null)
     - grammar_explanation (text, not null)
     - quiz (jsonb, not null) — [{question, options[], answer_index, explanation}]
     - created_at (timestamptz, default now())
   - `lesson_progress`
     - id (uuid, primary key)
     - lesson_id (uuid, FK -> lessons, on delete cascade)
     - client_id (text, not null) — anonymous browser identifier
     - status (text, not null, default 'not-started')
     - quiz_score (int, nullable)
     - last_visited_at (timestamptz, nullable)
     - completed_at (timestamptz, nullable)
     - updated_at (timestamptz, default now())
     - Unique (lesson_id, client_id)

3. Indexes
   - lessons.number (unique)
   - lessons.level
   - lessons.unit
   - lesson_progress (client_id)
   - lesson_progress (lesson_id, client_id) unique

4. Security
   - RLS enabled on both tables.
   - Lessons: public read for anon+authenticated; no client writes (content is seeded server-side).
   - lesson_progress: full CRUD for anon+authenticated (shared single-tenant data).
*/

CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  number int UNIQUE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  level text NOT NULL CHECK (level IN ('beginner', 'elementary', 'pre-intermediate')),
  unit int NOT NULL,
  topic text NOT NULL,
  objectives text[] NOT NULL DEFAULT '{}',
  dialogue jsonb NOT NULL DEFAULT '[]'::jsonb,
  vocabulary jsonb NOT NULL DEFAULT '[]'::jsonb,
  grammar_point text NOT NULL,
  grammar_explanation text NOT NULL,
  quiz jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_lessons_level ON lessons(level);
CREATE INDEX IF NOT EXISTS idx_lessons_unit ON lessons(unit);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_lessons" ON lessons;
CREATE POLICY "anon_read_lessons" ON lessons FOR SELECT
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS lesson_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  client_id text NOT NULL,
  status text NOT NULL DEFAULT 'not-started' CHECK (status IN ('not-started', 'in-progress', 'completed')),
  quiz_score int,
  last_visited_at timestamptz,
  completed_at timestamptz,
  updated_at timestamptz DEFAULT now(),
  UNIQUE (lesson_id, client_id)
);

CREATE INDEX IF NOT EXISTS idx_progress_client ON lesson_progress(client_id);
CREATE INDEX IF NOT EXISTS idx_progress_lesson ON lesson_progress(lesson_id);

ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_progress" ON lesson_progress;
CREATE POLICY "anon_select_progress" ON lesson_progress FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_progress" ON lesson_progress;
CREATE POLICY "anon_insert_progress" ON lesson_progress FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_progress" ON lesson_progress;
CREATE POLICY "anon_update_progress" ON lesson_progress FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_progress" ON lesson_progress;
CREATE POLICY "anon_delete_progress" ON lesson_progress FOR DELETE
  TO anon, authenticated USING (true);
