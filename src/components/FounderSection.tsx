import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="founder" className="section-padding bg-federal-blue">
      <div className="container-width">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-eggshell mb-6"
          >
            Meet the Founder
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-oxford-blue border-glaucous/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Photo Placeholder */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative bg-glaucous/10 flex items-center justify-center h-96 md:h-full"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-glaucous/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-glaucous text-sm">Photo Coming Soon</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Bio */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="p-12 flex flex-col justify-center"
                >
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
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;