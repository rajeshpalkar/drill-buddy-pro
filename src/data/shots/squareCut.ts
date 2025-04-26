
import { Shot } from '@/types';

export const squareCut: Shot = {
  id: "4",
  name: "Square Cut",
  category: "Back Foot",
  type: "Cross Bat",
  description: "A attacking shot played to short and wide deliveries, cutting the ball behind point.",
  keyPointers: [
    "Quick footwork back and across",
    "Strong base position",
    "High hands for downward cut",
    "Sharp wrist action",
    "Target area behind point"
  ],
  commonMistakes: [
    {
      id: "m7",
      description: "Cutting balls too close to body",
      correction: "Only cut balls with width, select appropriate deliveries",
      videoId: "QAiDeoCh8Qk"
    },
    {
      id: "m8",
      description: "Cutting with low hands",
      correction: "Keep hands high for downward angle and control",
      videoId: "QAiDeoCh8Qk"
    }
  ],
  suggestedDrills: [
    {
      id: "d7",
      name: "Width Cut Drill",
      description: "Practice cutting with marked zones for appropriate width",
      videoId: "QAiDeoCh8Qk",
      weaknessTag: ["shot selection", "judgment"],
      difficulty: "Intermediate"
    },
    {
      id: "d8",
      name: "High Hands Cut Practice",
      description: "Focused drill to maintain high hands during cutting",
      videoId: "84oD3QGbGf0",
      weaknessTag: ["technique", "hand position"],
      difficulty: "Advanced"
    }
  ],
  tutorialVideoId: "84oD3QGbGf0"
};
