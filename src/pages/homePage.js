import React from "react";
import Footer from "../common/Footer/index.js";
import AppRating from "../components/AppRating/index.js";
import BrandsLove from "../components/BrandsLove/index.js";
import Header from "../components/common/Header/index.js";
import CredExperience from "../components/CredExperience/index.js";
import CredSecurity from "../components/CredSecurity/index.js";
import CredStory from "../components/CredStory/index.js";
import FeelSpecial from "../components/FeelSpecial/index.js";
import HeroSection from "../components/HeroSection/index.js";
import MobileScroll from "../components/MobileScroll/index.js";
import ProductShowcase from "../components/ProductShowcase/index.js";
import WindowPeak from "../components/WindowPeak/index.js";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>

      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
}

export default HomePage;
