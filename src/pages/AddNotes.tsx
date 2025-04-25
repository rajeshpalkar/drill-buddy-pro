
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/Layout';
import { useShotContext } from '@/contexts/ShotContext';
import { ArrowLeft, Star } from 'lucide-react';

const WEAKNESS_OPTIONS = [
  'balance',
  'timing',
  'footwork',
  'head position',
  'follow through',
  'bat angle',
  'weight transfer',
  'hand position',
  'shot selection',
  'judgment',
];

const SESSION_TYPES = ['Net', 'Practice', 'Home', 'Match'];

const AddNotesPage: React.FC = () => {
  const { shotId } = useParams<{ shotId: string }>();
  const navigate = useNavigate();
  const { allShots, selectedShot, selectShot, addNote } = useShotContext();
  
  const [notes, setNotes] = useState('');
  const [sessionType, setSessionType] = useState<string>('Practice');
  const [rating, setRating] = useState<number>(0);
  const [weaknessTags, setWeaknessTags] = useState<string[]>([]);
  const [customWeakness, setCustomWeakness] = useState('');
  
  useEffect(() => {
    if (shotId && (!selectedShot || selectedShot.id !== shotId)) {
      selectShot(shotId);
    }
  }, [shotId, selectedShot, selectShot]);
  
  const handleRatingChange = (value: number) => {
    setRating(value);
  };
  
  const handleWeaknessToggle = (tag: string) => {
    setWeaknessTags((current) =>
      current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag]
    );
  };
  
  const handleAddCustomWeakness = () => {
    if (customWeakness.trim() && !weaknessTags.includes(customWeakness.trim())) {
      setWeaknessTags((current) => [...current, customWeakness.trim()]);
      setCustomWeakness('');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!shotId) return;
    
    addNote({
      shotId,
      notes,
      date: new Date().toISOString(),
      rating,
      sessionType: sessionType as 'Net' | 'Practice' | 'Home' | 'Match',
      weaknessTags,
    });
    
    navigate(`/shot/${shotId}`);
  };
  
  if (!selectedShot) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p>Shot not found</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => navigate(`/shot/${shotId}`)}
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-2xl font-bold">
            Add Session Notes: {selectedShot.name}
          </h1>
        </div>
        
        <Separator className="my-4" />
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="session-type">Session Type</Label>
            <Select 
              value={sessionType} 
              onValueChange={setSessionType}
            >
              <SelectTrigger id="session-type">
                <SelectValue placeholder="Select session type" />
              </SelectTrigger>
              <SelectContent>
                {SESSION_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Session Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add your technical notes, observations, and areas for improvement..."
              rows={6}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Rate Your Performance</Label>
            <div className="flex gap-2 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRatingChange(star)}
                  className={`hover:bg-transparent ${
                    rating >= star ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  <Star fill={rating >= star ? 'currentColor' : 'none'} />
                </Button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Areas to Improve</Label>
            <div className="flex flex-wrap gap-2 mt-1">
              {WEAKNESS_OPTIONS.map((tag) => (
                <Button
                  key={tag}
                  type="button"
                  variant={weaknessTags.includes(tag) ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleWeaknessToggle(tag)}
                  className={weaknessTags.includes(tag) ? 'bg-cricket-green hover:bg-cricket-green/90' : ''}
                >
                  {tag}
                </Button>
              ))}
            </div>
            
            <div className="flex mt-2 gap-2">
              <Input
                placeholder="Add custom tag..."
                value={customWeakness}
                onChange={(e) => setCustomWeakness(e.target.value)}
              />
              <Button 
                type="button" 
                onClick={handleAddCustomWeakness}
                disabled={!customWeakness.trim()}
                className="bg-cricket-green hover:bg-cricket-green/90"
              >
                Add
              </Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">Connected Drills</h3>
              <p className="text-sm text-cricket-pitch mb-4">
                Based on your selected weaknesses, we recommend these drills:
              </p>
              
              <ul className="space-y-2">
                {selectedShot.suggestedDrills
                  .filter((drill) => 
                    weaknessTags.some(tag => drill.weaknessTag.includes(tag))
                  )
                  .map(drill => (
                    <li key={drill.id} className="text-sm">
                      <span className="font-medium">{drill.name}</span> - {drill.description}
                    </li>
                  ))
                }
                {selectedShot.suggestedDrills
                  .filter((drill) => 
                    weaknessTags.some(tag => drill.weaknessTag.includes(tag))
                  ).length === 0 && (
                  <li className="text-sm text-cricket-pitch">
                    Select weakness tags to see recommended drills.
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
          
          <div className="flex justify-end gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate(`/shot/${shotId}`)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-cricket-green hover:bg-cricket-green/90"
            >
              Save Notes
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddNotesPage;
