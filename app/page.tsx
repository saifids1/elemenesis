import Image from "next/image";
import TopNavigation from "./layouts/navbar";
import HeroSlider from "./components/homePage/slider";
import AboutSectionHomepage from "./components/homePage/aboutUs";
import WhyChooseElemensis from "./components/homePage/whyChoseUs";
import MissionVisionPage from "./components/homePage/missionVision";
import DivisionsPage from "./components/homePage/division";
import GlobalNetworkPage from "./components/homePage/globalNetwork";
import ExportMarketPage from "./components/homePage/exportMarket";
import ExportSections from "./components/homePage/exportSections";
import {Flag} from "./components/homePage/flag";
import Whysection from "./components/homePage/whysection";
import Whysection01 from "./components/homePage/whysection01";
// import SectionDividerBrand from "./components/homePage/divider"
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";

export default function Home() {
  return (
    <>
       <Navbar />
      <HeroSlider />
      {/* <SectionDividerBrand/> */}
      <Whysection/>
      <AboutSectionHomepage />
      <Whysection01/>
      <WhyChooseElemensis />
      <MissionVisionPage />
      <DivisionsPage />
      <GlobalNetworkPage />
      <ExportSections/>
      <Flag/>
      <ExportMarketPage />
      <Footer />
    </>
  );
}
