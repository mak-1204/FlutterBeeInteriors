import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton, MobileStickyBar } from "./components/WhatsAppButton";
import { EnquiryPopup } from "./components/EnquiryPopup";

export default function App() {
  return (
    <div className="relative" style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <BeforeAfterSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating elements */}
      <WhatsAppButton />

      {/* Mobile sticky CTA bar — gives breathing room above it */}
      <div className="h-14 md:hidden" />
      <MobileStickyBar />

      {/* Time-triggered enquiry popup */}
      <EnquiryPopup />
    </div>
  );
}
