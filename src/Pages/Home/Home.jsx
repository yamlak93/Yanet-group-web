import React from "react";
import Hero from "./Hero";
import WhoAreWe from "./WhoAreWe";
import HomeBusiness from "./HomeBusiness";
import WhyUs from "./WhyUs";
import HeroAbout from "./HeroAbout";
import HomeGlobal from "./HomeGlobal";
import HomeProducts from "./HomeProducts";
import HomeSustainability from "./HomeSustainability";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroAbout />
      <HomeBusiness />
      <HomeGlobal />
      <HomeProducts />
      <HomeSustainability />
    </>
  );
};

export default Home;
