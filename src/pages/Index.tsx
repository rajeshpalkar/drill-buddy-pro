
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { BookOpen, PenSquare, Play } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 bg-cricket-green text-white rounded-lg overflow-hidden">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Master Your Cricket Technique
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Break down your shots, track your progress, and get personalized drills 
              to take your cricket game to the next level.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-cricket-green hover:bg-cricket-cream">
                <Link to="/shots">Explore Shot Library</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-cricket-green/80">
                <Link to="/my-notes">My Progress</Link>
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4">
            <BookOpen size={240} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">How DrillBuddy Helps You Improve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-cricket-green" size={24} />
                  <span>Shot Library</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access a comprehensive library of cricket shots with key technical pointers, common mistakes, and tutorial videos.</p>
                <Button asChild className="w-full mt-4 bg-cricket-green hover:bg-cricket-green/90">
                  <Link to="/shots">Browse Shots</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="text-cricket-green" size={24} />
                  <span>Practice Drills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover targeted drills designed to address specific weaknesses and improve your technique systematically.</p>
                <Button asChild className="w-full mt-4 bg-cricket-green hover:bg-cricket-green/90">
                  <Link to="/drills">View Drills</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PenSquare className="text-cricket-green" size={24} />
                  <span>Track Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Record your sessions, track improvement, add personal notes, and save helpful videos for future reference.</p>
                <Button asChild className="w-full mt-4 bg-cricket-green hover:bg-cricket-green/90">
                  <Link to="/my-notes">My Notes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="bg-cricket-willow text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Game?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Start by exploring our shot library, analyzing your technique, 
            and following the recommended drills tailored to your needs.
          </p>
          <Button asChild size="lg" className="bg-white text-cricket-willow hover:bg-cricket-cream">
            <Link to="/shots">Get Started Now</Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
