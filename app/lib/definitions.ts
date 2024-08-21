// Single Answer Exercise
export interface ExerciseAnswer {
  id: string;
  answer: string;
  exercise: string;
  resourcetype: string;
}

// Single Exercise
interface Exercise {
  id: string;
  course_id: string;
  next_exercise_id: string | null;
  previous_exercise_id: string | null;
  is_completed: boolean;
  title: string;
  order: number;
  url?: string;
  description?: string;
  hint?: string;
  lesson: string;
  resourcetype: string;
  answers?: ExerciseAnswer[];
}

// Single lesson
interface Lesson {
  id: string;
  exercises: Exercise[];
  title: string;
  order: number;
  chapter: string;
}

// Lessons
export interface LessonsData {
  lessons: Lesson[];
}
