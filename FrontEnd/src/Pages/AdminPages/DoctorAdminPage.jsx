import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import DasgbordLeft from "../../Components/AdminDashboardLeftRight/DasgbordLeft";
import DashboardRight from "../../Components/AdminDashboardLeftRight/DashboardRight";
function DoctorAdminPage() {
  const [doctors, setDoctors] = useState([]);

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

  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/deletedoctor/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="flex">
        <DasgbordLeft className="w-full fixed left-0 h-screen" />
        <div className=" ">
          <DashboardRight className=" w-full" />
          <div className="  mt-8 relative overflow-x-auto shadow-md sm:rounded-lg ">
            <NavLink to="/admin/doctorRegisterPage">
              <button
                type="button"
                className="bg-gray-800 text-white rounded p-2 ml-14 mb-3 "
              >
                Register Doctor
              </button>
            </NavLink>
            <div className="max-h-96 overflow-x-auto">
            <table className="m-auto text-sm text-center text-gray-500 w-[50%]  ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-1 py-3">
                    Index No
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Doctor Name
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Specialist
                  </th>
                  <th scope="col" className="px-1 py-3">
                    City
                  </th>
                  <th scope="col" className="px-1 py-3">
                    E-mail
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Fee
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Wait Time
                  </th>
                  <th scope="col" className="pl-7 py-3 pr-36">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctors &&
                  doctors.map((e, index) => {
                    return (
                      <tr
                        key={e.id || e.email}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className=" w-32 ">
                          <img
                            src={`http://localhost:5000/public/images/${e.image}`}
                            alt={`Loading`}
                            className=" w-full rounded-lg"
                          />
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900  dark:text-white">
                          {e.fname}
                        </td>
                        <td className="px-2 py-4">{e.specialist}</td>
                        <td className="px-2 py-4">{e.city}</td>
                        <td className="px-2 py-4">{e.email}</td>
                        <td className="px-2 py-4">{e.fee}</td>
                        <td className="px-2 py-4">{e.phone}</td>
                        <td className="px-2 py-4">{e.gender}</td>
                        <td className="px-2 py-4">{e.waitTime}</td>

                        <td className="flex gap-3 px-6 py-4">
                          <Link className="font-medium text-green-500 hover:underline">
                            View
                          </Link>
                          <Link
                            to={`/drUpdateFormAdmin/${e._id}`}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Update
                          </Link>
                          <Link
                            onClick={() => handleDelete(e._id)}
                            
                            className="font-medium text-red-600 hover:underline"
                          >
                            
                            Delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorAdminPage;
