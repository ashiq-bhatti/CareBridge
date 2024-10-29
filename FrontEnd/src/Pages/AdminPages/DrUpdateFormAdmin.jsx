import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function DrUpdateFormAdmin() {
  const navigate =useNavigate()
  const { id } = useParams();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    collage: "",
    pmc: "",
    email: "",
    phone: "",
    degrees: "",
    cnic: "",
    city: "",
    specialist: "",
    fee: "",
    waitTime: "",
    experience: "",
    patientSatisfied: "",
    gender: "",
    date: "",
    timeFrom: "",
    timeTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/admin/get-doctor-by-id/${id}`
        );
        if (response.status === 200) {
          setFormData(response.data);
          toast.success('Now you can update data');
        }
        console.log(response);
      } catch (error) {
        console.log("err", error);
      }
    };
  
    fetchDoctorData();
  }, [id]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData;
    try {
      const request = await axios.put(
        ` http://localhost:5000/api/admin/updatedoctor/${id}`,
        formData
      );
      const response = request.data;
      if (request.status == 200) {
        navigate('/admin/doctorAdminPage')
        toast.success(response.message);
      }
      console.log(request);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
      <div id="">
        <div
          id="containner"
          className="w-full md:w-2/3 lg:w-1/2 m-auto mt-10 rounded shadow p-7"
        >
          <h1 className="text-2xl text-center pb-5 font-bold">Update Doctor</h1>
          <form onSubmit={handleSubmit}>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-2">
              <div className="w-full">
                <label>First Name</label>
                <input
                  type="text"
                  value={formData.fname}
                  onChange={handleChange}
                  name="fname"
                  id="fname"
                  className="px-2 w-full rounded "
                />
              </div>
              <div className="w-full">
                <label>Last Name</label>
                <input
                  type="text"
                  value={formData.lname}
                  onChange={handleChange}
                  name="lname"
                  id="lname"
                  className="px-2 w-full rounded "
                />
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>Medical Collage</label>
                <input
                  type="text"
                  value={formData.collage}
                  onChange={handleChange}
                  name="collage"
                  id="collage"
                  className="px-2 w-full rounded "
                />
              </div>
              <div className="w-full">
                <label>PMC Number</label>
                <input
                  type="text"
                  value={formData.pmc}
                  onChange={handleChange}
                  name="pmc"
                  id="pmc"
                  className="px-2 w-full rounded "
                />
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  className="px-2 w-full rounded "
                />
              </div>
              <div className="w-full">
                <label>Phone Number</label>
                <input
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  id="phone"
                  className="px-2 w-full rounded "
                />
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>Degrees Names</label>
                <input
                  type="text"
                  value={formData.degrees}
                  onChange={handleChange}
                  name="degrees"
                  id="degrees"
                  className="px-2 w-full rounded "
                />
              </div>
              <div className="w-full">
                <label>CNIC Number</label>
                <input
                  type="number"
                  value={formData.cnic}
                  onChange={handleChange}
                  name="cnic"
                  id="cnic"
                  className="px-2 w-full rounded "
                />
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>City Name</label>
                <select
                  onChange={handleChange}
                  value={formData.city}
                  name="city"
                  className="px-2 w-full rounded "
                >
                  <option>Choose city</option>
                  <option>Lahore</option>
                  <option>Faislabad</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                  <option>Multan</option>
                </select>
              </div>
              <div className="w-full">
                <label>Speciality</label>
                <select
                  value={formData.specialist}
                  onChange={handleChange}
                  name="specialist"
                  className="px-2 w-full rounded "
                >
                  <option value="">Choose Speciality</option>
                  <option value="ENT">ENT</option>
                  <option value="Urologist">Urologist</option>
                  <option value="Gayni">Gynicology</option>
                </select>
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>Fee</label>
                <select
                  onChange={handleChange}
                  value={formData.fee}
                  name="fee"
                  className="px-2 w-full  rounded "
                >
                  <option>Choose Fee</option>
                  <option>500</option>
                  <option>1000</option>
                  <option>2000</option>
                  <option>4000</option>
                  <option>5000</option>
                  <option>6000</option>
                </select>
              </div>
              <div className="w-full">
                <label>Wait Time</label>
                <select
                  onChange={handleChange}
                  value={formData.waitTime}
                  name="waitTime"
                  className="px-2 w-full rounded "
                >
                  <option>Choose Time</option>
                  <option>10 Minutes</option>
                  <option>15 Minutes</option>
                  <option>20 Minutes</option>
                </select>
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>Experience Year</label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={handleChange}
                  name="experience"
                  id="experience"
                  className="px-2 w-full rounded "
                />
              </div>
              <div className="w-full">
                <label>Patient Satisfied Rate</label>
                <input
                  type="text"
                  value={formData.patientSatisfied}
                  onChange={handleChange}
                  name="patientSatisfied"
                  id="patientSatisfied"
                  className="px-2 w-full rounded "
                />
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>Gender</label>
                <select
                  onChange={handleChange}
                  value={formData.gender}
                  name="gender"
                  className="px-2 w-full rounded "
                >
                  <option>Choose Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="w-full">
                <label>Date</label>
                <select
                  onChange={handleChange}
                  value={formData.date}
                  name="date"
                  className="px-2 rounded w-full "
                >
                  <option>Choose Date</option>
                  <option>8 Sep</option>
                  <option>9 Sep</option>
                  <option>10 Sep</option>
                  <option>11 Sep</option>
                  <option>12 Sep</option>
                </select>
              </div>
            </div>
            <div id="input" className="flex flex-col md:flex-row gap-3 mt-7">
              <div className="w-full">
                <label>Appointment Time From</label>
                <select
                  onChange={handleChange}
                  value={formData.timeFrom}
                  name="timeFrom"
                  className="px-2 w-full rounded "
                >
                  <option>Choose Time</option>
                  <option>8 AM</option>
                  <option>9 AM</option>
                  <option>10 AM</option>
                  <option>11 AM</option>
                  <option>12 AM</option>
                </select>
              </div>
              <div className="w-full">
                <label>Appointment Time To</label>
                <select
                  onChange={handleChange}
                  value={formData.timeTo}
                  name="timeTo"
                  className="px-2 rounded w-full "
                >
                  <option>Choose Time</option>
                  <option>5 PM</option>
                  <option>6 PM</option>
                  <option>7 PM</option>
                  <option>8 PM</option>
                  <option>9 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-900 p-2 rounded gap-3 mt-5 hover:bg-blue-700"
            >
              Update
            </button>
          </form>
        </div>
      </div>{" "}
    </>
  );
}

export default DrUpdateFormAdmin;
