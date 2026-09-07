import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Hero } from "./components/sections/hero";
import { ValueProposition } from "./components/sections/value-proposition";
import { Products } from "./components/sections/products";
import { CTABand } from "./components/sections/cta-band";
import { Testimonials } from "./components/sections/testimonials";
import { InstagramSection } from "./components/sections/instagram-section";
import { Location } from "./components/sections/location";
import { FAQ } from "./components/sections/faq";
import { Contact } from "./components/sections/contact";
import { WhatsAppButton } from "./components/common/whatsapp-button";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Products />
        <CTABand />
        <Testimonials />
        <InstagramSection />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}