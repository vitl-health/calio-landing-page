
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Mail, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to make diet tracking simple and effective?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download Calio today and take the first step toward your goals. 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6 rounded-full font-semibold">
              <Smartphone className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-6 rounded-full font-semibold">
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/lovable-uploads/b1c81fe2-6349-4efd-9b4a-df861045c6eb.png" 
                  alt="Calio Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Calio by Vitl
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Log your meals in seconds with our AI-powered diet tracking app to reach your goals. Snap a photo, scan or type to track your diet and get smart calorie and nutritional insights, instantly!
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Vitl</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-500">🛡 Disclaimer</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Calio by Vitl does not provide medical advice. Nutritional information is for general reference only. 
                    Always consult with a healthcare professional before making significant dietary changes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; 2024 Vitl. All rights reserved. Calio is a trademark of Vitl.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
