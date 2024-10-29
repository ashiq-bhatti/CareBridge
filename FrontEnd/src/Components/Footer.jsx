import React, { useState } from "react";
import { DrData } from "../StaticAPI/ApiData";
function Footer() {
  const [speciality, setSpeciality] = useState(DrData);
  return (
    <>
      <div className="w-full bg-black/95  px-6 pt-10 pb-5 border-t-2 lg:px-24 lg:pt-20">
        <div className="flex flex-wrap gap-5 text-white">
          <div className="w-full md:w-1/3">
            <h1 className="text-xl font-semibold py-3">Logo</h1>
            <p className="text-sm text-white lg:text-base">
              Book appointments with the best Doctors and Specialists such as
              Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc.
              Avail test services such as MRI, CT scan, Ultrasound, X-Ray, etc.
              and Online Doctor Video Consultations all across Pakistan
              conveniently.
            </p>
          </div>
          <div className="w-full md:w-1/5">
            <h1 className="text-lg font-semibold text-white py-3">
              Top City
            </h1>
            {speciality.map((e) => {
              return (
                <div key={e.id}>
                  <p className="text-sm lg:text-base text-white">
                    {e.Location}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/5">
            <h1 className="text-lg font-semibold text-white py-3">
            Top Hospitals
            </h1>
            {speciality.map((e) => {
              return (
                <div key={e.id}>
                  <p className="text-sm lg:text-base text-white ">
                    {e.hospital}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/5">
            <h1 className="text-lg font-semibold text-white py-3">
              Top Specialists
            </h1>
            {speciality.map((e) => {
              return (
                <div key={e.id}>
                  <p className="text-sm lg:text-base text-white">
                    {e.speciality}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
