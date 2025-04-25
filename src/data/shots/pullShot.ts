
import { Shot } from '@/types';

export const pullShot: Shot = {
  id: "3",
  name: "Pull Shot",
  category: "Back Foot",
  type: "Cross Bat",
  description: "A forceful shot played to short-pitched deliveries, pulling the ball to the leg side.",
  keyPointers: [
    "Quick identification of length",
    "Weight transfer to back foot",
    "Head steady at point of impact",
    "Roll wrists over ball",
    "Complete follow through"
  ],
  commonMistakes: [
    {
      id: "m5",
      description: "Getting too far across",
      correction: "Maintain balance and avoid over-rotating",
      videoId: "9aK8XG4_1jg"
    },
    {
      id: "m6",
      description: "Pulling from outside off stump",
      correction: "Be selective with line, pull only when appropriate",
      videoId: "CbZS3cMGww8"
    }
  ],
  suggestedDrills: [
    {
      id: "d5",
      name: "Short Ball Pull Practice",
      description: "Dedicated session focused on short ball pulling technique",
      videoId: "W7EXsXdBdrk",
      weaknessTag: ["timing", "shot selection"],
      difficulty: "Advanced"
    },
    {
      id: "d6",
      name: "Tennis Ball Pull Drill",
      description: "Use tennis balls for safe practice of pulling short balls",
      videoId: "lB93T9R14-w",
      weaknessTag: ["fear", "balance"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "WAXjEr94RpA"
};
