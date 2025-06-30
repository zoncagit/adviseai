import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
interface HeroSectionProps {
  onGetStarted: () => void;
}
const HeroSection = ({
  onGetStarted
}: HeroSectionProps) => {
  return <div className="text-center py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            AI-Powered
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ad Optimization
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Maximize your ROAS with advanced machine learning algorithms that analyze, 
            optimize, and scale your campaigns across all platforms automatically.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={onGetStarted} size="lg" className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:opacity-90 transition-opacity">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="text-sm text-gray-400"> 14-day free trial • No credit card required • Cancel anytime</div>
      </div>
    </div>;
};
export default HeroSection;