import React,{useState} from 'react'
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
function ForgotPasswordPage() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
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
      const { email } = formData;
      try {
        const request = await axios.post("http://localhost:5000/api/auth/forgot-password", {email});
        const response = request.data;
        if (request.status === 200) { 
          toast.success('Please check your email');     
            navigate("/login");          
        }
        console.log(response);
      } catch (error) {
        console.error(error);
        toast.error('This email not found');
      }
    };
  return (
    <>
      <div className="flex items-center justify-center h-full mt-28">
        <div className="w-full max-w-sm mx-auto bg-white border-2 p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Enter Email
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Send
              </button>
            </div>
        
          </form>
        </div>
      </div>

    </>
  )
}

export default ForgotPasswordPage
