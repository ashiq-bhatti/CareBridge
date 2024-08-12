import React from "react";
import { Link } from "react-router-dom";
import DrBySpecialtyPage from "../Pages/DrSpecialityByCityPage";

function SpecialityByCitySmallBox() {
  return (
    <>
      <div className="bg-blue-800 rounded ">
        <Link to="/drSpecialityByCityPage">
          <h1 className="text-white">Ent In Lahore</h1>
        </Link>
        <Link to="">
          {" "}
          <h1 className="text-white">Ent In Karchi</h1>
        </Link>
        <Link to="">
          {" "}
          <h1 className="text-white">Ent In Islamabad</h1>
        </Link>
      </div>
    </>
  );
}

export default SpecialityByCitySmallBox;
