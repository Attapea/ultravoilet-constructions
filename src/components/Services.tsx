import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Factory, Wrench, Hammer, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, renovations, and additions crafted with attention to detail and quality materials.",
    features: ["Custom Home Design", "Kitchen Renovations", "Bathroom Remodeling", "Home Additions"]
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial complexes built to industry standards.",
    features: ["Office Buildings", "Retail Spaces", "Restaurants", "Mixed-Use Developments"]
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description: "Warehouses, manufacturing facilities, and industrial infrastructure with precision engineering.",
    features: ["Warehouses", "Manufacturing Plants", "Distribution Centers", "Industrial Complexes"]
  },
  {
    icon: Wrench,
    title: "General Contracting",
    description: "Complete project management from planning to execution with experienced supervision.",
    features: ["Project Management", "Permit Assistance", "Quality Control", "Timeline Management"]
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with modern design and superior craftsmanship.",
    features: ["Interior Renovations", "Exterior Updates", "Space Planning", "Modern Upgrades"]
  },
  {
    icon: Shield,
    title: "Maintenance & Repair",
    description: "Ongoing maintenance and emergency repair services to protect your investment.",
    features: ["Preventive Maintenance", "Emergency Repairs", "Building Inspections", "Warranty Service"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Construction Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential homes to large-scale commercial projects, we deliver 
            exceptional construction services tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;