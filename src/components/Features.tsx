
import { Camera, QrCode, Target, TrendingUp, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "Log meals & snacks in seconds",
      description: "Snap a photo, scan a barcode, or enter meals manually - whichever fits your routine."
    },
    {
      icon: Brain,
      title: "AI-Powered Tracking",
      description: "Get instant calorie and macro estimates, no guessing or tedious entry."
    },
    {
      icon: Target,
      title: "Healthy habits that stick",
      description: "Set your daily calorie target and monitor your progress as you build better habits."
    },
    {
      icon: TrendingUp,
      title: "See Your Trends",
      description: "Review daily intake and stay on top of your eating patterns over time."
    },
    {
      icon: Zap,
      title: "So easy to use",
      description: "Designed to save time so you can focus on your goals, not your tracking."
    },
    {
      icon: QrCode,
      title: "Barcode Scanner",
      description: "Instantly log packaged foods with our advanced barcode scanning technology."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🔍 <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Key Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to track your diet efficiently and build lasting healthy habits
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
