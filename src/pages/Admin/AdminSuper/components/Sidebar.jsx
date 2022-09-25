import React from "react";
import { NavLink } from "react-router-dom";
import { BsPencilSquare, BsPersonSquare } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { RiBookReadFill, RiStickyNoteFill } from "react-icons/ri";

const Sidebar = (props) => {
  return (
    <>
      <nav className=" mt-8 flex flex-col gap-5 px-8">
        <NavLink
          to="/admin/super/dashboard/"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5 hover:bg-orange-600" : ""
          } rounded-lg`}
        >
          <MdDashboard size={18} fill="#FFFFFF" />
          {props.toggle ? "Dashboard" : ""}
        </NavLink>
        <NavLink
          to="/admin/super/dashboard/anggota"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5 hover:bg-orange-600" : ""
          } rounded-lg`}
        >
          <BsPersonSquare size={18} fill="#FFFFFF" />
          {props.toggle ? "Anggota" : ""}
        </NavLink>
        <NavLink
          to="/admin/super/dashboard/produk"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5 hover:bg-orange-600" : ""
          } rounded-lg`}
        >
          <RiBookReadFill size={18} fill="#FFFFFF" />
          {props.toggle ? "Produk" : ""}
        </NavLink>
        <NavLink
          to="/admin/super/dashboard/spesifikasi"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5 hover:bg-orange-600" : ""
          } rounded-lg`}
        >
          <BsPencilSquare size={18} fill="#FFFFFF" />
          {props.toggle ? "Spesifikasi" : ""}
        </NavLink>
        <NavLink
          to="/admin/super/dashboard/rekap-pesanan"
          className={`text-15/sp font-semibold text-white py-[14px] flex items-center gap-[27px] duration-500 transition-200 ${
            props.toggle ? "px-5 hover:bg-orange-600" : ""
          } rounded-lg`}
        >
          <RiStickyNoteFill size={18} fill="#FFFFFF" />
          {props.toggle ? "Rekap Pesanan" : ""}
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
