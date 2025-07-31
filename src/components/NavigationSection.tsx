import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Trophy, Dumbbell, Users } from "lucide-react";
import { Link } from "react-router-dom";

const NavigationSection = () => {
  const pages = [
    {
      title: "Calio for Business",
      description: "Employee wellness programs with nutrition tracking",
      icon: Building2,
      href: "/business",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      title: "Calio for Sports Clubs",
      description: "Team nutrition management for athletic performance",
      icon: Trophy,
      href: "/sports-clubs",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      title: "Calio for Personal Trainers",
      description: "Professional tools for client nutrition coaching",
      icon: Dumbbell,
      href: "/personal-trainers",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "Affiliates Program",
      description: "Join our partner network and earn with Calio",
      icon: Users,
      href: "/affiliates",
      color: "bg-orange-50 hover:bg-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Calio for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Calio can be tailored for your specific requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pages.map((page, index) => (
            <Card key={index} className={`${page.color} border-0 transition-all duration-300 hover:shadow-lg`}>
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4 shadow-sm">
                  <page.icon className="w-8 h-8 text-gray-700" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{page.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 text-sm">{page.description}</p>
                <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <Link to={page.href} onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;