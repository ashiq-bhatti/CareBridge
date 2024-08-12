import  { useState } from "react";
import pregnancy from "../imgsSearchDoctorByCondition/pregnancy.png";
import { Link } from "react-router-dom";
import SpecialityByCitySmallBox from './SpecialityByCitySmallBox';

function DoctorSpeciality() {
  const [showSpecialityByCitySmallBox, setShowSpecialityByCitySmallBox] = useState(false);
  return (
    <>
      <div className="border-b-2 posit">
        <div className="doctor-specialist-section-inner flex w-[90%] m-auto justify-between  pb-10 pt-5">
          <div className="left mt-4 pl-28 text-center">
            <h1 className="text-2xl font-semibold">Choose a speciality</h1>
            <button className="border-2 border-blue-950  py-2 px-2 rounded mt-4 ">
              View All Speciality
            </button>
          </div>
          <div className="right flex space-x-3">
            <div id="col-one">
              <Link to="">
                <div onMouseEnter={()=>{setShowSpecialityByCitySmallBox(!showSpecialityByCitySmallBox)}} className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
              {showSpecialityByCitySmallBox ? <SpecialityByCitySmallBox/> : null}
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
            </div>
            <div id="col-two">
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
              <Link>
                <Link>
                  <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                    <img className="w-[26px]" src={pregnancy} alt="" />
                    <h1>Gynicology</h1>
                  </div>
                </Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
            </div>
            <div id="col-three">
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
              <Link>
                <Link>
                  <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                    <img className="w-[26px]" src={pregnancy} alt="" />
                    <h1>Gynicology</h1>
                  </div>
                </Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorSpeciality;
