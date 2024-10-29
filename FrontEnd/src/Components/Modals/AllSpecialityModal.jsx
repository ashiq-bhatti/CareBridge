import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AllSpeciality } from "../../StaticAPI/ApiData";

function AllSpecialityModal({ show, close }) {
  if (!show) return null;

  const [searchSpeciality, setSearchSpeciality] = useState("");

  const filterSpeciality = AllSpeciality.filter((e) => {
    return e.speciality.toLowerCase().includes(searchSpeciality.toLowerCase());
  });
  const handleChange = (e) => {
    setSearchSpeciality(e.target.value);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50">
      <div className="relative p-12 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b rounded-t bg-slate-100 shadow ">
            <div>
              <h1 className="text-xl  font-semibold text-center">
                Find a doctor online now
              </h1>
            </div>
            <button
              onClick={close}
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
          <div className="">          
          <input
            onChange={handleChange}
            value={searchSpeciality}
            type="text"
            placeholder="Search for speciality"
            className="w-[70%] m-auto ml-4 my-1 rounded "
          />
          
          <div className="  flex flex-wrap gap-12  w p-4 overflow-y-auto max-h-[calc(100vh-10rem)] ">
            {filterSpeciality.map((s) => (
              <div key={s.id} className=" sm:w-1/2 md:w-1/3">
                <Link>
                  <div className=" flex border-2 items-center border-gray-300 rounded-md py-2 px-6 ">
                    <img className="w-[40px]" src={s.image} alt="" />
                    <h1>{s.speciality}</h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSpecialityModal;
