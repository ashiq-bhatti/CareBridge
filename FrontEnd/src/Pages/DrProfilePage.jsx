import React from "react";
import fe from "../imgHelpTodat/femaledoc.avif";
import { Link } from "react-router-dom";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

function DrProfilePage() {
  return (
    <>
      {/* profile section start */}

      <div className="drCard bg-white flex flex-col justify-between  items-center shadow-sm border rounded w-[70%] m-auto mt-8">
        <div className="bg-white shadow-md w-full ">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center ">
              <div className="flex space-x-16">
                <Link
                  to="#feedback"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Feedback
                </Link>
                <Link
                  to="#clinic-details"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Clinic Details
                </Link>
                <Link
                  to="#services"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Services
                </Link>
                <Link
                  to="#education"
                  onClick={"#education"}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Education
                </Link>
                <Link
                  to="#other-info"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Other Info
                </Link>
                <Link
                  to="#reviews"
                  onClick={"reviews"} 
                  className="text-gray-700 hover:text-gray-900"
                >
                  Reviews
                </Link>
                <Link to="#faqs" className="text-gray-700 hover:text-gray-900">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="bg-slate-500 rounded-full w-24 h-24 flex items-center justify-center">
            <img className="w-24 h-24 rounded-full" src={fe} alt="Doctor" />
          </div>
          <div className="ml-6 ">
            <div className="py-3">
              <h1 className="text-xl font-semibold">
                Prof. Dr. Ambreen Akhtar
              </h1>
              <p>Gynecologist</p>
              <p>MBBS, FCPS, MCPS, FIMSA</p>
            </div>
            <div className="flex space-x-6">
              <div>
                <h1 className="font-semibold">Under 15 Mins</h1>
                <p className="text-sm">Wait Time</p>
              </div>
              <div className="border-x-2 px-5">
                <h1 className="font-semibold">2 Years</h1>
                <p className="text-sm">Experience</p>
              </div>
              <div>
                <h1 className="font-semibold">99 %</h1>
                <p className="text-sm">Satisfied Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About section start */}

      <div
        id="about"
        className="drCard bg-white  shadow-sm border rounded w-[70%] mt-8 m-auto p-8"
      >
        <div>
          <h1 className="text-xl font-semibold border-b-2  pb-2 ">About</h1>
          <h2 id="education" className="font-semibold py-3">
            Qualification:{" "}
          </h2>
          <ul className="">
            <li>MBBS</li>
            <li>DLO</li>
            <li>MCPS</li>
            <li>FICS (USA)</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold py-3">Experience: </h2>
          <ul className="py-3">
            <li>Royal College of Surgeons in Ireland</li>
            <li>College of physicians</li>
            <li>Kingdom Of Saudi Arabia</li>
            <li>Agha Khan Hospital.</li>
          </ul>
        </div>
        <p>
          <span className="font-semibold">
            Assoc. Prof. Dr. Muhammad Mubarak Ali
          </span>{" "}
          is a ENT Specialist. He is having over 20 years of experience in the
          field of ENT and practices at Chughtai Medical Center ( Askari 11) and
          Chughtai Medical Center Dha phase 4. His field of interest includes
          Cancer in region of Head and Neck, Ear Wax Removal, FESS, Goitre, Head
          And Neck Infections, Headache, Hearing Evaluation And Management,
          Laryngoscopy, Myringotomy, Nasal Allergy, Nose Shape Change Goitre,
          Thyroid Surgery, Tracheostomy, Tonsillectomy, Tinnitus treatment.
        </p>
      </div>

      {/* Reviews section start */}
      <div className=" drCard bg-white  rounded w-[70%] mt-8 mb-8 m-auto ">
     <h1 id="reviews" className="text-xl font-semibold  pb-2 ">Reviews</h1>
      <div
        id="about"
        className="drCard bg-white  shadow-sm border rounded p-8 mt-8 m-auto "
      >
        <div>
          <div  className="flex gap-2 items-center">
            <span>
              {" "}
              <GrLike />
            </span>
            <h1 className="font-semibold"> I recommend the doctor</h1>
          </div>
          <p>
            {" "}
            We didn't wait for the doctor, and she answered all our questions
            and made us feel informed.{" "}
          </p>
          <p className="py-3">13 Agu 2024</p>
        </div>
      </div>
      <div
        id="about"
        className="drCard bg-white  shadow-sm border rounded p-8 mt-8 m-auto"
      >
        <div>
          <div  className="flex gap-2 items-center">
            <span>
              {" "}
              <GrDislike />
              </span>
            <h1 className="font-semibold"> I don't recommend the doctor</h1>
          </div>
          <p>
            {" "}
            We  wait for the doctor, and Doctor was bit rude.{" "}
          </p>
          <p className="py-3">13 Agu 2024</p>
        </div>
      </div>
      <div
        id="about"
        className="drCard bg-white  shadow-sm border rounded p-8 mt-8 m-auto"
      >
        <div>
          <div  className="flex gap-2 items-center">
            <span>
              {" "}
              <GrLike />
            </span>
            <h1 className="font-semibold"> I recommend the doctor</h1>
          </div>
          <p>
            {" "}
            We didn't wait for the doctor, and she answered all our questions
            and made us feel informed.{" "}
          </p>
          <p className="py-3">13 Agu 2024</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default DrProfilePage;
