
import { Card } from "@/components/ui/card";
import { Link, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Link,
    title: "Connect Ad Accounts",
    description: "Securely connect your Meta, TikTok, and Snapchat ad accounts in just one click with enterprise-grade encryption.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    number: "2", 
    icon: Sparkles,
    title: "Run AI Audit",
    description: "Our advanced AI analyzes your campaigns and identifies optimization opportunities with 95% accuracy in seconds.",
    color: "from-purple-500 to-pink-400"
  },
  {
    number: "3",
    icon: Rocket,
    title: "Optimize & Scale", 
    description: "Apply AI-recommended changes to boost performance, increase ROAS, and scale your campaigns automatically.",
    color: "from-green-500 to-emerald-400"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get started in minutes and see results immediately with our AI-powered optimization platform.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection lines for larger screens */}
        <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
        <div className="hidden md:block absolute top-1/2 left-2/3 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 transform -translate-y-1/2 z-0"></div>
        
        {steps.map((step, index) => (
          <div key={index} className="relative z-10">
            <Card className="feature-card text-center group">
              <div className="space-y-6">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
