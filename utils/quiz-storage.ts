// Utility for managing symptom quiz scores in localStorage

export interface QuizScores {
  [symptomSlug: string]: number; // number of checked items (0-25)
}

const STORAGE_KEY = 'symptom-quiz-scores';

export const symptomOrder = [
  'task-paralysis',
  'object-permanence',
  'impulsivity',
  'time-blindness',
  'dopamine-seeking',
  'hyperactivity',
  'executive-dysfunction',
  'masking',
  'stimming',
  'emotional-dysregulation',
  'sensory-sensitivities',
  'hyperfixation',
  'difficulty-processing',
  'interoception',
  'rejection-sensitivity',
  'routine',
  'sensory-overload',
  'seeking-familiarity',
  'social-cues',
  'repetitive-behavior',
];

export const symptomNames: { [key: string]: string } = {
  'task-paralysis': 'Task Paralysis',
  'object-permanence': 'Object Permanence',
  'impulsivity': 'Impulsivity',
  'time-blindness': 'Time Blindness',
  'dopamine-seeking': 'Dopamine Seeking',
  'hyperactivity': 'Hyperactivity',
  'executive-dysfunction': 'Executive Dysfunction',
  'masking': 'Masking',
  'stimming': 'Stimming',
  'emotional-dysregulation': 'Emotional Dysregulation',
  'sensory-sensitivities': 'Sensory Sensitivities',
  'hyperfixation': 'Hyperfixation',
  'difficulty-processing': 'Difficulty Processing',
  'interoception': 'Interoception',
  'rejection-sensitivity': 'Rejection Sensitivity',
  'routine': 'Routine',
  'sensory-overload': 'Sensory Overload',
  'seeking-familiarity': 'Seeking Familiarity',
  'social-cues': 'Difficulty with Social Cues',
  'repetitive-behavior': 'Repetitive Behavior',
};

export function getQuizScores(): QuizScores {
  if (typeof window === 'undefined') {
    return {};
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return {};
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

export function saveQuizScore({ symptomSlug, score }: { symptomSlug: string; score: number }) {
  if (typeof window === 'undefined') {
    return;
  }
  
  const scores = getQuizScores();
  scores[symptomSlug] = score;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
}

export function clearQuizScores() {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.removeItem(STORAGE_KEY);
}

export function getNextSymptom({ currentSlug }: { currentSlug: string }): string | null {
  const currentIndex = symptomOrder.indexOf(currentSlug);
  if (currentIndex === -1 || currentIndex === symptomOrder.length - 1) {
    return null;
  }
  return symptomOrder[currentIndex + 1];
}

export function calculateLevel({ checkedCount }: { checkedCount: number }): number {
  // 0-25 checked items maps to 0-5 levels
  // 0 = level 0, 1-5 = level 1, 6-10 = level 2, 11-15 = level 3, 16-20 = level 4, 21-25 = level 5
  if (checkedCount === 0) {
    return 0;
  }
  if (checkedCount <= 5) {
    return 1;
  }
  if (checkedCount <= 10) {
    return 2;
  }
  if (checkedCount <= 15) {
    return 3;
  }
  if (checkedCount <= 20) {
    return 4;
  }
  return 5;
}

export function getQuizProgress(): { completed: number; total: number; percentage: number } {
  const scores = getQuizScores();
  const completed = Object.keys(scores).length;
  const total = symptomOrder.length;
  const percentage = Math.round((completed / total) * 100);
  
  return { completed, total, percentage };
}
