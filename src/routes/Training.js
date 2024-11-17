import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import TrainingComponent from "../components/TrainingComponent";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING" text="Learn how to fly." />
      <TrainingComponent />
      <Footer />
    </div>
  );
};

export default Training;
