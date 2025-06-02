
import { Shot } from '@/types';

export const rampShot: Shot = {
  id: "14",
  name: "Ramp Shot",
  category: "Back Foot",
  type: "Cross Bat",
  description: "A modern shot where you use the pace of the ball to ramp it over the keeper's head.",
  keyPointers: [
    "Use the pace",
    "Open bat face",
    "Get low and under",
    "Guide don't hit",
    "Precise timing essential"
  ],
  commonMistakes: [
    {
      id: "m15",
      description: "Hitting too hard",
      correction: "Let the pace of the ball do the work",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d15",
      name: "Ramp Shot Practice",
      description: "Practice ramping fast balls over the keeper",
      weaknessTag: ["timing", "placement"],
      difficulty: "Advanced"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
