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
      videoId: "https://www.youtube.com/watch?v=39mXK4OETBI"
    },
    {
      id: "m4",
      description: "Lack of footwork",
      correction: "Ensure proper step towards the pitch of the ball",
      videoId: "https://www.youtube.com/watch?v=935cjtOADjE"
    }
  ],
  suggestedDrills: [
    {
      id: "d3",
      name: "Cone Cover Drive",
      description: "Place cones in cover area and aim to hit between them",
      videoId: "https://www.youtube.com/watch?v=_xr6CHZM33A",
      weaknessTag: ["direction", "timing"],
      difficulty: "Intermediate"
    },
    {
      id: "d4",
      name: "Chair Cover Drive",
      description: "Use chair as guide for maintaining elbow position",
      videoId: "https://www.youtube.com/watch?v=D0Qq3VXmzzI",
      weaknessTag: ["elbow position", "bat angle"],
      difficulty: "Beginner"
    }
  ],
  tutorialVideoId: "https://www.youtube.com/watch?v=h3N-BRQXTS4"
};
