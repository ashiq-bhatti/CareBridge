import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function PublicLayout() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.user);
  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [user,navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PublicLayout;
