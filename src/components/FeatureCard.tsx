import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detailedContent?: string;
  benefits?: string[];
}

const FeatureCard = ({ icon: Icon, title, description, detailedContent, benefits }: FeatureCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer hover:scale-105">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            <p className="text-primary text-sm mt-3 font-medium">Click to learn more →</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-muted-foreground">{detailedContent}</p>
          {benefits && benefits.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Key Benefits:</h4>
              <ul className="space-y-1">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureCard;