// CheckRole.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckRole({ children }) {
  const user = localStorage.getItem("UserData");
  console.log("user", user);
  const location = useLocation();

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}

export default CheckRole;
