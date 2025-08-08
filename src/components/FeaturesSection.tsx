import { Leaf, Users, GamepadIcon, Wifi } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Learn Local Climate Solutions",
      description: "Discover practical environmental solutions tailored for African communities and ecosystems.",
      detailedContent: "Our learning modules are specifically designed for Kenya and East Africa, featuring local case studies, indigenous knowledge, and climate adaptation strategies that work in our unique environment.",
      benefits: [
        "Learn from local environmental experts and community leaders",
        "Understand climate impacts specific to Kenya and East Africa",
        "Discover traditional and modern sustainable practices",
        "Access content in Swahili and English",
        "Connect with nearby environmental initiatives"
      ]
    },
    {
      icon: Users,
      title: "Take Real-Life Eco Actions",
      description: "Participate in tree planting, cleanups, and water conservation drives with your community.",
      detailedContent: "Join organized community activities or start your own eco-initiatives. Our platform connects you with local groups and provides tools to organize and track environmental actions.",
      benefits: [
        "Find nearby community cleanup events",
        "Organize tree planting in your neighborhood",
        "Learn water conservation techniques for your home",
        "Connect with like-minded environmental champions",
        "Track your personal environmental impact"
      ]
    },
    {
      icon: GamepadIcon,
      title: "Earn EcoPoints & Rewards",
      description: "Get rewarded for your environmental actions with points, badges, and real-world prizes.",
      detailedContent: "Every environmental action you take earns you EcoPoints. Accumulate points to unlock badges, climb leaderboards, and win exciting prizes from our sustainability partners.",
      benefits: [
        "Earn points for completing learning modules",
        "Get bonus points for community activities",
        "Unlock achievement badges and certificates",
        "Win eco-friendly products and vouchers",
        "Compete with friends and family"
      ]
    },
    {
      icon: Wifi,
      title: "Works Offline & Low-Data",
      description: "Access learning materials and track actions even with limited internet connectivity.",
      detailedContent: "Our app is optimized for Kenya's connectivity challenges. Download content when you have good internet, then access everything offline. All features work with minimal data usage.",
      benefits: [
        "Download lessons for offline access",
        "Low-data mode for rural and urban areas",
        "Sync progress when connected",
        "Works on basic smartphones",
        "No expensive data charges"
      ]
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
              detailedContent={feature.detailedContent}
              benefits={feature.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;