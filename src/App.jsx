import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import JobSeekerRegistration from "./pages/JobSeekerRegistration";
import CorporateRegistration from "./pages/CorporateRegistration";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Link } from "react-router-dom";

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
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/job-seeker-registration" element={<JobSeekerRegistration />} />
              <Route path="/corporate-registration" element={<CorporateRegistration />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">ヒトシゴト</h3>
                  <p>革新的な人材紹介サービスを提供</p>
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
