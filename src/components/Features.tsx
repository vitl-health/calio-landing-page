
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
      title: "Easy movement tracking with Wearable Integration",
      description: "Designed to save time so you can focus on your goals, not your tracking."
    },
    {
      icon: QrCode,
      title: "Designed by our in House Nutritionists",
      description: "Leveraging deep nutrition insights from over 1.5m customers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🔍 <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">Key Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to track your diet efficiently and build lasting healthy habits
          </p>
        </div>
        
        {/* Photo Demo Section */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Log meals & snacks in seconds</h3>
              <p className="text-xl text-gray-600 mb-6">
                Simply point your camera at any food item and our AI instantly recognizes it, 
                providing accurate nutritional information in seconds.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Take a photo of your food</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">AI identifies the food automatically</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Add to your daily log instantly</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full blur-3xl opacity-50"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/dc365d58-a3b6-4c3f-9e5b-e745e285b3d4.png" 
                  alt="Calio App - Log meals and snacks in seconds" 
                  className="w-full max-w-[300px] mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
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
