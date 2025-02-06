import React, { useState, useEffect } from "react";
import HOC from "../Components/HOC";
import { FaUserCheck, FaPhoneAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { json, Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

function PatAppointmentFormDetailPage() {
  const navigate = useNavigate()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [doctor, setDoctor] = useState("");
  const [formData, setFormData] = useState("");
  // const [bookappointment, setBookappointment] = useState("");

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    const GetDoctorbyId = async () => {
      try {
        const request = await axios.get(
          `http://localhost:5000/api/admin/get-doctor-by-id/${id}`
        );
        console.log(request)

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
  }, []);

  const handleCheckboxChange = (payMethod) => {
    setSelectedPaymentMethod(payMethod);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, date, time, payMethod } = formData;
    try {
      // const request = await axios.post(
      //   `http://localhost:5000/api/patientappointmentbooking/bookappointment`,
      //   { name, phone, date, time, payMethod }
      // );
      const request = await axios.post(
        `http://localhost:5000/api/create-checkout-session`,
      );
      const response = request.data;
      if (request.status === 200) {
        handleClick()
        toast.success(response.message);
        // navigate(`/bookingSuccessPage/:id`)
      }
      console.log(response);
    } catch (error) {
      console.error("Error in booking....", error);
      toast.error("Error booking the appointment.");
    }
    console.log("Doctor ID:", id);

  };
  const stripePromise = loadStripe('pk_test_51Psi6l2Ks2RgwEvQNtxct9TAwvyDrYVY7wJhYrOo5ns9NOhKhG3PJJda2J8dnQDnjnxQO3bVBghctnaGYyqYsKUR00kzYQ0KrR')
  const handleClick = async() =>{
    const response = await axios.post('http://localhost:5000/api/create-checkout-session',{
      headers:{
       'Content-Type' : "application/json"
      }
    })
    const session = await response.data

    const stripe = await stripePromise
    const error = await stripe.redirectToCheckout({
      sessionId: session.id,
    })

    if (error){
      console.error(error)
    }
  }

  return (
    <div
      id="container"
      className="flex justify-center py-8 bg-gray-100 min-h-screen"
    >
      <div className="w-[80%] flex  gap-7">
        <div
          id="inner-container"
          className="w-[60%] rounded-md bg-white shadow-md  p-4"
        >
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="font-semibold text-xl py-7">Appointment Detail</h1>
            </div>
            <div className="pt-8 pb-4">
              <div className="flex gap-3 items-center">
                <FaUserCheck className="text-xl" />
                <h1 className="text-lg">Patient Name</h1>
              </div>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                required
                placeholder="Please enter the name "
                className="border-0 border-b border-gray-500 outline-none py-3 w-full focus:border-gray-500 focus:ring-0"
              />
            </div>
            <div className="pt-8 pb-4">
              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-xl" />
                <h1 className="text-lg">Patient Phone</h1>
              </div>
              <input
                type="text"
                onChange={handleChange}
                name="phone"
                required
                placeholder="Please enter the phone number"
                className="border-0 border-b border-gray-500 outline-none py-3 w-full focus:border-gray-500 focus:ring-0"
              />
              <div className="flex items-center gap-1 text-slate-500 py-1">
                <IoInformationCircle className="text-sm text-slate-700" />
                <p className="text-xs">
                  You will be connected through this number
                </p>
              </div>
            </div>
            <div className="pt-8 pb-4">
              <div className="flex gap-3 items-center pb-4">
                <FaBusinessTime className="text-xl" />
                <h1 className="text-lg ">Select Date And Time</h1>
              </div>
              <div className="flex  gap-3">
                <input type="date" name="date" onChange={handleChange} />
                <input type="time" name="time" onChange={handleChange} />
              </div>
            </div>
            {/* <div className="flex gap-3 items-center">
              <MdOutlinePayment className="text-xl" />
              <h1 className="text-lg">Select Payment Method</h1>
            </div>
            <div className="py-8 gap-3">
              <div
                className={`flex items-center ps-4 py-5 border ${
                  selectedPaymentMethod === "online"
                    ? "border-blue-800 bg-yellow-50"
                    : "border-gray-300"
                } rounded mb-3`}
              >
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  checked={selectedPaymentMethod === "online"}
                  onChange={() => handleCheckboxChange("online")}
                  className="form-checkbox w-4 h-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="bordered-checkbox-1"
                  className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
                >
                  Pay Online
                </label>
              </div>
              <div
                className={`flex items-center ps-4 py-2 border-2 rounded ${
                  selectedPaymentMethod === "cash"
                    ? "border-yellow-200 bg-yellow-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  id="bordered-checkbox-2"
                  type="checkbox"
                  checked={selectedPaymentMethod === "cash"}
                  onChange={() => handleCheckboxChange("cash")}
                  className="form-checkbox w-4 h-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="bordered-checkbox-2"
                  className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pay Cash at Hospital
                </label>
              </div> */}
            <div className="w-full">
            {/* bookingSuccessPage/creditFormPage */}
              <button
                // onClick={makePayment}
                type="submit"
                className="w-full mb-3 text-white font-semibold bg-blue-950 py-2 rounded"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
        
        <div className="w-[35%] h-[50%] bg-white p-10 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src={`http://localhost:5000/public/images/${doctor.image}`}
              alt={doctor.fname}
              className="rounded-full w-20 h-20"
            />
            <h3 className="text-md font-semibold">
              {doctor.fname} {doctor.lname}
            </h3>
            <p className="text-sm text-gray-500">{doctor.specialist}</p>
            <p className="text-sm text-gray-500 mt-2 text-center"></p>
            <div className="mt-2 text-md font-semibold">Rs. {doctor.fee}</div>
            <div className="flex items-center mt-2 text-gray-600">
              <p>From {doctor.timeFrom}{' ---  '} To {doctor.timeTo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOC(PatAppointmentFormDetailPage);
