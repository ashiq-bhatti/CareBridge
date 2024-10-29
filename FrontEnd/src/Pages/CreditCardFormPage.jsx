import React,{useState,useEffect} from "react";
import HOC from "../Components/HOC";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CreditCardFormPage() {
  const [doctor, setDoctor] = useState('');
 const { id } =useParams();

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
    console.log("Retrieved ID:", id);
      };
  GetDoctorbyId();
}, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[50%] p-8 my-3">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex items-center">
            <img
              src={doctor.image} 
              alt="Doctor"
              className="rounded-full w-16 h-16 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{doctor.fname} {doctor.lname}</h3>
              <p className="text-sm text-gray-500">Aug 16, 05:30pm</p>
              <p className="text-sm text-gray-500">{doctor.city}</p>
            </div>
          </div>
          <div className="text-lg font-semibold text-blue-800">Rs. {doctor.fee}</div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Credit Card Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Card Number"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name on Card
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Expiry Month (MM)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>

              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Expiry Year (YY)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option>Select Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>

              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              CVV <span className="text-blue-500 cursor-pointer">What is this?</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="CVV"
            />
          </div>
          <Link to={`/bookingSuccessPage/${doctor._id}`}>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-semibold py-3 rounded-md"
          >
            Pay Now
          </button>
          </Link>
        </form>

        <div className="mt-4 text-gray-500 text-sm">
          <p>Session expires in: <span className="font-semibold text-red-500">15m </span></p>
          <p className="mt-2">Your transaction is secured by <span className="text-purple-600">Punjab Bank</span>.</p>
        </div>
      </div>
    </div>
  );
}

export default HOC(CreditCardFormPage);
