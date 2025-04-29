
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import ShotCard from '@/components/ShotCard';
import { useShotContext } from '@/contexts/ShotContext';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ShotsPage: React.FC = () => {
  const { filteredShots } = useShotContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const shots = filteredShots("all", "all", searchQuery);
  
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
        {/* Minimal Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-cricket-green">Shots</h1>
          <Badge className="bg-cricket-green text-white px-3 py-1">{shots.length}</Badge>
        </motion.div>
        
        {/* Search only - removed dropdowns */}
        <motion.div 
          className="relative max-w-md mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search shots..."
            className="pl-10 border-2 h-12 transition-all focus:border-cricket-green"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
        
        {/* Shot Cards with animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {shots.length > 0 ? (
            shots.map((shot) => (
              <motion.div key={shot.id} variants={itemVariants}>
                <ShotCard shot={shot} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="col-span-full flex flex-col items-center justify-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Search size={64} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-medium">No shots found</h3>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default ShotsPage;
