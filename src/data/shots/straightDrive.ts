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
      videoId: "https://www.youtube.com/watch?v=fTq4N3nPA8o"
    },
    {
      id: "m10",
      description: "Not getting to pitch of ball",
      correction: "Ensure proper step length to reach the ball",
      videoId: "https://www.youtube.com/watch?v=UUlklBbmXwo"
    }
  ],
  suggestedDrills: [
    {
      id: "d9",
      name: "Straight Line Drill",
      description: "Use cones to ensure your bat swing and follow-through stay straight.",
      videoId: "https://www.youtube.com/watch?v=xxcJdHD55Aw",
      weaknessTag: ["direction", "bat angle"],
      difficulty: "Beginner"
    },
    {
      id: "d10",
      name: "Front Foot Constraint Drill",
      description: "Practice limiting backswing to emphasize correct weight transfer forward.",
      videoId: "https://www.youtube.com/watch?v=ZtEG9KPCoK0",
      weaknessTag: ["weight transfer", "balance"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "https://www.youtube.com/watch?v=fTq4N3nPA8o"
};
