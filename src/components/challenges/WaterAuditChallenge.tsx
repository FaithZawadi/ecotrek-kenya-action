import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, ArrowLeft, Home, CheckCircle, Upload, Trophy, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function WaterAuditChallenge() {
  const [currentStep, setCurrentStep] = useState(0);
  const [auditResults, setAuditResults] = useState({
    leaksFound: 0,
    waterSaved: 0
  });

  const steps = [
    {
      title: "Check for Leaks",
      description: "Inspect all taps, pipes, and water connections in your home",
      icon: <Droplet className="h-6 w-6" />,
      completed: currentStep > 0
    },
    {
      title: "Fix What You Can",
      description: "Tighten loose taps and report major leaks to adults",
      icon: <CheckCircle className="h-6 w-6" />,
      completed: currentStep > 1
    },
    {
      title: "Install Water Savers",
      description: "Add aerators to taps or place buckets to catch rainwater",
      icon: <Home className="h-6 w-6" />,
      completed: currentStep > 2
    },
    {
      title: "Document Results",
      description: "Take photos and record your water-saving measures",
      icon: <Upload className="h-6 w-6" />,
      completed: currentStep > 3
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
          <span className="text-primary">Water Audit</span>
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-100 rounded-full mb-6">
            <Droplet className="h-10 w-10 text-sky-500" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">💧 Home Water Audit Challenge</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Become a water detective! Find leaks and install water-saving solutions in your home.
          </p>
          <div className="flex gap-4 justify-center">
            <div className="inline-flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full">
              <Trophy className="h-5 w-5 text-sky-600" />
              <span className="font-bold text-sky-700">Worth 10 EcoPoints</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-purple-600" />
              <span className="font-bold text-purple-700">30-60 minutes</span>
            </div>
          </div>
        </motion.div>

        {/* Challenge Steps */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Complete Your Water Audit</h2>
          
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
                  step.completed ? 'border-sky-500 bg-sky-50' : 
                  currentStep === index ? 'border-primary bg-primary/5' : 
                  'border-muted'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      step.completed ? 'bg-sky-500 text-white' :
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
                    {currentStep === 3 ? 'Submit Audit' : 'Mark as Complete'}
                  </Button>
                </>
              )}
              
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-16 w-16 text-sky-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-sky-600 mb-4">
                    Audit Complete! 🎉
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Great work! You've completed your water audit and earned 10 EcoPoints.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white">
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

        {/* Water Saving Tips */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">Water Saving Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-sky-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Quick Fixes</h4>
                <p className="text-sm text-muted-foreground">Turn off taps tightly, fix dripping faucets immediately</p>
              </CardContent>
            </Card>
            <Card className="border border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Rainwater Collection</h4>
                <p className="text-sm text-muted-foreground">Place buckets outside to collect rainwater for plants</p>
              </CardContent>
            </Card>
            <Card className="border border-purple-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Smart Usage</h4>
                <p className="text-sm text-muted-foreground">Take shorter showers, reuse water when possible</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}