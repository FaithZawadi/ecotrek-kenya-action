import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Users, 
  Target, 
  Heart,
  TreePine,
  Droplets,
  ThermometerSun,
  GraduationCap,
  Globe,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const sdgGoals = [
    {
      number: "4",
      title: "Quality Education",
      description: "Ensuring inclusive and equitable quality education for all"
    },
    {
      number: "13", 
      title: "Climate Action",
      description: "Taking urgent action to combat climate change"
    },
    {
      number: "15",
      title: "Life on Land",
      description: "Protecting and restoring terrestrial ecosystems"
    }
  ];

  const climateStats = [
    {
      icon: ThermometerSun,
      stat: "1.5°C",
      description: "Temperature rise affecting East Africa",
      impact: "Increased droughts and flooding"
    },
    {
      icon: Droplets,
      stat: "400M",
      description: "People lack access to clean water",
      impact: "Water scarcity crisis across the continent"
    },
    {
      icon: TreePine,
      stat: "3.9M",
      description: "Hectares of forest lost annually",
      impact: "Accelerating deforestation in Africa"
    }
  ];

  const partners = [
    "Kenya Forest Service",
    "UNEP",
    "Green Belt Movement", 
    "Youth Climate Network",
    "African Wildlife Foundation",
    "Schools Climate Action"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">About</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 via-accent/10 to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Why We <span className="text-primary">Exist</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The story of young Africans rising to meet the climate challenge through education, action, and community
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Story: From Crisis to Action
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  In 2023, as climate change ravaged communities across Kenya, a group of young 
                  environmental activists realized that knowledge without action was powerless, 
                  and action without knowledge was dangerous.
                </p>
                <p>
                  Traditional environmental education was failing to reach Africa's youth—the 
                  very generation that would inherit the climate crisis. We needed something 
                  different: a platform that combined learning with real action, education with 
                  empowerment, and individual growth with community impact.
                </p>
                <p>
                  EcoTrek Learn was born from this vision—creating Africa's first gamified 
                  climate education platform that turns learning into tangible environmental 
                  action and rewards young people for making a difference.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={`https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                alt="African wildlife representing the natural heritage we're protecting"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Climate Challenges in Africa */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              The Climate Reality in Africa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Africa contributes less than 4% of global emissions but suffers disproportionately 
              from climate impacts. Here's what we're up against.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {climateStats.map((item, index) => (
              <Card key={index} className="border border-destructive/20 bg-destructive/5">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <div className="text-4xl font-bold text-destructive mb-2">
                    {item.stat}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.description}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={`https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                alt="Natural landscape showing environmental challenges"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                But Here's the Hope
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Africa has the youngest population in the world—60% under 25. This generation 
                  is tech-savvy, passionate about change, and ready to act.
                </p>
                <p>
                  When equipped with the right knowledge and tools, young Africans become 
                  powerful agents of environmental change in their communities.
                </p>
                <p>
                  That's exactly what EcoTrek Learn provides: the knowledge, tools, and 
                  motivation to turn climate anxiety into climate action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & SDGs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground">
                Our Mission & Vision
              </h2>
              
              <Card className="mb-6 border border-primary/20">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Mission</h3>
                  <p className="text-muted-foreground">
                    To empower African youth with climate education and tools that transform 
                    learning into measurable environmental action, creating a generation of 
                    climate leaders who protect and restore their communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-accent/20">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Vision</h3>
                  <p className="text-muted-foreground">
                    A climate-resilient Africa where every young person has the knowledge, 
                    skills, and motivation to be an environmental steward in their community.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src={`https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                alt="Innovation and bright ideas for climate action"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* SDG Alignment */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              UN Sustainable Development Goals
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our work directly contributes to achieving these critical global goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => (
              <Card key={index} className="border border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {goal.number}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">
                    SDG {goal.number}: {goal.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={`https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                alt="Team collaboration and community building"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Meet Our Founders
              </h2>
              <div className="space-y-6">
                <Card className="border border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Faith Zawadi</h3>
                        <p className="text-muted-foreground">Co-Founder & CEO</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Growing up in rural Kenya, I witnessed firsthand how climate change 
                      destroys livelihoods. But I also saw how education and community action 
                      can create miracles. EcoTrek is our way of scaling those miracles across Africa."
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Vincent Kimanzi</h3>
                        <p className="text-muted-foreground">Co-Founder & CTO</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Technology should serve humanity's greatest challenges. EcoTrek combines 
                      mobile-first design with gamification to make climate education accessible, 
                      engaging, and actionable for every young African."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Our Partners & Supporters
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Working together with leading organizations to create lasting environmental change
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partners.map((partner, index) => (
              <Card key={index} className="border border-muted hover:border-primary/30 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;