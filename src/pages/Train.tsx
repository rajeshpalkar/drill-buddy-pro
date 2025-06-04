import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import { Dumbbell, Zap, Heart, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const TrainPage: React.FC = () => {
  const [selectedShotType, setSelectedShotType] = useState<string>('all');

  const shotTypes = [
    { id: 'all', name: 'All Shots', icon: Trophy },
    { id: 'drives', name: 'Drives', icon: Zap },
    { id: 'pulls', name: 'Pulls & Hooks', icon: Dumbbell },
    { id: 'cuts', name: 'Cuts', icon: Heart },
    { id: 'leg-side', name: 'Leg Side', icon: Trophy }
  ];

  const workoutsByShot = {
    all: [
      {
        id: "general1",
        name: "Core Stability Circuit",
        description: "Full body stability for all cricket movements",
        shotFocus: "General cricket fitness",
        videoId: "L_xrDAtykMM",
        exercises: ["Plank", "Russian Twists", "Mountain Climbers", "Dead Bug"],
        duration: "15 minutes"
      },
      {
        id: "general2",
        name: "Agility Ladder Drills",
        description: "Footwork and coordination for all shots",
        shotFocus: "Foot movement and timing",
        videoId: "8PwoytUU06g",
        exercises: ["In-In-Out-Out", "Lateral Shuffles", "High Knees", "Two-in"],
        duration: "10 minutes"
      }
    ],
    drives: [
      {
        id: "drive1",
        name: "Hip Flexor Stretches",
        description: "Open up hips for better front foot drives",
        shotFocus: "Cover drive, straight drive technique",
        videoId: "UGEpQ1BRx-4",
        exercises: ["90/90 Hip Stretch", "Couch Stretch", "Hip Flexor Lunge"],
        duration: "8 minutes"
      },
      {
        id: "drive2",
        name: "Medicine Ball Training",
        description: "Core rotation power for driving through the ball",
        shotFocus: "Power generation in drives",
        videoId: "jJJLLs-YSBM",
        exercises: ["Med Ball Slams", "Russian Twists", "Wood Choppers"],
        duration: "12 minutes"
      },
      {
        id: "drive3",
        name: "Shoulder Stability",
        description: "Maintain high elbow position during drives",
        shotFocus: "Proper elbow position and follow through",
        videoId: "2NOQGLyOpfM",
        exercises: ["Wall Angels", "Band Pull-Aparts", "Shoulder Dislocations"],
        duration: "10 minutes"
      }
    ],
    pulls: [
      {
        id: "pull1",
        name: "Upper Body Strength",
        description: "Upper body strength for powerful pulling movements",
        shotFocus: "Pull shot and hook shot power",
        videoId: "IODxDxX7oi4",
        exercises: ["Lat Pulldowns", "Seated Rows", "Pull-ups"],
        duration: "15 minutes"
      },
      {
        id: "pull2",
        name: "Weight Transfer Drills",
        description: "Quick weight shift to back foot for pulls",
        shotFocus: "Timing and balance for short balls",
        videoId: "cBLiWhQmhrg",
        exercises: ["Single Leg Bounds", "Lateral Hops", "Box Step-ups"],
        duration: "12 minutes"
      }
    ],
    cuts: [
      {
        id: "cut1",
        name: "Wrist Strengthening",
        description: "Strong wrists for powerful cutting shots",
        shotFocus: "Square cut and late cut control",
        videoId: "CLJnan_NbbQ",
        exercises: ["Wrist Curls", "Hammer Curls", "Farmer's Walks"],
        duration: "10 minutes"
      },
      {
        id: "cut2",
        name: "Shoulder Mobility",
        description: "Range of motion for high-handed cuts",
        shotFocus: "Getting on top of the ball when cutting",
        videoId: "qOLCeu6VgTI",
        exercises: ["Arm Circles", "Cross-body Stretch", "Overhead Reach"],
        duration: "8 minutes"
      }
    ],
    "leg-side": [
      {
        id: "leg1",
        name: "Hip Mobility Flow",
        description: "Hip flexibility for leg glances and flicks",
        shotFocus: "Leg glance and hip flick technique",
        videoId: "zLYOTOBNTc8",
        exercises: ["Hip Circles", "Leg Swings", "Pigeon Pose"],
        duration: "12 minutes"
      },
      {
        id: "leg2",
        name: "Balance Training",
        description: "Single-leg stability for leg side shots",
        shotFocus: "Balance during leg side shots",
        videoId: "en1-2k5Ba9E",
        exercises: ["Single Leg Stands", "Bosu Ball Balance", "Wobble Board"],
        duration: "10 minutes"
      }
    ]
  };

  const currentWorkouts = workoutsByShot[selectedShotType as keyof typeof workoutsByShot] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <Layout>
      <motion.div 
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex items-center justify-between"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <Dumbbell size={28} className="text-cricket-green" />
            <h1 className="text-2xl font-bold text-cricket-green">Shot-Specific Training</h1>
          </div>
          <Badge className="bg-cricket-green text-white px-3 py-1">{currentWorkouts.length}</Badge>
        </motion.div>

        {/* Shot Type Selector */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Select Shot Type to Train</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {shotTypes.map((shot) => {
                  const IconComponent = shot.icon;
                  return (
                    <Button
                      key={shot.id}
                      variant={selectedShotType === shot.id ? "default" : "outline"}
                      className={`flex items-center gap-2 ${
                        selectedShotType === shot.id ? 'bg-cricket-green hover:bg-cricket-green/90' : ''
                      }`}
                      onClick={() => setSelectedShotType(shot.id)}
                    >
                      <IconComponent size={16} />
                      {shot.name}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Workouts List */}
        <motion.div 
          className="grid grid-cols-1 gap-6"
          variants={containerVariants}
        >
          {currentWorkouts.map((workout) => (
            <motion.div key={workout.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div className="flex items-center gap-2">
                      <Dumbbell size={18} className="text-cricket-green" />
                      <CardTitle className="text-lg text-cricket-green">{workout.name}</CardTitle>
                    </div>
                    <Badge className="bg-cricket-green text-white">
                      {workout.duration}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    <strong>Focus:</strong> {workout.shotFocus}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-4 text-sm text-gray-600">{workout.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Exercises:</h4>
                        <div className="flex flex-wrap gap-1">
                          {workout.exercises.map((exercise, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {exercise}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    {workout.videoId && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <YoutubeEmbed videoId={workout.videoId} />
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Tips */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-cricket-green to-cricket-willow text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy size={20} />
                Shot-Specific Training Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Focus on the specific muscles used in your chosen shot type</li>
                <li>• Practice the movement patterns that mirror your shot technique</li>
                <li>• Build strength and flexibility specific to your weaknesses</li>
                <li>• Combine physical training with technical practice</li>
                <li>• Progress gradually and listen to your body</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default TrainPage;
