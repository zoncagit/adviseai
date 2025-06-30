
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface PricingSectionProps {
  onGetStarted: () => void;
}

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "Perfect for getting started",
    features: [
      "Connect 1 ad account",
      "Basic optimization insights", 
      "7-day data history",
      "Email support"
    ],
    buttonText: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$49", 
    period: "/per month",
    description: "For growing businesses",
    features: [
      "Connect 5 ad accounts",
      "Advanced AI optimization",
      "90-day data history", 
      "Ask AI feature",
      "Priority support",
      "Custom reports"
    ],
    buttonText: "Start Free Trial",
    popular: true
  },
  {
    name: "Business",
    price: "$149",
    period: "/per month", 
    description: "For agencies and enterprises",
    features: [
      "Unlimited ad accounts",
      "White-label reports",
      "1-year data history",
      "API access",
      "Dedicated account manager",
      "Custom integrations"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

const PricingSection = ({ onGetStarted }: PricingSectionProps) => {
  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Simple, Transparent <span className="text-blue-400">Pricing</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Choose the perfect plan for your business. Start free and upgrade as you grow.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative metric-card ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="gradient-primary px-4 py-2 rounded-full text-white text-sm font-semibold">
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={onGetStarted}
                className={`w-full py-3 font-semibold ${
                  plan.popular 
                    ? 'gradient-primary text-white hover:opacity-90' 
                    : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12 text-gray-400">
        <p>All plans include 14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default PricingSection;
