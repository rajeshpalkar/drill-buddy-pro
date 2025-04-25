
import { Shot } from '@/types';

export const straightDrive: Shot = {
  id: "5",
  name: "Straight Drive",
  category: "Front Foot",
  type: "Straight Bat",
  description: "A classic shot played with a straight bat, driving the ball back past the bowler.",
  keyPointers: [
    "Head over ball",
    "Front elbow high",
    "Straight bat face",
    "Weight transfer forward",
    "Follow through down the ground"
  ],
  commonMistakes: [
    {
      id: "m9",
      description: "Hitting across the line",
      correction: "Maintain straight bat alignment throughout the shot",
      videoId: "hlPFUR8VYZ0"
    },
    {
      id: "m10",
      description: "Not getting to pitch of ball",
      correction: "Ensure proper step length to reach the ball",
      videoId: "BrFBeqbj32o"
    }
  ],
  suggestedDrills: [
    {
      id: "d9",
      name: "Straight Line Drill",
      description: "Use markers to practice keeping drives in a straight line",
      videoId: "ms9y1FfHiOs",
      weaknessTag: ["direction", "bat angle"],
      difficulty: "Beginner"
    },
    {
      id: "d10",
      name: "Front Foot Constraint Drill",
      description: "Practice with limited backswing to focus on weight transfer",
      videoId: "AhC3ZvpBayA",
      weaknessTag: ["weight transfer", "balance"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "qHs7SdjeVow"
};
