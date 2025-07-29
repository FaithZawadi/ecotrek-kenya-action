import { Book, Leaf, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Book,
    title: "Learn",
    description:
      "Access bite-sized lessons on climate topics like tree planting, water conservation, and waste management."
  },
  {
    icon: Leaf,
    title: "Act",
    description:
      "Take simple real-world actions such as planting trees, reducing plastic, or saving water — and document your impact."
  },
  {
    icon: Gift,
    title: "Earn",
    description:
      "Receive points for every action you complete. Redeem them for rewards like airtime, school supplies, or recognition."
  }
];

export default function HowItWorksPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-amber-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-primary"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          EcoTrek makes it simple to take climate action and get rewarded. Here’s how you can join the movement:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link to="/learn">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-full"
              >
                Start Learning
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
