import React, { useEffect, useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import svg from "../../../assets/svg";
import Dashboard from "./Dashboard";
import Retribusi from "./Retribusi";
import Status from "./Status";
import Rekap from "./Rekap";
import PAD from "./PAD";
import Profil from "./Profil";

const AdminCS = () => {
  const [toggle, setToggle] = useState(true);
  const { pathname } = useLocation();
  const [content, setContent] = useState();

  const adminRole = localStorage.getItem("admin");
  console.log(adminRole);
  const navigate = useNavigate();
  useEffect(() => {
    if (parseInt(adminRole) !== 1) navigate("/admin/login");
  }, [adminRole, navigate]);

  useEffect(() => {
    switch (pathname.split("/")[4]) {
      case "":
        return setContent(<Dashboard />);
      case "retribusi-pelanggan":
        return setContent(<Retribusi />);
      case "status-po":
        return setContent(<Status />);
      case "rekap-pesanan":
        return setContent(<Rekap />);
      case "pad":
        return setContent(<PAD />);
      case "profil":
        return setContent(<Profil />);
      default:
        break;
    }
  }, [pathname]);

  return (
    <>
      <div className="flex overflow-x-auto no-scrollbar">
        <div
          className={`fixed bg-orange-900 rounded-tr-2xl rounded-br-2xl z-10 ${
            toggle ? "w-72" : "w-20"
          } min-h-screen duration-500`}
        >
          <div
            className={`relative py-2 ${
              toggle ? "md:py-10" : "md:py-4"
            } duration-500`}
          >
            <img
              src={svg.LogoDashboardUser}
              alt="simpelmenok"
              className="mx-auto px-2"
            />
            <div
              className="bg-orange-900 border-white border-2 flex justify-center items-center absolute w-[20px] h-[20px] top-16 -right-3 rounded-full"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <BiChevronsLeft /> : <BiChevronsRight />}
            </div>
            {/* Sidebar */}
            <Sidebar toggle={toggle} />
          </div>
        </div>
        <div
          className={`flex-1 py-10 ${
            toggle ? "ml-72" : "ml-20"
          } duration-500 px-8 pt-6 ${toggle ? "md:pt-[53px]" : "md:pt-6"}`}
        >
          {/* Navbar Top */}
          <Navbar />
          {/* Main Content */}
          <main className="mt-6">{content}</main>
          <div className="copyright fixed bottom-5 right-10">asdasd</div>
        </div>
      </div>
    </>
  );
};

export default AdminCS;
