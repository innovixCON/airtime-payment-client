import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import SendAirtimeList from "../pages/SendAirtimeList";
import CheckRole from "../ProtectedRoute"; // Import the CheckRole component
import SendAirtime from "../pages/SendAirtime";

const DashboardRoutes = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar toggle={handleClick} style="hidden lg:flex" />
      <Routes>
        <Route
          path="/"
          element={
            <CheckRole>
              <Dashboard />
            </CheckRole>
          }
        />
        <Route
          path="/airtime"
          element={
            <CheckRole>
              <SendAirtimeList />
            </CheckRole>
          }
        />
        <Route 
          path="/sendAirtime"
          element={
            <CheckRole>
              <SendAirtime />
            </CheckRole>
          }
        />
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
