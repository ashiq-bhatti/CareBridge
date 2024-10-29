import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import loginimg from "../imgHelpTodat/login.jpg";
import loginimg from "../imgHelpTodat/hospital.jpg";

import { useDispatch } from "react-redux";
import { SetPatient } from "../ReduxToolkit/AuthSlice";
import axios from "axios";
import AdminDashboard from "./AdminPages/AdminDashboard";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // debugger
    const { email, password } = formData;
    try {
      const request = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      const response = request.data;
      console.log("::::", response);
      if (request.status === 200) {
        if (response.patient.role === "admin") {
          navigate("/admin");
        } else if (response.patient.role === "patient") {
          navigate("/");
        }
        toast.success(response.message);
        dispatch(SetPatient(response.patient));
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("User not found");
        } else if (error.response.status === 401) {
          toast.error("Invalid password");
        } else {
          toast.error("Unexpected error occurred");
        }
      }
      console.error("Error logging in..", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-sm mx-auto bg-white border-2 p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Patient Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please enter the email"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Please enter the password"
                onChange={handleChange}
                className=" mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <Link to="/forget-password" className="text-blue-600 ">
                Forgot Password
              </Link>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Go to Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
