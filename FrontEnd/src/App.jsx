import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import BlogPage from "./Pages/BlogPage";
import SurgeriesPage from "./Pages/SurgeriesPage";
import toast, { Toaster } from "react-hot-toast";
import HospitalsPage from "./Pages/HospitalsPage";
import AllDrSpecialist from "./Pages/allSpecialist/AllDrSpecialist";
import BookAppointment from "./Components/BookAppointment";
import DrProfilePage from "./Pages/DrProfilePage";
import SingleBlogPage from "./Components/SingleBlogPage";
import PatAppointmentFormDetailPage from "./Pages/PatAppointmentFormDetailPage";
import PaymentMethodPage from "./Pages/PaymentMethodPage";
import CreditCardFormPage from "./Pages/CreditCardFormPage";
import DoctorRegisterPage from "./Pages/DoctorRegisterPage";
import BookingSuccessPage from "./Pages/BookingSuccessPage";
import AdminLaout from "./Layouts/AdminLaout";
import UserLayout from "./Layouts/UserLayout";
import PublicLayout from "./Layouts/PublicLayout";
import AdminDashboard from "./Pages/AdminPages/AdminDashboard";
import DoctorAdminPage from "./Pages/AdminPages/DoctorAdminPage";
import DrUpdateFormAdmin from "./Pages/AdminPages/DrUpdateFormAdmin";
import BookAppointPatientPage from "./Pages/AdminPages/BookAppointPatientPage";
import BookingNotSuccess from "./Pages/BookingNotSuccess";
import ENT from "./Pages/allSpecialist/ENT";
import Gynicologist from "./Pages/allSpecialist/Gynicologist";
import Pulmonologist from "./Pages/allSpecialist/Pulmonologist";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPassword from "./Pages/ResetPassword";
import SkinSpecialist from "./Pages/allSpecialist/SkinSpecialist";
import ChildSpecialist from "./Pages/allSpecialist/ChildSpecialist";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/" element={<PublicLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route path="/admin" element={<AdminLaout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="loginusers" element={<AdminPage />} />
            <Route path="doctorAdminPage" element={<DoctorAdminPage />} />
            <Route path="doctorRegisterPage" element={<DoctorRegisterPage />} />
            <Route
              path="bookAppointPatientPage"
              element={<BookAppointPatientPage />}
            />
          </Route>

          <Route path="/healthblog" element={<BlogPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/surgeries" element={<SurgeriesPage />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/surgeriesPage" element={<SurgeriesPage />} />
          <Route path="/AllDrSpecialist" element={<AllDrSpecialist />} />
          <Route path="/bookAppointment/:id" element={<BookAppointment />} />
          <Route path="/drProfilePage" element={<DrProfilePage />} />
          <Route path="/singleBlogPage" element={<SingleBlogPage />} />
          <Route
            path="/patAppointmentFormDetailPage/:id"
            element={<PatAppointmentFormDetailPage />}
          />
          <Route
            path="/PaymentMethodPage/:id"
            element={<PaymentMethodPage />}
          />
          <Route path="/creditFormPage/:id" element={<CreditCardFormPage />} />
          <Route
            path="/bookingSuccessPage/:id"
            element={<BookingSuccessPage />}
          />

          <Route path='/success' element={<BookingSuccessPage />}/>
          <Route path='/cancel' element={<BookingNotSuccess />}/>


          <Route
            path="/drUpdateFormAdmin/:id"
            element={<DrUpdateFormAdmin />}
          />

          <Route path="/bookingNotSuccess" element={<BookingNotSuccess />} />
          <Route path="/ENT" element={<ENT />} />
          <Route path="/Gynicologist" element={<Gynicologist />} />
          <Route path="/allDrSpecialist" element={<AllDrSpecialist />} />
          <Route path="/Pulmonologist" element={<Pulmonologist />} />
          <Route path="/SkinSpecialist" element={<SkinSpecialist />} />
          <Route path="/ChildSpecialist" element={<ChildSpecialist />} />

          <Route path="/forget-password" element={<ForgotPasswordPage />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}
