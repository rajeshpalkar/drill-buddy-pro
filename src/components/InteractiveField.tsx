
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FieldPosition {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  color: string;
}

const InteractiveField: React.FC = () => {
  const [positions, setPositions] = useState<FieldPosition[]>([
    { id: 'wk', name: 'Wicket Keeper', x: 50, y: 85, color: '#ef4444' },
    { id: 'slip1', name: '1st Slip', x: 55, y: 80, color: '#3b82f6' },
    { id: 'slip2', name: '2nd Slip', x: 60, y: 75, color: '#3b82f6' },
    { id: 'gully', name: 'Gully', x: 65, y: 70, color: '#8b5cf6' },
    { id: 'point', name: 'Point', x: 75, y: 50, color: '#10b981' },
    { id: 'cover', name: 'Cover', x: 70, y: 35, color: '#f59e0b' },
    { id: 'midoff', name: 'Mid Off', x: 55, y: 20, color: '#06b6d4' },
    { id: 'midon', name: 'Mid On', x: 45, y: 20, color: '#84cc16' },
    { id: 'midwicket', name: 'Mid Wicket', x: 25, y: 35, color: '#f97316' },
    { id: 'squareleg', name: 'Square Leg', x: 25, y: 50, color: '#ec4899' },
    { id: 'fineleg', name: 'Fine Leg', x: 35, y: 75, color: '#6366f1' },
  ]);

  const handlePositionDrag = (id: string, newX: number, newY: number) => {
    setPositions(prev => prev.map(pos => 
      pos.id === id ? { ...pos, x: newX, y: newY } : pos
    ));
  };

  return (
    <div className="relative w-full h-96 bg-green-100 rounded-lg border-2 border-green-300 overflow-hidden">
      {/* Cricket field markings */}
      <div className="absolute inset-0">
        {/* Pitch */}
        <div className="absolute left-1/2 top-1/2 w-1 h-20 bg-brown-400 transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* 30-yard circle */}
        <div className="absolute left-1/2 top-1/2 w-48 h-48 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* Boundary */}
        <div className="absolute inset-2 border-2 border-white rounded-lg"></div>
      </div>

      {/* Field positions */}
      {positions.map((position) => (
        <motion.div
          key={position.id}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
          onDrag={(event, info) => {
            const rect = (event.target as HTMLElement).closest('.relative')?.getBoundingClientRect();
            if (rect) {
              const newX = ((info.point.x - rect.left) / rect.width) * 100;
              const newY = ((info.point.y - rect.top) / rect.height) * 100;
              handlePositionDrag(position.id, Math.max(0, Math.min(100, newX)), Math.max(0, Math.min(100, newY)));
            }
          }}
          whileHover={{ scale: 1.2 }}
          whileDrag={{ scale: 1.3 }}
        >
          <div 
            className="w-4 h-4 rounded-full border-2 border-white shadow-lg relative group"
            style={{ backgroundColor: position.color }}
          >
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {position.name}
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="absolute bottom-2 left-2 text-xs text-green-700 bg-white px-2 py-1 rounded">
        Drag the dots to reposition fielders
      </div>
    </div>
  );
};

export default InteractiveField;
