import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Trophy, Target, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const SportsClubs = () => {
  const benefits = [
    "Optimize team performance",
    "Track athlete nutrition",
    "Meal planning for events",
    "Performance analytics",
    "Recovery optimization",
    "Custom macro targets"
  ];

  const features = [
    {
      icon: Target,
      title: "Performance Targeting",
      description: "Set specific nutrition goals for different sports and positions"
    },
    {
      icon: BarChart3,
      title: "Team Analytics",
      description: "Monitor nutrition compliance and performance correlations"
    },
    {
      icon: Users,
      title: "Coach Dashboard",
      description: "Oversee your entire team's nutrition from one central hub"
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Trophy className="w-4 h-4" />
                For Sports Clubs
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Fuel Peak Performance
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Give your athletes the nutrition edge they need to excel. Track, analyze, and optimize team nutrition for championship results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Team Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Book Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/e063cb62-b1d8-4801-afed-8ded5d9b036f.png" 
                alt="Calio Sports - Team nutrition tracking" 
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Built for Athletic Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional nutrition tools designed specifically for sports teams and athletic performance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Competitive Advantages</h2>
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
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Give Your Team the Edge?</h2>
          <p className="text-xl mb-8 opacity-90">Join winning teams already using Calio for competitive nutrition</p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
            Contact Our Sports Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsClubs;