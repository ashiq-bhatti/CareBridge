import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { RiBookletFill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiVidiconLine } from "react-icons/ri";
import { FaRegHospital } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Logout } from "../../ReduxToolkit/AuthSlice";
import axios from "axios";
import DasgbordLeft from "../../Components/AdminDashboardLeftRight/DasgbordLeft";
import DashboardRight from "../../Components/AdminDashboardLeftRight/DashboardRight";

function AdminDashboard() {
  const navigate = useNavigate;
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const request = await axios.post("http://localhost:5000/api/auth/logout");
      const response = request.data;
      if (request.status == 200) {
        dispatch(Logout());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row ">
        <DasgbordLeft className="w-full " />
        <div id="right_boxes" className="w-full ">
          <DashboardRight className="fixed top-0 w-full z-50 " />
          <div className="w-[80%] m-auto">
            <div className="w-[90%] mt-3 m-auto lg:flex  gap-5 ">
              <div className=" w-[180%] flex justify-between p-4 mt-1  bg-yellow-100 rounded ">
                <div className=" space-y-2">
                  <p> Total Appointments</p>
                  <h1 className="text-lg font-semibold">500 +</h1>
                  <p>In Auguest</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full ">
                  <HiOutlineUserGroup className=" text-black text-2xl ml-3 mt-2 " />
                </div>
              </div>
              <div className=" w-[180%] flex justify-between p-4 mt-1  bg-yellow-100 rounded ">
                <div className=" space-y-2">
                  <p>Online Served Patients</p>
                  <h1 className="text-lg font-semibold">400 +</h1>
                  <p>In Auguest</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full ">
                  <RiVidiconLine className=" text-black text-2xl ml-3 mt-2 " />
                </div>
              </div>
            </div>
            <div className="w-[90%]  m-auto flex gap-5 my-10 ">
              <div className=" w-[180%] flex justify-between p-4 mt-1 bg-pink-200 rounded ">
                <div className=" space-y-2">
                  <p> Total Appointments</p>
                  <h1 className="text-lg font-semibold">500 +</h1>
                  <p>In Auguest</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full ">
                  <HiOutlineUserGroup className=" text-black text-2xl ml-3 mt-2 " />
                </div>
              </div>
              <div className=" w-[180%] flex justify-between p-4mt-1  bg-pink-200 rounded ">
                <div className=" space-y-2">
                  <p>Online Served Patients</p>
                  <h1 className="text-lg font-semibold">400 +</h1>
                  <p>In Auguest</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full mt-3 mr-3 ">
                  <RiVidiconLine className=" text-black text-2xl ml-3 mt-2 " />
                </div>
              </div>
              <div className=" w-[180%] flex justify-between p-4 mt-1  bg-pink-200 rounded ">
                <div className=" space-y-2">
                  <p>In Clanic Served Patients</p>
                  <h1 className="text-lg font-semibold">100</h1>
                  <p>In Auguest</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full ">
                  <FaRegHospital className=" text-black text-2xl ml-3 mt-2 " />
                </div>
              </div>
            </div>

            <div className="mt-10 w-[90%] m-auto">
              <div className="  flex justify-between p-4  bg-sky-100 rounded ">
                <div className=" space-y-7">
                  <p>In Clanic Served Patients</p>
                  <h1 className="text-lg font-semibold">100</h1>
                  <p>In Auguest</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full ">
                  <FaRegHospital className=" text-black text-2xl ml-3 mt-2 " />
                </div>
              </div>
            </div>

            {/* <div className="h-[50%] w-[90%] m-auto mt-4 m">
            <img className="h-full w-full" src="https://www.pngitem.com/pimgs/m/268-2684542_month-on-month-bar-chart-hd-png-download.png" alt="" />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
