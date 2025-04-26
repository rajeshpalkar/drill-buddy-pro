import { Shot } from '@/types';

export const squareCut: Shot = {
  id: "4",
  name: "Square Cut",
  category: "Back Foot",
  type: "Cross Bat",
  description: "An attacking shot played to short and wide deliveries, cutting the ball behind point.",
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
      videoId: "https://www.youtube.com/watch?v=ShHLd1D-N5Q"
    },
    {
      id: "m8",
      description: "Cutting with low hands",
      correction: "Keep hands high for downward angle and control",
      videoId: "https://www.youtube.com/watch?v=lOrvLCcUjGk"
    }
  ],
  suggestedDrills: [
    {
      id: "d7",
      name: "Width Cut Drill",
      description: "Practice cutting with marked zones for appropriate width",
      videoId: "https://www.youtube.com/watch?v=klorWQfoxsc",
      weaknessTag: ["shot selection", "judgment"],
      difficulty: "Intermediate"
    },
    {
      id: "d8",
      name: "High Hands Cut Practice",
      description: "Focused drill to maintain high hands during cutting",
      videoId: "https://www.youtube.com/watch?v=_tMLsCVcUxs",
      weaknessTag: ["technique", "hand position"],
      difficulty: "Advanced"
    }
  ],
  tutorialVideoId: "https://www.youtube.com/watch?v=3oQzw0oSgU4"
};
