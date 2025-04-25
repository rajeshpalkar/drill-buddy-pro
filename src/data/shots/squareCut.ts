
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
      videoId: "IoJsJNtYm3U"
    },
    {
      id: "m8",
      description: "Cutting with low hands",
      correction: "Keep hands high for downward angle and control",
      videoId: "tnhH0nC267k"
    }
  ],
  suggestedDrills: [
    {
      id: "d7",
      name: "Width Cut Drill",
      description: "Practice cutting with marked zones for appropriate width",
      videoId: "2Ds5RJywcUk",
      weaknessTag: ["shot selection", "judgment"],
      difficulty: "Intermediate"
    },
    {
      id: "d8",
      name: "High Hands Cut Practice",
      description: "Focused drill to maintain high hands during cutting",
      videoId: "j2IbL2ZRtDQ",
      weaknessTag: ["technique", "hand position"],
      difficulty: "Advanced"
    }
  ],
  tutorialVideoId: "qe9P7qRvOSI"
};
