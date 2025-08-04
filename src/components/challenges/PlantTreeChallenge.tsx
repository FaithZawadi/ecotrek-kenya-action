import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, ArrowLeft, Camera, MapPin, CheckCircle, Upload, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PlantTreeChallenge() {
  const [currentStep, setCurrentStep] = useState(0);
  const [uploadedPhoto, setUploadedPhoto] = useState(false);

  const steps = [
    {
      title: "Choose Your Location",
      description: "Find a suitable spot - your school, home, or community area",
      icon: <MapPin className="h-6 w-6" />,
      completed: currentStep > 0
    },
    {
      title: "Plant Your Tree",
      description: "Dig a hole, plant the seedling, and water it well",
      icon: <Leaf className="h-6 w-6" />,
      completed: currentStep > 1
    },
    {
      title: "Document Your Work",
      description: "Take a photo showing you with your newly planted tree",
      icon: <Camera className="h-6 w-6" />,
      completed: currentStep > 2
    },
    {
      title: "Submit & Earn Points",
      description: "Upload your photo and claim your 15 EcoPoints!",
      icon: <Trophy className="h-6 w-6" />,
      completed: currentStep > 3
    }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePhotoUpload = () => {
    setUploadedPhoto(true);
    setCurrentStep(3);
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
          <span className="text-primary">Plant a Tree</span>
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Leaf className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">🌱 Plant a Tree Challenge</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Make a real impact on your environment by planting a tree in your community!
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
            <Trophy className="h-5 w-5 text-green-600" />
            <span className="font-bold text-green-700">Worth 15 EcoPoints</span>
          </div>
        </motion.div>

        {/* Challenge Steps */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">How to Complete This Challenge</h2>
          
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
                  step.completed ? 'border-green-500 bg-green-50' : 
                  currentStep === index ? 'border-primary bg-primary/5' : 
                  'border-muted'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      step.completed ? 'bg-green-500 text-white' :
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
              {currentStep < 3 && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Step {currentStep + 1}: {steps[currentStep].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {steps[currentStep].description}
                  </p>
                  {currentStep === 2 ? (
                    <Button 
                      onClick={handlePhotoUpload}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleNextStep}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Mark as Complete
                    </Button>
                  )}
                </>
              )}
              
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Challenge Complete! 🎉
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Congratulations! You've successfully planted a tree and earned 15 EcoPoints.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => setCurrentStep(4)}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
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

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">Pro Tips for Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Choose the Right Spot</h4>
                <p className="text-sm text-muted-foreground">Look for areas with good soil and adequate sunlight</p>
              </CardContent>
            </Card>
            <Card className="border border-blue-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Water Regularly</h4>
                <p className="text-sm text-muted-foreground">Young trees need consistent watering for the first few weeks</p>
              </CardContent>
            </Card>
            <Card className="border border-purple-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Get Permission</h4>
                <p className="text-sm text-muted-foreground">Always ask before planting on public or private property</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}