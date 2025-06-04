
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { user, Target, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const FieldingPositionsPage: React.FC = () => {
  const fieldingStrategies = [
    {
      title: "Attacking Field (New Ball)",
      description: "Aggressive field setup for early wickets",
      positions: ["4 slips", "Gully", "Point", "Cover", "Mid off", "Fine leg"],
      color: "bg-red-100 border-red-200"
    },
    {
      title: "Defensive Field (Death Overs)",
      description: "Spread field to prevent boundaries",
      positions: ["Deep cover", "Long off", "Long on", "Deep mid wicket", "Deep square", "Third man"],
      color: "bg-blue-100 border-blue-200"
    },
    {
      title: "Spin Bowling Field",
      description: "Close catching positions for spin",
      positions: ["Slip", "Silly point", "Short leg", "Close mid wicket", "Deep mid wicket", "Long on"],
      color: "bg-purple-100 border-purple-200"
    }
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
            <user size={28} className="text-cricket-green" />
            <h1 className="text-2xl font-bold text-cricket-green">Fielding Positions</h1>
          </div>
          <Badge className="bg-cricket-green text-white flex items-center gap-1">
            <Play size={14} />
            Guide
          </Badge>
        </motion.div>

        {/* Static Field Image */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-2 border-cricket-green/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-cricket-green to-cricket-green/80 text-white">
              <CardTitle className="flex items-center gap-2 text-white">
                <Target size={20} />
                Cricket Field Positions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <div className="w-full flex justify-center bg-cricket-cream/30 rounded-xl p-4">
                <img 
                  src="/lovable-uploads/1444b488-93db-45c9-8678-a25d62efbf85.png" 
                  alt="Cricket fielding positions diagram" 
                  className="max-w-full h-auto rounded-lg shadow-md border-2 border-cricket-green/10"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Field Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fieldingStrategies.map((strategy, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full ${strategy.color} border-2 hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-cricket-green text-lg">
                    {strategy.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{strategy.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {strategy.positions.map((position, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-cricket-green/30">
                        {position}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default FieldingPositionsPage;
