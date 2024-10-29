import React, { useState,useEffect } from "react";
import HOC from "../Components/HOC";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function PaymentMethodPage() {
  const [doctor, setDoctor] = useState('');
  const [selectedMethod, setSelectedMethod] = useState("");
  const {id} = useParams()

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

        console.log("req", request);
        console.log("res", response);
      } catch (error) {
        console.log(error);
      }
    };
    GetDoctorbyId();
  }, []);

  const handlePaymentSelection = (method) => {
    setSelectedMethod(method);
  };

  if (!doctor) {
    return <h1 className="text-2xl font-bold text-center">Doctor Not Found</h1>;
  }

  return (
    <div className="flex justify-center py-8 bg-gray-100 min-h-screen">
      <div className="w-[70%] flex justify-between">
        <div className="w-[60%] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">
            Choose a payment method
          </h2>
          <div className="space-y-4">
            {[
              "Credit / Debit (ATM) Card",
              "JazzCash Mobile Wallet",
              "Easypaisa Mobile Wallet",
              "HBL Direct Transfer",
              "Bank Transfer",
            ].map((method, index) => (
              <div
                key={index}
                className={`flex items-center p-4 border ${
                  selectedMethod === method
                    ? "border-blue-500 bg-pink-50"
                    : "border-gray-300"
                } rounded-lg`}
              >
                <input
                  type="radio"
                  id={method}
                  name="paymentMethod"
                  checked={selectedMethod === method}
                  onChange={() => handlePaymentSelection(method)}
                  className="form-radio text-blue-600 transition duration-150 ease-in-out mr-4"
                />
                <label htmlFor={method} className="w-full text-lg font-medium">
                  {method}
                </label>
                <span className="text-sm text-gray-500">Rs. 200 OFF</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <label htmlFor="couponCode" className="text-lg font-medium">
              Have a coupon/promo code?
            </label>
            <div className="flex mt-2">
              <input
                type="text"
                id="couponCode"
                placeholder="Enter discount code here"
                className="flex-1 p-3 border rounded-l-lg border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-3 rounded-r-lg">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="w-[35%] h-[60%] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
         <div>
         <img
            src={doctor.image}
            alt={doctor.name}
            className="rounded-full w-20 h-20 m-4"
          />
          </div> 
          <h3 className="text-md font-semibold">{doctor.fname} {doctor.lname}</h3>
          <p className="text-gray-500 mt-2">Online Video Consultation</p>
          <p className="text-gray-500 mt-2">{doctor.timeFrom}</p>
          <div className="mt-6 text-md font-semibold">Rs. {doctor.fee}</div>
          <div className="w-full">
            <Link to={`/creditFormPage/${doctor._id}`}>
              <button
                type="button"
                className="w-full my-5  px- text-white font-semibold bg-blue-950 py-2 rounded"
              >
                Pay Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOC(PaymentMethodPage);
