// import axios from 'axios';
import React from 'react'
import { MdLogout } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Logout } from '../../ReduxToolkit/AuthSlice';

function DashboardRight() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async()=>{
    try {
      const request = await axios.post('http://localhost:5000/api/auth/logout')
      const response = request.data
      if(request.status == 200){
        dispatch(Logout())
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className=" bg-gray-200  p-3 flex justify-end  ">
            <MdLogout
            onClick={handleLogout}
             className=" text-black text-xl cursor-pointer " />
          </div>
    </div>
  )
}

export default DashboardRight
