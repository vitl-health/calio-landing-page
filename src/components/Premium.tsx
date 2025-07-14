
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Crown, Camera, QrCode, BarChart3 } from "lucide-react";

const Premium = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-300 text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🔓 <span className="text-black">Try Premium Free</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto font-medium">
            Start with a 3-day free trial and unlock premium features. Cancel anytime—no strings attached.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/15 backdrop-blur-lg border-black/20 hover:bg-black/20 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mx-auto mb-4">
                <Crown className="w-8 h-8 text-yellow-400" />
              </div>
              <CardTitle className="text-3xl font-bold text-black mb-2">Premium Features</CardTitle>
              <p className="text-black/80 font-medium">Everything you need for advanced diet tracking</p>
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-black/20 rounded-full mb-4">
                      <feature.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-black/80 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-black/20 pt-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-black mb-2">Free</div>
                  <div className="text-black/80 font-medium">3-day trial, then £9.99/month</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full font-semibold">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-full font-semibold">
                    Learn More
                  </Button>
                </div>
                
                <div className="flex justify-center gap-6 mt-8 text-sm text-black/80 font-medium">
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
