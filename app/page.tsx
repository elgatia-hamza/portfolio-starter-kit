import { BlogPosts } from "app/components/posts";
import HeroSection from "./components/HeroSection";
import Blog from "./components/Blog";
import AboutMeSection from "./components/AboutMeSection"; // New import

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutMeSection /> {/* New component */}
      <Blog />
    </>
  );
}
