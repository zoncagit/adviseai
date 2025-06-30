import { Card } from "@/components/ui/card";
import { RefreshCw, Briefcase, BarChart3, MessageSquare, Link, FileText } from "lucide-react";
const features = [{
  icon: RefreshCw,
  title: "Real-time Data Sync",
  description: "Instant synchronization with all your ad platforms for up-to-the-minute insights and performance tracking.",
  color: "from-blue-500 to-cyan-400"
}, {
  icon: Briefcase,
  title: "AI Optimization Engine",
  description: "Advanced machine learning algorithms analyze your campaigns and provide smart recommendations to maximize ROAS.",
  color: "from-purple-500 to-pink-400"
}, {
  icon: BarChart3,
  title: "Advanced Analytics",
  description: "Deep insights into campaign performance with predictive analytics and actionable recommendations.",
  color: "from-green-500 to-emerald-400"
}, {
  icon: MessageSquare,
  title: "AI Marketing Assistant",
  description: "Chat with our AI to get expert answers about your campaigns, optimization strategies, and market insights.",
  color: "from-orange-500 to-yellow-400"
}, {
  icon: Link,
  title: "Multi-Platform Integration",
  description: "Seamlessly manage Meta, TikTok, Snapchat, and Google Ads campaigns from one unified dashboard.",
  color: "from-blue-500 to-indigo-400"
}, {
  icon: FileText,
  title: "Automated Reporting",
  description: "Generate and schedule beautiful, branded reports with key metrics and insights for stakeholders.",
  color: "from-teal-500 to-cyan-400"
}];
const FeaturesSection = () => {
  return <div className="py-12 ">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Everything you need to optimize your ads
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Powerful features designed to maximize your advertising 
performance and ROI</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => <Card key={index} className="feature-card group cursor-pointer">
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>)}
      </div>
    </div>;
};
export default FeaturesSection;