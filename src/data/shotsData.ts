
import { Shot } from '@/types';

export const shots: Shot[] = [
  {
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
        videoId: "FgZo-0pR9A0"
      },
      {
        id: "m2",
        description: "Closing bat face too early",
        correction: "Maintain straight bat throughout the shot",
        videoId: "E-8O69ldMhI"
      }
    ],
    suggestedDrills: [
      {
        id: "d1",
        name: "Drive with Step Drill",
        description: "Practice step-drives with cones to ensure proper weight transfer",
        videoId: "5o2Pc2JCSPk",
        weaknessTag: ["balance", "weight transfer"],
        difficulty: "Beginner"
      },
      {
        id: "d2",
        name: "Wall Drive Drill",
        description: "Practice drives against a wall to maintain straight bat position",
        videoId: "XoStmJuHaUw",
        weaknessTag: ["bat angle", "follow through"],
        difficulty: "Intermediate"
      }
    ],
    tutorialVideoId: "N8lwJt_gW3Y"
  },
  {
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
        videoId: "VP7nSMFhYqI"
      },
      {
        id: "m4",
        description: "Lack of footwork",
        correction: "Ensure proper step towards the pitch of the ball",
        videoId: "HN8Fvx0Urns"
      }
    ],
    suggestedDrills: [
      {
        id: "d3",
        name: "Cone Cover Drive",
        description: "Place cones in cover area and aim to hit between them",
        videoId: "vYD9imXJ0j0",
        weaknessTag: ["direction", "timing"],
        difficulty: "Intermediate"
      },
      {
        id: "d4",
        name: "Chair Cover Drive",
        description: "Use chair as guide for maintaining elbow position",
        videoId: "XHdVjDkCIx0",
        weaknessTag: ["elbow position", "bat angle"],
        difficulty: "Beginner"
      }
    ],
    tutorialVideoId: "HJZFQwMZg8k"
  },
  {
    id: "3",
    name: "Pull Shot",
    category: "Back Foot",
    type: "Cross Bat",
    description: "A forceful shot played to short-pitched deliveries, pulling the ball to the leg side.",
    keyPointers: [
      "Quick identification of length",
      "Weight transfer to back foot",
      "Head steady at point of impact",
      "Roll wrists over ball",
      "Complete follow through"
    ],
    commonMistakes: [
      {
        id: "m5",
        description: "Getting too far across",
        correction: "Maintain balance and avoid over-rotating",
        videoId: "9aK8XG4_1jg"
      },
      {
        id: "m6",
        description: "Pulling from outside off stump",
        correction: "Be selective with line, pull only when appropriate",
        videoId: "CbZS3cMGww8"
      }
    ],
    suggestedDrills: [
      {
        id: "d5",
        name: "Short Ball Pull Practice",
        description: "Dedicated session focused on short ball pulling technique",
        videoId: "W7EXsXdBdrk",
        weaknessTag: ["timing", "shot selection"],
        difficulty: "Advanced"
      },
      {
        id: "d6",
        name: "Tennis Ball Pull Drill",
        description: "Use tennis balls for safe practice of pulling short balls",
        videoId: "lB93T9R14-w",
        weaknessTag: ["fear", "balance"],
        difficulty: "Intermediate"
      }
    ],
    tutorialVideoId: "WAXjEr94RpA"
  },
  {
    id: "4",
    name: "Square Cut",
    category: "Back Foot",
    type: "Cross Bat",
    description: "A attacking shot played to short and wide deliveries, cutting the ball behind point.",
    keyPointers: [
      "Quick footwork back and across",
      "Strong base position",
      "High hands for downward cut",
      "Sharp wrist action",
      "Target area behind point"
    ],
    commonMistakes: [
      {
        id: "m7",
        description: "Cutting balls too close to body",
        correction: "Only cut balls with width, select appropriate deliveries",
        videoId: "IoJsJNtYm3U"
      },
      {
        id: "m8",
        description: "Cutting with low hands",
        correction: "Keep hands high for downward angle and control",
        videoId: "tnhH0nC267k"
      }
    ],
    suggestedDrills: [
      {
        id: "d7",
        name: "Width Cut Drill",
        description: "Practice cutting with marked zones for appropriate width",
        videoId: "2Ds5RJywcUk",
        weaknessTag: ["shot selection", "judgment"],
        difficulty: "Intermediate"
      },
      {
        id: "d8",
        name: "High Hands Cut Practice",
        description: "Focused drill to maintain high hands during cutting",
        videoId: "j2IbL2ZRtDQ",
        weaknessTag: ["technique", "hand position"],
        difficulty: "Advanced"
      }
    ],
    tutorialVideoId: "qe9P7qRvOSI"
  },
  {
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
  }
];
