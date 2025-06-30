
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

interface SignUpFormProps {
  onBack: () => void;
}

const SignUpForm = ({ onBack }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-md mx-auto py-20">
      <Card className="metric-card">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Get Started</h2>
            <p className="text-gray-400">Create your account and start optimizing</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-white mb-2 block">
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-white mb-2 block">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
              />
            </div>
            
            <div>
              <Label htmlFor="confirmPassword" className="text-white mb-2 block">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
              />
            </div>
          </div>
          
          <Button className="w-full gradient-primary text-white font-semibold py-4 text-lg hover:opacity-90 transition-opacity">
            Start Free Trial
          </Button>
          
          <Button
            variant="outline"
            onClick={onBack}
            className="w-full border-white/20 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUpForm;
