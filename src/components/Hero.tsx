
import { Button } from "@/components/ui/button";
import { Smartphone, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-400 text-black">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            {/* Vitl Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <img 
                src="/lovable-uploads/68027c80-97ba-49b6-b32b-b85b5769711f.png" 
                alt="Vitl Logo" 
                className="h-20 w-auto rounded-lg shadow-lg"
              />
            </div>
            
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
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/fc3c293c-5398-49df-a5f3-f1b1b8b94f52.png" 
                  alt="Calio App - So easy to use, I finally feel on track!" 
                  className="w-full max-w-[300px] mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
