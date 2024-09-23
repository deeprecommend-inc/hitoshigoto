import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import AdvisorMatching from "./pages/AdvisorMatching";
import CorporateMatching from "./pages/CorporateMatching";

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
              <Route path="/advisor-matching" element={<AdvisorMatching />} />
              <Route path="/corporate-matching" element={<CorporateMatching />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">ヒトシゴト</h3>
                  <p>あなたのスキルと経験を活かす、新しい働き方のプラットフォーム</p>
                </div>
                <div>
                  <p>お問い合わせ: 03-3275-6666</p>
                  <p>営業時間: 平日 9:00-18:00</p>
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
