import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Multiple awards for construction excellence and innovation"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with decades of combined experience"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Proven track record of completing projects on schedule"
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Meticulous attention to detail in every aspect of construction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Excellence Since 2008
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ultraviolet Construction was founded with a vision to transform the construction 
              industry through innovative techniques, superior craftsmanship, and unwavering 
              commitment to client satisfaction.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of skilled artisans and engineers combines traditional building 
              expertise with cutting-edge technology to deliver projects that exceed 
              expectations and stand the test of time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Meet Our Team
              </Button>
              <Button variant="outline" size="lg">
                Our History
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;