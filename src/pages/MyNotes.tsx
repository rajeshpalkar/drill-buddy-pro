
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useShotContext } from '@/contexts/ShotContext';
import Layout from '@/components/Layout';
import { Calendar, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const MyNotesPage: React.FC = () => {
  const { shotNotes, allShots } = useShotContext();
  const [filter, setFilter] = useState<string>('all');
  
  // Sort notes by date (newest first)
  const sortedNotes = [...shotNotes].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Apply filter if needed
  const filteredNotes = filter === 'all' 
    ? sortedNotes 
    : sortedNotes.filter(note => {
        if (filter === 'high-rated') return (note.rating || 0) >= 4;
        if (filter === 'low-rated') return (note.rating || 0) <= 2;
        return true;
      });
  
  // Get shot name from shot ID
  const getShotName = (shotId: string) => {
    const shot = allShots.find(s => s.id === shotId);
    return shot ? shot.name : 'Unknown Shot';
  };
  
  const renderStarRating = (rating: number = 0) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map(star => (
          <Star 
            key={star} 
            size={16} 
            className={star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
          />
        ))}
      </div>
    );
  };
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">My Practice Notes</h1>
          <p className="text-cricket-pitch">
            Track your progress and review your practice session notes.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-cricket-green hover:bg-cricket-green/90' : ''}
          >
            All Notes
          </Button>
          <Button 
            variant={filter === 'high-rated' ? 'default' : 'outline'} 
            onClick={() => setFilter('high-rated')}
            className={filter === 'high-rated' ? 'bg-cricket-green hover:bg-cricket-green/90' : ''}
          >
            High Rated (4-5)
          </Button>
          <Button 
            variant={filter === 'low-rated' ? 'default' : 'outline'} 
            onClick={() => setFilter('low-rated')}
            className={filter === 'low-rated' ? 'bg-cricket-green hover:bg-cricket-green/90' : ''}
          >
            Needs Improvement (1-2)
          </Button>
        </div>
        
        <Separator />
        
        {/* Notes List */}
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredNotes.map((note) => (
              <Card key={note.id}>
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <CardTitle className="text-lg">
                      <Link to={`/shot/${note.shotId}`} className="text-cricket-green hover:underline">
                        {getShotName(note.shotId)}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge>{note.sessionType}</Badge>
                      {renderStarRating(note.rating)}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-cricket-pitch">
                    <Calendar size={14} className="mr-1" />
                    {format(new Date(note.date), 'PPP')}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line mb-3">{note.notes}</p>
                  {note.weaknessTags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {note.weaknessTags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No notes found</h3>
            <p className="text-cricket-pitch mb-6">Start adding notes to your practice sessions.</p>
            <Button asChild className="bg-cricket-green hover:bg-cricket-green/90">
              <Link to="/shots">Browse Shots</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyNotesPage;
