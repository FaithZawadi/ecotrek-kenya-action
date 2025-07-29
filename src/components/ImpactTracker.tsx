import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TreePine, Trash2, Droplets, TrendingUp } from "lucide-react";

const ImpactTracker = () => {
  const stats = [
    {
      icon: TreePine,
      value: "12,450+",
      label: "trees planted",
      progress: 78,
      color: "text-primary"
    },
    {
      icon: Trash2,
      value: "320",
      label: "cleanups done",
      progress: 65,
      color: "text-accent"
    },
    {
      icon: Droplets,
      value: "150+",
      label: "water conservation drives",
      progress: 52,
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      value: "5,000+",
      label: "active youth leaders",
      progress: 89,
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See What Youth Across Africa Are Doing!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact by real people in communities just like yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-full">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mb-4 text-sm">
                  {stat.label}
                </div>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            🎯 <strong>This Month's Goal:</strong> Plant 2,000 more trees across Kenya
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactTracker;