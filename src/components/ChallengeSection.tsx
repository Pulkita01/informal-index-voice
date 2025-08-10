import informalWorkersImage from "@/assets/informal-workers.jpg";

const ChallengeSection = () => {
  return (
    <section id="challenge" className="section-padding bg-federal-blue">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-8">
              The Challenge
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blood-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xl text-glaucous leading-relaxed">
                  <span className="text-eggshell font-semibold">90%</span> of India's workforce is in the informal economy.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blood-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xl text-glaucous leading-relaxed">
                  They have <span className="text-eggshell font-semibold">no proper representation</span> in any index.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blood-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xl text-glaucous leading-relaxed">
                  Most lack <span className="text-eggshell font-semibold">awareness of government schemes</span> and policies.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blood-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xl text-glaucous leading-relaxed">
                  <span className="text-eggshell font-semibold">Financial literacy</span> remains extremely low.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl card-shadow">
              <img 
                src={informalWorkersImage} 
                alt="Informal economy workers in India" 
                className="w-full h-96 object-cover smooth-transition hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;