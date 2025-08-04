import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplet, BookOpen, Camera, Trophy, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Water is Life",
    content: "Discover why water conservation matters and how it affects communities in Africa.",
    icon: <Droplet className="h-8 w-8 text-primary" />,
    color: "bg-sky-100",
  },
  {
    title: "Save Every Drop",
    content: "Learn practical techniques to conserve water at home, school, and in your community.",
    icon: <BookOpen className="h-8 w-8 text-secondary" />,
    color: "bg-cyan-100",
  },
  {
    title: "Water Action Project",
    content: "Start a water-saving initiative and track your water conservation achievements!",
    icon: <Camera className="h-8 w-8 text-accent" />,
    color: "bg-teal-100",
  },
];

export default function WaterConservation() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <Link to="/learn" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Topics
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/learn" className="hover:text-primary transition-colors">Learn</Link>
          <span>/</span>
          <span className="text-primary">Water Conservation</span>
        </div>
      </div>

      <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-primary mb-4"
      >
        💧 Water Conservation
      </motion.h2>

      <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
        Every drop counts! Learn how to protect and conserve our most precious resource.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {lessons.map((lesson, index) => (
          <motion.div
            key={index}
            className={`rounded-xl shadow-md p-6 ${lesson.color}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 animate-pulse">
              {lesson.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {lesson.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {lesson.content}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-16"
      >
        <Button className="bg-primary text-white text-lg px-8 py-4 rounded-full hover:bg-primary/90">
          I've Done This! 🌟
        </Button>

        <div className="mt-6 text-muted-foreground text-sm">
          Your Progress: <span className="font-bold text-primary">40%</span> complete
        </div>
      </motion.div>
      </div>
    </section>
  );
}