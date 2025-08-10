import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Our Work", id: "work" },
    { label: "Partnerships", id: "partnerships" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-oxford-blue border-t border-glaucous/20">
      <div className="container-width py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 pr-8">
            <h3 className="text-2xl font-bold text-eggshell mb-4">
              Informal Economy Index
            </h3>
            <p className="text-glaucous leading-relaxed mb-6 max-w-md">
              India's first youth-led index tracking the 90% working in the informal economy. 
              Making the unseen visible through data, education, and community empowerment.
            </p>
            <div className="flex gap-4">
              <button 
                className="w-10 h-10 bg-federal-blue rounded-lg flex items-center justify-center hover:bg-blood-red smooth-transition"
                onClick={() => window.open('#', '_blank')}
              >
                <Instagram className="w-5 h-5 text-eggshell" />
              </button>
              <button 
                className="w-10 h-10 bg-federal-blue rounded-lg flex items-center justify-center hover:bg-blood-red smooth-transition"
                onClick={() => window.open('mailto:contact@informaleconomyindex.org')}
              >
                <Mail className="w-5 h-5 text-eggshell" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-4">
            <h4 className="text-lg font-semibold text-eggshell mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-glaucous hover:text-eggshell smooth-transition"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-4">
            <h4 className="text-lg font-semibold text-eggshell mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blood-red" />
                <span className="text-glaucous text-sm">contact@informaleconomyindex.org</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blood-red" />
                <span className="text-glaucous text-sm">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glaucous/20 mt-12 pt-8 text-center">
          <p className="text-glaucous text-sm">
            © 2024 Informal Economy Index. All rights reserved. Built with passion for social impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;