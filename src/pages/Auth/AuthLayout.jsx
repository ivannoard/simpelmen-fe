import React, { useState } from "react";
import { Link } from "react-router-dom";

import svg from "../../assets/svg";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const AuthLayout = ({ children }) => {
  return (
    <>
      <main className='containers min-h-screen flex justify-center items-center'>
        <div className='w-full grid grid-cols-4 2xsm:grid-cols-8 2md:grid-cols-12 gap-x-4 2xsm:gap-x-8 items-center'>
          <div className='col-span-6 hidden 2md:block'>
            <Link to='/' className='flex items-center mb-3'>
              <HiOutlineArrowSmLeft className='text-2xl mr-3' />
              <span className='leading-10'>Kembali</span>
            </Link>
            <img src={svg.loginPage} alt='woman-and-password-laptop' />
          </div>

          <div className='2xsm:col-start-2 2md:col-start-8 col-span-4 2xsm:col-span-6 2md:col-span-5'>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
