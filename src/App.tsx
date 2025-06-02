
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
            <Route path="/shots" element={<Navigate to="/" replace />} />
            <Route path="/shot/:shotId" element={<ShotDetailPage />} />
            <Route path="/train" element={<TrainPage />} />
            <Route path="/field" element={<FieldingPositionsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShotProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
