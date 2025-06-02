
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { BookOpen, Activity, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {/* Hero Section */}
        <motion.section 
          className="relative py-12 md:py-16 px-4 bg-cricket-green rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Drill Buddy
            </h1>
            <p className="text-lg mb-6 text-white/90 max-w-md">
              Your complete cricket training companion. Master your technique with expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-cricket-green hover:bg-cricket-cream">
                <Link to="/shots">Start Training</Link>
              </Button>
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

        {/* Features Section */}
        <section className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="flex flex-col items-center gap-2">
                    <Trophy className="text-cricket-green" size={24} />
                    <span>Shot Library</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full text-center">
                  <p className="text-sm text-muted-foreground mb-4">Master cricket shots with expert guidance</p>
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
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="flex flex-col items-center gap-2">
                    <Activity className="text-cricket-green" size={24} />
                    <span>Practice Drills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full text-center">
                  <p className="text-sm text-muted-foreground mb-4">Improve with targeted training drills</p>
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
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="flex flex-col items-center gap-2">
                    <Users className="text-cricket-green" size={24} />
                    <span>Fielding Guide</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full text-center">
                  <p className="text-sm text-muted-foreground mb-4">Learn fielding positions and strategies</p>
                  <Button asChild className="w-full mt-auto bg-cricket-green hover:bg-cricket-green/90 text-white">
                    <Link to="/fielding">Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="flex flex-col items-center gap-2">
                    <BookOpen className="text-cricket-green" size={24} />
                    <span>Techniques</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full text-center">
                  <p className="text-sm text-muted-foreground mb-4">Study technical aspects and tips</p>
                  <Button asChild className="w-full mt-auto bg-cricket-green hover:bg-cricket-green/90 text-white">
                    <Link to="/shots">Learn</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Get Started */}
        <motion.section 
          className="bg-cricket-willow p-6 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4 text-white">Ready to improve your game?</h2>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-cricket-willow hover:bg-cricket-cream"
          >
            <Link to="/shots">Start Now</Link>
          </Button>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Index;
