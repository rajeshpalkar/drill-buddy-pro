
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ShotProvider } from "./contexts/ShotContext";
import ShotsPage from "./pages/Shots";
import ShotDetailPage from "./pages/ShotDetail";
import TrainPage from "./pages/Train";
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
            <Route path="/" element={<ShotsPage />} />
            <Route path="/cricket-shots" element={<Navigate to="/" replace />} />
            <Route path="/shot-technique/:shotId" element={<ShotDetailPage />} />
            <Route path="/fitness-training" element={<TrainPage />} />
            <Route path="/fielding-positions" element={<FieldingPositionsPage />} />
            {/* Legacy redirects */}
            <Route path="/shots" element={<Navigate to="/" replace />} />
            <Route path="/shot/:shotId" element={<Navigate to="/shot-technique/:shotId" replace />} />
            <Route path="/train" element={<Navigate to="/fitness-training" replace />} />
            <Route path="/field" element={<Navigate to="/fielding-positions" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShotProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
