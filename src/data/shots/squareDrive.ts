
import { Shot } from '@/types';

export const squareDrive: Shot = {
  id: "9",
  name: "Square Drive",
  category: "Front Foot",
  type: "Straight Bat",
  description: "An elegant drive played square of the wicket on the off side.",
  keyPointers: [
    "Get to the pitch",
    "Full face presentation",
    "Drive square of wicket",
    "High left elbow",
    "Complete follow through"
  ],
  commonMistakes: [
    {
      id: "m10",
      description: "Not getting forward enough",
      correction: "Ensure good stride to the pitch of the ball",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d10",
      name: "Square Drive Practice",
      description: "Practice driving balls square through point region",
      weaknessTag: ["footwork", "direction"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
