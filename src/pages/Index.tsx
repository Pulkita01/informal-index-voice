import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import StatsSection from "@/components/StatsSection";
import ResearchInsightsSection from "@/components/ResearchInsightsSection";
import StatesHeatmapSection from "@/components/StatesHeatmapSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="animated-stripes"></div>
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <ChallengeSection />
        <AboutSection />
        <WorkSection />
        <StatsSection />
        <ResearchInsightsSection />
        <StatesHeatmapSection />
        <PartnershipsSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
