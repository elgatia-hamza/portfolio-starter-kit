import HeroSection from "./components/HeroSection";
import Blog from "./components/Blog";
import AboutMeSection from "./components/AboutMeSection";
import { ContactForm } from "./components/ContactForm";
import CallToAction from "./components/CallToAction";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <Blog />
      <CallToAction />
      <ContactForm />
    </>
  );
}
