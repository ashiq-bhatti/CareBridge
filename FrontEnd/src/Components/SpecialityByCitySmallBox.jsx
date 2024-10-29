import React from "react";
import { Link } from "react-router-dom";

function SpecialityByCitySmallBox() {
  return (
    <>
      <div className="bg-blue-800 rounded relative right-10 z-40  px-5 py-2">
        <Link to="">
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
