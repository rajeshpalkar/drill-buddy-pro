
export type ShotCategory = 'Front Foot' | 'Back Foot';
export type ShotType = 'Straight Bat' | 'Cross Bat';

export interface Drill {
  id: string;
  name: string;
  description: string;
  videoId?: string;  // YouTube video ID
  weaknessTag: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface CommonMistake {
  id: string;
  description: string;
  correction: string;
  videoId?: string;  // YouTube video ID
}

export interface Shot {
  id: string;
  name: string;
  category: ShotCategory;
  type: ShotType;
  description: string;
  keyPointers: string[];
  commonMistakes: CommonMistake[];
  suggestedDrills: Drill[];
  tutorialVideoId?: string;  // YouTube video ID
}

export interface ShotNote {
  id: string;
  shotId: string;
  date: string;
  notes: string;
  rating?: number;
  sessionType: 'Net' | 'Practice' | 'Home' | 'Match';
  weaknessTags: string[];
  mediaUrl?: string;
}

export interface ShotAnalysis {
  positives: string[];
  improvements: string[];
  technicalAnalysis: string;
  performanceScore: number;
}
