
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
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const ShotDetailPage: React.FC = () => {
  const { shotId } = useParams<{ shotId: string }>();
  const { allShots, selectShot, selectedShot } = useShotContext();
  const [activeTab, setActiveTab] = useState('technique');
  const isMobile = useIsMobile();
  
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
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
              Add Notes
            </Link>
          </Button>
        </motion.div>
        
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mobile: Show video at the top */}
          {isMobile && (
            <motion.div 
              className="md:hidden col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-semibold mb-4">Tutorial</h3>
              {selectedShot.tutorialVideoId ? (
                <YoutubeEmbed videoId={selectedShot.tutorialVideoId} className="mb-4" />
              ) : (
                <p className="text-cricket-pitch">No tutorial video available.</p>
              )}
            </motion.div>
          )}

          <div className="md:col-span-2">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="animate-fade-in"
            >
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="technique">Technique</TabsTrigger>
                <TabsTrigger value="mistakes">Mistakes</TabsTrigger>
                <TabsTrigger value="drills">Drills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technique" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
              </TabsContent>
              
              <TabsContent value="mistakes" className="space-y-4">
                {selectedShot.commonMistakes.map((mistake, index) => (
                  <motion.div
                    key={mistake.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-cricket-red mb-2 flex items-center">
                          <AlertTriangle size={16} className="mr-2" />
                          {mistake.description}
                        </h3>
                        <p className="mb-2"><strong>Fix:</strong> {mistake.correction}</p>
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
                  </motion.div>
                ))}
              </TabsContent>
              
              <TabsContent value="drills" className="space-y-4">
                {selectedShot.suggestedDrills.map((drill, index) => (
                  <motion.div
                    key={drill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Card>
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
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Desktop: Tutorial Video Sidebar */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-semibold mb-4">Tutorial Video</h3>
            {selectedShot.tutorialVideoId ? (
              <YoutubeEmbed videoId={selectedShot.tutorialVideoId} className="mb-4" />
            ) : (
              <p className="text-cricket-pitch">No tutorial video available.</p>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ShotDetailPage;
