import React from 'react'
import fe from "../imgHelpTodat/femaledoc.avif";
import BookAppointment from '../Components/BookAppointment'
import { Link } from 'react-router-dom';
import HOC from '../Components/HOC';
function DrBySpecialtyPage() {
    return (
        < >
        <div className="bg-slate-50">
          <div className="drCard bg-white flex justify-between items-center shadow-sm border rounded w-[88%] m-auto mt-8 p-9  ">
            <div className="left-profile-name flex gap-9 ">
              <div className="bg-slate-500 rounded-full w-36 h-36 flex items-center justify-center">
                <img className="w-36 h-36 rounded-full mx-auto" src={fe} alt="" />
              </div>
              <div>
                <div className="py-3">
                <h1 className="text-xl font-semibold">Prof. Dr. Ambreen Akhtar</h1>
                <p>Gynecologist</p>
                <p>MBBS,FCPS,MCPS,FIMSA</p>
                </div>
                <div className="flex space-x-6">
                  <div>
                    <h1 className="font-semibold">Under 15 Mins</h1>
                    <p className="text-sm">Wait Time</p>
                  </div>
                  <div className="border-x-2 px-5">
                    <h1 className="font-semibold">27 Years </h1>
                    <p className="text-sm">Experience</p>
                  </div>
                  <div>
                    <h1 className="font-semibold">99 %</h1>
                    <p className="text-sm">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-btn space-y-5 flex flex-col">
              <button type="button" className="border border-blue-900 text-center font-semibold  rounded-md py-3 px-28 hover:border-yellow-600 ">View Profile </button>
              <Link to='/bookAppointment'>
              <button   type="button" className="border bg-blue-900 text-center font-semibold  rounded-md py-3 px-28 text-white hover:bg-blue-800 ">Book Appointment </button>

              </Link>
            </div>
          </div>
          <div className="drCard bg-white flex justify-between items-center shadow-sm border rounded w-[88%] m-auto mt-8 p-9  ">
            <div className="left-profile-name flex gap-9 ">
              <div className="bg-slate-500 rounded-full w-36 h-36 flex items-center justify-center">
                <img className="w-36 h-36 rounded-full mx-auto" src={fe} alt="" />
              </div>
              <div>
                <div className="py-3">
                <h1 className="text-xl font-semibold">Prof. Dr. Ambreen Akhtar</h1>
                <p>Gynecologist</p>
                <p>MBBS,FCPS,MCPS,FIMSA</p>
                </div>
                <div className="flex space-x-6">
                  <div>
                    <h1 className="font-semibold">Under 15 Mins</h1>
                    <p className="text-sm">Wait Time</p>
                  </div>
                  <div className="border-x-2 px-5">
                    <h1 className="font-semibold">27 Years </h1>
                    <p className="text-sm">Experience</p>
                  </div>
                  <div>
                    <h1 className="font-semibold">99 %</h1>
                    <p className="text-sm">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-btn space-y-5 flex flex-col">
              <button type="button" className="border border-blue-900 text-center font-semibold  rounded-md py-3 px-28 hover:border-yellow-600 ">View Profile </button>
              <button type="button" className="border bg-blue-900 text-center font-semibold  rounded-md py-3 px-28 text-white hover:bg-blue-800 ">Book Appointment </button>
            </div>
          </div>
          <div className="drCard bg-white flex justify-between items-center shadow-sm border rounded w-[88%] m-auto mt-8 p-9  ">
            <div className="left-profile-name flex gap-9 ">
              <div className="bg-slate-500 rounded-full w-36 h-36 flex items-center justify-center">
                <img className="w-36 h-36 rounded-full mx-auto" src={fe} alt="" />
              </div>
              <div>
                <div className="py-3">
                <h1 className="text-xl font-semibold">Prof. Dr. Ambreen Akhtar</h1>
                <p>Gynecologist</p>
                <p>MBBS,FCPS,MCPS,FIMSA</p>
                </div>
                <div className="flex space-x-6">
                  <div>
                    <h1 className="font-semibold">Under 15 Mins</h1>
                    <p className="text-sm">Wait Time</p>
                  </div>
                  <div className="border-x-2 px-5">
                    <h1 className="font-semibold">27 Years </h1>
                    <p className="text-sm">Experience</p>
                  </div>
                  <div>
                    <h1 className="font-semibold">99 %</h1>
                    <p className="text-sm">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-btn space-y-5 flex flex-col">
              <button type="button" className="border border-blue-900 text-center font-semibold  rounded-md py-3 px-28 hover:border-yellow-600 ">View Profile </button>
              <button type="button" className="border bg-blue-900 text-center font-semibold  rounded-md py-3 px-28 text-white hover:bg-blue-800 ">Book Appointment </button>
            </div>
          </div>
          </div>
        </>
      );
}

export default  HOC(DrBySpecialtyPage)