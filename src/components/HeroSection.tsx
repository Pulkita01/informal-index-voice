import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-oxford-blue/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center container-width section-padding">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-eggshell leading-tight">
          Quantifying the{" "}
          <span className="text-transparent bg-gradient-to-r from-blood-red to-glaucous bg-clip-text">
            Unseen
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-glaucous mb-12 max-w-4xl mx-auto leading-relaxed">
          India's first youth-led index tracking the 90% working in the informal economy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-blood-red hover:bg-blood-red/80 text-eggshell px-8 py-4 text-lg font-semibold glow-effect smooth-transition"
          >
            Join Us
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('about')}
            className="border-glaucous text-glaucous hover:bg-glaucous hover:text-oxford-blue px-8 py-4 text-lg font-semibold smooth-transition"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-glaucous rounded-full flex justify-center">
          <div className="w-1 h-3 bg-glaucous rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;