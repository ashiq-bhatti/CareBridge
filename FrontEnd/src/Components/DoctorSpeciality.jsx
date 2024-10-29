import React from "react";
import pregnancy from "../imgsSearchDoctorByCondition/pregnancy.png";
import { Link } from "react-router-dom";

function DoctorSpeciality() {
  
  return (
    <>
      <div className="w-full border bg-blue-50 -b-2 z-20 absolute ">
        <div className="doctor-specialist-section-inner flex w-[90%] m-auto justify-between pb-10 pt-5">
          <div className="left mt-4 pl-28 text-center ">
            <h1 className="text-2xl font-semibold">Here are All Doctors</h1>
            <Link to="/allDrSpecialist">
            <button className="border-2 border-blue-950 py-2 px-2 rounded mt-4">
              View All Doctor
            </button>
            </Link>
            
          </div>
          <div className="right flex space-x-3">
            <div id="col-one">
              <Link to="/Gynicologist">
                <div           
                  className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3 relative" 
                >
                  <img className="w-[26px]" src={pregnancy} alt="" />
                  <h1>Gynicology</h1>            
                </div>
              </Link>
              <Link to="/SkinSpecialist">
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/skin-specialist.png?v=1721897581536'
                   alt="" />
                  <h1>Skin Specialist</h1>
                </div>
              </Link>
              <Link to="/ChildSpecialist">
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/child-specialist.png?v=1721897581536' alt="" />
                  <h1>Child Specialist</h1>
                </div>
              </Link >
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/orthopedic-surgeon.png?v=1721897581536' alt="" />
                  <h1>Orthopedic Surgeon</h1>
                </div>
              </Link>
            </div>
            <div id="col-two">
              <Link to="/ENT">
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/ent-specialist.png?v=1721897581536' alt="" />
                  <h1>ENT Specialist</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/blood-specialist.png?v=1721897581536' alt="" />
                  <h1>Diabetes Specialist</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/eye-specialist.png?v=1721897581536' alt="" />
                  <h1>Eye Specialist</h1>
                </div>
              </Link>
            </div>
            <div id="col-three">
              <Link to="/pulmonologist">
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/general-physician.png?t=1721897581536' alt="" />
                  <h1>Pulmonologist</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/neurologist.png?t=1721897581536' alt="" />
                  <h1>Neurosurgeon</h1>
                </div>
              </Link>
              <Link>
                <div className="flex border-2 border-gray-300 rounded-md gap-5 pl-4 pr-20 py-3 mb-3">
                  <img className="w-[26px]" src='https://d1t78adged64l7.cloudfront.net/specialty-icons3/urologist.png?t=1721897581536' alt="" />
                  <h1>Uro-Oncologist</h1>
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
