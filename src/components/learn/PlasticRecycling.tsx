import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Recycle, BookOpen, Camera, Trophy } from "lucide-react";

const lessons = [
  {
    title: "Understanding Plastic",
    content: "Learn about different types of plastic and how they impact our environment.",
    icon: <Recycle className="h-8 w-8 text-primary" />,
    color: "bg-blue-100",
  },
  {
    title: "Reduce & Reuse",
    content: "Simple ways to cut plastic use and give old items a new life!",
    icon: <BookOpen className="h-8 w-8 text-secondary" />,
    color: "bg-green-100",
  },
  {
    title: "Community Cleanup",
    content: "Organize a cleanup event and document your impact for EcoPoints!",
    icon: <Camera className="h-8 w-8 text-accent" />,
    color: "bg-purple-100",
  },
];

export default function PlasticRecycling() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-primary mb-4"
      >
        ♻️ Plastic & Recycling
      </motion.h2>

      <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
        Turn waste into action! Learn how to reduce plastic pollution and create change in your community.
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
          Your Progress: <span className="font-bold text-primary">25%</span> complete
        </div>
      </motion.div>
    </section>
  );
}