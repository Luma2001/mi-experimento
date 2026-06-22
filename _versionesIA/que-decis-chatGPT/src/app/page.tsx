import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
