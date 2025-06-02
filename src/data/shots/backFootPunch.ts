
import { Shot } from '@/types';

export const backFootPunch: Shot = {
  id: "8",
  name: "Back Foot Punch",
  category: "Back Foot",
  type: "Straight Bat",
  description: "A controlled shot played off the back foot, punching the ball through the covers or point.",
  keyPointers: [
    "Get right back in crease",
    "High elbow",
    "Punch through the ball",
    "Keep it along the ground",
    "Use timing not power"
  ],
  commonMistakes: [
    {
      id: "m9",
      description: "Not getting back far enough",
      correction: "Ensure you're right back in the crease before playing",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d9",
      name: "Back Foot Punch Drill",
      description: "Practice punching short of length balls off the back foot",
      weaknessTag: ["footwork", "timing"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
