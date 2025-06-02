
import { Shot } from '@/types';

export const hipGlance: Shot = {
  id: "7",
  name: "Hip Glance",
  category: "Front Foot",
  type: "Cross Bat",
  description: "A delicate shot played to balls on the hip, glancing them fine to the leg side.",
  keyPointers: [
    "Use the pace of the ball",
    "Soft hands",
    "Turn the bat face",
    "Balance on front foot",
    "Minimal follow through"
  ],
  commonMistakes: [
    {
      id: "m8",
      description: "Playing too hard",
      correction: "Use soft hands and let the ball come to you",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d8",
      name: "Hip Glance Practice",
      description: "Practice glancing balls from hip height to fine leg",
      weaknessTag: ["timing", "placement"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
