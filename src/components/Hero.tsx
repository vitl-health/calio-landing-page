
import { Button } from "@/components/ui/button";
import { Smartphone, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm opacity-90">Trusted by 10k+ users</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Fast, Flexible</span>
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Diet Tracking
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl">
              Track your meals, calories, and macros in seconds with AI-powered food logging. 
              Stay consistent without the hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold">
                <Smartphone className="w-5 h-5 mr-2" />
                Download Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full font-semibold">
                Try Premium Free
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>10,000+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.8 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-auto animate-scale-in">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                <div className="aspect-[9/16] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-green-600" />
                    <p className="font-semibold">Calio App Preview</p>
                    <p className="text-sm opacity-75">AI-Powered Diet Tracking</p>
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
