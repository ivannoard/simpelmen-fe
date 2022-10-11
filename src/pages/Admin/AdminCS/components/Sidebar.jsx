import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPencilSquare, BsPersonSquare } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { RiBookReadFill, RiStickyNoteFill } from 'react-icons/ri';

const Sidebar = (props) => {
  return (
    <>
      <nav className="mt-8 flex flex-col gap-5 px-8">
        <NavLink
          to="/admin/cs/dashboard/"
          className={`sidebar-admin text-15/sp font-semibold text-white py-[14px] flex items-center gap-6 duration-500 transition-200 ${
            props.toggle ? 'px-5 hover:!bg-orange-600/80' : ''
          } rounded-lg`}
        >
          <MdDashboard
            size={18}
            fill="#FFFFFF"
          />
          {props.toggle ? 'Dashboard' : ''}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/retribusi-pelanggan"
          className={`sidebar-admin text-15/sp font-semibold text-white py-[14px] flex items-center gap-6 duration-500 transition-200 ${
            props.toggle ? 'px-5 hover:!bg-orange-600/80' : ''
          } rounded-lg`}
        >
          <BsPersonSquare
            size={18}
            fill="#FFFFFF"
          />
          {props.toggle ? 'Retribusi Pelanggan' : ''}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/status-po"
          className={`sidebar-admin text-15/sp font-semibold text-white py-[14px] flex items-center gap-6 duration-500 transition-200 ${
            props.toggle ? 'px-5 hover:!bg-orange-600/80' : ''
          } rounded-lg`}
        >
          <RiBookReadFill
            size={18}
            fill="#FFFFFF"
          />
          {props.toggle ? 'Status PO' : ''}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/rekap-pesanan"
          className={`sidebar-admin text-15/sp font-semibold text-white py-[14px] flex items-center gap-6 duration-500 transition-200 ${
            props.toggle ? 'px-5 hover:!bg-orange-600/80' : ''
          } rounded-lg`}
        >
          <BsPencilSquare
            size={18}
            fill="#FFFFFF"
          />
          {props.toggle ? 'Rekap Pesanan' : ''}
        </NavLink>
        <NavLink
          to="/admin/cs/dashboard/pad"
          className={`sidebar-admin text-15/sp font-semibold text-white py-[14px] flex items-center gap-6 duration-500 transition-200 ${
            props.toggle ? 'px-5 hover:!bg-orange-600/80' : ''
          } rounded-lg`}
        >
          <RiStickyNoteFill
            size={18}
            fill="#FFFFFF"
          />
          {props.toggle ? 'PAD' : ''}
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
