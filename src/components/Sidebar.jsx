import React, { useState, useEffect } from "react";
import {
  ChartPieIcon,
  LogoutIcon,
  UserIcon,
  UsersIcon,
  CurrencyDollarIcon
} from "@heroicons/react/solid";
import { CogIcon, } from "@heroicons/react/outline";
import SideNavLink from "./SideNavLink";

const Sidebar = ({ style, toggle }) => {
  const [togglei, setTogglei] = useState(false);
  useEffect(() => {}, [togglei]);
  return (
    <div
      className={`${style} flex-col fixed h-[100%] pt-[3vh] lg:pt-[5vh] bg-white border-r p-2`}
    >
      <div className="list-none pr-8">
        <SideNavLink 
        onClick={toggle}
         name="Dashboard" 
         to="/dashboard/">
          <ChartPieIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink 
          onClick={toggle} 
          name="airtime" 
          to="/dashboard/airtime"
        >
          <CurrencyDollarIcon  className="w-5 mr-2" />
        </SideNavLink>
        <SideNavLink 
          onClick={toggle} 
          name="payment" 
          to="/dashboard/payment"
        >
          <CurrencyDollarIcon  className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink 
          onClick={toggle} 
          name="Users" 
          to="/dashboard/users"
        >
          <UsersIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink
          onClick={toggle}
          name="Profile"
          to="/dashboard/profile"
        >
          <UserIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink 
          to="/dashboard/settings"
          name="setting"
         >
          <CogIcon className="w-5 hover:text-primary " onClick={toggle} />
        </SideNavLink>
        <SideNavLink 
          onClick={toggle} 
          name="Logout" 
          to="/logout"
        >
          <LogoutIcon className="w-5 mr-2 " />
        </SideNavLink>
      </div>
    </div>
  );
}

export default Sidebar;
