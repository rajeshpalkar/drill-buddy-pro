
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
import { useShotContext } from '@/contexts/ShotContext';
import { Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DrillsPage: React.FC = () => {
  const { allShots } = useShotContext();
  
  // Extract all drills from all shots
  const allDrills = allShots.flatMap(shot => shot.suggestedDrills);
  
  // Find which shot a drill belongs to
  const findShotForDrill = (drillId: string) => {
    for (const shot of allShots) {
      const matchingDrill = shot.suggestedDrills.find(d => d.id === drillId);
      if (matchingDrill) return shot;
    }
    return null;
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
      <div className="flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <ArrowRight size={28} className="text-cricket-green transform rotate-45" />
            <h1 className="text-2xl font-bold text-cricket-green">Drills</h1>
          </div>
          <Badge className="bg-cricket-green text-white px-3 py-1">{allDrills.length}</Badge>
        </motion.div>
        
        {/* Drills List - No filters */}
        <motion.div 
          className="grid grid-cols-1 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allDrills.length > 0 ? (
            allDrills.map((drill) => {
              const relatedShot = findShotForDrill(drill.id);
              return (
                <motion.div key={drill.id} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-md transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div className="flex items-center gap-2">
                          <Activity size={18} className="text-cricket-green" />
                          <CardTitle className="text-lg text-cricket-green">{drill.name}</CardTitle>
                        </div>
                        <Badge>{drill.difficulty}</Badge>
                      </div>
                      {relatedShot && (
                        <CardDescription className="text-xs">
                          For <strong>{relatedShot.name}</strong>
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="mb-4 line-clamp-3">{drill.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {drill.weaknessTag.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {drill.videoId && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <YoutubeEmbed videoId={drill.videoId} />
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Activity size={64} className="text-gray-300 mb-4 mx-auto" />
              <h3 className="text-lg font-medium mb-2">No drills found</h3>
              <p className="text-cricket-pitch">Try adjusting your search criteria.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default DrillsPage;
