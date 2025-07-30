import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Dumbbell, Users, Calendar, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PersonalTrainers = () => {
  const benefits = [
    "Manage multiple clients",
    "Custom nutrition plans",
    "Progress tracking",
    "Client communication tools",
    "Meal plan templates",
    "Professional reporting"
  ];

  const features = [
    {
      icon: Users,
      title: "Client Management",
      description: "Organize and track nutrition for all your clients in one place"
    },
    {
      icon: Calendar,
      title: "Meal Planning",
      description: "Create and assign custom meal plans tailored to each client"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Monitor client progress with detailed nutrition and health metrics"
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Dumbbell className="w-4 h-4" />
                For Personal Trainers
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Elevate Your Coaching
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional nutrition coaching tools that help you deliver better results for your clients. Track progress, create meal plans, and build your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  See Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/e063cb62-b1d8-4801-afed-8ded5d9b036f.png" 
                alt="Calio for Personal Trainers - Client nutrition management" 
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Professional Tools for Coaches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to provide world-class nutrition coaching to your clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Trainers Choose Calio</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Professional Plan</CardTitle>
                <div className="text-5xl font-bold text-purple-600 mb-2">£49.99</div>
                <p className="text-gray-600">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span>Up to 50 clients</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span>Unlimited meal plans</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full">Start 14-Day Free Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Coaching?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of trainers already using Calio to grow their business</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalTrainers;