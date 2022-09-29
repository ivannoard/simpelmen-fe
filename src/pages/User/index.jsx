import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import svg from '../../assets/svg';
import './styles.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LacakPesanan from './LacakPesanan';
import Pembayaran from './Pembayaran';
import Pesanan from './Pesanan';
import Profile from './Profile';
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi';
import DetailPesanan from './DetailPesanan';

const Dashboard = () => {
  const [toggle, setToggle] = useState(true);
  const { pathname } = useLocation();
  const [content, setContent] = useState();
  const { pesananId } = useParams();

  useEffect(() => {
    switch (pathname.split('/')[2]) {
      case 'pesanan':
        return setContent(<Pesanan />);
      case 'detail':
        return setContent(<DetailPesanan />);
      case 'pembayaran':
        return setContent(<Pembayaran />);
      case 'lacak-pesanan':
        return setContent(<LacakPesanan />);
      case 'profil':
        return setContent(<Profile />);
      default:
        break;
    }
  }, [pathname, pesananId]);

  return (
    <>
      <div className="relative flex overflow-x-auto no-scrollbar">
        <div
          className={`fixed bg-white rounded-tr-2xl rounded-br-2xl shadow-red z-10 ${
            toggle ? 'w-52 xs:w-72' : 'w-[72px] xs:w-[86px]'
          } min-h-screen duration-500`}
        >
          <div
            className={`h-screen relative py-10 duration-500 flex flex-col justify-between`}
          >
            <div>
              <Link
                className="h-[58px] flex items-center justify-center"
                to="/"
              >
                <img
                  src={svg.LogoDashboardUser}
                  alt="simpelmenok"
                  className="mx-auto px-3"
                />
              </Link>
              {/* Sidebar */}
              <Sidebar toggle={toggle} />
            </div>
            <div className={`px-8 hidden 2xsm:block`}>
              <img
                src={svg.swingChart}
                alt="swing-chart"
                className="w-full"
              />
            </div>

            {/* Toggle */}
            <div
              className="bg-white shadow-red flex justify-center items-center absolute w-[20px] h-[20px] top-[55px] -right-[11px] rounded-full cursor-pointer z-20"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <BiChevronsLeft /> : <BiChevronsRight />}
            </div>
          </div>
        </div>

        <div
          className={`flex-1 py-10 ${
            toggle ? 'ml-52 xs:ml-72' : 'ml-[72px] xs:ml-20'
          } duration-500 px-6 xs:px-9 pt-[53px]`}
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
