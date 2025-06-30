
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, MousePointer, Eye, DollarSign } from "lucide-react";

const DashboardPreview = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Campaign Dashboard</h1>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="metric-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +15.2%
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">$12,450</div>
            <div className="text-gray-400 text-sm">Ad Spend</div>
          </div>
        </Card>
        
        <Card className="metric-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +28.1%
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">4.2x</div>
            <div className="text-gray-400 text-sm">ROAS</div>
          </div>
        </Card>
        
        <Card className="metric-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <MousePointer className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5%
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">2.8%</div>
            <div className="text-gray-400 text-sm">CTR</div>
          </div>
        </Card>
        
        <Card className="metric-card">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Eye className="w-5 h-5 text-orange-400" />
            </div>
            <div className="flex items-center text-red-400 text-sm">
              <TrendingDown className="w-4 h-4 mr-1" />
              -18.3%
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">$0.42</div>
            <div className="text-gray-400 text-sm">CPC</div>
          </div>
        </Card>
      </div>
      
      <Card className="metric-card">
        <Button className="w-full gradient-primary text-white font-semibold py-4 text-lg hover:opacity-90 transition-opacity">
          Run Optimization Audit
        </Button>
      </Card>
    </div>
  );
};

export default DashboardPreview;
