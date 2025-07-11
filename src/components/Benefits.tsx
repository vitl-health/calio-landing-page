
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Heart, Dumbbell } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Eat & Live Healthier",
      description: "Perfect for beginners who want to understand their eating habits without overwhelming complexity."
    },
    {
      icon: Heart,
      title: "Boost Energy & Mood",
      description: "Ideal for those returning to healthy eating with tools that make consistency achievable."
    },
    {
      icon: Dumbbell,
      title: "Stay Motivated",
      description: "Designed to help you maintain progress and build lasting healthy habits over time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🎯 <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">What Would You Like to Accomplish?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just getting started or getting back on track, Calio is made to help you build momentum and stay consistent—without overwhelming features or fluff.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-black" />
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
                  "✓ Science backed nutrition data you can trust",
                  "✓ Tailored to your personal goals and preferences", 
                  "✓ Data you can trust from certified nutritionists",
                  "\"I finally feel on track!\" - Real user feedback"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c2764ba2-765d-48a3-b64a-70101542d441.png" 
                  alt="Calio - Sweet & effortless calorie tracking" 
                  className="w-2/3 h-2/3 object-contain rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
