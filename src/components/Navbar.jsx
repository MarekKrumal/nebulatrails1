import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="fixed w-full h-[90px] flex justify-between items-center p-1 z-30 text-white ">
        {/* hlavicka "logo" */}
        <Link className="text-xl" to="/">
          <h1 className="p-3 text-3xl font-bold ">NEBULA TRAILS</h1>
        </Link>

        {/* big screens */}
        <ul className="hidden md:flex">
          <li className="p-[1rem]">
            <Link className="text-2xl" to="/">
              Home
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" to="/training">
              Training
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* hamburger small screens only */}
        <div className="block md:hidden p-1" onClick={handleClick}>
          {click ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>
      </div>

      {/* Dropdown menu pouze smalal screens */}
      <ul
        className={`${
          click ? "block" : "hidden"
        } absolute top-0 left-0 md:hidden w-full h-full bg-black text-white flex flex-col justify-center items-center z-20`}
      >
        <li className="p-[2rem]">
          <Link className="text-3xl " to="/">
            Home
          </Link>
        </li>
        <li className="p-[2rem]">
          <Link className="text-3xl" to="/pricing">
            Pricing
          </Link>
        </li>
        <li className="p-[2rem]">
          <Link className="text-3xl" to="/training">
            Training
          </Link>
        </li>
        <li className="p-[2rem]">
          <Link className="text-3xl" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
