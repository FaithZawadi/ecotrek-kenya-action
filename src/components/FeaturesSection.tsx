import { Leaf, Users, GamepadIcon, Wifi } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Learn Local Climate Solutions",
      description: "Discover practical environmental solutions tailored for African communities and ecosystems."
    },
    {
      icon: Users,
      title: "Take Real-Life Eco Actions",
      description: "Participate in tree planting, cleanups, and water conservation drives with your community."
    },
    {
      icon: GamepadIcon,
      title: "Earn EcoPoints & Rewards",
      description: "Get rewarded for your environmental actions with points, badges, and real-world prizes."
    },
    {
      icon: Wifi,
      title: "Works Offline & Low-Data",
      description: "Access learning materials and track actions even with limited internet connectivity."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            🌟 Why Join EcoTrek?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a climate action leader in your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;