import { Card, CardContent } from "@/components/ui/card";
import { QrCode, ExternalLink } from "lucide-react";

const WorkSection = () => {
  const workItems = [
    {
      title: "Slum Survey Initiative",
      description: "Comprehensive data collection on financial habits and government scheme awareness in urban informal settlements.",
      impact: "500+ families surveyed",
      qrCode: true
    },
    {
      title: "Financial Literacy Workshop",
      description: "Interactive sessions teaching practical money management skills to informal economy workers.",
      impact: "200+ participants trained",
      qrCode: true
    },
    {
      title: "Emergency Relief Drive",
      description: "Immediate support during COVID-19 pandemic providing food and essential supplies to affected families.",
      impact: "1000+ families supported",
      qrCode: true
    },
    {
      title: "Policy Research Report",
      description: "In-depth analysis of government schemes accessibility and their real-world implementation gaps.",
      impact: "Shared with 5 policy makers",
      qrCode: true
    },
    {
      title: "Community Savings Program",
      description: "Facilitated group savings initiatives to help informal workers build financial resilience.",
      impact: "50+ savings groups formed",
      qrCode: true
    },
    {
      title: "Digital Literacy Training",
      description: "Teaching smartphone and digital payment skills to help informal workers access government services.",
      impact: "300+ workers trained",
      qrCode: true
    }
  ];

  return (
    <section id="work" className="section-padding bg-oxford-blue">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-6">
            Our Work
          </h2>
          <p className="text-xl text-glaucous max-w-3xl mx-auto leading-relaxed">
            Real stories, real impact. Explore our initiatives and their direct effect on India's informal economy communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-federal-blue border-glaucous/20 hover:border-glaucous/50 smooth-transition group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-eggshell leading-tight">
                    {item.title}
                  </h3>
                  {item.qrCode && (
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-glaucous/20 rounded-lg flex items-center justify-center hover:bg-glaucous/30 smooth-transition">
                        <QrCode className="w-4 h-4 text-glaucous" />
                      </button>
                      <button className="w-8 h-8 bg-glaucous/20 rounded-lg flex items-center justify-center hover:bg-glaucous/30 smooth-transition">
                        <ExternalLink className="w-4 h-4 text-glaucous" />
                      </button>
                    </div>
                  )}
                </div>
                
                <p className="text-glaucous leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="bg-blood-red/10 rounded-lg p-3 border-l-4 border-blood-red">
                  <p className="text-blood-red font-semibold text-sm">
                    {item.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;