import React from "react";
import { NavLink } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
const Sidebar = (props) => {
  return (
    <>
      <nav className=" mt-8 flex flex-col gap-5 px-8">
        <NavLink
          to="/admin/cs/dashboard/"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5" : ""
          } hover:bg-orange-600 rounded-lg`}
        >
          <GiBookshelf size={18} fill="#FFFFFF" />
          {props.toggle ? "Dashboard" : ""}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/retribusi-pelanggan"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5" : ""
          } hover:bg-orange-600 rounded-lg`}
        >
          <IoIosWallet size={18} fill="#FFFFFF" />
          {props.toggle ? "Retribusi Pelanggan" : ""}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/status-po"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5" : ""
          } hover:bg-orange-600 rounded-lg`}
        >
          <MdLocalShipping size={18} fill="#FFFFFF" />
          {props.toggle ? "Status PO" : ""}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/rekap-pesanan"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5" : ""
          } hover:bg-orange-600 rounded-lg`}
        >
          <BsFillPersonFill size={18} fill="#FFFFFF" />
          {props.toggle ? "Rekap Pesanan" : ""}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/pad"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5" : ""
          } hover:bg-orange-600 rounded-lg`}
        >
          <BsFillPersonFill size={18} fill="#FFFFFF" />
          {props.toggle ? "PAD" : ""}
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
