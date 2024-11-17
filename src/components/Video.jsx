// Video komponenta
import React from "react";
import earth from "../assets/earth.mp4";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="h-full w-full object-contain min-h-screen">
      <video
        autoPlay
        loop
        muted
        id="video"
        className="fixed w-full h-full object-cover z-0"
      >
        <source src={earth} type="video/mp4" />
      </video>
      <div className="text-center absolute m-auto w-full h-full top-96 z-10">
        <h1 className="m-5 text-6xl font-semibold text-white">Nebula Trails</h1>
        <p className="p-2 mb-7 m-5 text-3xl font-extralight uppercase text-white">
          World's first civilian space travel.
        </p>
        <div>
          <Link
            to="/training"
            className="m-3 px-10 py-4 text-lg uppercase bg-transparent border border-white text-white cursor-pointer hover:bg-white/30"
          >
            Training
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 text-lg uppercase bg-white/20 border border-white text-white cursor-pointer hover:bg-white/35"
          >
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
