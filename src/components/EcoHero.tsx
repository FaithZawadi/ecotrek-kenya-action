import { Button } from "@/components/ui/button";
import { Leaf, Target, Smartphone } from "lucide-react";

const EcoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-accent/20 to-primary/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo & Navigation */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">EcoTrek</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Target className="h-4 w-4 mr-2" />
              Track My Impact
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Smartphone className="h-4 w-4 mr-2" />
              Download App
            </Button>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Learn. <span className="text-primary">Act.</span>{" "}
            <span className="text-accent">Earn.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of African youth planting trees, cleaning up plastic, 
            and saving water — all while earning real-world rewards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-full"
            >
              Start Learning
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 rounded-full border-primary/30 hover:bg-primary/10"
            >
              How It Works
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 rounded-full bg-primary/30 blur-xl" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-40 h-40 rounded-full bg-accent/30 blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default EcoHero;