
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Heart, Dumbbell } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Just Getting Started",
      description: "Perfect for beginners who want to understand their eating habits without overwhelming complexity."
    },
    {
      icon: Heart,
      title: "Getting Back on Track",
      description: "Ideal for those returning to healthy eating with tools that make consistency achievable."
    },
    {
      icon: Dumbbell,
      title: "Building Momentum",
      description: "Designed to help you maintain progress and build lasting healthy habits over time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🎯 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Built for Real-Life Diet Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just getting started or getting back on track, Calio is made to help you build momentum and stay consistent—without overwhelming features or fluff.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Calio?</h3>
              <div className="space-y-4">
                {[
                  "Save time with AI-powered food recognition",
                  "Stay consistent with flexible logging options",
                  "Build lasting habits without overwhelming features",
                  "Track progress with clear, actionable insights"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <p className="text-gray-600 font-medium">Simple. Smart. Effective.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
