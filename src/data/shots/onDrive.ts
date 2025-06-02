
import { Shot } from '@/types';

export const onDrive: Shot = {
  id: "6",
  name: "On Drive",
  category: "Front Foot",
  type: "Straight Bat",
  description: "A classical front foot drive played towards mid-on, targeting deliveries on or around the stumps.",
  keyPointers: [
    "Get to the pitch of the ball",
    "Full face of the bat",
    "Drive along the ground",
    "Weight transfer forward",
    "High elbow position"
  ],
  commonMistakes: [
    {
      id: "m7",
      description: "Hitting across the line",
      correction: "Keep the bat straight and drive with the full face",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d7",
      name: "On Drive Practice",
      description: "Practice driving straight balls towards mid-on",
      weaknessTag: ["timing", "direction"],
      difficulty: "Beginner"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
