import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projectsData = [
  {
    id: 1,
    title: "Modern Residential Home",
    category: "Residential",
    image: project1,
    description: "Contemporary 3-bedroom home with sustainable materials and energy-efficient design.",
    completionDate: "2024"
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial", 
    image: project2,
    description: "5-story office building with modern glass facade and steel construction.",
    completionDate: "2023"
  },
  {
    id: 3,
    title: "Luxury Kitchen Renovation",
    category: "Renovation",
    image: project3,
    description: "Complete kitchen remodel featuring marble countertops and premium appliances.",
    completionDate: "2024"
  },
  {
    id: 4,
    title: "Industrial Warehouse",
    category: "Industrial",
    image: project4,
    description: "50,000 sq ft warehouse facility with advanced structural engineering.",
    completionDate: "2023"
  },
  {
    id: 5,
    title: "Master Bathroom Suite",
    category: "Renovation",
    image: project5,
    description: "Spa-like bathroom renovation with luxury finishes and modern fixtures.",
    completionDate: "2024"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of exceptional construction projects, showcasing our expertise across residential, commercial, and industrial developments.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projectsData.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full overflow-hidden hover:shadow-ultraviolet transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.completionDate}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;