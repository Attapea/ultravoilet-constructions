import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern construction site with steel beams and ultraviolet lighting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/90 via-slate-dark/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle className="w-5 h-5 text-construction-orange" />
            <span className="text-construction-orange font-medium tracking-wide uppercase text-sm">Premium Construction Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Building the Future with 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Precision</span>
          </h1>
          
          <p className="text-xl text-slate-light mb-8 leading-relaxed">
            Ultraviolet Construction delivers exceptional craftsmanship and innovative solutions 
            for residential, commercial, and industrial projects. From concept to completion, 
            we build beyond expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-light text-primary-foreground hover:bg-primary-foreground hover:text-slate-dark">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-slate-light text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-slate-light text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-slate-light text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;