import React from "react";
import "./App.css";
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import SurgeriesPage from './Pages/SurgeriesPage'
import  { Toaster } from 'react-hot-toast';
import HospitalsPage from "./Pages/HospitalsPage";
import DrBySpecialtyPage from './Pages/DrSpecialityByCityPage'
import BookAppointment from './Components/BookAppointment'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/healthblog" element={<BlogPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/surgeries" element={<SurgeriesPage />} />
          <Route path="/drSpecialityByCityPage" element={<DrBySpecialtyPage />} />
          <Route path="/bookAppointment" element={<BookAppointment />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}
