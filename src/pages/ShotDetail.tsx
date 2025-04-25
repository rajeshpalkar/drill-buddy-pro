
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useShotContext } from '@/contexts/ShotContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import { 
  CheckCircle, 
  AlertTriangle, 
  Video, 
  ArrowLeft, 
  PlusCircle 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ShotDetailPage: React.FC = () => {
  const { shotId } = useParams<{ shotId: string }>();
  const { allShots, selectShot, selectedShot } = useShotContext();
  const [activeTab, setActiveTab] = useState('technique');
  
  useEffect(() => {
    if (shotId && (!selectedShot || selectedShot.id !== shotId)) {
      selectShot(shotId);
    }
  }, [shotId, selectedShot, selectShot]);
  
  if (!selectedShot) {
    return (
      <Layout>
        <div className="py-12 text-center">
          <h2 className="text-xl mb-4">Shot not found</h2>
          <Button asChild>
            <Link to="/shots">Back to Shot Library</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <Link to="/shots">
                <ArrowLeft size={20} />
              </Link>
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">
              {selectedShot.name}
            </h1>
            <div className="flex gap-1 ml-2">
              <Badge variant="outline" className="bg-cricket-cream text-cricket-green">
                {selectedShot.category}
              </Badge>
              <Badge variant="outline" className="bg-cricket-willow text-white">
                {selectedShot.type}
              </Badge>
            </div>
          </div>
          <Button asChild className="bg-cricket-green hover:bg-cricket-green/90">
            <Link to={`/add-notes/${selectedShot.id}`}>
              <PlusCircle className="mr-2" size={18} />
              Add Session Notes
            </Link>
          </Button>
        </div>
        
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="technique">Technique</TabsTrigger>
                <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
                <TabsTrigger value="drills">Suggested Drills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technique" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">{selectedShot.description}</p>
                    <h3 className="font-semibold text-cricket-green mb-2 flex items-center">
                      <CheckCircle size={16} className="mr-2" />
                      Key Technical Points
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {selectedShot.keyPointers.map((pointer, idx) => (
                        <li key={idx}>{pointer}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mistakes" className="space-y-4">
                {selectedShot.commonMistakes.map((mistake) => (
                  <Card key={mistake.id}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-cricket-red mb-2 flex items-center">
                        <AlertTriangle size={16} className="mr-2" />
                        {mistake.description}
                      </h3>
                      <p className="mb-2"><strong>Correction:</strong> {mistake.correction}</p>
                      {mistake.videoId && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <Video size={16} className="mr-2" />
                            Correction Video
                          </h4>
                          <YoutubeEmbed videoId={mistake.videoId} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="drills" className="space-y-4">
                {selectedShot.suggestedDrills.map((drill) => (
                  <Card key={drill.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-cricket-green">
                          {drill.name}
                        </h3>
                        <Badge>{drill.difficulty}</Badge>
                      </div>
                      <p className="mb-3">{drill.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {drill.weaknessTag.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {drill.videoId && (
                        <YoutubeEmbed videoId={drill.videoId} />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Tutorial Video Sidebar */}
          <div>
            <h3 className="font-semibold mb-4">Tutorial Video</h3>
            {selectedShot.tutorialVideoId ? (
              <YoutubeEmbed videoId={selectedShot.tutorialVideoId} className="mb-4" />
            ) : (
              <p className="text-cricket-pitch">No tutorial video available.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShotDetailPage;
