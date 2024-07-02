import Navbar from "./sections/Navbar";
import { Footer } from "./sections/Footer";
import Hero from "./sections/Hero"
import Companies from "./sections/Companies";
import Features from "./sections/Features";
import Quotation from "./sections/Quotation";
import Integration from "./sections/Integrations";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Cta from "./sections/Cta";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Quotation />
      <Integration />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
