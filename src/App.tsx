import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

// ✅ Import your new pages
import FinancialLiteracy from "./pages/FinancialLiteracy";
import AIBudgeting from "./pages/AIBudgeting";
import CommunitySupport from "./pages/CommunitySupport";
import ProgressTracking from "./pages/ProgressTracking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />

          {/* ✅ Custom clickable box routes */}
          <Route path="/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/ai-budgeting" element={<AIBudgeting />} />
          <Route path="/community-support" element={<CommunitySupport />} />
          <Route path="/progress-tracking" element={<ProgressTracking />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
