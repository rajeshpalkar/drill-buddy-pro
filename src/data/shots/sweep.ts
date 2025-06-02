
import { Shot } from '@/types';

export const sweep: Shot = {
  id: "13",
  name: "Sweep",
  category: "Front Foot",
  type: "Cross Bat",
  description: "A shot played to spin bowling, sweeping the ball to the leg side from a kneeling position.",
  keyPointers: [
    "Get low to the ball",
    "Sweep along the ground",
    "Use the pace of the ball",
    "Keep head steady",
    "Strong top hand"
  ],
  commonMistakes: [
    {
      id: "m14",
      description: "Getting out LBW",
      correction: "Ensure you make contact with the ball",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d14",
      name: "Sweep Practice",
      description: "Practice sweeping spin bowling to the leg side",
      weaknessTag: ["balance", "timing"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
