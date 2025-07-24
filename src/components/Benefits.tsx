
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Heart, Dumbbell, Smartphone } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Eat & Live Healthier",
      description: "Build better habits without the complexity."
    },
    {
      icon: Heart,
      title: "Boost Energy & Mood",
      description: "Feel better, stay consistent."
    },
    {
      icon: Dumbbell,
      title: "Stay Motivated",
      description: "Make progress that lasts."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Ready to Try CTA */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Start your journey</h3>
          <p className="text-xl text-gray-600 mb-8">Join those already achieving their goals with Calio</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-2xl flex items-center justify-center shadow-lg p-4 mb-3 mx-auto" style={{ backgroundColor: '#F9E5C4' }}>
                <img 
                  src="/lovable-uploads/8b55b7c0-adb2-450f-8e3f-eced8bc9aa3f.png" 
                  alt="Download Calio App - QR Code" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-sm font-medium text-gray-600">Scan to download instantly</span>
            </div>
            <div className="text-sm text-gray-500">or</div>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold text-black hover:opacity-90" style={{ backgroundColor: '#FFD326' }} asChild>
              <a href="https://apps.apple.com/gb/app/calio-ai-calorie-tracker/id6744249515" target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-5 h-5 mr-2" />
                Download on App Store
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            🎯 <span className="text-primary">Built for Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple tools. Lasting habits. Real progress.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: '#FFD326' }}>
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        
        {/* Testimonials Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl text-yellow-500">⭐</span>
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-900">5.0</span>
              <span className="text-gray-600">• 12 Reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Has helped me stay consistent",
                text: "This app has been a life saver. It's super easy to use and saves me lots of time with the barcode scanning feature! I've actually managed to stay consistent with my weight loss goals!",
                author: "Ali2023G"
              },
              {
                title: "Really accurate!",
                text: "So easy to use and the results seem super accurate. Nice to be able to scan or type in your foods!",
                author: "JMIM1996"
              },
              {
                title: "Great Food Tracker",
                text: "UI is very intuitive. Much better than other apps I have used previously",
                author: "LeytonE10"
              },
              {
                title: "Effortless",
                text: "Simplifies what can often be a complicated area with clever design and integration.",
                author: "Montserrat215"
              },
              {
                title: "Excellent UX",
                text: "Very easy to use and understand app! Benefit to my health.",
                author: "Colink1995"
              },
              {
                title: "Lovely UI",
                text: "Really easy to use",
                author: "StuartJC"
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{review.text}</p>
                  <p className="text-sm text-gray-500 font-medium">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
