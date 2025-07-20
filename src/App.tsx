import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BankDetail from "./pages/BankDetail";
import NotFound from "./pages/NotFound";
import CountriesPage from "./pages/CountriesPage";
import LoansPage from "./pages/LoansPage";
import ConsultanciesPage from "./pages/ConsultanciesPage";
import PackingGuidePage from "./pages/PackingGuidePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/consultancies" element={<ConsultanciesPage />} />
          <Route path="/packing-guide" element={<PackingGuidePage />} />
          <Route path="/bank/:bankId" element={<BankDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
