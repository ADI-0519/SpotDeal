
import NavigationBar from "@/components/landing/NavigationBar";
import HeroSection from "@/components/landing/HeroSection";
import AppStoreSection from "@/components/landing/AppStoreSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import GoogleMapsSection from "@/components/landing/GoogleMapsSection";
import FAQSection from "@/components/landing/FAQSection";
import PartnerCTA from "@/components/PartnerCTA";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen animated-orange-bg transition-colors">
      <NavigationBar />
      <HeroSection />
      <AppStoreSection />
      <HowItWorksSection />
      <FeaturesSection />
      <GoogleMapsSection />
      <FAQSection />
      <PartnerCTA />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Landing;