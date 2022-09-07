import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

import { MdEmail, MdLock } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <AuthLayout>
        <div className='w-full p-6 xs:p-12 2md:p-0 rounded-2xl shadow-[0_4px_20px_0_#00000029] 2md:shadow-none'>
          <h3 className='mb-2'>Selamat Datang Kembali!</h3>
          <p className='mb-7'>Silahkan masuk untuk mengakses akun Anda</p>
          <form className='flex flex-col mb-8'>
            <div className='relative w-full flex flex-col mb-4'>
              <input
                type='email'
                className='input-field'
                placeholder='Email'
                name='email'
                required
                autoComplete='on'
              />
              <MdEmail className='absolute text-2xl top-17/sp left-5 fill-secondary-800' />
            </div>
            <div className='relative w-full flex flex-col mb-7'>
              <input
                type={showPassword ? "text" : "password"}
                className='input-password-field'
                placeholder='Password'
                name='password'
                required
                autoComplete='on'
              />
              <MdLock className='absolute text-2xl top-17/sp left-5 fill-secondary-800' />
              {showPassword ? (
                <VscEyeClosed
                  className='absolute text-2xl top-17/sp right-5 fill-secondary-800'
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <VscEye
                  className='absolute text-2xl top-17/sp right-5 fill-secondary-800'
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
            <button className='button-fill transition-200'>Masuk</button>
          </form>
          <p className='text-center'>
            Belum punya akun?{" "}
            <Link to='/register' className='font-bold'>
              Daftar
            </Link>
          </p>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
