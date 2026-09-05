export type LessonLevel = 'beginner' | 'elementary' | 'pre-intermediate'

export interface Lesson {
  id: string
  number: number
  title: string
  description: string
  level: LessonLevel
  unit: number
  topic: string
  objectives: string[]
  dialogue: { speaker: string; line: string }[]
  vocabulary: { word: string; translation: string; example: string }[]
  grammar_point: string
  grammar_explanation: string
  quiz: { question: string; options: string[]; answer_index: number; explanation: string }[]
  created_at?: string
}

export interface LessonProgress {
  id: string
  lesson_id: string
  status: 'not-started' | 'in-progress' | 'completed'
  quiz_score: number | null
  last_visited_at: string | null
  completed_at: string | null
  updated_at?: string
}

export interface LessonWithProgress extends Lesson {
  progress?: LessonProgress
}
