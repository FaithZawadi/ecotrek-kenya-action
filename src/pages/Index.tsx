import EcoHero from "@/components/EcoHero";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactTracker from "@/components/ImpactTracker";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EcoHero />
      <FeaturesSection />
      <ImpactTracker />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default Index;
