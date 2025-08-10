import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-oxford-blue pb-32">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-glaucous max-w-3xl mx-auto leading-relaxed">
            Ready to join the movement? Get in touch with us to learn more about our work or to volunteer.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-federal-blue border-glaucous/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-eggshell">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-oxford-blue border-glaucous/30 text-eggshell placeholder:text-glaucous focus:border-blood-red"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-oxford-blue border-glaucous/30 text-eggshell placeholder:text-glaucous focus:border-blood-red"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-oxford-blue border-glaucous/30 text-eggshell placeholder:text-glaucous focus:border-blood-red resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blood-red hover:bg-blood-red/80 text-eggshell font-semibold py-3 glow-effect smooth-transition"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-federal-blue border-glaucous/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blood-red/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-blood-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eggshell">Follow Us</h3>
                    <p className="text-glaucous">Stay updated with our latest work</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-glaucous text-glaucous hover:bg-glaucous hover:text-oxford-blue smooth-transition"
                  onClick={() => window.open('#', '_blank')}
                >
                  @InformalEconomyIndex
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-federal-blue border-glaucous/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blood-red/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blood-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eggshell">Email Us</h3>
                    <p className="text-glaucous">Direct communication</p>
                  </div>
                </div>
                <p className="text-eggshell font-mono">contact@informaleconomyindex.org</p>
              </CardContent>
            </Card>
            
            <Card className="bg-federal-blue border-glaucous/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blood-red/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blood-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eggshell">Based in</h3>
                    <p className="text-glaucous">Working across India</p>
                  </div>
                </div>
                <p className="text-eggshell">India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;