
import { Home, BarChart3, Target, Settings, Users, TrendingUp, FileText, Zap } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: Home, isActive: true },
  { title: "Campaigns", icon: Target },
  { title: "Analytics", icon: BarChart3 },
  { title: "Audiences", icon: Users },
  { title: "Performance", icon: TrendingUp },
  { title: "Creative Studio", icon: Zap },
  { title: "Reports", icon: FileText },
  { title: "Settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/10 bg-slate-900/90 backdrop-blur-md">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-white">AdOptimize AI</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`text-gray-300 hover:text-white hover:bg-white/10 ${
                      item.isActive ? 'bg-blue-600/20 text-blue-400 border-r-2 border-blue-400' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
