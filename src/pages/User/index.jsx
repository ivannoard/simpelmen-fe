import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import svg from "../../assets/svg";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LacakPesanan from "./LacakPesanan";
import Pembayaran from "./Pembayaran";
import Pesanan from "./Pesanan";
import Profile from "./Profile";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";
import DetailPesanan from "./DetailPesanan";

const Dashboard = () => {
  const [toggle, setToggle] = useState(true);
  const { pathname } = useLocation();
  const [content, setContent] = useState();
  const { pesananId } = useParams();

  useEffect(() => {
    switch (pathname.split("/")[2]) {
      case "pesanan":
        return setContent(<Pesanan />);
      case "detail":
        return setContent(<DetailPesanan />);
      case "pembayaran":
        return setContent(<Pembayaran />);
      case "lacak-pesanan":
        return setContent(<LacakPesanan />);
      case "profil":
        return setContent(<Profile />);
      default:
        break;
    }
  }, [pathname, pesananId]);

  return (
    <>
      <div className="flex overflow-x-auto no-scrollbar">
        <div
          className={`fixed bg-white rounded-tr-2xl rounded-br-2xl shadow-red z-10 ${
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
              className="bg-white shadow-red flex justify-center items-center absolute w-[20px] h-[20px] top-16 -right-3 rounded-full"
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
          <main className="mt-10 min-h-screen">{content}</main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
