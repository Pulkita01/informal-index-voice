import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatsSection = () => {
  const [volunteers, setVolunteers] = useState(0);
  const [donated, setDonated] = useState("₹0");
  const [partners, setPartners] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // Animate counter for volunteers
      const timer = setTimeout(() => {
        let count = 0;
        const interval = setInterval(() => {
          count += 2;
          setVolunteers(count);
          if (count >= 50) {
            clearInterval(interval);
            setVolunteers(50);
          }
        }, 50);
      }, 800);

      // Set other stats (these can be updated by admins later)
      setTimeout(() => setDonated("₹25,000+"), 1200);
      setTimeout(() => setPartners("5+"), 1600);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-federal-blue to-oxford-blue">
      <div className="container-width">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-eggshell mb-6"
          >
            Our Impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-glaucous"
          >
            Making a difference in India's informal economy
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group"
          >
            <div className="text-5xl md:text-6xl font-bold text-blood-red mb-4 group-hover:scale-110 smooth-transition">
              {volunteers}+
            </div>
            <div className="text-xl font-semibold text-eggshell mb-2">Volunteers</div>
            <div className="text-glaucous">
              Passionate youth driving change
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group"
          >
            <div className="text-5xl md:text-6xl font-bold text-blood-red mb-4 group-hover:scale-110 smooth-transition">
              {donated}
            </div>
            <div className="text-xl font-semibold text-eggshell mb-2">Donated</div>
            <div className="text-glaucous">
              Direct financial support
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="group"
          >
            <div className="text-5xl md:text-6xl font-bold text-blood-red mb-4 group-hover:scale-110 smooth-transition">
              {partners}
            </div>
            <div className="text-xl font-semibold text-eggshell mb-2">NGO Partners</div>
            <div className="text-glaucous">
              Collaborative relationships
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;