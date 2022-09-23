import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import svg from "../../../../assets/svg";

const AuthLayout = ({ images, altImages, children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <main className="grid grid-cols-12 h-screen">
        <div className="hidden lg:block !py-[20px] lg:col-span-7 bg-gradient-to-r from-primary-900 to-orange-900 px-[70px]">
          {pathname !== "/admin/login" ? (
            <div
              onClick={() => navigate(-1)}
              className="flex items-center mb-3 absolute"
            >
              <HiOutlineArrowSmLeft className="text-2xl mr-3" />
              <span className="leading-10 text-white">Kembali</span>
            </div>
          ) : (
            ""
          )}
          <div className="h-full flex flex-col items-center justify-center">
            <img src={images} alt={altImages} />
            <h3 className="text-white text-center">
              Halaman dashboard admin Simpelmen Oke
            </h3>
            <p className="text-white text-center">
              Ini merupakan halaman dashboard admin yang berfungsi untuk
              mengelola halaman web Simpelmen Oke
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex flex-col py-10 px-3 lg:px-10 justify-between">
          <div className="images flex items-center gap-4 ml-auto">
            <img src={svg.logoSimpelmen} alt="" className="w-[120px]" />
            <img src={svg.Logo} alt="" className="w-[110px]" />
          </div>
          {children}
          <p className="text-center text-sm">
            &copy; 2022 BIKDK Provinsi Jawa Tengah. All Rights Reserved.
          </p>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
