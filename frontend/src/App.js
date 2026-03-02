import "@/App.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import Location from "@/components/sections/Location";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { MobileCTA } from "@/components/ui/MobileCTA";
import { CookieConsent } from "@/components/ui/CookieConsent";

function App() {
  return (
    <LanguageProvider>
      <div className="App overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <HowItWorks />
          <Services />
          <WhyChooseUs />
          <Pricing />
          <Testimonials />
          <LeadForm />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <MobileCTA />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}

export default App;
