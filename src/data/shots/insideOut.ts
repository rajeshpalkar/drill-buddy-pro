
import { Shot } from '@/types';

export const insideOut: Shot = {
  id: "10",
  name: "Inside Out",
  category: "Front Foot",
  type: "Cross Bat",
  description: "An advanced shot where you hit against the line, turning leg side balls to the off side.",
  keyPointers: [
    "Open bat face early",
    "Use strong wrists",
    "Hit against the spin",
    "Good balance",
    "Precise timing required"
  ],
  commonMistakes: [
    {
      id: "m11",
      description: "Poor timing",
      correction: "Wait for the ball and use precise timing",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d11",
      name: "Inside Out Practice",
      description: "Practice hitting leg side balls to the off side",
      weaknessTag: ["timing", "technique"],
      difficulty: "Advanced"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
