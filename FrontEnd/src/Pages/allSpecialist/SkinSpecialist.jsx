
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import HOC from "../../Components/HOC";

function SkinSpecialist() {
  const [doctors, setDoctors] = useState([]);
  const [searchDoctorCity, setSearchDoctorCity] = useState("");

  useEffect(() => {
    const GetDoctor = async () => {
      try {
        const request = await axios.get(
          "http://localhost:5000/api/admin/getDoctor"
        );
        const response = request.data;
        if (request.status === 200) {
          setDoctors(response.doctors);
        }

        console.log("req", request);
        console.log("res", response);
      } catch (error) {
        console.log(error);
      }
    };
    GetDoctor();
  }, []);

  const filterDoctorCity = doctors.filter((e) => {
    const matchesCityOrName =
      (e.fname &&
        e.fname.toLowerCase().includes(searchDoctorCity.toLowerCase())) ||
      (e.city && e.city.toLowerCase().includes(searchDoctorCity.toLowerCase()));

    const isSkinSpecialist =
      e.specialist && e.specialist.toLowerCase() === "skinSpecialist";

    return matchesCityOrName && isSkinSpecialist;
  });

  const handleSearch = (e) => {
    setSearchDoctorCity(e.target.value);
  };

  return (
    <>
      <div className="w-[20%] m-auto flex rounded border border-blue-900 my-10">
        <input
          type="text"
          placeholder="Search Dr Name, City"
          value={searchDoctorCity}
          onChange={handleSearch}
          className="w-full rounded border-none outline-none p-2 text-lg"
        />
        <button type="submit" className="px-4">
          <IoSearchSharp className="text-xl" />
        </button>
      </div>
      {filterDoctorCity.length === 0 ? (
        <p className="text-center text-3xl font-semibold my-32">
          No Skin Specialist doctors found.
        </p>
      ) : (
        filterDoctorCity.map((e, index) => (
          <div
            key={index}
            className="drCard bg-white flex justify-between items-center shadow-sm border rounded w-[84%] m-auto mt-8 p-9"
          >
            <div className="left-profile-name flex gap-9">
              <div className="bg-slate-500 rounded-full w-36 h-36 flex items-center justify-center">
                <Link>
                  <img
                    className="w-36 h-36 rounded-full mx-auto"
                    src={`http://localhost:5000/public/images/${e.image}`}                           
                    alt={`${e.fname} profile`}
                  />
                </Link>
              </div>
              <div>
                <div className="py-3">
                  <Link>
                    <h1 className="text-xl font-semibold">
                      {e.fname} {e.lname}
                    </h1>
                  </Link>
                  <p>{e.specialist}</p>
                  <p>MBBS, FCPS, MCPS, FIMSA</p>
                </div>
                <div className="flex space-x-6">
                  <div>
                    <h1 className="font-semibold">Under 15 Mins</h1>
                    <p className="text-sm">{e.waitTime}</p>
                  </div>
                  <div className="border-x-2 px-5">
                    <h1 className="font-semibold">{e.experience}</h1>
                    <p className="text-sm">Experience</p>
                  </div>
                  <div>
                    <h1 className="font-semibold">{e.patientSatisfied}</h1>
                    <p className="text-sm">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-btn space-y-5 flex flex-col">
              <Link to={`/bookAppointment/${e._id}`}>
                <button
                  type="button"
                  className="border border-blue-900 text-center font-semibold rounded-md py-3 px-28 hover:border-yellow-600"
                >
                  Video Consultation
                </button>
              </Link>
              <Link to={`/bookAppointment/${e._id}`}>
                <button
                  type="button"
                  className="border bg-blue-900 text-center font-semibold rounded-md py-3 px-28 text-white hover:bg-blue-800"
                >
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}


export default HOC(SkinSpecialist)
