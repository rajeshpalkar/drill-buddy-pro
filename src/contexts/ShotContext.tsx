
import React, { createContext, useContext, useState } from 'react';
import { Shot, ShotNote } from '@/types';
import { shots } from '@/data/shotsData';
import { useToast } from '@/components/ui/use-toast';

type ShotContextType = {
  allShots: Shot[];
  selectedShot: Shot | null;
  shotNotes: ShotNote[];
  selectShot: (id: string) => void;
  addNote: (note: Omit<ShotNote, 'id'>) => void;
  filteredShots: (category?: string, type?: string, search?: string) => Shot[];
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

  return (
    <ShotContext.Provider value={{
      allShots: shots,
      selectedShot,
      shotNotes,
      selectShot,
      addNote,
      filteredShots
    }}>
      {children}
    </ShotContext.Provider>
  );
};
