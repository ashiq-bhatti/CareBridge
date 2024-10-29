import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AdminLaout() {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate;
  if (!user || user.role !== "admin") {
    navigate("/login");
  }
  console.log(user);
  return (
    <>
    <div className="Right-side">
      <Outlet />
    </div>
    </>
  );
}

export default AdminLaout;
