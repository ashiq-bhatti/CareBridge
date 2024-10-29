import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DrData } from "../StaticAPI/ApiData";
import PatAppointmentFormDetailPage from "../Pages/PatAppointmentFormDetailPage";
import HOC from "./HOC";
import axios from "axios";

function BookAppointment() {
  const [showModal, setShowModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [doctor, setDoctor] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const GetDoctorbyId = async () => {
      try {
        const request = await axios.get(
          `http://localhost:5000/api/admin/get-doctor-by-id/${id}`
        );
        const response = request.data;
        if (request.status === 200) {
          setDoctor(response);
        }

        console.log("req", request);
        console.log("res", response);
      } catch (error) {
        console.log(error);
      }
    };
    GetDoctorbyId();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <>
      <div className="drCard p-4 my-5 bg-white flex justify-between items-center shadow-sm border rounded w-[60%] m-auto">
        <div className="flex gap-9">
          <div className="bg-slate-500 rounded-full w-24 h-24 flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src={`http://localhost:5000/public/images/${doctor.image}`}                           
              alt={doctor.name}
            />
          </div>
          <div>
            <div className="py-3">
              <h1 className="text-xl font-semibold">
                {doctor.fname} {doctor.lname}
              </h1>
              <p className="py-2">Video Consultation (Online)</p>
              <p className="font-semibold">Fee: Rs. {doctor.fee}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border shadow-md rounded w-[60%] m-auto mb-10">
        <div className="border shadow-m bg-gray-300 h-2 m-auto p-8">
          <div className="slider-container">
            <Slider {...settings}>
              {Array.from({ length: 13 }, (_, i) => (
                <div key={i}>
                  <h3>{`  ${doctor.date + i} `}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="p-8 flex justify-between">
          <h1 className="text-slate-500 pb-5">{`Time From ${doctor.timeFrom} `}</h1>
          <h1 className="text-slate-500 pb-5">{`Time To ${doctor.timeTo} `}</h1>
        </div>
        <div className="text-center space-x-8 mb-3">
          <Link to={`/patAppointmentFormDetailPage/${doctor._id}`}>
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="rounded border border-blue-500 bg-blue-500 hover:border-blue-950 py-2 px-4"
            >
             Procead Next{" "}
            </button>
          </Link>
        </div>
      </div>

      {/* {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-12 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t bg-slate-300 shadow pb-10">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                <h1 className="text-xl font-semibold text-center pb-3 pt-6">
                  Enter your Phone Number
                </h1>
                <p className="pb-4 text-slate-400">
                  We share this information with the doctor
                </p>
                <div className="flex rounded border my-10 p-1">
                  <div>
                    <button
                      type="button"
                      className="bg-gray-500 py-2 px-2 rounded"
                    >
                      +92
                    </button>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded border-none outline-none p-2 text-lg"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <p className="font-semibold py-1">Your appointment</p>
                  <div className="flex gap-28">
                    <div className="flex gap-9">
                      <div className="bg-slate-500 rounded-full w-12 h-12 flex items-center justify-center">
                        <img
                          className="w-12 h-12 rounded-full mx-auto"
                          src={doctor.image}
                          alt={doctor.name}
                        />
                      </div>
                      <div className="py-3">
                        <h1 className="text-sm font-semibold">
                          {doctor.name}
                        </h1>
                      </div>
                    </div>
                    <div>Time will show here</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-blue-950 text-white text-center rounded py-3 mt-16 mb-8 w-full"
                  onClick={() => {
                    setShowModal(false);
                    setShowOTPModal(true);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* {showOTPModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Enter OTP
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShowOTPModal(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Please enter the OTP sent to your phone number.
                </p>
                <input
                  type="text"
                  className="w-full rounded border p-2 text-lg outline-none"
                  placeholder="Enter OTP"
                />
              </div>
              <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                <Link to='/patAppointmentFormDetailPage'>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Verify
                </button>
                </Link>
  
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setShowOTPModal(false)}
                >
                  Cancel
                </button>

              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default HOC(BookAppointment);
