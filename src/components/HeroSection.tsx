import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Smooth Emergence */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover animate-emerge"
        style={{ 
          backgroundImage: `url(/lovable-uploads/09c7a0e8-fe0e-47ce-954a-0b7297ca8f5d.png)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center container-width section-padding">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Quantifying the{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
            Unseen
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-accent-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          India's first youth-led index tracking the 90% working in the informal economy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect smooth-transition"
          >
            Contact Us
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('about')}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold smooth-transition"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;