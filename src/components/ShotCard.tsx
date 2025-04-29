
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shot } from '@/types';
import { useShotContext } from '@/contexts/ShotContext';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShotCardProps {
  shot: Shot;
}

const ShotCard: React.FC<ShotCardProps> = ({ shot }) => {
  const { selectShot } = useShotContext();
  const navigate = useNavigate();
  
  const handleSelect = () => {
    selectShot(shot.id);
    navigate(`/shot/${shot.id}`);
  };
  
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-white">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-cricket-green">{shot.name}</h3>
          <div className="flex gap-1">
            <Badge variant="outline" className="bg-cricket-cream text-cricket-green text-xs font-semibold">
              {shot.category}
            </Badge>
          </div>
        </div>
        
        <div className="flex justify-between items-end mt-4">
          <Badge variant="secondary" className="bg-cricket-willow text-white">
            {shot.type}
          </Badge>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={handleSelect}
              className="bg-cricket-green hover:bg-cricket-green/90 text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
              aria-label="View shot details"
            >
              <Play size={20} className="ml-1" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated bottom bar that appears on hover */}
      <div className="h-1 w-full bg-gray-100 relative overflow-hidden">
        <motion.div 
          className="absolute h-full bg-cricket-green"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </Card>
  );
};

export default ShotCard;
