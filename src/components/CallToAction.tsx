import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, BookOpen, Award, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Learn and Act?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the movement of young climate leaders making a real difference across Africa
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-full"
          >
            <Smartphone className="h-5 w-5 mr-2" />
            Download App
          </Button>
          <Link to="/learn">
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 rounded-full border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
          </Link>
          <Link to="/climate-leader">
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 rounded-full border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Award className="h-5 w-5 mr-2" />
              Become a Climate Leader
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto border border-accent/30 bg-accent/5 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <Gift className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🎁 Special Launch Bonus!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join this month's tree-planting challenge and win tree-planting kits, 
              solar lamps, and mobile airtime for you and your school!
            </p>
            <Link to="/challenges" className="inline-block">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
            >
              Join Challenge Now
            </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            📱 Works offline • 🌍 Available across East Africa • 💚 100% Free to join
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;