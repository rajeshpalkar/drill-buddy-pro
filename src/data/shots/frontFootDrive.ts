
import { Shot } from '@/types';

export const frontFootDrive: Shot = {
  id: "1",
  name: "Front Foot Drive",
  category: "Front Foot",
  type: "Straight Bat",
  description: "A classical attacking shot played on the front foot with a straight bat, typically to a fuller length delivery.",
  keyPointers: [
    "Head position over front foot",
    "Weight transfer forward",
    "Straight bat face",
    "Full follow through",
    "Maintain balance"
  ],
  commonMistakes: [
    {
      id: "m1",
      description: "Head falling to off-side during drive",
      correction: "Keep head steady and directly over front foot",
      videoId: "https://www.youtube.com/watch?v=qw-Jk0wYW5o"
    },
    {
      id: "m2",
      description: "Closing bat face too early",
      correction: "Maintain straight bat throughout the shot",
      videoId: "https://www.youtube.com/watch?v=VTPjhkZuSaM"
    }
  ],
  suggestedDrills: [
    {
      id: "d1",
      name: "Drive with Step Drill",
      description: "Practice step-drives with cones to ensure proper weight transfer",
      videoId: "https://www.youtube.com/watch?v=iN-oRktPyYo",
      weaknessTag: ["balance", "weight transfer"],
      difficulty: "Beginner"
    },
    {
      id: "d2",
      name: "Wall Drive Drill",
      description: "Practice drives against a wall to maintain straight bat position",
      videoId: "https://www.youtube.com/watch?v=_uOCl_hZ6Jo",
      weaknessTag: ["bat angle", "follow through"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "https://www.youtube.com/watch?v=iN-oRktPyYo"
};
