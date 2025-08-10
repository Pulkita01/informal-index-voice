import { useState } from "react";
import { QrCode, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WorkSection = () => {
  const [selectedStory, setSelectedStory] = useState<null | {
    name: string;
    role: string;
    story: string;
    videoUrl?: string;
  }>(null);

  const workerStories = [
    {
      name: "Ravi",
      role: "Street Vendor",
      qrCodeId: "ravi-vendor-001",
      story: "Ravi sells fruits on the bustling streets of Mumbai. Through our financial literacy program, he learned to save systematically and now has an emergency fund that helped his family during the monsoon season when sales were low.",
      videoUrl: "#"
    },
    {
      name: "Priya",
      role: "Domestic Helper",
      qrCodeId: "priya-helper-002",
      story: "Priya works in multiple households across Delhi. Our scheme awareness workshop helped her register for health insurance, giving her family access to affordable healthcare for the first time.",
      videoUrl: "#"
    },
    {
      name: "Suresh",
      role: "Auto Rickshaw Driver",
      qrCodeId: "suresh-driver-003",
      story: "Suresh drives an auto rickshaw in Bangalore. Through our digital literacy training, he learned to use payment apps and government portals, increasing his daily earnings by 30%.",
      videoUrl: "#"
    },
    {
      name: "Kamala",
      role: "Flower Seller",
      qrCodeId: "kamala-seller-004",
      story: "Kamala sells flowers at a temple in Chennai. Our community savings program helped her join a women's self-help group, where she's building credit and planning to expand her business.",
      videoUrl: "#"
    },
    {
      name: "Raj",
      role: "Construction Worker",
      qrCodeId: "raj-worker-005",
      story: "Raj works on construction sites across Pune. Our emergency relief drive provided his family with essential supplies during COVID-19, and our job placement support helped him find steady work.",
      videoUrl: "#"
    },
    {
      name: "Meera",
      role: "Vegetable Vendor",
      qrCodeId: "meera-vendor-006",
      story: "Meera runs a small vegetable stall in Kolkata's markets. Through our index survey, we documented her challenges with income volatility and helped connect her with a microcredit program.",
      videoUrl: "#"
    }
  ];

  const openStory = (story: typeof workerStories[0]) => {
    setSelectedStory(story);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  return (
    <section id="work" className="section-padding bg-gradient-to-br from-federal-blue via-federal-blue to-oxford-blue">
      <div className="container-width">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-3xl md:text-4xl font-light text-eggshell mb-12 leading-relaxed">
            Each code unlocks a journey. Scan or click to see the people behind the numbers.
          </p>
        </div>
        
        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workerStories.map((worker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-oxford-blue/30 backdrop-blur-sm border border-glaucous/20 rounded-xl p-8 text-center hover:border-blood-red/50 smooth-transition group cursor-pointer"
              onClick={() => openStory(worker)}
            >
              {/* QR Code Placeholder */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-eggshell rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(105,3,7,0.5)] smooth-transition">
                  <QrCode className="w-20 h-20 text-oxford-blue" />
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none">
                  <div className="w-32 h-32 mx-auto rounded-lg border-2 border-blood-red animate-pulse"></div>
                </div>
              </div>

              {/* Worker Info */}
              <h3 className="text-xl font-bold text-eggshell mb-2">
                {worker.name} – {worker.role}
              </h3>

              {/* Icon */}
              <div className="flex items-center justify-center gap-2 text-glaucous">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Tap or Scan to View Story</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeStory}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-oxford-blue border border-glaucous/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeStory}
                className="absolute top-4 right-4 w-8 h-8 bg-blood-red rounded-full flex items-center justify-center hover:bg-blood-red/80 smooth-transition"
              >
                <X className="w-4 h-4 text-eggshell" />
              </button>

              {/* Story Content */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-eggshell mb-2">
                  {selectedStory.name}
                </h2>
                <p className="text-xl text-glaucous italic">
                  {selectedStory.role}
                </p>
              </div>

              {/* Video Placeholder */}
              <div className="bg-federal-blue rounded-lg p-8 mb-6 text-center">
                <p className="text-glaucous mb-4">Video Story</p>
                <div className="w-16 h-16 bg-glaucous/20 rounded-full mx-auto flex items-center justify-center">
                  <Eye className="w-8 h-8 text-glaucous" />
                </div>
              </div>

              {/* Story Text */}
              <div className="prose prose-invert max-w-none">
                <p className="text-glaucous leading-relaxed text-lg">
                  {selectedStory.story}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;