import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function ResetPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    debugger;
    e.preventDefault();
    const { password } = formData;
    try {
      const request = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${id}/${token}`,
        { password }
      );
      const response = request.data;
      if (request.status === 200) {
        toast.success("Password Reset Successfully");
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-full mt-28">
        <div className="w-full max-w-sm mx-auto bg-white border-2 p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Enter Password
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Please enter the Password"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
