import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import LogoSlider from "./components/LogoSlider";
import FeaturesSection from "./components/FeaturesSection";
import FeatureHighlight from "./components/FeatureHighlight";

function App(){

  return (

    <>
    <Navbar/>
    <HeroSection/>
  <LogoSlider/>
  <FeaturesSection/>
<FeatureHighlight/>
    </>
  )
}

export default App;