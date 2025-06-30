
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Crown, Camera, QrCode, BarChart3 } from "lucide-react";

const Premium = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🔓 <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Try Premium Free</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Start with a 3-day free trial and unlock premium features. Cancel anytime—no strings attached.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-2">Premium Features</CardTitle>
              <p className="text-white/80">Everything you need for advanced diet tracking</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Camera,
                    title: "Full Photo-Based Meal Scanning",
                    description: "Instantly recognize and log any food from photos"
                  },
                  {
                    icon: QrCode,
                    title: "Barcode Scanner",
                    description: "Scan packaged foods for instant nutritional data"
                  },
                  {
                    icon: BarChart3,
                    title: "Advanced Macro Breakdowns",
                    description: "Detailed protein, carbs, and fat tracking with insights"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/20 pt-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-white mb-2">Free</div>
                  <div className="text-white/80">3-day trial, then $4.99/month</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full font-semibold">
                    Learn More
                  </Button>
                </div>
                
                <div className="flex justify-center gap-6 mt-8 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Cancel Anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Premium;
