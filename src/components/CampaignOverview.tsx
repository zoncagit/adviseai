
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, MousePointer, Eye, DollarSign, Target, Sparkles } from "lucide-react";

const campaigns = [
  {
    name: "Summer Sale - Meta",
    platform: "Meta",
    spend: "$3,240",
    roas: "6.2x",
    status: "Active",
    statusColor: "bg-green-500"
  },
  {
    name: "TikTok Viral Campaign", 
    platform: "TikTok",
    spend: "$1,890",
    roas: "4.8x", 
    status: "Active",
    statusColor: "bg-green-500"
  },
  {
    name: "Snapchat Stories",
    platform: "Snapchat", 
    spend: "$2,110",
    roas: "5.1x",
    status: "Paused",
    statusColor: "bg-yellow-500"
  },
  {
    name: "Black Friday Prep",
    platform: "Meta",
    spend: "$4,560", 
    roas: "7.1x",
    status: "Active", 
    statusColor: "bg-green-500"
  },
  {
    name: "Influencer Collab",
    platform: "TikTok",
    spend: "$1,240",
    roas: "3.9x", 
    status: "Review",
    statusColor: "bg-blue-500"
  }
];

const overviewMetrics = [
  {
    icon: DollarSign,
    value: "$24,890",
    label: "Total Ad Spend",
    change: "+18.2%",
    positive: true,
    color: "blue"
  },
  {
    icon: TrendingUp, 
    value: "5.8x",
    label: "ROAS",
    change: "+32.1%",
    positive: true,
    color: "green"
  },
  {
    icon: MousePointer,
    value: "3.2%", 
    label: "CTR",
    change: "+15.7%",
    positive: true,
    color: "purple"
  },
  {
    icon: Eye,
    value: "$0.38",
    label: "CPC", 
    change: "-22.4%",
    positive: true,
    color: "orange"
  }
];

const CampaignOverview = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Campaign Overview</h2>
          <p className="text-gray-400">Monitor your ad performance across all platforms</p>
        </div>
        <button className="gradient-primary px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
          <Sparkles className="w-4 h-4 mr-2 inline" />
          Run Optimization Audit
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewMetrics.map((metric, index) => (
          <Card key={index} className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg bg-${metric.color}-500/20 flex items-center justify-center`}>
                <metric.icon className={`w-5 h-5 text-${metric.color}-400`} />
              </div>
              <div className={`flex items-center text-sm ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                {metric.positive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                {metric.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="metric-card">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center mr-3">
            <Target className="w-4 h-4 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Campaign Performance</h3>
        </div>
        
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${campaign.statusColor}`}></div>
                <div>
                  <div className="text-white font-medium">{campaign.name}</div>
                  <div className="text-gray-400 text-sm">{campaign.platform}</div>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <div className="text-white font-medium">{campaign.spend}</div>
                  <div className="text-gray-400 text-sm">Spend</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-medium">{campaign.roas}</div>
                  <div className="text-gray-400 text-sm">ROAS</div>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${campaign.status === 'Active' ? 'border-green-500 text-green-400' : 
                              campaign.status === 'Paused' ? 'border-yellow-500 text-yellow-400' : 
                              'border-blue-500 text-blue-400'}`}
                >
                  {campaign.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="metric-card">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
              <Target className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Audience Insights</h3>
          </div>
          <p className="text-gray-400 text-sm">Analyze your best-performing audiences</p>
        </Card>
        
        <Card className="metric-card">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
              <Sparkles className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Creative Analysis</h3>
          </div>
          <p className="text-gray-400 text-sm">Discover winning ad creatives</p>
        </Card>
        
        <Card className="metric-card">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Budget Optimizer</h3>
          </div>
          <p className="text-gray-400 text-sm">Optimize budget allocation across campaigns</p>
        </Card>
      </div>
    </div>
  );
};

export default CampaignOverview;
