import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, Users, TreePine, Droplet, Recycle, Target, Star, Trophy, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const leadershipLevels = [
  {
    level: "Eco Explorer",
    icon: <TreePine className="h-8 w-8 text-green-600" />,
    points: "0-100",
    description: "Just starting your climate journey",
    benefits: ["Access to basic lessons", "Start tracking impact", "Join community"]
  },
  {
    level: "Climate Champion",
    icon: <Target className="h-8 w-8 text-blue-600" />,
    points: "101-500",
    description: "Taking consistent climate action",
    benefits: ["Advanced challenges", "Mentor newcomers", "Special recognition"]
  },
  {
    level: "Planet Guardian",
    icon: <Award className="h-8 w-8 text-purple-600" />,
    points: "501-1000",
    description: "Leading by example in your community",
    benefits: ["Leadership workshops", "School partnerships", "Impact certificates"]
  },
  {
    level: "Climate Leader",
    icon: <Crown className="h-8 w-8 text-yellow-600" />,
    points: "1000+",
    description: "Inspiring climate action across Africa",
    benefits: ["Lead initiatives", "Meet global leaders", "Exclusive rewards"]
  }
];

const pathways = [
  {
    icon: <TreePine className="h-6 w-6 text-green-600" />,
    title: "Reforestation Leader",
    description: "Lead tree planting initiatives in your community",
    actions: ["Plant 50+ trees", "Organize planting events", "Track forest growth"]
  },
  {
    icon: <Droplet className="h-6 w-6 text-blue-600" />,
    title: "Water Champion",
    description: "Become an expert in water conservation",
    actions: ["Complete water audits", "Teach water saving", "Install rain collectors"]
  },
  {
    icon: <Recycle className="h-6 w-6 text-purple-600" />,
    title: "Waste Warrior",
    description: "Master waste reduction and recycling",
    actions: ["Reduce plastic use", "Create recycled art", "Organize clean-ups"]
  },
  {
    icon: <Users className="h-6 w-6 text-orange-600" />,
    title: "Community Mobilizer",
    description: "Inspire others to take climate action",
    actions: ["Mentor 10+ people", "Host climate events", "Share success stories"]
  }
];

export default function ClimateLeaderPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 py-16 px-4">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Climate Leadership</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Crown className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Become a Climate Leader 🌍
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of young Africans making a real difference. Choose your leadership path, 
            grow your impact, and inspire others to protect our planet.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            Leadership Program
          </Badge>
        </motion.div>

        {/* Leadership Levels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Your Leadership Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{level.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{level.level}</h3>
                    <Badge variant="outline" className="mb-3">
                      {level.points} EcoPoints
                    </Badge>
                    <p className="text-muted-foreground text-sm mb-4">{level.description}</p>
                    <div className="space-y-2">
                      {level.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Pathways */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Choose Your Leadership Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {pathway.icon}
                      <h3 className="text-xl font-bold text-foreground">{pathway.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{pathway.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Actions:</h4>
                      {pathway.actions.map((action, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <Trophy className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto border border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Lead the Change?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start your leadership journey today. Every action you take creates ripples of positive 
                change across your community and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/learn">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <TreePine className="h-5 w-5 mr-2" />
                    Start Learning
                  </Button>
                </Link>
                <Link to="/challenges">
                  <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                    <Target className="h-5 w-5 mr-2" />
                    Take Challenges
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}