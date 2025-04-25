
import React, { useState, useRef } from 'react';
import { useShotContext } from '@/contexts/ShotContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
import { Upload, Camera, Image, Video, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ShotAnalysisPage: React.FC = () => {
  const { allShots, analyzeShot } = useShotContext();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<string>('upload');
  const [selectedShotType, setSelectedShotType] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [mediaUrl, setMediaUrl] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem('perplexityApiKey') || '');
  const [analysis, setAnalysis] = useState<ShotAnalysis | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setApiKey(value);
    localStorage.setItem('perplexityApiKey', value);
  };

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
        title: "Invalid File Type",
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
        title: "Shot Type Required",
        description: "Please select a shot type for analysis.",
        variant: "destructive"
      });
      return;
    }

    if (!mediaUrl) {
      toast({
        title: "No Media",
        description: "Please upload an image or video to analyze.",
        variant: "destructive"
      });
      return;
    }

    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key.",
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

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Shot Analysis</h1>
          <p className="text-cricket-pitch">
            Upload an image or video of your cricket shot and get professional analysis and coaching feedback.
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Upload Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="upload">Upload</TabsTrigger>
                    <TabsTrigger value="capture">Capture</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="space-y-4 pt-4">
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                    />
                    <Button 
                      onClick={triggerFileInput} 
                      className="w-full h-32 flex flex-col items-center justify-center bg-cricket-cream hover:bg-white border-2 border-dashed border-cricket-green/50 hover:border-cricket-green"
                    >
                      <Upload className="h-10 w-10 text-cricket-green mb-2" />
                      <span className="text-sm">Click to upload image or video</span>
                    </Button>
                  </TabsContent>
                  <TabsContent value="capture" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        onClick={() => alert("Camera capture feature coming soon")}
                        className="h-24 flex flex-col items-center justify-center bg-cricket-cream hover:bg-white"
                      >
                        <Camera className="h-8 w-8 text-cricket-green mb-2" />
                        <span className="text-sm">Take Photo</span>
                      </Button>
                      <Button 
                        onClick={() => alert("Video capture feature coming soon")}
                        className="h-24 flex flex-col items-center justify-center bg-cricket-cream hover:bg-white"
                      >
                        <Video className="h-8 w-8 text-cricket-green mb-2" />
                        <span className="text-sm">Record Video</span>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Label htmlFor="shot-type">Shot Type</Label>
                  <Select value={selectedShotType} onValueChange={setSelectedShotType}>
                    <SelectTrigger id="shot-type">
                      <SelectValue placeholder="Select shot type" />
                    </SelectTrigger>
                    <SelectContent>
                      {allShots.map((shot) => (
                        <SelectItem key={shot.id} value={shot.name}>{shot.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="api-key">Perplexity API Key</Label>
                  <Input
                    id="api-key"
                    type="password"
                    placeholder="Enter your API key"
                    value={apiKey}
                    onChange={handleApiKeyChange}
                  />
                  <p className="text-xs text-cricket-pitch mt-1">
                    Required for AI analysis. Get a key from Perplexity.ai
                  </p>
                </div>

                <Button 
                  onClick={handleAnalyze} 
                  className="w-full bg-cricket-green hover:bg-cricket-green/90"
                  disabled={isAnalyzing || !mediaUrl || !selectedShotType || !apiKey}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Shot"}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Preview & Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!mediaUrl ? (
                  <div className="flex flex-col items-center justify-center h-64 bg-cricket-cream/50 rounded-md">
                    <Image className="h-16 w-16 text-cricket-pitch mb-2" />
                    <p className="text-cricket-pitch">Upload an image or video to preview</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black rounded-md overflow-hidden">
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
                      <h3 className="text-lg font-medium mb-2">
                        {selectedShotType ? selectedShotType : "Select shot type"}
                      </h3>
                      {analysis ? (
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-2 text-cricket-green mb-1">
                              <CheckCircle size={16} />
                              <h4 className="font-medium">Positives</h4>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                              {analysis.positives.map((point, idx) => (
                                <li key={idx} className="text-sm">{point}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-cricket-red mb-1">
                              <AlertCircle size={16} />
                              <h4 className="font-medium">Areas to Improve</h4>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                              {analysis.improvements.map((point, idx) => (
                                <li key={idx} className="text-sm">{point}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-1">Technical Analysis</h4>
                            <p className="text-sm">{analysis.technicalAnalysis}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="font-medium">Performance Score:</span>
                            <span className="px-3 py-1 bg-cricket-green text-white rounded-full">
                              {analysis.performanceScore}/10
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-48 text-cricket-pitch">
                          {isAnalyzing ? (
                            <p>Analyzing your shot...</p>
                          ) : (
                            <p>Click "Analyze Shot" to get feedback</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShotAnalysisPage;
