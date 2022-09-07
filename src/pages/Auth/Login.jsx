import React, { useState } from "react";
import { Link } from "react-router-dom";

import svg from "../../assets/svg";
import { MdEmail, MdLock } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <main className='containers'>
        <div className='w-full grid grid-cols-12 gap-x-8 items-center'>
          <div className='col-span-6'>
            <Link to='/' className='flex items-center mb-3'>
              <HiOutlineArrowSmLeft className='text-2xl mr-3' />
              <span className='leading-10'>Kembali</span>
            </Link>
            <img src={svg.loginPage} alt='woman-and-password-laptop' />
          </div>

          <div className='col-start-8 col-span-5'>
            <div className='w-full'>
              <h3 className='mb-1'>Selamat Datang Kembali!</h3>
              <p className='mb-7'>Silahkan masuk untuk mengakses akun Anda</p>
              <form className='flex flex-col mb-8'>
                <div className='relative w-full flex flex-col mb-4'>
                  <input
                    type='email'
                    className='input-field'
                    placeholder='Email'
                  />
                  <MdEmail className='absolute text-2xl top-5 left-[1.125rem] fill-secondary-800' />
                </div>
                <div className='relative w-full flex flex-col mb-7'>
                  <input
                    type={showPassword ? "text" : "password"}
                    className='input-password-field'
                    placeholder='Password'
                  />
                  <MdLock className='absolute text-2xl top-5 left-5 fill-secondary-800' />
                  {showPassword ? (
                    <VscEyeClosed
                      className='absolute text-2xl top-5 right-5 fill-secondary-800'
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <VscEye
                      className='absolute text-2xl top-5 right-5 fill-secondary-800'
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
                <p className='mb-8'>
                  Lupa kata sandi?{" "}
                  <Link to='/' className='font-bold'>
                    Klik disini
                  </Link>
                </p>
                <button className='button-fill'>Masuk</button>
              </form>
              <p className='text-center'>
                Belum punya akun?{" "}
                <Link to='/' className='font-bold'>
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
