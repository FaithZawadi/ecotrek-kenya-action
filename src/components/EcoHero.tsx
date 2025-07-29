import { Button } from "@/components/ui/button";
import { Leaf, Target, Smartphone, Info, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const EcoHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-accent/20 to-primary/30 animate-fadeIn" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo & Navigation */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary animate-spin-slow" />
            <span className="text-2xl font-bold text-primary">EcoTrek</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/about">
              <Button variant="outline" size="sm">
                <Info className="h-4 w-4 mr-2" />
                About Us
              </Button>
            </Link>
            <Link to="/learn">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Leaf className="h-4 w-4 mr-2" />
                Start Learning
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <Target className="h-4 w-4 mr-2" />
              Track My Impact
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Smartphone className="h-4 w-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="flex flex-col gap-4 mb-10 md:hidden animate-fadeIn">
            <Link to="/about">
              <Button variant="outline" size="sm" className="w-full">
                About Us
              </Button>
            </Link>
            <Link to="/learn">
              <Button size="sm" className="w-full bg-primary text-primary-foreground">
                Start Learning
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="w-full">
              Track My Impact
            </Button>
            <Button size="sm" className="w-full bg-accent text-accent-foreground">
              Download App
            </Button>
          </div>
        )}

        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Learn. <span className="text-primary">Act.</span>{" "}
            <span className="text-accent">Earn.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of African youth planting trees, cleaning up plastic, 
            and saving water — all while earning real-world rewards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/learn">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-full"
              >
                Start Learning
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 rounded-full border-primary/30 hover:bg-primary/10"
              >
                How It Works
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <div className="w-32 h-32 rounded-full bg-primary/30 blur-xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <div className="w-40 h-40 rounded-full bg-accent/30 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default EcoHero;
