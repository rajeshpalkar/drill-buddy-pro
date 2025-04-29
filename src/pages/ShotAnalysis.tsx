
import React, { useState, useRef, useEffect } from 'react';
import { useShotContext } from '@/contexts/ShotContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShotAnalysis } from '@/types';
import { Upload, Camera, Image, Video, CheckCircle, AlertCircle, Loader, Play, Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const ShotAnalysisPage: React.FC = () => {
  const { allShots, analyzeShot } = useShotContext();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<string>('upload');
  const [selectedShotType, setSelectedShotType] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [mediaUrl, setMediaUrl] = useState<string>('');
  const [analysis, setAnalysis] = useState<ShotAnalysis | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  
  // Perplexity API key hardcoded as requested
  const perplexityApiKey = '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';
  
  useEffect(() => {
    // Store API key in localStorage
    localStorage.setItem('perplexityApiKey', perplexityApiKey);
  }, [perplexityApiKey]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (file.type.startsWith('image/')) {
      setMediaType('image');
    } else if (file.type.startsWith('video/')) {
      setMediaType('video');
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload an image or video file.",
        variant: "destructive"
      });
      return;
    }

    // Create URL for preview
    const url = URL.createObjectURL(file);
    setMediaUrl(url);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!selectedShotType) {
      toast({
        title: "Select Shot",
        description: "Please select a shot type.",
        variant: "destructive"
      });
      return;
    }

    if (!mediaUrl) {
      toast({
        title: "Upload Media",
        description: "Please upload an image or video.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const result = await analyzeShot(mediaUrl, selectedShotType);
      if (result) {
        setAnalysis(result);
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Animation variants
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
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <Layout>
      <motion.div 
        className="flex flex-col gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold">Analysis</h1>
        </motion.div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <Card className="overflow-hidden border-2 hover:border-cricket-green transition-all duration-300 shadow-md">
              <CardHeader className="bg-gradient-to-r from-cricket-green to-cricket-red/80 text-white p-4">
                <CardTitle className="flex items-center gap-2">
                  <Upload size={20} />
                  <span>Media</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full grid grid-cols-2 mb-4">
                    <TabsTrigger value="upload" className="data-[state=active]:bg-cricket-green data-[state=active]:text-white">
                      <Upload size={16} className="mr-1" />
                      Upload
                    </TabsTrigger>
                    <TabsTrigger value="capture" className="data-[state=active]:bg-cricket-green data-[state=active]:text-white">
                      <Camera size={16} className="mr-1" />
                      Capture
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="space-y-4 pt-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                    />
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        onClick={triggerFileInput} 
                        className="w-full h-28 flex flex-col items-center justify-center bg-cricket-cream hover:bg-white border-2 border-dashed border-cricket-green/50 hover:border-cricket-green transition-all duration-300"
                      >
                        <Upload className="h-8 w-8 text-cricket-green mb-2" />
                        <span className="text-xs">Tap to upload</span>
                      </Button>
                    </motion.div>
                  </TabsContent>
                  <TabsContent value="capture" className="space-y-4 pt-2">
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          onClick={() => alert("Camera capture feature coming soon")}
                          className="h-20 flex flex-col items-center justify-center bg-cricket-cream hover:bg-white"
                        >
                          <Camera className="h-6 w-6 text-cricket-green mb-1" />
                          <span className="text-xs">Photo</span>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          onClick={() => alert("Video capture feature coming soon")}
                          className="h-20 flex flex-col items-center justify-center bg-cricket-cream hover:bg-white"
                        >
                          <Video className="h-6 w-6 text-cricket-green mb-1" />
                          <span className="text-xs">Video</span>
                        </Button>
                      </motion.div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Label htmlFor="shot-type" className="text-sm font-medium flex items-center gap-1">
                    <Play size={14} />
                    Shot Type
                  </Label>
                  <Select value={selectedShotType} onValueChange={setSelectedShotType}>
                    <SelectTrigger id="shot-type" className="border-cricket-green/30 focus:ring-cricket-green">
                      <SelectValue placeholder="Select shot" />
                    </SelectTrigger>
                    <SelectContent>
                      {allShots.map((shot) => (
                        <SelectItem key={shot.id} value={shot.name}>{shot.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={handleAnalyze} 
                    className="w-full bg-cricket-green hover:bg-cricket-green/90 text-white font-medium 
                    transition-all duration-300 relative overflow-hidden group"
                    disabled={isAnalyzing || !mediaUrl || !selectedShotType}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isAnalyzing ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Search size={16} />
                          Analyze
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-cricket-red transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="md:col-span-2" variants={itemVariants}>
            <Card className="h-full border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-cricket-green to-cricket-red/80 text-white p-4">
                <CardTitle className="flex items-center gap-2">
                  <Search size={20} />
                  <span>Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {!mediaUrl ? (
                  <motion.div 
                    className="flex flex-col items-center justify-center h-64 bg-cricket-cream/50 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image className="h-12 w-12 text-cricket-pitch/50 mb-2" />
                    <p className="text-cricket-pitch/50 text-sm">Upload to preview</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="bg-black rounded-md overflow-hidden shadow-lg">
                      {mediaType === 'image' ? (
                        <img 
                          src={mediaUrl} 
                          alt="Shot Preview" 
                          className="w-full h-auto object-contain max-h-80"
                        />
                      ) : (
                        <video 
                          src={mediaUrl} 
                          controls 
                          className="w-full h-auto max-h-80"
                        />
                      )}
                    </div>

                    <div>
                      <AnimatePresence mode="wait">
                        {analysis ? (
                          <motion.div 
                            className="space-y-4"
                            key="analysis"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.div className="flex items-center justify-between">
                              <h3 className="text-lg font-medium border-b-2 border-cricket-green pb-1 inline-block">
                                {selectedShotType}
                              </h3>
                              <motion.div 
                                className="px-3 py-1 bg-cricket-green text-white rounded-full text-sm flex items-center gap-1"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring" }}
                              >
                                <span>{analysis.performanceScore}/10</span>
                              </motion.div>
                            </motion.div>

                            <motion.div 
                              className="flex flex-col gap-3"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center gap-1 text-cricket-green">
                                  <CheckCircle size={16} />
                                  <h4 className="font-medium text-sm">Positives</h4>
                                </div>
                                <ul className="grid grid-cols-1 gap-1">
                                  {analysis.positives.map((point, idx) => (
                                    <motion.li 
                                      key={idx}
                                      className="text-xs flex items-center gap-1 bg-cricket-cream/30 p-2 rounded-md"
                                      initial={{ x: -10, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: 0.1 + idx * 0.1 }}
                                    >
                                      <CheckCircle size={12} className="text-cricket-green flex-shrink-0" />
                                      <span>{point}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-1 text-cricket-red">
                                  <AlertCircle size={16} />
                                  <h4 className="font-medium text-sm">Improve</h4>
                                </div>
                                <ul className="grid grid-cols-1 gap-1">
                                  {analysis.improvements.map((point, idx) => (
                                    <motion.li 
                                      key={idx}
                                      className="text-xs flex items-center gap-1 bg-cricket-cream/30 p-2 rounded-md"
                                      initial={{ x: -10, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: 0.3 + idx * 0.1 }}
                                    >
                                      <AlertCircle size={12} className="text-cricket-red flex-shrink-0" />
                                      <span>{point}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="placeholder"
                            className="flex flex-col items-center justify-center h-64 text-cricket-pitch/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {isAnalyzing ? (
                              <motion.div
                                animate={{ 
                                  scale: [1, 1.05, 1],
                                  opacity: [0.8, 1, 0.8] 
                                }}
                                transition={{ 
                                  repeat: Infinity,
                                  duration: 1.5 
                                }}
                                className="flex flex-col items-center"
                              >
                                <Loader className="h-8 w-8 animate-spin text-cricket-green mb-2" />
                                <p className="text-sm">Analyzing...</p>
                              </motion.div>
                            ) : (
                              <motion.div className="flex flex-col items-center">
                                <Search className="h-8 w-8 mb-2 text-cricket-pitch/50" />
                                <p className="text-sm">Ready to analyze</p>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ShotAnalysisPage;
