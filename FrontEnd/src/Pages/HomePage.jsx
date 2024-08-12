import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import gynecologist from "../imgConsult_doct/gynecologist.png";
import blood from "../imgConsult_doct/blood.png";
import child from "../imgConsult_doct/child.png";
import ent from "../imgConsult_doct/ent.png";
import eye from "../imgConsult_doct/eye.png";
import orthopedic from "../imgConsult_doct/orthopedic.png";
import skin from "../imgConsult_doct/skin.png";
import acne from "../imgsSearchDoctorByCondition/acne.png";
import diarrhea from "../imgsSearchDoctorByCondition/diarrhea.png";
import fever from "../imgsSearchDoctorByCondition/fever.png";
import highhblood from "../imgsSearchDoctorByCondition/highblood.png";
import piles from "../imgsSearchDoctorByCondition/piles.png";
import heartAttack from "../imgsSearchDoctorByCondition/heartAttack.png";
import pregnancy from "../imgsSearchDoctorByCondition/pregnancy.png";
import Marquee from "react-fast-marquee";
import abbott from "../imgPartnerLogo/abbott.png";
import sony from "../imgPartnerLogo/sony.png";
import tcs from "../imgPartnerLogo/tcs.png";
import zameen from "../imgPartnerLogo/zameen.png";
import hbl from "../imgPartnerLogo/hbl.jfif";
import HOC from "../Components/HOC";

  const HomePage = () => {
  return (
    <>
      {/* Find doctor section Start*/}

      <div className="w-full h-72 bg-gradient-to-b from-sky-100  flex flex-col justify-center">
        <div className="w-[90%] md:w-[70%] mx-auto text-center text-2xl md:text-5xl mb-5 font-semibold p-4 md:p-8">
          <h1>
            Find and Book the Best{" "}
            <span className="text-blue-500">Doctors or Hospital</span> near you
          </h1>
        </div>
        <div className="flex justify-center gap-2 h-11">
          <input
            type="search"
            placeholder="Enter City"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none w-full max-w-xs"
          />
          <input
            type="search"
            placeholder="Doctors, Hospital"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none w-full max-w-xs"
          />
        </div>
      </div>

      {/* How can we help you today  cardes Start*/}

      <div className="w-full">
        <div className="w-[88%] mx-auto  p-4">
          <h1 className="font-bold text-lg pb-4">How can we help you today?</h1>
          <div
            id="both-left-right-cards"
            className="flex flex-col md:flex-row gap-4"
          >
            <div id="left-cards" className="flex flex-col md:w-[50%] gap-2">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex justify-between bg-yellow-200 rounded  flex-1">
                  <div className="pl-3 pt-2">
                    <h1 className="text-blue-950 font-semibold ">
                      Video Consultation
                    </h1>
                    <p className="">PMC Verified Doctors</p>
                  </div>
                  <img
                    className="h-24 md:h-36 "
                    src="../../images/onlinedoctor.avif"
                    alt=""
                  />
                </div>
                <div className="flex justify-between bg-yellow-200 rounded  flex-1">
                  <div className="pl-3 pt-2">
                    <h1 className="text-blue-950 font-semibold">
                      In-clinic Visit
                    </h1>
                    <p>Book Appointment</p>
                  </div>
                  <img
                    className="h-24 md:h-36"
                    src="../../images/femaledoc.avif"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between p-0 bg-green-200 rounded ">
                <div className="pl-3 pt-2">
                  <h1 className="text-blue-950 font-semibold">Health Blogs</h1>
                  <p>Read Blogs</p>
                </div>
                <img
                  className="h-20 md:h-36"
                  src="../../images/blog.png"
                  alt=""
                />
              </div>
            </div>
            <div id="right-cards" className="flex flex-col md:w-[50%] gap-2">
              <div className="flex justify-between bg-green-200 rounded p-0">
                <div className="pl-3 pt-2">
                  <h1 className="text-blue-950 font-semibold ">Doctors</h1>
                  <p>Find Best Doctors</p>
                </div>
                <img
                  className="h-24 md:h-36"
                  src="../../images/instant-img.avif"
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-2  mx-2 mb-2 ">
                <div className="border-b-2  flex flex-col items-center rounded-md   p-2  md:w-32">
                  <div className="bg-yellow-200 rounded-t-md w-full flex justify-center">
                    <img
                      className="w-20"
                      src="../../images/labs-images.avif"
                      alt=""
                    />
                  </div>
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Labs
                  </h1>
                </div>
                <div className=" border-b-2 flex flex-col items-center rounded-md bg-white p-2 md:w-32">
                  <div className="bg-yellow-200 w-full flex justify-center">
                    <img
                      className="w-20"
                      src="../../images/waight-loss-man.avif"
                      alt=""
                    />
                  </div>
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Weight Loss
                  </h1>
                </div>
                <div className="border-b-2 flex flex-col items-center rounded-md bg-white p-2 md:w-32">
                  <img
                    className="h-24"
                    src="../../images/register-man.avif"
                    alt=""
                  />
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Hospitals
                  </h1>
                </div>
                <div className="border-b-2 flex flex-col items-center rounded-md bg-white p-2 md:w-32">
                  <img
                    className="h-24"
                    src="../../images/surgries.avif"
                    alt=""
                  />
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Surgeries
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Consult best doctors online Start*/}

      <div className="w-[88%] m-auto ">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold ">
            Consult best doctors online
          </h1>
          <Link to="#">
            {" "}
            <h1 className="text-xl font-semibold text-blue-950">View All</h1>
          </Link>
        </div>
        <div className="flex flex-wrap gap-16 my-10">
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={gynecologist} alt="" />
              <h1 className="py-4">Gynecologist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={blood} alt="" />
              <h1 className="py-4 pl-4">Diabetes Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={eye} alt="" />
              <h1 className="py-4">Eye Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={ent} alt="" />
              <h1 className="py-4">Ent Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={child} alt="" />
              <h1 className="py-4">Child Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={orthopedic} alt="" />
              <h1 className="py-4">Child Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={skin} alt="" />
              <h1 className="py-4">Skin Specialist</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Search doctor by condition */}

      <div className="w-[88%] m-auto">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold mb-4">
            Consult best doctors online
          </h1>
          <Link to="#">
            {" "}
            <h1 className="text-xl font-semibold text-blue-950">View All</h1>
          </Link>
        </div>
        <div className="flex flex-wrap gap-16 my-10">
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={acne} alt="" />
              </div>
              <h1 className="py-4">Acne</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={highhblood} alt="" />
              </div>
              <h1 className="py-4">High Blood Pressure</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={piles} alt="" />
              </div>
              <h1 className="py-4">Piles</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={heartAttack} alt="" />
              </div>
              <h1 className="py-4">Heart Attack</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={pregnancy} alt="" />
              </div>
              <h1 className="py-4">Pregnancy</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={diarrhea} alt="" />
              </div>
              <h1 className="py-4">Diarrhea</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={fever} alt="" />
              </div>
              <h1 className="py-4">Fever</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* nbcndbfvgk*/}

      {/* marquee section start */}

      <div id="marquee-section" className="">
        <div className="self-marquee w-[90%] m-auto  ">
          <h1 className="text-xl font-semibold">Our Technology Partners</h1>
          <div className="p-10">
            <Marquee  pauseOnClick speed={100} delay={2}>
              <div className="flex gap-20 items-center">
                <div className="w-32 ml-16">
                  <img src={sony} alt="" />
                </div>
                <div className="w-32">
                  <img src={zameen} alt="" />
                </div>
                <div className="w-32">
                  <img src={hbl} alt="" />
                </div>
                <div className="w-32">
                  <img src={abbott} alt="" />
                </div>
                <div className="w-32">
                  <img src={tcs} alt="" />
                </div>
                <div className="w-32">
                  <img src={sony} alt="" />
                </div>
                <div className="w-32">
                  <img src={zameen} alt="" />
                </div>
                <div className="w-32">
                  <img src={hbl} alt="" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* new section */}
    
    </>
  );
}

export default  HOC(HomePage)