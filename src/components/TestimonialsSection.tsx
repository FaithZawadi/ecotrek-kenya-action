import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "EcoTrek helped us turn a cleanup into a school event — and we won airtime!",
      author: "Amina",
      age: 17,
      location: "Isiolo",
      initials: "AM"
    },
    {
      quote: "I've planted 50 trees this year and earned enough points for a solar lamp. Amazing!",
      author: "Joseph",
      age: 19,
      location: "Nairobi",
      initials: "JM"
    },
    {
      quote: "Our water conservation project reached 200 families thanks to EcoTrek's guidance.",
      author: "Grace",
      age: 16,
      location: "Machakos",
      initials: "GW"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Students & Teachers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from youth climate leaders across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-primary/20 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic mb-6 text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-primary/10">
                    <AvatarFallback className="text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}, {testimonial.age}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;