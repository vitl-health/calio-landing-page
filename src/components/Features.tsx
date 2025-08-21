
import { Camera, QrCode, Target, TrendingUp, Zap, Brain, Apple } from "lucide-react";
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
      icon: Apple,
      title: "Designed by our in House Nutritionists",
      description: "Leveraging deep nutrition insights from over 1.5m customers."
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#FEF6DC' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            🔍 <span className="text-foreground">Key Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to track your diet efficiently and build lasting healthy habits
          </p>
        </div>
        
        {/* Photo Demo Section */}
        <div className="rounded-3xl p-8 lg:p-12 mb-16" style={{ backgroundColor: '#F9E5C4' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Log meals & snacks in seconds</h3>
              <p className="text-xl text-muted-foreground mb-6">
                Simply point your camera at any food item and our AI instantly recognises it, 
                providing accurate nutritional information in seconds.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <span className="text-foreground">Take a photo of your food</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <span className="text-foreground">AI identifies the food automatically</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">3</span>
                  </div>
                  <span className="text-foreground">Add to your daily log instantly</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img 
                  src="/lovable-uploads/45a8d1a0-00ce-4fef-87b7-7b10b838e27f.png" 
                  alt="Vitl App - Food logging and calorie tracking interface" 
                  className="w-full max-w-[500px] mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const iconColors = ['#FFE8B3', '#C4E2D6', '#E2D5C7', '#F5C7D3', '#C7DDEE', '#F5F1C7'];
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: iconColors[index] }}
                  >
                    <feature.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
