import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GreenEnergySection from "./components/GreenEnergySection";
import CtaBlock from "./components/CtaBlock";
import SolutionsSection from "./components/SolutionsSection";
import ToolsSection from "./components/ToolsSection";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import ExperienceSection from "./components/ExperienceSection";
import SolarSavingsQuiz from "./components/SolarSavingsQuiz";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper" style={{ paddingTop: 73 }}>
        <HeroSection />
        <GreenEnergySection />
        <CtaBlock />
        <SolutionsSection />
        <ToolsSection />
        <WhoWeWorkWith />
        <ExperienceSection />
        <SolarSavingsQuiz />
        <AboutUsSection />
        <CtaBlock />
        <Footer />
      </div>
    </>
  );
}
