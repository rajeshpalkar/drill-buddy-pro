
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import { Dumbbell, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const TrainPage: React.FC = () => {
  const plyometricExercises = [
    {
      id: "p1",
      name: "Box Jumps",
      description: "Explosive power for batting and fielding movements",
      useCase: "Improves leg strength and explosive power for quick movements",
      videoId: "NBY9-kTuHEk",
      category: "Plyometric"
    },
    {
      id: "p2", 
      name: "Medicine Ball Throws",
      description: "Core power development for batting and bowling",
      useCase: "Builds rotational power essential for cricket shots",
      videoId: "dQw4w9WgXcQ",
      category: "Plyometric"
    },
    {
      id: "p3",
      name: "Lateral Bounds",
      description: "Side-to-side explosive movement training",
      useCase: "Improves agility for fielding and wicket keeping",
      videoId: "dQw4w9WgXcQ", 
      category: "Plyometric"
    }
  ];

  const mobilityExercises = [
    {
      id: "m1",
      name: "Hip Circles",
      description: "Dynamic hip mobility for batting stance",
      useCase: "Essential for proper batting stance and rotation",
      videoId: "dQw4w9WgXcQ",
      category: "Mobility"
    },
    {
      id: "m2",
      name: "Shoulder Dislocations",
      description: "Shoulder mobility for bowling and throwing", 
      useCase: "Prevents injury and improves throwing mechanics",
      videoId: "dQw4w9WgXcQ",
      category: "Mobility"
    },
    {
      id: "m3",
      name: "Leg Swings",
      description: "Dynamic leg mobility preparation",
      useCase: "Prepares legs for running and fielding movements",
      videoId: "dQw4w9WgXcQ",
      category: "Mobility"
    }
  ];

  const stretchExercises = [
    {
      id: "s1", 
      name: "Hamstring Stretch",
      description: "Static stretch for posterior chain",
      useCase: "Prevents hamstring injuries during running",
      videoId: "dQw4w9WgXcQ",
      category: "Stretch"
    },
    {
      id: "s2",
      name: "Hip Flexor Stretch", 
      description: "Opens up hip flexors for better movement",
      useCase: "Improves batting stance and reduces back strain",
      videoId: "dQw4w9WgXcQ",
      category: "Stretch"
    },
    {
      id: "s3",
      name: "Shoulder Cross-Body Stretch",
      description: "Shoulder flexibility maintenance",
      useCase: "Keeps shoulders healthy for bowling and throwing",
      videoId: "dQw4w9WgXcQ",
      category: "Stretch"
    }
  ];

  const allExercises = [...plyometricExercises, ...mobilityExercises, ...stretchExercises];

  const getIcon = (category: string) => {
    switch(category) {
      case 'Plyometric': return <Zap size={18} className="text-orange-500" />;
      case 'Mobility': return <Dumbbell size={18} className="text-blue-500" />;
      case 'Stretch': return <Heart size={18} className="text-green-500" />;
      default: return <Dumbbell size={18} />;
    }
  };

  const getBadgeColor = (category: string) => {
    switch(category) {
      case 'Plyometric': return 'bg-orange-500';
      case 'Mobility': return 'bg-blue-500'; 
      case 'Stretch': return 'bg-green-500';
      default: return 'bg-cricket-green';
    }
  };

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
            <h1 className="text-2xl font-bold text-cricket-green">Training</h1>
          </div>
          <Badge className="bg-cricket-green text-white px-3 py-1">{allExercises.length}</Badge>
        </motion.div>
        
        {/* Exercises List */}
        <motion.div 
          className="grid grid-cols-1 gap-6"
          variants={containerVariants}
        >
          {allExercises.map((exercise) => (
            <motion.div key={exercise.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div className="flex items-center gap-2">
                      {getIcon(exercise.category)}
                      <CardTitle className="text-lg text-cricket-green">{exercise.name}</CardTitle>
                    </div>
                    <Badge className={`${getBadgeColor(exercise.category)} text-white`}>
                      {exercise.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    <strong>Use Case:</strong> {exercise.useCase}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-4 text-sm text-gray-600">{exercise.description}</p>
                    </div>
                    {exercise.videoId && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <YoutubeEmbed videoId={exercise.videoId} />
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
                <Dumbbell size={20} />
                Training Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Start with 5-10 minutes of mobility exercises</li>
                <li>• Follow with plyometric exercises for power</li>
                <li>• End with static stretches to cool down</li>
                <li>• Always warm up before intense training</li>
                <li>• Listen to your body and rest when needed</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default TrainPage;
