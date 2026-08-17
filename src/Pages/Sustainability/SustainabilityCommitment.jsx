import React from "react";
import SustainabilityCommitmentHero from "./SustainabilityCommitmentHero";
import SustainabilityCommitmentApproach from "./SustaiabilityCommitmentApproach";
import SustainabilityCommitmentPillars from "./SustainabilityCommitmentPillars";
import SustainabilityCommitmentImpact from "./SustainabilityCommitmentImpact";
import SustainabilityCommitmentGoals from "./SustainabilityCommitmentGoals";

const SustainabilityCommitment = () => {
  return (
    <>
      <SustainabilityCommitmentHero />
      <SustainabilityCommitmentApproach />
      <SustainabilityCommitmentPillars />
      <SustainabilityCommitmentImpact />
      <SustainabilityCommitmentGoals />
    </>
  );
};

export default SustainabilityCommitment;
