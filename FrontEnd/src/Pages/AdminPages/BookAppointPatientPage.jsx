import axios from "axios";
import React, { useState, useEffect } from "react";
import DasgbordLeft from "../../Components/AdminDashboardLeftRight/DasgbordLeft";
import DashboardRight from "../../Components/AdminDashboardLeftRight/DashboardRight";
import { NavLink } from "react-router-dom";

function BookAppointPatientPage() {
  const [bookAppointment, setBookAppointment] = useState([]); 
  
  useEffect(() => {
    const GetBookAppointment = async () => {
      try {
        const request = await axios.get(
         `http://localhost:5000/api/patientappointmentbooking/bookappointment`
        );
        
        const response = request.data;
        if (request.status === 200) {
          setBookAppointment(response);
          console.log(response)
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetBookAppointment();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <DasgbordLeft className="w-full " />
        <div className="w-full">
          <DashboardRight className="fixed top-0 w-full z-50"/>
          <div className="w-[70%] m-auto mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Index No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Patient Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Dr Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Specialist
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Dr Fee
                  </th>
                  {/* <th scope="col" className="px-6 py-3 pr-36">
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {bookAppointment &&
                  bookAppointment.map((e, index) => {
                    return (
                      <tr
                        key={index}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        {/* {JSON.stringify(e)} */}
                        <td className="px-2 py-1">{index + 1}</td>
                        <td className="px-2 py-1 font-medium text-gray-900 whitespace-nowrap ">
                          {e.name}
                        </td>
                        <td className="px-2 py-1">{e.phone}</td>
                        <td className="px-2 py-1">{e.date}</td>
                        <td className="px-2 py-1">{e.time}</td>
                        <td className="px-2 py-1">
                          {e.doctor ? `${e.doctor.fname} ${e.doctor.lname}` : "N/A"}
                        </td>
                        <td className="px-2 py-1">
                          {e.doctor ? e.doctor.specialist : "N/A"}
                        </td>
                        <td className="px-2 py-1">
                          {e.doctor ? e.doctor.fee : "N/A"}
                        </td>
                        <td className="flex gap-3 px-6 py-4">                       
                          {/* <NavLink
                            to="#"
                            className="font-medium text-green-500 hover:underline"
                          >
                            View
                          </NavLink>  */}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointPatientPage;
