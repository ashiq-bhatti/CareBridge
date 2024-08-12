import React, { useState } from "react";
import { Link } from "react-router-dom";
import { post } from "../Services/ApiEndPoint";
import { toast } from 'react-hot-toast';

// import axios from "axios";

export default function LoginPage() {
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
    const { email, password } = formData;
    try {
      const request = await post("/api/auth/login", { email, password });
      const response = request.data;
      if (response.status == 200) {
        toast.success(response.message);
      }
      console.log(response);

    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="w-full max-w-sm  mx-auto mt-10 bg-white border-2 p-8 shadow-md rounded-md">
        <div className="w-full max-w-2xl">
          <h1 className=" text-2xl font-bold mb-6 text-center text-gray-700">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account? {""}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Go to Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
