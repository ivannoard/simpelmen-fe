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
          to="/"
          className="navlinks py-[14px] flex items-center gap-[27px] duration-500 transition-200"
        >
          <GiBookshelf size={18} fill="#A69798" />
          {props.toggle ? "Pesanan" : ""}
        </NavLink>
        <NavLink
          to="/"
          className="navlinks py-[14px] flex items-center gap-[27px] duration-500 transition-200"
        >
          <IoIosWallet size={18} fill="#A69798" />
          {props.toggle ? "Pembayaran" : ""}
        </NavLink>
        <NavLink
          to="/"
          className="navlinks py-[14px] flex items-center gap-[27px] duration-500 transition-200"
        >
          <MdLocalShipping size={18} fill="#A69798" />
          {props.toggle ? "Lacak Pesanan" : ""}
        </NavLink>
        <NavLink
          to="/"
          className="navlinks py-[14px] flex items-center gap-[27px] duration-500 transition-200"
        >
          <BsFillPersonFill size={18} fill="#A69798" />
          {props.toggle ? "Profil Saya" : ""}
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
