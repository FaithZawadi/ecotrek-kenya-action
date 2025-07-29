import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Book, TreePine, Droplet, Recycle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: <TreePine className="h-8 w-8 text-green-700" />,
    title: "Trees & Forests",
    description: "Discover how trees help the planet and how you can grow your own!",
    points: 10,
    link: "/learn/trees-forests",
  },
  {
    icon: <Recycle className="h-8 w-8 text-blue-600" />,
    title: "Plastic & Recycling",
    description: "Learn how to recycle and reduce waste in your community.",
    points: 8,
    link: "/learn/plastic-recycling",
  },
  {
    icon: <Droplet className="h-8 w-8 text-sky-500" />,
    title: "Water Conservation",
    description: "Save every drop! Simple ways to conserve water at home and school.",
    points: 7,
    link: "/learn/water-conservation",
  },
  {
    icon: <Book className="h-8 w-8 text-violet-600" />,
    title: "Climate Basics",
    description: "Understand climate change in a fun, easy way for all ages.",
    points: 9,
    link: "/learn/climate-basics",
  },
];

export default function LearnPage() {
  return (
    <section className="min-h-screen bg-muted px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-primary mb-6"
      >
        Choose a Topic to Start Learning 🌱
      </motion.h2>

      <p className="text-center text-muted-foreground mb-12">
        Earn EcoPoints as you complete lessons and unlock achievements!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {cat.description}
            </p>
            <Link to={cat.link}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                Start - {cat.points} EcoPoints
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 max-w-xl mx-auto bg-white shadow-xl rounded-xl p-6 text-center">
        <Sparkles className="h-6 w-6 text-yellow-400 mx-auto mb-2 animate-pulse" />
        <p className="text-muted-foreground">
          🌍 Fun Fact of the Day: Recycling one plastic bottle saves enough energy to power a lightbulb for 3 hours!
        </p>
      </div>
    </section>
  );
}
