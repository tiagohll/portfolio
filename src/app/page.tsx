import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import ProjectSection from "@/components/Home/Projects";
import Techs from "@/components/Home/Techs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProjectSection />
      <About />
      <Techs />
      <Footer />
    </>
  );
}
