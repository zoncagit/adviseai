import { Button } from "@/components/ui/button";
import { Link, Sparkles, Rocket, Settings } from "lucide-react";
interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}
const Navigation = ({
  currentView,
  setCurrentView
}: NavigationProps) => {
  return <nav className="border-b border-border/20 backdrop-blur-md bg-background/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
            <span className="text-xl font-bold text-white">AdOptimize AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Button variant={currentView === "hero" ? "default" : "ghost"} onClick={() => setCurrentView("hero")} className="text-white hover:bg-white/10">
              <Link className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Button variant={currentView === "dashboard" ? "default" : "ghost"} onClick={() => setCurrentView("dashboard")} className="text-white hover:bg-white/10 font-normal">
              <Sparkles className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant={currentView === "pricing" ? "default" : "ghost"} onClick={() => setCurrentView("pricing")} className="text-white hover:bg-white/10">
              <Rocket className="w-4 h-4 mr-2" />
              Pricing
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
          
          <Button onClick={() => setCurrentView("signup")} className="gradient-primary text-white font-semibold px-6 hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;