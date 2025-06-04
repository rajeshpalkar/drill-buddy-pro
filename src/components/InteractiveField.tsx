
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FieldPosition {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  color: string;
}

type PresetName = 'attacking' | 'defensive' | 'spin' | 'powerplay';

interface PresetConfiguration {
  name: string;
  description: string;
  positions: Omit<FieldPosition, 'color'>[];
}

const InteractiveField: React.FC = () => {
  const defaultColors: Record<string, string> = {
    'wk': '#ef4444',
    'slip1': '#3b82f6',
    'slip2': '#3b82f6',
    'gully': '#8b5cf6',
    'point': '#10b981',
    'cover': '#f59e0b',
    'midoff': '#06b6d4',
    'midon': '#84cc16',
    'midwicket': '#f97316',
    'squareleg': '#ec4899',
    'fineleg': '#6366f1',
  };

  const presetConfigurations: Record<PresetName, PresetConfiguration> = {
    attacking: {
      name: "Pace Attack Field",
      description: "Aggressive field for fast bowling",
      positions: [
        { id: 'wk', name: 'Wicket Keeper', x: 50, y: 85 },
        { id: 'slip1', name: '1st Slip', x: 55, y: 80 },
        { id: 'slip2', name: '2nd Slip', x: 60, y: 75 },
        { id: 'gully', name: 'Gully', x: 65, y: 70 },
        { id: 'point', name: 'Point', x: 75, y: 50 },
        { id: 'cover', name: 'Cover', x: 70, y: 35 },
        { id: 'midoff', name: 'Mid Off', x: 55, y: 20 },
        { id: 'midon', name: 'Mid On', x: 45, y: 20 },
        { id: 'midwicket', name: 'Mid Wicket', x: 25, y: 35 },
        { id: 'squareleg', name: 'Square Leg', x: 25, y: 50 },
        { id: 'fineleg', name: 'Fine Leg', x: 35, y: 75 },
      ]
    },
    defensive: {
      name: "Defensive Field",
      description: "Spread field to prevent boundaries",
      positions: [
        { id: 'wk', name: 'Wicket Keeper', x: 50, y: 85 },
        { id: 'slip1', name: 'Third Man', x: 85, y: 75 },
        { id: 'slip2', name: 'Deep Point', x: 85, y: 45 },
        { id: 'gully', name: 'Deep Cover', x: 75, y: 15 },
        { id: 'point', name: 'Long Off', x: 60, y: 5 },
        { id: 'cover', name: 'Long On', x: 40, y: 5 },
        { id: 'midoff', name: 'Deep Mid Wicket', x: 25, y: 15 },
        { id: 'midon', name: 'Deep Square', x: 15, y: 45 },
        { id: 'midwicket', name: 'Deep Fine Leg', x: 15, y: 75 },
        { id: 'squareleg', name: 'Short Mid Wicket', x: 35, y: 35 },
        { id: 'fineleg', name: 'Short Cover', x: 65, y: 35 },
      ]
    },
    spin: {
      name: "Spin Bowling Field",
      description: "Close catching positions for spin",
      positions: [
        { id: 'wk', name: 'Wicket Keeper', x: 50, y: 85 },
        { id: 'slip1', name: 'Slip', x: 58, y: 78 },
        { id: 'slip2', name: 'Silly Point', x: 65, y: 55 },
        { id: 'gully', name: 'Short Extra Cover', x: 70, y: 35 },
        { id: 'point', name: 'Long Off', x: 60, y: 10 },
        { id: 'cover', name: 'Long On', x: 40, y: 10 },
        { id: 'midoff', name: 'Deep Mid Wicket', x: 20, y: 25 },
        { id: 'midon', name: 'Short Leg', x: 35, y: 55 },
        { id: 'midwicket', name: 'Close Mid Wicket', x: 30, y: 40 },
        { id: 'squareleg', name: 'Square Leg', x: 25, y: 60 },
        { id: 'fineleg', name: 'Fine Leg', x: 35, y: 75 },
      ]
    },
    powerplay: {
      name: "Powerplay Field",
      description: "Restricted field for powerplay overs",
      positions: [
        { id: 'wk', name: 'Wicket Keeper', x: 50, y: 85 },
        { id: 'slip1', name: 'Slip', x: 58, y: 78 },
        { id: 'slip2', name: 'Point', x: 75, y: 50 },
        { id: 'gully', name: 'Cover', x: 70, y: 35 },
        { id: 'point', name: 'Mid Off', x: 55, y: 25 },
        { id: 'cover', name: 'Mid On', x: 45, y: 25 },
        { id: 'midoff', name: 'Mid Wicket', x: 25, y: 35 },
        { id: 'midon', name: 'Square Leg', x: 25, y: 50 },
        { id: 'midwicket', name: 'Fine Leg', x: 35, y: 70 },
        { id: 'squareleg', name: 'Third Man', x: 65, y: 70 },
        { id: 'fineleg', name: 'Extra Cover', x: 75, y: 25 },
      ]
    }
  };

  const [selectedPreset, setSelectedPreset] = useState<PresetName>('attacking');
  const [positions, setPositions] = useState<FieldPosition[]>(
    presetConfigurations.attacking.positions.map(pos => ({
      ...pos,
      color: defaultColors[pos.id] || '#6b7280'
    }))
  );

  const handlePresetChange = (presetName: string) => {
    const preset = presetName as PresetName;
    setSelectedPreset(preset);
    const newPositions = presetConfigurations[preset].positions.map(pos => ({
      ...pos,
      color: defaultColors[pos.id] || '#6b7280'
    }));
    setPositions(newPositions);
  };

  const handlePositionDrag = (id: string, newX: number, newY: number) => {
    setPositions(prev => prev.map(pos => 
      pos.id === id ? { ...pos, x: newX, y: newY } : pos
    ));
  };

  return (
    <div className="space-y-4">
      {/* Preset Selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">Field Setup:</label>
        <Select value={selectedPreset} onValueChange={handlePresetChange}>
          <SelectTrigger className="w-64">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(presetConfigurations).map(([key, config]) => (
              <SelectItem key={key} value={key}>
                <div className="flex flex-col">
                  <span className="font-medium">{config.name}</span>
                  <span className="text-xs text-gray-500">{config.description}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Cricket Field */}
      <div className="relative w-full h-96 bg-green-100 rounded-lg border-2 border-green-300 overflow-hidden">
        {/* Cricket field markings */}
        <div className="absolute inset-0">
          {/* Pitch - rectangular area in center */}
          <div className="absolute left-1/2 top-1/2 w-2 h-16 bg-amber-200 border border-amber-400 transform -translate-x-1/2 -translate-y-1/2 rounded-sm">
            {/* Stumps */}
            <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-brown-600 transform -translate-x-1/2 -translate-y-1"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-brown-600 transform -translate-x-1/2 translate-y-1"></div>
          </div>
          
          {/* Crease lines */}
          <div className="absolute left-1/2 top-1/2 w-8 h-0.5 bg-white transform -translate-x-1/2 -translate-y-8"></div>
          <div className="absolute left-1/2 top-1/2 w-8 h-0.5 bg-white transform -translate-x-1/2 translate-y-8"></div>
          
          {/* 30-yard circle */}
          <div className="absolute left-1/2 top-1/2 w-48 h-48 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
          
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
                handlePositionDrag(position.id, Math.max(5, Math.min(95, newX)), Math.max(5, Math.min(95, newY)));
              }
            }}
            whileHover={{ scale: 1.2 }}
            whileDrag={{ scale: 1.3 }}
            animate={{
              x: 0,
              y: 0
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <div className="flex flex-col items-center">
              <div 
                className="w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: position.color }}
              />
              <span className="text-xs font-medium text-gray-800 bg-white px-1 rounded mt-1 shadow-sm whitespace-nowrap">
                {position.name}
              </span>
            </div>
          </motion.div>
        ))}
        
        <div className="absolute bottom-2 left-2 text-xs text-green-700 bg-white px-2 py-1 rounded shadow">
          Drag the dots to reposition fielders • {presetConfigurations[selectedPreset].name}
        </div>
      </div>
    </div>
  );
};

export default InteractiveField;
