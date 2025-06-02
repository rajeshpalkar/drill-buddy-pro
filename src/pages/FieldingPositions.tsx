
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const FieldingPositionsPage: React.FC = () => {
  const paceFieldSetup = [
    "3-4 slips for edges",
    "Gully for thick edges", 
    "Point and cover for drives",
    "Mid off and mid on",
    "Fine leg for glances",
    "Third man for edges"
  ];

  const spinFieldSetup = [
    "Close catching positions",
    "Slip and silly point",
    "Deep mid wicket for big hits",
    "Long on and long off",
    "Short leg for bat-pad",
    "Square leg for sweeps"
  ];

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
            <Users size={28} className="text-cricket-green" />
            <h1 className="text-2xl font-bold text-cricket-green">Field Positions</h1>
          </div>
        </motion.div>

        {/* Cricket Field Diagram */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target size={20} className="text-cricket-green" />
                Cricket Field Layout
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/1444b488-93db-45c9-8678-a25d62efbf85.png" 
                  alt="Cricket Field Positions" 
                  className="w-full h-auto rounded-b-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Field Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-cricket-green flex items-center gap-2">
                  <div className="w-3 h-3 bg-cricket-green rounded-full"></div>
                  Pace Bowling Field
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {paceFieldSetup.map((setup, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-3 p-2 bg-cricket-cream rounded-md"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-cricket-green rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{setup}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-cricket-green flex items-center gap-2">
                  <div className="w-3 h-3 bg-cricket-willow rounded-full"></div>
                  Spin Bowling Field
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {spinFieldSetup.map((setup, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-3 p-2 bg-cricket-cream rounded-md"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-cricket-willow rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{setup}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Key Positions Summary */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Key Fielding Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Wicket Keeper", "First Slip", "Point", "Cover",
                  "Mid Off", "Mid On", "Square Leg", "Fine Leg"
                ].map((position) => (
                  <motion.div 
                    key={position} 
                    className="p-3 bg-gray-50 rounded-lg text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="text-xs">
                      {position}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default FieldingPositionsPage;
