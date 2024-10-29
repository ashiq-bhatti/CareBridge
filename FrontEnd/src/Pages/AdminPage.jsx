import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import DasgbordLeft from "../Components/AdminDashboardLeftRight/DasgbordLeft";
import DashboardRight from "../Components/AdminDashboardLeftRight/DashboardRight";

function AdminPage() {
  const [patients, setpatients] = useState([]);

  useEffect(() => {
    const GetUser = async () => {
      try {
        const request = await axios.get(
          "http://localhost:5000/api/admin/getPatient"
        );
        const response = request.data;
        if (request.status === 200) {
          setpatients(response.patients);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    GetUser();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/deletepatient/${id}`
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
      <div className="flex flex-col lg:flex-row">
        <DasgbordLeft className="w-full " />
        <div className="w-full">
          <DashboardRight />
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
                    E-mail
                  </th>
                  <th scope="col" className="px-6 py-3 pr-36">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {patients &&
                  patients.map((e, index) => {
                    return (
                      <tr
                        key={e.id || e.email}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {e.name}
                        </td>
                        <td className="px-6 py-4">{e.email}</td>
                        <td className="flex gap-3 px-6 py-4">
                          <Link
                            to="/admin"
                            className="font-medium text-green-500 hover:underline"
                          >
                            View
                          </Link>
                          <Link
                            to="#"
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
    </>
  );
}

export default AdminPage;
