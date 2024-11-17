import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PricingComponent from "../components/PricingComponent";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING" text="Choose your trip." />
      <PricingComponent />
      <Footer />
    </div>
  );
};

export default Pricing;
