
import { Button } from "@/components/ui/button";
import { Smartphone, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-300 text-black">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <span className="text-sm opacity-80 font-medium">Trusted by 10k+ users</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Reach your</span>
              <span className="block text-black">
                goals faster
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl font-medium">
              Log your meals in seconds with our AI-powered diet tracking app to reach your goals. Snap a photo, scan or type to track your diet and get smart calorie and nutritional insights, instantly!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full font-semibold">
                <Smartphone className="w-5 h-5 mr-2" />
                Get started
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-full font-semibold">
                Let's do this, together
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm opacity-80 font-medium">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>10,000+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓ Science backed</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-auto animate-scale-in">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative bg-black rounded-3xl p-6 shadow-2xl">
                <div className="aspect-[9/16] bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                      <img 
                        src="/lovable-uploads/b1c81fe2-6349-4efd-9b4a-df861045c6eb.png" 
                        alt="Calio Logo" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center text-white mt-16">
                    <h3 className="text-xl font-bold mb-2">Calio</h3>
                    <p className="text-sm opacity-75 mb-8">AI-powered diet tracking</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <span className="text-black text-sm">📷</span>
                        </div>
                        <div>
                          <div className="font-medium">Photos</div>
                          <div className="text-xs opacity-75">Snap a photo to log meals</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <span className="text-black text-sm">📊</span>
                        </div>
                        <div>
                          <div className="font-medium">Smart Insights</div>
                          <div className="text-xs opacity-75">Get instant calorie estimates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
