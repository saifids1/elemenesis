import Image from "next/image";
import TopNavigation from "./layouts/navbar";
import HeroSlider from "./components/homePage/slider";
import AboutSectionHomepage from "./components/homePage/aboutUs";
import WhyChooseElemensis from "./components/homePage/whyChoseUs";
import MissionVisionPage from "./components/homePage/missionVision";
import DivisionsPage from "./components/homePage/division";
import GlobalNetworkPage from "./components/homePage/globalNetwork";
import ExportMarketPage from "./components/homePage/exportMarket";
// import SectionDividerBrand from "./components/homePage/divider"
import Footer from "./layouts/footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <SectionDividerBrand/> */}
      <AboutSectionHomepage />
      <WhyChooseElemensis />
      <MissionVisionPage />
      <DivisionsPage />
      <GlobalNetworkPage />
      <ExportMarketPage />
      <Footer />
    </>
  );
}
