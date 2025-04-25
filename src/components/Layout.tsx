
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  PenSquare, 
  Play,
  Search
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen bg-cricket-cream">
      {/* Header */}
      <header className="bg-cricket-green text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <BookOpen size={24} />
            <span>DrillBuddy</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-cricket-green/80">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-cricket-green/80">
              <Link to="/shots">Shot Library</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-cricket-green/80">
              <Link to="/drills">Drills</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-cricket-green/80">
              <Link to="/my-notes">My Notes</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 md:p-6">
        {children}
      </main>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full px-4 py-2">
          <div className="flex justify-around">
            <Link to="/" className="flex flex-col items-center">
              <BookOpen size={20} className="text-cricket-green" />
              <span className="text-xs mt-1">Library</span>
            </Link>
            <Link to="/shots" className="flex flex-col items-center">
              <Play size={20} className="text-cricket-green" />
              <span className="text-xs mt-1">Shots</span>
            </Link>
            <Link to="/drills" className="flex flex-col items-center">
              <Search size={20} className="text-cricket-green" />
              <span className="text-xs mt-1">Drills</span>
            </Link>
            <Link to="/my-notes" className="flex flex-col items-center">
              <PenSquare size={20} className="text-cricket-green" />
              <span className="text-xs mt-1">Notes</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;
