
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shot } from '@/types';
import { useShotContext } from '@/contexts/ShotContext';
import { useNavigate } from 'react-router-dom';

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
    <Card className="h-full hover:shadow-md transition-shadow duration-300 border-l-4 border-l-cricket-green">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium text-cricket-green">{shot.name}</CardTitle>
          <div className="flex gap-1">
            <Badge variant="outline" className="bg-cricket-cream text-cricket-green">
              {shot.category}
            </Badge>
            <Badge variant="outline" className="bg-cricket-willow text-white">
              {shot.type}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-sm line-clamp-2">{shot.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="text-xs font-semibold text-cricket-pitch mb-1">KEY POINTERS</h4>
            <ul className="text-xs list-disc pl-4">
              {shot.keyPointers.slice(0, 2).map((pointer, idx) => (
                <li key={idx}>{pointer}</li>
              ))}
              {shot.keyPointers.length > 2 && <li>...</li>}
            </ul>
          </div>
          <Button 
            onClick={handleSelect}
            className="mt-2 w-full bg-cricket-green hover:bg-cricket-green/90 text-white"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShotCard;
