import React, { useState, useEffect } from "react";
import { ChartPieIcon, LogoutIcon, UserIcon, UsersIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import { CogIcon, ChatIcon } from "@heroicons/react/outline";
import SideNavLink from "./SideNavLink";
import { useNavigate } from "react-router-dom";
import useAuthStore from "./hooks/UseAuthStore";

const Sidebar = ({ style, toggle }) => {
  const [togglei, setTogglei] = useState(false);
  const navigate = useNavigate();
  useEffect(() => { }, [togglei]);
  const { setAuthStatus, setAuthProfile, AuthProfile } = useAuthStore();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    if (showLogoutConfirm) {
      setAuthStatus(false);
      localStorage.removeItem("UserData");
      localStorage.removeItem("AuthToken");
      setAuthProfile({});
      navigate("/");
      window.location.reload();
    } else {
      setShowLogoutConfirm(true);
    }
  };

  return (
    <div className={`${style} flex-col fixed h-[100%] pt-[3vh] lg:pt-[5vh] bg-white border-r p-2`}>
      <div className="list-none pr-8">
        <SideNavLink onClick={toggle} name="Dashboard" to="/dashboard/">
          <ChartPieIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink onClick={toggle} name="airtime" to="/dashboard/airtime">
          <CurrencyDollarIcon className="w-5 mr-2" />
        </SideNavLink>
        <SideNavLink onClick={toggle} name="SMS" to="/dashboard/sms">
          <ChatIcon className="w-5 mr-2" />
        </SideNavLink>
        {AuthProfile && AuthProfile.role !== "client" && (
          <SideNavLink onClick={toggle} name="Users" to="/dashboard/users">
            <UsersIcon className="w-5 mr-2 " />
          </SideNavLink>
        )}
        <SideNavLink onClick={toggle} name="Profile" to="/dashboard/profile">
          <UserIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink to="/dashboard/settings" name="setting">
          <CogIcon className="w-5 hover:text-primary " onClick={toggle} />
        </SideNavLink>
        <button onClick={handleLogout} name="Logout" to="" className=" flex flex-row ">
          <LogoutIcon className="w-5 mr-2 " />
          Logout
        </button>
      </div>

      {showLogoutConfirm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Are you sure you want to log out?</h2>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setShowLogoutConfirm(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;