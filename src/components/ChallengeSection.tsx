import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (startTime === undefined) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const ChallengeSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: 90, suffix: "%", label: "of India's workforce is informal" },
    { value: 0, suffix: "", label: "representation in national indices" },
    { value: 10, prefix: "<", suffix: "%", label: "know about available schemes" },
    { value: 0, suffix: "", label: "financial literacy levels", special: "Low" }
  ];

  const impactStatements = [
    "No contracts.",
    "No job security.", 
    "No recognition.",
    "No data. No voice."
  ];

  return (
    <section 
      ref={sectionRef}
      id="challenge" 
      className="relative min-h-screen w-full bg-gradient-to-br from-oxford-blue via-oxford-blue to-federal-blue overflow-hidden"
    >
      {/* Diagonal texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-federal-blue/30 to-transparent transform -skew-y-12 scale-150"></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-width text-center">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black uppercase text-eggshell mb-6 tracking-tight"
          >
            The Invisible 90%
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl italic text-glaucous mb-16 font-light"
          >
            The backbone of India's economy — unseen, unrepresented, unheard.
          </motion.p>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-blood-red p-8 rounded-xl card-shadow hover:scale-105 smooth-transition"
              >
                <div className="text-4xl md:text-5xl font-bold text-eggshell mb-4">
                  {stat.special ? (
                    stat.special
                  ) : (
                    <>
                      {stat.prefix}
                      <AnimatedCounter end={stat.value} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <p className="text-eggshell/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Impact Statements */}
          <div className="space-y-6 mb-12">
            {impactStatements.map((statement, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.3 }}
                className="text-xl md:text-2xl text-white font-medium"
              >
                {statement}
              </motion.p>
            ))}
          </div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 3.2 }}
            className="h-1 bg-blood-red mb-12 mx-auto max-w-2xl origin-left"
          ></motion.div>

          {/* Closing Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="text-3xl md:text-4xl font-bold text-eggshell mb-12"
          >
            This is the gap we aim to bridge.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            onClick={scrollToWork}
            className="bg-blood-red text-eggshell px-12 py-6 rounded-xl text-xl font-bold hover:bg-glaucous hover:scale-105 smooth-transition shadow-2xl"
          >
            See How
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;