import { useEffect, useState } from "react";

const StatsSection = () => {
  const [volunteers, setVolunteers] = useState(0);
  const [donated, setDonated] = useState("₹0");
  const [partners, setPartners] = useState("0");

  useEffect(() => {
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
    }, 500);

    // Set other stats (these can be updated by admins later)
    setTimeout(() => setDonated("₹25,000+"), 1000);
    setTimeout(() => setPartners("5+"), 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-r from-federal-blue to-oxford-blue">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-glaucous">
            Making a difference in India's informal economy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <div className="text-5xl md:text-6xl font-bold text-blood-red mb-4 group-hover:scale-110 smooth-transition">
              {volunteers}+
            </div>
            <div className="text-xl font-semibold text-eggshell mb-2">Volunteers</div>
            <div className="text-glaucous">
              Passionate youth driving change
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-bold text-blood-red mb-4 group-hover:scale-110 smooth-transition">
              {donated}
            </div>
            <div className="text-xl font-semibold text-eggshell mb-2">Donated</div>
            <div className="text-glaucous">
              Direct financial support
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-bold text-blood-red mb-4 group-hover:scale-110 smooth-transition">
              {partners}
            </div>
            <div className="text-xl font-semibold text-eggshell mb-2">NGO Partners</div>
            <div className="text-glaucous">
              Collaborative relationships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;