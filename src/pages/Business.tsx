import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building2, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Business = () => {
  const benefits = [
    "Reduce healthcare costs",
    "Improve employee productivity",
    "Boost team morale",
    "Easy implementation",
    "Comprehensive reporting",
    "24/7 support"
  ];

  const features = [
    {
      icon: Users,
      title: "Team Management",
      description: "Manage nutrition programs for your entire workforce"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track engagement and health improvements across teams"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80">
            Calio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                For Businesses
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Employee Wellness Made Simple
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Boost productivity and reduce healthcare costs with Calio's comprehensive nutrition tracking platform for your workforce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/e063cb62-b1d8-4801-afed-8ded5d9b036f.png" 
                alt="Calio Business - Employee nutrition tracking" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Calio for Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade nutrition tracking with the simplicity your employees will love
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Business Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workplace Wellness?</h2>
          <p className="text-xl mb-8 opacity-90">Join leading companies using Calio for employee nutrition</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
            Contact Sales Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;