
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Dumbbell, 
  Trophy,
  Target,
  Users,
  Camera
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const navItems = [
    { to: "/", label: "Shots", icon: <Trophy size={24} /> },
    { to: "/fielding-positions", label: "Field", icon: <Users size={24} /> },
    { to: "/fitness-training", label: "Train", icon: <Dumbbell size={24} /> },
    { to: "/shot-analysis", label: "Analyze", icon: <Camera size={24} /> },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="flex flex-col min-h-screen bg-cricket-cream">
      {/* Header */}
      <motion.header 
        className="bg-cricket-green text-white py-3 px-4 shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-center items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <motion.div 
              className="bg-white text-cricket-green p-1.5 rounded-md"
              whileHover={{ rotate: 10 }}
            >
              <Target size={20} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Cricket Coach
            </motion.span>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="flex-1 container mx-auto p-4 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {children}
      </motion.main>

      {/* Mobile Navigation */}
      <motion.nav 
        className="bg-white border-t border-gray-200 fixed bottom-0 w-full px-4 py-3 shadow-lg z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        <div className="flex justify-around">
          {navItems.map((item, index) => {
            const active = isActive(item.to);
            return (
              <Link 
                key={item.to} 
                to={item.to} 
                className="flex flex-col items-center justify-center relative"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  {React.cloneElement(item.icon, { 
                    size: 22, 
                    className: `${active ? 'text-cricket-green' : 'text-gray-500'}`
                  })}
                  <span className={`text-xs mt-1 ${active ? 'font-medium text-cricket-green' : 'text-gray-500'}`}>
                    {item.label}
                  </span>
                  {active && (
                    <motion.div 
                      className="absolute -bottom-3 left-0 right-0 h-0.5 bg-cricket-green"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
};

export default Layout;
