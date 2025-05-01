
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { BookOpen, PenSquare, Trophy } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';

const Index = () => {
  const { user } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {/* Hero Section - More minimalist */}
        <motion.section 
          className="relative py-12 md:py-16 px-4 bg-cricket-green rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Cricket Performance
            </h1>
            <p className="text-lg mb-6 text-white/90 max-w-md">
              Simplify your training. Master your technique.
            </p>
            <div className="flex flex-wrap gap-4">
              {user ? (
                <>
                  <Button asChild size="lg" className="bg-white text-cricket-green hover:bg-cricket-cream">
                    <Link to="/shots">Start Training</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white/10"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button asChild size="lg" className="bg-white text-cricket-green hover:bg-cricket-cream">
                  <Link to="/auth">Sign In</Link>
                </Button>
              )}
            </div>
          </div>
          
          {/* Decorative cricket elements */}
          <motion.div 
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: 20, rotate: -15 }}
            animate={{ opacity: 0.15, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M9 8.5h6M8 12h8M9 15.5h6" />
            </svg>
          </motion.div>
        </motion.section>

        {/* Features Section - Improved alignment */}
        <section className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="text-cricket-green" size={24} />
                    <span>Shot Library</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-sm text-muted-foreground mb-4">Access cricket shots with key technical pointers.</p>
                  <Button asChild className="w-full mt-auto bg-cricket-green hover:bg-cricket-green/90 text-white">
                    <Link to="/shots">Browse</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="text-cricket-green" size={24} />
                    <span>Practice Drills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-sm text-muted-foreground mb-4">Find drills to improve your technique.</p>
                  <Button asChild className="w-full mt-auto bg-cricket-green hover:bg-cricket-green/90 text-white">
                    <Link to="/drills">Train</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <PenSquare className="text-cricket-green" size={24} />
                    <span>Track Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-sm text-muted-foreground mb-4">Record your progress and save notes.</p>
                  <Button asChild className="w-full mt-auto bg-cricket-green hover:bg-cricket-green/90 text-white">
                    <Link to="/my-notes">Notes</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Get Started - Simplified */}
        <motion.section 
          className="bg-cricket-willow p-6 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4 text-white">Ready to improve your game?</h2>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-cricket-willow hover:bg-cricket-cream"
          >
            {user ? (
              <Link to="/shots">Start Now</Link>
            ) : (
              <Link to="/auth">Sign In</Link>
            )}
          </Button>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Index;
