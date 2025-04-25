
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import Layout from '@/components/Layout';
import ShotCard from '@/components/ShotCard';
import { useShotContext } from '@/contexts/ShotContext';
import { Search } from 'lucide-react';

const ShotsPage: React.FC = () => {
  const { filteredShots } = useShotContext();
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const shots = filteredShots(category, type, searchQuery);
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Cricket Shot Library</h1>
          <p className="text-cricket-pitch">
            Explore our comprehensive collection of cricket shots, complete with 
            technical guidance, common mistakes, and improvement drills.
          </p>
        </div>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search shots..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              <SelectItem value="Front Foot">Front Foot</SelectItem>
              <SelectItem value="Back Foot">Back Foot</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="Straight Bat">Straight Bat</SelectItem>
              <SelectItem value="Cross Bat">Cross Bat</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Shot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shots.length > 0 ? (
            shots.map((shot) => <ShotCard key={shot.id} shot={shot} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-lg font-medium mb-2">No shots found</h3>
              <p className="text-cricket-pitch">Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ShotsPage;
