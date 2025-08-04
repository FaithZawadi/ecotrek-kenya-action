import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, Camera, Trophy } from "lucide-react";

const lessons = [
  {
    title: "Climate 101",
    content: "Understand climate change basics and how it affects Africa in simple terms.",
    icon: <Book className="h-8 w-8 text-primary" />,
    color: "bg-violet-100",
  },
  {
    title: "Local Solutions",
    content: "Explore how African communities are solving climate challenges with innovation.",
    icon: <BookOpen className="h-8 w-8 text-secondary" />,
    color: "bg-indigo-100",
  },
  {
    title: "Be a Climate Hero",
    content: "Take action in your community and share your climate solutions for EcoPoints!",
    icon: <Camera className="h-8 w-8 text-accent" />,
    color: "bg-purple-100",
  },
];

export default function ClimateBasics() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-primary mb-4"
      >
        🌍 Climate Basics
      </motion.h2>

      <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
        Master climate science! Understand the challenges and become part of the solution.
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
          Your Progress: <span className="font-bold text-primary">15%</span> complete
        </div>
      </motion.div>
    </section>
  );
}