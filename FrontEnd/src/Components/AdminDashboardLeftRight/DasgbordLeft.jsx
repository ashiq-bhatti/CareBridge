import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { RiBookletFill } from "react-icons/ri";
import { Link} from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";

function DasgbordLeft() {
  
  return (
    <div>
      <div
        id="left_catagaries"
        className=" h-screen p-6  bg-slate-900 text-white"
      >
        <div className="flex items-center gap-2 my-3 mt-20">
          <MdDashboardCustomize className="text-xl" />
          <Link to="/admin">
            <h1 className="">Dashboard</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaUserDoctor className="text-xl" />

          <Link to="/admin/doctorAdminPage">
            <h1 className="my-3">Doctors</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-xl" />
          <Link to="/admin/loginusers">
            <h1 className="my-3">Login Users</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <RiBookletFill className="text-xl" />
          <Link to="/admin/bookAppointPatientPage">
            <h1 className="my-3">Appointments</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DasgbordLeft;
