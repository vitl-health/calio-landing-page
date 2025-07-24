
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Mail, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F9E5C4' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black font-sofia">
            Ready to make diet tracking simple and effective?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 font-sofia">
            Download Calio today and take the first step toward your goals. 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold text-black hover:opacity-90 font-sofia" style={{ backgroundColor: '#FFD326' }} asChild>
              <a href="https://apps.apple.com/gb/app/calio-ai-calorie-tracker/id6744249515" target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for iOS
              </a>
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold text-black hover:opacity-90 font-sofia" style={{ backgroundColor: '#FFD326' }} asChild>
              <a href="https://apps.apple.com/gb/app/calio-ai-calorie-tracker/id6744249515" target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for Android
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t pt-12" style={{ borderColor: '#E0E0E0' }}>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/lovable-uploads/b1c81fe2-6349-4efd-9b4a-df861045c6eb.png" 
                  alt="Calio Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-2xl font-bold text-black font-sofia">
                  Calio by Vitl
                </h3>
              </div>
              <p className="text-gray-700 mb-4 font-sofia">
                Log your meals in seconds with our AI-powered diet tracking app to reach your goals. Snap a photo, scan or type to track your diet and get smart calorie and nutritional insights, instantly!
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-300 text-gray-700">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-300 text-gray-700">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-300 text-gray-700">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-black font-sofia">Product</h4>
              <ul className="space-y-2 text-gray-700 font-sofia">
                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Premium</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-black font-sofia">Company</h4>
              <ul className="space-y-2 text-gray-700 font-sofia">
                <li><a href="#" className="hover:text-black transition-colors">About Vitl</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8" style={{ borderColor: '#E0E0E0' }}>
            <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#F0F0F0' }}>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#FFD326' }} />
                <div>
                  <h4 className="font-semibold mb-2 text-black font-sofia">🛡 Disclaimer</h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-sofia">
                    Calio by Vitl does not provide medical advice. Nutritional information is for general reference only. 
                    Always consult with a healthcare professional before making significant dietary changes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-600 text-sm font-sofia">
              <p>&copy; 2024 Vitl. All rights reserved. Calio is a trademark of Vitl.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
