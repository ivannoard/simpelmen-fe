import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Sidebar = (props) => {
  return (
    <>
      <nav className=" mt-8 flex flex-col gap-5 px-8">
        <NavLink
          to="/admin/tu/dashboard/"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5 hover:bg-orange-600" : ""
          } rounded-lg`}
        >
          <MdDashboard size={18} fill="#FFFFFF" />
          {props.toggle ? "Dashboard" : ""}
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
