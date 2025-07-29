import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UploadCloud, Leaf, Droplet, Recycle } from "lucide-react";
import { useState } from "react";

const challenges = [
  {
    title: "Plant a Tree",
    description: "Plant a tree in your community and share a photo of your work!",
    points: 15,
    icon: <Leaf className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Home Water Audit",
    description: "Check for water leaks and install water-saving taps or buckets.",
    points: 10,
    icon: <Droplet className="h-8 w-8 text-sky-500" />,
  },
  {
    title: "Recycled Art Project",
    description: "Create something cool using plastic bottles, boxes, or cans!",
    points: 12,
    icon: <Recycle className="h-8 w-8 text-yellow-500" />,
  },
];

export default function ChallengesPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-muted">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-primary mb-6"
      >
        🎯 Eco Challenges
      </motion.h2>

      <p className="text-center text-muted-foreground mb-12">
        Take part in real-life actions and earn EcoPoints!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 animate-pulse">{c.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{c.description}</p>
            <p className="font-bold text-green-700 mb-4">+{c.points} EcoPoints</p>
            <Button onClick={handleSubmit} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Take Challenge
            </Button>
          </motion.div>
        ))}
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white border px-6 py-4 rounded-xl shadow-lg flex items-center gap-3"
        >
          <UploadCloud className="h-6 w-6 text-green-500 animate-bounce" />
          <p className="text-sm text-foreground">
            Great job! Don’t forget to submit your photo or proof to earn your EcoPoints.
          </p>
        </motion.div>
      )}
    </section>
  );
}
