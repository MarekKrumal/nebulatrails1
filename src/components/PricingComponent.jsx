import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="w-full px-10 py-14 bg-black z-20">
      {/* Container for Pricing Components */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Basic Card */}
        <div className="card bg-black border p-6 shadow-lg min-h-[500px] w-full sm:w-[350px]">
          <h3 className="text-white text-4xl font-extrabold uppercase text-center mb-10">
            - Basic -
          </h3>
          <div className="bar text-white">
            <p className="btc text-center text-3xl mb-6 font-bold">1 BTC</p>
            <p className="text-center mb-4 text-xl font-semibold">- 3 Days -</p>
            <p className="text-center mb-4 text-xl">- Views -</p>
            <p className="text-center mb-4 text-xl">- Featured -</p>
            <p className="text-center mb-16 text-xl">- Private Quarters -</p>
            <Link
              to="/contact"
              className="p-4 uppercase bg-white/20 hover:bg-white/30 text-white mt-4 block text-center cursor-pointer border border-white"
            >
              Book
            </Link>
          </div>
        </div>

        {/* Suite Card */}
        <div className="card bg-black border p-6 shadow-lg min-h-[500px] w-full sm:w-[350px]">
          <h3 className="text-white text-4xl font-extrabold uppercase text-center mb-10">
            - Suite -
          </h3>
          <div className="bar text-white">
            <p className="btc text-center text-3xl mb-6 font-bold">2 BTC</p>
            <p className="text-center mb-4 text-xl font-semibold">- 5 Days -</p>
            <p className="text-center mb-4 text-xl">- Views -</p>
            <p className="text-center mb-4 text-xl">- Featured -</p>
            <p className="text-center mb-16 text-xl">- Private Quarters -</p>
            <Link
              to="/contact"
              className="p-4 uppercase bg-white/20 hover:bg-white/30 text-white mt-4 block text-center cursor-pointer border border-white"
            >
              Book
            </Link>
          </div>
        </div>

        {/* Inclusive Card */}
        <div className="card bg-black border p-6 shadow-lg min-h-[500px] w-full sm:w-[350px]">
          <h3 className="text-white text-4xl font-extrabold uppercase text-center mb-10">
            - Inclusive -
          </h3>
          <div className="bar text-white">
            <p className="btc text-center text-3xl mb-6 font-bold">3 BTC</p>
            <p className="text-center mb-4 text-xl font-semibold">- 7 Days -</p>
            <p className="text-center mb-4 text-xl">- Views -</p>
            <p className="text-center mb-4 text-xl">- Featured -</p>
            <p className="text-center mb-16 text-xl">- Private Quarters -</p>
            <Link
              to="/contact"
              className="p-4 uppercase bg-white/20 hover:bg-white/30 text-white mt-4 block text-center cursor-pointer border border-white"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
