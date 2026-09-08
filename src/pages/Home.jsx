import Hero from "../components/sections/Hero";
// import HeroTrustStrip from "../components/sections/HeroTrustStrip";


// import EnergySolutions from "../components/sections/EnergySolutions";
// import IndustriesSection from "../components/sections/IndustriesSection";
import TechnologySection from "../components/sections/TechnologySection";
import GlobalPresence from "../components/sections/GlobalPresence";
import WhyChooseUs from "../components/sections/WhyChooseUs";
// import Sustainability from "../components/sections/Sustainability";
import FAQItem from "../components/sections/FAQItem";
import EnergyProductsSection from "../components/sections/ProductsByCategory"
import DownloadCatalogueSection from "../pages/DownloadCatalogueSection"
// import BatterySolutions from "./BatterySolutions";
// import InnovationSection from "../pages/InnovationSection"
export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroTrustStrip /> */}
     
      <EnergyProductsSection/>
      {/* <InnovationSection /> */}
      {/* <BatterySolutions/> */}
      {/* <EnergySolutions /> */}
      {/* <IndustriesSection /> */}
      {/* <TechnologySection /> */}
      {/* <GlobalPresence /> */}
      <WhyChooseUs />
      {/* <Sustainability /> */}
      {/* <DownloadCatalogueSection/> */}
      <FAQItem/>
    </>
  );
}
