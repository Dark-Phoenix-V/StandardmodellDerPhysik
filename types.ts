
export type ParticleType = 'quark' | 'lepton' | 'boson' | 'higgs';

export interface Particle {
  id: string;
  name: string;
  symbol: string;
  type: ParticleType;
  generation?: 1 | 2 | 3;
  mass: string;
  charge: string;
  spin: string;
  description: string;
  interaction: string; // Neu: Wie interagiert das Teilchen?
  role: string;        // Neu: Welche Rolle spielt es im Universum?
  color: string;
}

export type QuestionType = 'single' | 'multi' | 'order';

export interface QuizQuestion {
  id: number;
  type?: QuestionType; // Standard ist 'single'
  question: string;
  options: string[];
  correctAnswer?: number; // Für Single Choice
  correctAnswers?: number[]; // Für Multi Choice (Indizes)
  correctOrder?: string[]; // Für Order (Die Strings in korrekter Reihenfolge)
  explanation: string;
}

export type View = 'intro' | 'learn' | 'model' | 'quiz';
