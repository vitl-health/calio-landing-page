
import { Button } from "@/components/ui/button";
import { Smartphone, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-black">
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            {/* Logos */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              <img 
                src="/lovable-uploads/68027c80-97ba-49b6-b32b-b85b5769711f.png" 
                alt="Vitl Logo" 
                className="h-28 w-auto rounded-lg shadow-lg"
              />
              <div className="w-px h-12 bg-black/20"></div>
              <img 
                src="/lovable-uploads/e690cd32-97d1-40ba-a2fd-f15f5a98e90f.png" 
                alt="Calio Logo" 
                className="h-28 w-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <span className="text-sm opacity-80 font-medium">Trusted by users worldwide</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Reach your</span>
              <span className="block text-black">
                goals faster
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl font-medium">
              Snap, scan, succeed. AI-powered tracking made simple.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full font-semibold" asChild>
                <a href="https://apps.apple.com/gb/app/calio-ai-calorie-tracker/id6744249515" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Get started
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-full font-semibold" asChild>
                <a href="https://apps.apple.com/gb/app/calio-ai-calorie-tracker/id6744249515" target="_blank" rel="noopener noreferrer">
                  Let's do this, together
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm opacity-80 font-medium">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓ Science backed</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-auto animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Left Phone Image */}
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/b2d6f0e3-221e-4907-8c65-2e7eff6b76fe.png" 
                    alt="Calio App - Designed by nutritionists, built for you" 
                    className="w-full max-w-[280px] mx-auto rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Right Phone Image */}
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/fc3c293c-5398-49df-a5f3-f1b1b8b94f52.png" 
                    alt="Calio App - So easy to use, I finally feel on track!" 
                    className="w-full max-w-[280px] mx-auto rounded-3xl shadow-2xl"
                  />
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
