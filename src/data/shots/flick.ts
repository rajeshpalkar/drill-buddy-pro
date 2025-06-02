
import { Shot } from '@/types';

export const flick: Shot = {
  id: "12",
  name: "Flick",
  category: "Front Foot",
  type: "Cross Bat",
  description: "A wristy shot played to balls on the pads, flicking them through the leg side.",
  keyPointers: [
    "Use strong wrists",
    "Get to the pitch",
    "Flick through the line",
    "Keep balance",
    "Follow through towards leg side"
  ],
  commonMistakes: [
    {
      id: "m13",
      description: "Playing too early",
      correction: "Let the ball come to you before flicking",
      videoId: "dQw4w9WgXcQ"
    }
  ],
  suggestedDrills: [
    {
      id: "d13",
      name: "Flick Shot Drill",
      description: "Practice flicking balls from the pads through mid-wicket",
      weaknessTag: ["wrist work", "timing"],
      difficulty: "Intermediate"
    }
  ],
  tutorialVideoId: "dQw4w9WgXcQ"
};
