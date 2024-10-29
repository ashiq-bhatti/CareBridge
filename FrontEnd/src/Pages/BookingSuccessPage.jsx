import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import HOC from "../Components/HOC";
import axios from "axios";
function BookingSuccessPage() {
  const [doctor, setDoctor] = useState("");
  const [patientbooking, setPatientbooking] = useState("");

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
        console.log("res", response);
      } catch (error) {
        console.log(error);
      }
      console.log("Doctor ID:", id);
    };
    GetDoctorbyId();
  }, [id]);

  useEffect(() => {
    const GetPatientBookingbyId = async () => {
      try {
        const request = await axios.get(
          `http://localhost:5000/api/patientappointmentaooking/get-patientbooking-by-id/${id}`
        );
        const response = request.data;
        if (request.status === 200) {
          setPatientbooking(response);
        }

        console.log("res", response);
      } catch (error) {
        console.log(error);
      }
      console.log("Parient ID:", id);
    };
    GetPatientBookingbyId();
  }, []);
  return (
    <>
      <div className="w-[45%] m-auto my-10 rounded shadow">
        <div className="border-b py-3 px-3 ">
          <h1 className="text-lg font-semibold">Appointment Detail</h1>
        </div>
        <div className=" p-5">
          <div className="mb-5">
            <div className="flex gap-2">
              <FaRegUser className="text-2xl" />
              <p className="text-slate-500">Patient Name</p>
            </div>
            <p className="pl-10">{patientbooking.name}Noor Fatima</p>
          </div>
          <div className="mb-5">
            <div className="flex  gap-2">
              <MdOutlineDateRange className="text-2xl" />
              <p className="text-slate-500">Appointment Date</p>
            </div>
            <p className="pl-10">{patientbooking.time}10:00 Am</p>
          </div>
          <div className="mb-5">
            <div className="flex  gap-2">
              <FaUserDoctor className="text-2xl" />
              <p className="text-slate-500">Doctor Name</p>
            </div>
            <p className="pl-10">
              {doctor.fname} {doctor.lname}
            </p>
          </div>
          <div className="flex  gap-2">
            <MdPayment className="text-2xl" />
            <p className="text-slate-500">
              Rs 4000{doctor.fee} 
            </p>
          </div>

          <div className="w-[50%] m-auto mt-10">
            <Link to="https://wa.me/qr/6BZQB56QQ2TXJ1">
              <button
                type="submit"
                className="flex justify-centergap-2 border border-green-400 py-2 px-5 rounded   "
              >
                <FaWhatsapp className="text-2xl text-green-400" />
                <p className="text-green-400 text-center">Remid Via Whatsapp</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(BookingSuccessPage);
