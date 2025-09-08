import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/64b2c644-0f1c-4c6e-a706-f220434faeb2.png" alt="Ultraviolet Construction Logo" className="h-10 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="construction" size="sm" className="hidden md:flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-6">
                <a href="#services" className="text-foreground hover:text-primary transition-colors text-lg">Services</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors text-lg">About</a>
                <a href="#projects" className="text-foreground hover:text-primary transition-colors text-lg">Projects</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors text-lg">Contact</a>
                <Button variant="construction" size="sm" className="flex items-center space-x-2 mt-4">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;