
import { Shot } from '@/types';

export const hook: Shot = {
  id: "11",
  name: "Hook",
  category: "Back Foot",
  type: "Cross Bat",
  description: "An aggressive shot played to short balls, hooking them behind square on the leg side.",
  keyPointers: [
    "Quick weight transfer",
    "Get inside the line",
    "Roll wrists over",
    "Hit with control",
    "Watch the ball closely"
  ],
  commonMistakes: [
    {
      id: "m12",
      description: "Top edging",
      correction: "Get on top of the ball and roll wrists",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d12",
      name: "Hook Shot Practice",
      description: "Practice hooking short balls with control",
      weaknessTag: ["control", "timing"],
      difficulty: "Advanced"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
