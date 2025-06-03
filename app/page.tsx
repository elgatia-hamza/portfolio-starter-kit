import { BlogPosts } from "app/components/posts";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Blog from "./components/Blog";

export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <Blog />
    </>
  );
}
