import React, { createContext, useContext, useState } from 'react';
import { Shot, ShotNote, ShotAnalysis } from '@/types';
import { shots } from '@/data/shotsData';
import { useToast } from '@/components/ui/use-toast';

type ShotContextType = {
  allShots: Shot[];
  selectedShot: Shot | null;
  shotNotes: ShotNote[];
  selectShot: (id: string) => void;
  addNote: (note: Omit<ShotNote, 'id'>) => void;
  filteredShots: (category?: string, type?: string, search?: string) => Shot[];
  analyzeShot: (imageUrl: string, shotType: string) => Promise<ShotAnalysis | null>;
};

const ShotContext = createContext<ShotContextType>({} as ShotContextType);

export const useShotContext = () => useContext(ShotContext);

export const ShotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedShot, setSelectedShot] = useState<Shot | null>(null);
  const [shotNotes, setShotNotes] = useState<ShotNote[]>([]);
  const { toast } = useToast();

  const selectShot = (id: string) => {
    const shot = shots.find(s => s.id === id);
    if (shot) {
      setSelectedShot(shot);
    }
  };

  const addNote = (note: Omit<ShotNote, 'id'>) => {
    const newNote = {
      ...note,
      id: `note-${Date.now()}`,
    };
    setShotNotes(prev => [...prev, newNote]);
    toast({
      title: "Note added",
      description: `Your notes for ${note.shotId} have been saved.`,
    });
  };

  const filteredShots = (category?: string, type?: string, search?: string) => {
    return shots.filter(shot => {
      const matchesCategory = !category || category === 'all' || shot.category === category;
      const matchesType = !type || type === 'all' || shot.type === type;
      const matchesSearch = !search || 
        shot.name.toLowerCase().includes(search.toLowerCase()) || 
        shot.description.toLowerCase().includes(search.toLowerCase());
      
      return matchesCategory && matchesType && matchesSearch;
    });
  };

  const analyzeShot = async (imageUrl: string, shotType: string): Promise<ShotAnalysis | null> => {
    try {
      const apiKey = localStorage.getItem('perplexityApiKey');
      
      if (!apiKey) {
        toast({
          title: "Configuration Error",
          description: "Please contact support to enable shot analysis.",
          variant: "destructive"
        });
        return null;
      }

      // Get relevant shot information for better analysis
      const shotInfo = shots.find(s => s.name.toLowerCase() === shotType.toLowerCase());
      
      const keyPoints = shotInfo ? 
        `Key technical points: ${shotInfo.keyPointers.join(", ")}` : 
        "Focus on stance, balance, head position, follow-through, and overall technique";
        
      const commonMistakes = shotInfo ? 
        `Common mistakes: ${shotInfo.commonMistakes.map(m => m.description).join(", ")}` : 
        "Common mistakes include incorrect balance, poor timing, head position issues";

      const prompt = `
        You are a professional cricket coach analyzing a cricket shot. 
        This is a ${shotType} cricket shot image.
        ${keyPoints}
        ${commonMistakes}
        
        Analyze this image in detail and provide feedback in this JSON structure:
        {
          "positives": ["list 3-4 technical aspects done correctly"],
          "improvements": ["list 3-4 specific corrections needed"],
          "technicalAnalysis": "detailed paragraph with professional cricket coaching advice",
          "performanceScore": [number between 1-10]
        }
        
        Focus only on visible technical aspects. Be specific and use cricket terminology.
      `;

      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are a professional cricket coach. Provide precise technical analysis.'
            },
            {
              role: 'user',
              content: [
                {
                  type: "text",
                  text: prompt
                },
                {
                  type: "image_url",
                  image_url: imageUrl
                }
              ]
            }
          ],
          temperature: 0.3,
          max_tokens: 1000,
          return_images: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze shot');
      }

      const data = await response.json();
      let analysisText = data.choices[0].message.content;
      
      // Try to parse the JSON response
      try {
        const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
        const jsonContent = jsonMatch ? jsonMatch[0] : analysisText;
        const analysis = JSON.parse(jsonContent);
        
        toast({
          title: "Analysis Complete",
          description: "Your shot has been analyzed successfully!",
        });
        
        return analysis;
      } catch (error) {
        console.error("Error parsing analysis:", error);
        console.log("Received content:", analysisText);
        
        return {
          positives: ["The shot was analyzed but structured data couldn't be parsed"],
          improvements: ["Please try again with a clearer image"],
          technicalAnalysis: analysisText,
          performanceScore: 5
        };
      }
    } catch (error) {
      console.error("Shot analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your shot. Please try again.",
        variant: "destructive"
      });
      return null;
    }
  };

  return (
    <ShotContext.Provider value={{
      allShots: shots,
      selectedShot,
      shotNotes,
      selectShot,
      addNote,
      filteredShots,
      analyzeShot
    }}>
      {children}
    </ShotContext.Provider>
  );
};
