
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShotProvider } from "./contexts/ShotContext";
import Index from "./pages/Index";
import ShotsPage from "./pages/Shots";
import ShotDetailPage from "./pages/ShotDetail";
import DrillsPage from "./pages/Drills";
import FieldingPositionsPage from "./pages/FieldingPositions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ShotProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shots" element={<ShotsPage />} />
            <Route path="/shot/:shotId" element={<ShotDetailPage />} />
            <Route path="/drills" element={<DrillsPage />} />
            <Route path="/fielding" element={<FieldingPositionsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShotProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
