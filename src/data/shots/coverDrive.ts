
import { Shot } from '@/types';

export const coverDrive: Shot = {
  id: "2",
  name: "Cover Drive",
  category: "Front Foot",
  type: "Straight Bat",
  description: "An elegant attacking shot played through the covers, targeting deliveries on or outside off-stump.",
  keyPointers: [
    "Head over the ball",
    "Drive through the line",
    "Full face of the bat",
    "Bent front knee",
    "High left elbow"
  ],
  commonMistakes: [
    {
      id: "m3",
      description: "Reaching for the ball",
      correction: "Wait for the ball and transfer weight correctly",
      videoId: "p9BE1lbWqxA"
    },
    {
      id: "m4",
      description: "Lack of footwork",
      correction: "Ensure proper step towards the pitch of the ball",
      videoId: "SZI3dHJ21bM"
    }
  ],
  suggestedDrills: [
    {
      id: "d3",
      name: "Cone Cover Drive",
      description: "Place cones in cover area and aim to hit between them",
      videoId: "jdVfNGsOdvE",
      weaknessTag: ["direction", "timing"],
      difficulty: "Intermediate"
    },
    {
      id: "d4",
      name: "Chair Cover Drive",
      description: "Use chair as guide for maintaining elbow position",
      videoId: "AGtJiQTYnEU",
      weaknessTag: ["elbow position", "bat angle"],
      difficulty: "Beginner"
    }
  ],
  tutorialVideoId: "jdVfNGsOdvE"
};
