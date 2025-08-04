import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import  Learn from "./pages/Learn";
import  HowItWorks from "./pages/HowItWorks";
//  learn components
import TreesForest from "./components/learn/TreesForest";
import PlasticRecycling from "./components/learn/PlasticRecycling";
import WaterConservation from "./components/learn/WaterConservation";
import ClimateBasics from "./components/learn/ClimateBasics";
import NotFound from "./pages/NotFound";
import ChallengesPage from "./pages/Challanges";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          // learn components
          <Route path="/learn/trees-forests" element={<TreesForest />} />
          <Route path="/learn/plastic-recycling" element={<PlasticRecycling />} />
          <Route path="/learn/water-conservation" element={<WaterConservation />} />
          <Route path="/learn/climate-basics" element={<ClimateBasics />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          {/* ADD ALL CUSTOM ROUTES BELOW THE CATCH-ALL "*" ROUTE */}
          
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
