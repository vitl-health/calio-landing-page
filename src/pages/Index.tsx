
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Premium from "@/components/Premium";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Hero />
      <Features />
      <Benefits />
      <Premium />
      <Footer />
    </div>
  );
};

export default Index;
