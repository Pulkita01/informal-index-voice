import { useState } from "react";
import { Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";
import { workerStories, type WorkerStory } from "@/data/workerStories";

const WorkSection = () => {
  const [selectedStory, setSelectedStory] = useState<null | WorkerStory>(null);


  const openStory = (story: typeof workerStories[0]) => {
    setSelectedStory(story);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  return (
    <section id="work" className="relative bg-gradient-to-br from-federal-blue via-federal-blue to-oxford-blue overflow-hidden">
      {/* Scan-line background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-glaucous to-transparent animate-pulse" 
             style={{
               animation: "scanLine 4s ease-in-out infinite",
               top: "20%"
             }}
        />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-glaucous/50 to-transparent animate-pulse" 
             style={{
               animation: "scanLine 5s ease-in-out infinite 1s",
               top: "60%"
             }}
        />
      </div>

      {/* Sticky Title */}
      <div className="sticky top-0 z-20 bg-gradient-to-b from-federal-blue to-federal-blue/80 backdrop-blur-sm py-8">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-eggshell tracking-tight">
            Real Stories, Real Voices
          </h2>
        </div>
      </div>

      <div className="section-padding">
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
                initial={{ 
                  opacity: 0, 
                  y: 60, 
                  scale: 0.8,
                  rotateX: 15,
                  rotateY: 5
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(105, 3, 7, 0.5)"
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="bg-oxford-blue/30 backdrop-blur-sm border border-glaucous/20 rounded-xl p-8 text-center hover:border-blood-red/50 smooth-transition group cursor-pointer transform-gpu perspective-1000"
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 0 20px rgba(133, 157, 175, 0.2))"
                }}
                onClick={() => openStory(worker)}
              >
              {/* QR Code */}
              <div className="relative mb-6">
                <a
                  href={`/story/${worker.qrCodeId}`}
                  aria-label={`Open story for ${worker.name}, ${worker.role}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openStory(worker);
                  }}
                  className="block mx-auto w-36"
                >
                  <motion.div 
                    className="mx-auto bg-eggshell rounded-lg p-3 flex items-center justify-center smooth-transition shadow-inner text-oxford-blue relative"
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      rotateX: -5
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <QRCode
                      value={`${window.location.origin}/story/${worker.qrCodeId}`}
                      size={128}
                      fgColor="currentColor"
                      bgColor="transparent"
                      aria-label={`QR code linking to ${window.location.origin}/story/${worker.qrCodeId}`}
                    />
                    {/* Soft glow on load */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-br from-glaucous/20 to-blood-red/20 blur-sm -z-10"
                    />
                  </motion.div>
                </a>
                {/* Enhanced hover glow effect */}
                <motion.div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(105, 3, 7, 0)",
                      "0 0 20px rgba(105, 3, 7, 0.5)",
                      "0 0 0px rgba(105, 3, 7, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-36 h-36 mx-auto rounded-lg border-2 border-blood-red/50"></div>
                </motion.div>
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