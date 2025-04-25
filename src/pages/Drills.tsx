
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import Layout from '@/components/Layout';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import { useShotContext } from '@/contexts/ShotContext';
import { Drill } from '@/types';
import { Search } from 'lucide-react';

const DrillsPage: React.FC = () => {
  const { allShots } = useShotContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [weakness, setWeakness] = useState('');
  
  // Extract all drills from all shots
  const allDrills = allShots.flatMap(shot => shot.suggestedDrills);
  
  // Get unique weakness tags
  const allWeaknessTags = Array.from(new Set(
    allDrills.flatMap(drill => drill.weaknessTag)
  )).sort();
  
  // Filter drills based on criteria
  const filteredDrills = allDrills.filter(drill => {
    const matchesSearch = !searchQuery || 
      drill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drill.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesDifficulty = !difficulty || drill.difficulty === difficulty;
    
    const matchesWeakness = !weakness || drill.weaknessTag.includes(weakness);
    
    return matchesSearch && matchesDifficulty && matchesWeakness;
  });
  
  // Find which shot a drill belongs to
  const findShotForDrill = (drillId: string) => {
    for (const shot of allShots) {
      const matchingDrill = shot.suggestedDrills.find(d => d.id === drillId);
      if (matchingDrill) return shot;
    }
    return null;
  };
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Cricket Drills Library</h1>
          <p className="text-cricket-pitch">
            Browse our collection of drills to improve specific aspects of your batting technique.
          </p>
        </div>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search drills..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Difficulty Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={weakness} onValueChange={setWeakness}>
            <SelectTrigger>
              <SelectValue placeholder="Weakness Focus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Areas</SelectItem>
              {allWeaknessTags.map(tag => (
                <SelectItem key={tag} value={tag}>{tag}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Drills List */}
        <div className="grid grid-cols-1 gap-6">
          {filteredDrills.length > 0 ? (
            filteredDrills.map((drill) => {
              const relatedShot = findShotForDrill(drill.id);
              return (
                <Card key={drill.id}>
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <CardTitle className="text-lg text-cricket-green">{drill.name}</CardTitle>
                      <Badge>{drill.difficulty}</Badge>
                    </div>
                    <CardDescription>
                      {relatedShot && (
                        <span>For <strong>{relatedShot.name}</strong></span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-4">{drill.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Addresses:</h4>
                          <div className="flex flex-wrap gap-2">
                            {drill.weaknessTag.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      {drill.videoId && (
                        <YoutubeEmbed videoId={drill.videoId} />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No drills found</h3>
              <p className="text-cricket-pitch">Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DrillsPage;
