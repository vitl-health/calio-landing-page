
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Premium from "@/components/Premium";
import NavigationSection from "@/components/NavigationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Benefits />
      <Premium />
      {/* <NavigationSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
