import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import SendAirtimeList from "../pages/SendAirtimeList";

const DashboardRoutes = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar toggle={handleClick} style="hidden lg:flex" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/airtime" element={<SendAirtimeList />} />
        </Routes>
    </div>
  );
};

export default DashboardRoutes;
