
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
            <div className="relative flex justify-center gap-6 items-center">
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl flex items-center justify-center shadow-xl p-4">
                <img 
                  src="/lovable-uploads/e690cd32-97d1-40ba-a2fd-f15f5a98e90f.png" 
                  alt="Calio Logo" 
                  className="w-36 h-36 object-contain rounded-2xl shadow-2xl"
                />
              </div>
              <div className="w-48 h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl flex items-center justify-center shadow-xl p-6">
                <img 
                  src="/lovable-uploads/e05764c0-2085-436d-81d7-001013a7dfa9.png" 
                  alt="Scan QR Code" 
                  className="w-full h-full object-contain rounded-2xl bg-white p-2"
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
