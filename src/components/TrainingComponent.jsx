import React from "react";
import pic6 from "../assets/pic6.avif";
import pic5 from "../assets/pic5.avif";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:px-16 px-8 mt-56 mb-36">
      {/* Left */}
      <div className="text-white flex flex-col space-y-4 md:w-1/2">
        <h1 className="text-5xl text-center font-bold">Training</h1>
        <p className="text-xl font-light p-3 text-center">
          Nebula Trails offers astronaut training to prepare you physically and
          mentally for space travel. Our program includes tailored fitness
          routines, space mission simulations, and mental conditioning to ensure
          you're ready for the challenges of space. With expert guidance, we
          provide the skills needed for an unforgettable adventure.
        </p>
        <Link
          to="contact"
          className="flex items-center justify-center text-center px-10 py-4 text-lg uppercase bg-transparent border border-white text-white cursor-pointer hover:bg-white/30 w-auto mx-auto"
        >
          Contact
        </Link>
      </div>

      {/* Right Column */}
      <div className="flex flex-row space-x-6 w-full md:w-1/2">
        <div className="w-1/2 h-auto">
          <img src={pic6} className="w-full h-full object-contain" alt="" />
        </div>

        <div className="w-1/2 h-auto">
          <img src={pic5} className="w-full h-full object-contain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Training;
