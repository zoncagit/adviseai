
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Eye, MousePointer, Target, Plus } from "lucide-react";

export function DashboardContent() {
  const metrics = [
    {
      title: "Total Spend",
      value: "$12,847",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Impressions",
      value: "2.4M",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Clicks",
      value: "48.2K",
      change: "-2.1%",
      trend: "down",
      icon: MousePointer,
    },
    {
      title: "Conversions",
      value: "1,247",
      change: "+15.3%",
      trend: "up",
      icon: Target,
    },
  ];

  const campaigns = [
    { name: "Holiday Sale Campaign", status: "Active", spend: "$2,847", roas: "4.2x", performance: "up" },
    { name: "Brand Awareness Q4", status: "Active", spend: "$1,923", roas: "3.1x", performance: "up" },
    { name: "Product Launch", status: "Paused", spend: "$4,251", roas: "2.8x", performance: "down" },
    { name: "Retargeting Campaign", status: "Active", spend: "$891", roas: "5.7x", performance: "up" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Monitor your campaign performance and insights</p>
        </div>
        <Button className="gradient-primary text-white font-semibold px-6">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="metric-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{metric.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                <div className="flex items-center mt-2">
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                  )}
                  <span className={`text-sm ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <metric.icon className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Campaigns Table */}
      <Card className="metric-card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Active Campaigns</h2>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 text-sm font-medium py-3">Campaign Name</th>
                  <th className="text-left text-gray-400 text-sm font-medium py-3">Status</th>
                  <th className="text-left text-gray-400 text-sm font-medium py-3">Spend</th>
                  <th className="text-left text-gray-400 text-sm font-medium py-3">ROAS</th>
                  <th className="text-left text-gray-400 text-sm font-medium py-3">Performance</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-4 text-white font-medium">{campaign.name}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.status === "Active" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="py-4 text-gray-300">{campaign.spend}</td>
                    <td className="py-4 text-white font-medium">{campaign.roas}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        {campaign.performance === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                        )}
                        <span className={`text-sm ${
                          campaign.performance === "up" ? "text-green-400" : "text-red-400"
                        }`}>
                          {campaign.performance === "up" ? "Good" : "Needs Attention"}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
