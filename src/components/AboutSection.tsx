import { TrendingUp, GraduationCap, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showInsightsModal, setShowInsightsModal] = useState(false);

  const initiatives = [
    {
      icon: TrendingUp,
      title: "Building an Index",
      description: "Based on slum surveys covering debt cycles, saving habits, income volatility, scheme awareness, migration patterns.",
      isClickable: true
    },
    {
      icon: GraduationCap,
      title: "Financial Literacy Workshops",
      description: "Empowering communities with practical financial skills and knowledge for better economic outcomes."
    },
    {
      icon: Heart,
      title: "Donation Drives",
      description: "Providing resources where they're most needed, directly impacting lives in informal communities."
    },
    {
      icon: Users,
      title: "Policy Accessibility",
      description: "Connecting policymakers with ground realities to create more inclusive economic policies."
    }
  ];

  const handleBuildingIndexClick = () => {
    setShowInsightsModal(true);
  };

  const insightsData = [
    {
      title: "Education Level vs Work and Savings",
      points: [
        "Illiterate → Lowest savings, fewer work hours",
        "10th pass → Longest work hours, negligible savings", 
        "12th+ → Highest savings, but still high work demands"
      ]
    },
    {
      title: "Financial Correlations Analysis",
      points: [
        "Age vs Savings → Weak negative correlation (-0.15)",
        "Hours Worked vs Earnings → Weak positive correlation (0.09)",
        "Age vs Hours Worked → Strongest positive correlation (0.23)"
      ]
    },
    {
      title: "Social Security & Awareness Insights",
      points: [
        "45.9% have e-Shram cards, only 1.8% enrolled in PM-SYM",
        "48.3% of women in debt vs 41.7% of men",
        "59% with middle school+ took skill training",
        "42.4% migrated for work; 44.9% migrate seasonally"
      ]
    }
  ];

  return (
    <section ref={ref} id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-accent-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Bridging the gap between India's informal economy and formal recognition through data, education, and community empowerment.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card 
                className={`bg-card border-border hover:border-accent smooth-transition group h-full ${
                  initiative.isClickable 
                    ? 'cursor-pointer hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-card to-accent/20 border-2 border-primary/30 hover:border-primary hover:glow-effect' 
                    : 'hover:shadow-lg'
                }`}
                onClick={initiative.isClickable ? handleBuildingIndexClick : undefined}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center smooth-transition ${
                      initiative.isClickable 
                        ? 'bg-primary/20 group-hover:bg-primary/40 group-hover:scale-125' 
                        : 'bg-primary/20 group-hover:bg-primary/30'
                    }`}>
                      <initiative.icon className={`w-8 h-8 text-primary ${initiative.isClickable ? 'group-hover:scale-110' : ''}`} />
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${
                    initiative.isClickable ? 'text-primary group-hover:text-primary' : 'text-foreground'
                  }`}>
                    {initiative.title}
                    {initiative.isClickable && <span className="ml-2 text-primary animate-pulse">→</span>}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {initiative.description}
                    {initiative.isClickable && <span className="block mt-2 text-primary font-semibold">Click to explore insights</span>}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Insights Modal */}
        <Dialog open={showInsightsModal} onOpenChange={setShowInsightsModal}>
          <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-background to-card border-2 border-primary/30">
            <DialogHeader className="text-center relative">
              {/* IEI Logo Popup in Center */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.5, type: "spring", bounce: 0.6 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg animate-logo-popup glow-effect">
                  <span className="font-bold text-2xl">IEI</span>
                </div>
              </motion.div>
              <DialogTitle className="text-4xl font-bold text-foreground mb-2 mt-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Quantifying the Unseen
              </DialogTitle>
              <p className="text-accent-foreground text-lg">
                India's comprehensive data on informal economy workers
              </p>
            </DialogHeader>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {insightsData.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-4">
                        {insight.title}
                      </h4>
                      <ul className="space-y-3">
                        {insight.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AboutSection;