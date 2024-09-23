import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Cases from "./pages/Cases";
import AdvisorRegistration from "./pages/AdvisorRegistration";
import CorporateRegistration from "./pages/CorporateRegistration";
import Alliance from "./pages/Alliance";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/advisor-registration" element={<AdvisorRegistration />} />
              <Route path="/corporate-registration" element={<CorporateRegistration />} />
              <Route path="/alliance" element={<Alliance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">めでぃかるえいど</h3>
                  <p>医療分野における革新的なソリューションを提供</p>
                </div>
                <div>
                  <Link to="/privacy-policy" className="text-white hover:text-blue-300">プライバシーポリシー</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
