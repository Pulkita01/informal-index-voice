import founderPhoto from "@/assets/founder-photo.jpg";
import { Card, CardContent } from "@/components/ui/card";

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding bg-federal-blue">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-6">
            Meet the Founder
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-oxford-blue border-glaucous/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Photo */}
                <div className="relative">
                  <img 
                    src={founderPhoto} 
                    alt="IEI Founder" 
                    className="w-full h-96 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-oxford-blue/20"></div>
                </div>
                
                {/* Bio */}
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-eggshell mb-6">
                    Leading Change from the Ground Up
                  </h3>
                  
                  <div className="space-y-4 text-glaucous leading-relaxed">
                    <p>
                      Our founder recognized the critical gap in representing India's vast informal economy workforce and took action to bridge this divide through data-driven insights and community empowerment.
                    </p>
                    
                    <p>
                      With a vision to quantify the unseen and give voice to the unheard, IEI was born from the understanding that 90% of India's workforce deserves better representation and support.
                    </p>
                    
                    <p className="text-eggshell font-semibold">
                      "Change begins when we make the invisible visible."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;