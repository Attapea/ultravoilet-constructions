import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/lovable-uploads/64b2c644-0f1c-4c6e-a706-f220434faeb2.png" alt="Ultraviolet Construction Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">Ultraviolet Construction</span>
            </div>
            <p className="text-slate-light mb-6">
              Building the future with precision, innovation, and unwavering 
              commitment to excellence since 2008.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-light hover:text-primary hover:bg-primary/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-light hover:text-primary hover:bg-primary/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-light hover:text-primary hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-slate-light">
              <li><a href="#" className="hover:text-primary transition-colors">Residential Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Industrial Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Renovation & Remodeling</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">General Contracting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-slate-light">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News & Updates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Standards</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-light">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-light">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@ultravioletconstruction.com</span>
              </div>
              <div className="text-slate-light">
                <p>123 Construction Ave</p>
                <p>Builder City, BC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-medium pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-light text-sm mb-4 md:mb-0">
            © 2024 Ultraviolet Construction. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-light">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;