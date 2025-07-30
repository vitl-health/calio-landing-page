import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, DollarSign, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Affiliates = () => {
  const benefits = [
    "30% commission on all sales",
    "Real-time tracking dashboard",
    "Monthly payouts",
    "Marketing materials provided",
    "Dedicated support team",
    "No minimum sales required"
  ];

  const features = [
    {
      icon: DollarSign,
      title: "High Commissions",
      description: "Earn 30% on every successful referral with lifetime value"
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "Join the booming health and wellness industry"
    },
    {
      icon: Star,
      title: "Premium Product",
      description: "Promote a product you can genuinely believe in"
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Affiliate Program
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Partner with Calio
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our exclusive affiliate program and earn substantial commissions by promoting the future of nutrition tracking to your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/e063cb62-b1d8-4801-afed-8ded5d9b036f.png" 
                alt="Calio Affiliates - Partnership program" 
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Partner with Calio?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a growing network of successful affiliates earning substantial income
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-orange-600" />
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Affiliate Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-orange-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Apply to Join</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="website">Website/Social Media</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
                <div>
                  <Label htmlFor="audience">Tell us about your audience</Label>
                  <Textarea 
                    id="audience" 
                    placeholder="Describe your audience size, demographics, and engagement..."
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Previous affiliate experience</Label>
                  <Textarea 
                    id="experience" 
                    placeholder="Tell us about your experience with affiliate marketing..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button size="lg" className="w-full">Submit Application</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 opacity-90">Join our affiliate program and start monetizing your audience today</p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
            Apply Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliates;