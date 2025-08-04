import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, ArrowLeft, Lightbulb, CheckCircle, Upload, Trophy, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RecycledArtChallenge() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState("");

  const steps = [
    {
      title: "Collect Materials",
      description: "Gather plastic bottles, boxes, cans, or other recyclable items",
      icon: <Recycle className="h-6 w-6" />,
      completed: currentStep > 0
    },
    {
      title: "Plan Your Project",
      description: "Choose what to create - bird feeder, planter, decorative item",
      icon: <Lightbulb className="h-6 w-6" />,
      completed: currentStep > 1
    },
    {
      title: "Create Your Art",
      description: "Build your recycled masterpiece safely with adult help",
      icon: <Palette className="h-6 w-6" />,
      completed: currentStep > 2
    },
    {
      title: "Share Your Work",
      description: "Take photos and share your creative recycling project",
      icon: <Upload className="h-6 w-6" />,
      completed: currentStep > 3
    }
  ];

  const projectIdeas = [
    {
      title: "Plastic Bottle Planter",
      materials: "2L plastic bottle, soil, seeds",
      difficulty: "Easy",
      time: "30 minutes"
    },
    {
      title: "Tin Can Bird Feeder",
      materials: "Clean tin can, string, birdseed",
      difficulty: "Easy", 
      time: "20 minutes"
    },
    {
      title: "Cardboard Castle",
      materials: "Cardboard boxes, tape, paint",
      difficulty: "Medium",
      time: "1-2 hours"
    }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <Link to="/challenges" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Challenges
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/challenges" className="hover:text-primary transition-colors">Challenges</Link>
          <span>/</span>
          <span className="text-primary">Recycled Art</span>
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Challenge Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
            <Recycle className="h-10 w-10 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">🎨 Recycled Art Challenge</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Turn trash into treasure! Create something amazing using materials that would otherwise be thrown away.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
            <Trophy className="h-5 w-5 text-yellow-600" />
            <span className="font-bold text-yellow-700">Worth 12 EcoPoints</span>
          </div>
        </motion.div>

        {/* Project Ideas */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Choose Your Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectIdeas.map((project, index) => (
              <Card 
                key={index} 
                className={`border-2 cursor-pointer transition-all hover:shadow-lg ${
                  selectedProject === project.title ? 'border-yellow-500 bg-yellow-50' : 'border-muted'
                }`}
                onClick={() => setSelectedProject(project.title)}
              >
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.materials}</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                      {project.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      {project.time}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenge Steps */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Complete Your Art Project</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`border-2 transition-all ${
                  step.completed ? 'border-yellow-500 bg-yellow-50' : 
                  currentStep === index ? 'border-primary bg-primary/5' : 
                  'border-muted'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      step.completed ? 'bg-yellow-500 text-white' :
                      currentStep === index ? 'bg-primary text-primary-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {step.completed ? <CheckCircle className="h-6 w-6" /> : step.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Current Step Action */}
          <Card className="border border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              {currentStep < 4 && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Step {currentStep + 1}: {steps[currentStep].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {steps[currentStep].description}
                  </p>
                  <Button 
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {currentStep === 3 ? 'Submit Project' : 'Mark as Complete'}
                  </Button>
                </>
              )}
              
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                    Art Project Complete! 🎉
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Amazing work! You've turned waste into art and earned 12 EcoPoints.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      <Trophy className="h-4 w-4 mr-2" />
                      Claim Points
                    </Button>
                    <Link to="/challenges">
                      <Button variant="outline">
                        More Challenges
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Safety Tips */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">Safety First!</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-red-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Adult Supervision</h4>
                <p className="text-sm text-muted-foreground">Always ask an adult to help with cutting or sharp tools</p>
              </CardContent>
            </Card>
            <Card className="border border-blue-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Clean Materials</h4>
                <p className="text-sm text-muted-foreground">Wash all containers thoroughly before using them</p>
              </CardContent>
            </Card>
            <Card className="border border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Safe Tools</h4>
                <p className="text-sm text-muted-foreground">Use child-safe scissors and non-toxic materials only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}