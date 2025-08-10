import { Card, CardContent } from "@/components/ui/card";

const PartnershipsSection = () => {
  const partners = [
    { name: "Local NGO Partner 1", description: "Community development focus" },
    { name: "Local NGO Partner 2", description: "Financial literacy programs" },
    { name: "Local NGO Partner 3", description: "Informal sector research" },
    { name: "Local NGO Partner 4", description: "Policy advocacy" },
    { name: "Local NGO Partner 5", description: "Grassroots organizing" },
    { name: "Local NGO Partner 6", description: "Data collection support" }
  ];

  return (
    <section id="partnerships" className="section-padding bg-federal-blue">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-6">
            Our Partnerships
          </h2>
          <p className="text-xl text-glaucous max-w-3xl mx-auto leading-relaxed">
            Collaborating with organizations across India to create meaningful impact in the informal economy sector.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={index} 
              className="bg-oxford-blue border-glaucous/20 hover:border-glaucous/50 smooth-transition group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-glaucous/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-glaucous/30 smooth-transition">
                  <div className="w-8 h-8 bg-blood-red rounded opacity-70"></div>
                </div>
                
                <h3 className="text-xl font-bold text-eggshell mb-3">
                  {partner.name}
                </h3>
                
                <p className="text-glaucous leading-relaxed">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;