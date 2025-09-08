import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start Your Project Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your construction vision to life? Contact us for a free 
            consultation and detailed project estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-elevation">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Get Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                    <Input placeholder="e.g., Home renovation, Commercial building" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your construction project, timeline, and any specific requirements..."
                      className="min-h-32"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Request Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">Speak with our experts</p>
                    <p className="font-medium text-primary">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">Get detailed quotes</p>
                    <p className="font-medium text-primary">info@ultravioletconstruction.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">Our main office</p>
                    <p className="font-medium text-foreground">123 Construction Ave<br />Builder City, BC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Emergency calls only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;