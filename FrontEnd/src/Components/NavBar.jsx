import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import DoctorSpeciality from "./DoctorSpeciality";

const NavBar = () => {
  const [ShowDrSpeciality, setShowDrSpeciality] = useState(false);

  return (
    <>
      <div className="w-full bg-blue-950 shadow-md">
        <nav className="w-[94%] m-auto md:flex justify-between items-center flex">
          <div>
            <Link to="/">
              <img
                className="w-20 py-2"
                src="../images/carebridgeLogo.jpg"
                alt="Loading..."
              />
            </Link>
          </div>
          <ul className="hidden md:flex gap-6 ">
            <li className="text-white">
              <Link to="/hospitals" className="flex items-center space-x-1">
                <span>Hospitals</span>
                <IoMdArrowDropdown className="text-2xl mt-1" />
              </Link>
            </li>
            <li className="text-white cursor-pointer flex items-center space-x-1" onClick={() => setShowDrSpeciality(!ShowDrSpeciality)}>
              <span>Doctors</span>
              <IoMdArrowDropdown className="text-2xl mt-1" />
            </li>
            <li className="text-white cursor-pointer flex items-center space-x-1">
              <span>Labs and Diagnostics</span>
              <IoMdArrowDropdown className="text-2xl mt-1" />
            </li>
            <li className="text-white">
              <Link to="/surgeries">Surgeries</Link>
            </li>
            <li className="text-white">
              <Link to="/healthblog">Health Blog</Link>
            </li>
          </ul>
          <div className="flex gap-3 md:flex md:gap-3">
            <Link to="/login" className="border-2 border-yellow-500 text-white py-1 px-2 rounded hover:text-yellow-400">
              Login/SignUp
            </Link>
            <Link to="/admin" className="border-2 border-white text-yellow-500 py-1 px-2 rounded hover:text-white">
              Register as Doctor
            </Link>
            <div className="lg:hidden">
              <Link to="#" className="text-white text-4xl" aria-label="Menu">
                &#8801;
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div>{ShowDrSpeciality && <DoctorSpeciality />}</div>
    </>
  );
};

export default NavBar;
