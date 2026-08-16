import React from "react";
import GlobalPartnersHero from "./GlobalPartnersHero";
import GlobalPartnersPhilosophy from "./GlobalPartnersPhilosophy";
import GlobalPartnersCategory from "./GlobalPartnersCategory";
import GlobalPartnersList from "./GlobalPartnersList";
import GlobalPartnersBenefit from "./GlobalPartnersBenefit";

const GlobalPartners = () => {
  return (
    <>
      <GlobalPartnersHero />
      <GlobalPartnersPhilosophy />
      <GlobalPartnersCategory />
      <GlobalPartnersList />
      <GlobalPartnersBenefit />
    </>
  );
};

export default GlobalPartners;
