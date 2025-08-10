import { TrendingUp, GraduationCap, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const initiatives = [
    {
      icon: TrendingUp,
      title: "Building an Index",
      description: "Based on slum surveys covering debt cycles, saving habits, income volatility, scheme awareness, migration patterns."
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

  return (
    <section id="about" className="section-padding bg-oxford-blue">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-6">
            What We Do
          </h2>
          <p className="text-xl text-glaucous max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between India's informal economy and formal recognition through data, education, and community empowerment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="bg-federal-blue border-glaucous/20 hover:border-glaucous/50 smooth-transition group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blood-red/20 rounded-full flex items-center justify-center group-hover:bg-blood-red/30 smooth-transition">
                    <initiative.icon className="w-8 h-8 text-blood-red" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-eggshell mb-4">
                  {initiative.title}
                </h3>
                
                <p className="text-glaucous leading-relaxed">
                  {initiative.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;