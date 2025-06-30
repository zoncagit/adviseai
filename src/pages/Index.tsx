
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNavigation } from "@/components/TopNavigation";
import { DashboardContent } from "@/components/DashboardContent";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import CampaignOverview from "@/components/CampaignOverview";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SignUpForm from "@/components/SignUpForm";

const Index = () => {
  const [currentView, setCurrentView] = useState("hero");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Landing page views
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Navigation currentView={currentView} setCurrentView={setCurrentView} />
        
        <div className="container mx-auto px-4 py-8">
          {currentView === "hero" && (
            <div className="space-y-20">
              <HeroSection onGetStarted={() => setCurrentView("signup")} />
              <FeaturesSection />
              <HowItWorksSection />
              <PricingSection onGetStarted={() => setCurrentView("signup")} />
            </div>
          )}
          
          {currentView === "dashboard" && (
            <div className="space-y-8">
              <DashboardPreview />
              <CampaignOverview />
            </div>
          )}
          
          {currentView === "pricing" && (
            <PricingSection onGetStarted={() => setCurrentView("signup")} />
          )}
          
          {currentView === "signup" && (
            <SignUpForm 
              onBack={() => setCurrentView("hero")} 
              onLogin={() => setIsLoggedIn(true)}
            />
          )}
        </div>
      </div>
    );
  }

  // Dashboard view with sidebar
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNavigation />
          <main className="flex-1 p-6">
            <DashboardContent />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
