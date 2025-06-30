import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Briefcase, BarChart3, MessageSquare, Link, FileText, Sparkles, Rocket, Target, CheckCircle, DollarSign, TrendingUp, MousePointer, Eye } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import CampaignOverview from "@/components/CampaignOverview";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SignUpForm from "@/components/SignUpForm";
import Navigation from "@/components/Navigation";
const Index = () => {
  const [currentView, setCurrentView] = useState("hero");
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="container mx-auto px-4 py-8">
        {currentView === "hero" && <div className="space-y-8">
            <HeroSection onGetStarted={() => setCurrentView("signup")} />
            <FeaturesSection />
            <HowItWorksSection />
            <PricingSection onGetStarted={() => setCurrentView("signup")} />
          </div>}
        
        {currentView === "dashboard" && <div className="space-y-8">
            <DashboardPreview />
            <CampaignOverview />
          </div>}
        
        {currentView === "pricing" && <PricingSection onGetStarted={() => setCurrentView("signup")} />}
        
        {currentView === "signup" && <SignUpForm onBack={() => setCurrentView("hero")} />}
      </div>
    </div>;
};
export default Index;