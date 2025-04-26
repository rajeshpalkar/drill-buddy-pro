
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
      videoId: "p9BE1lbWqxA"
    },
    {
      id: "m2",
      description: "Closing bat face too early",
      correction: "Maintain straight bat throughout the shot",
      videoId: "SZI3dHJ21bM"
    }
  ],
  suggestedDrills: [
    {
      id: "d1",
      name: "Drive with Step Drill",
      description: "Practice step-drives with cones to ensure proper weight transfer",
      videoId: "nN3flHNAuqM",
      weaknessTag: ["balance", "weight transfer"],
      difficulty: "Beginner"
    },
    {
      id: "d2",
      name: "Wall Drive Drill",
      description: "Practice drives against a wall to maintain straight bat position",
      videoId: "jdVfNGsOdvE",
      weaknessTag: ["bat angle", "follow through"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "nN3flHNAuqM"
};
