import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "./components/AuthLayout";
import Alerts from "../../components/Alerts";

import svg from "../../assets/svg";
import { MdEmail, MdLock } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [alerts, setAlerts] = useState(false);
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const login = await axios
      .post("https://hookb.in/Xk17j2l08BHDkmwD3lgW", fields, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
        setAlerts(true);
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <AuthLayout images={svg.loginPage} altImages='woman-and-password-laptop'>
        {alerts && (
          <Alerts
            background='bg-green-100'
            textColor='text-green-600'
            textContent='Login Berhasil'
          />
        )}
        <div className='w-full p-6 xs:p-12 2md:p-0 rounded-2xl shadow-[0_4px_20px_0_#00000029] 2md:shadow-none'>
          <h3 className='mb-1'>Selamat Datang Kembali!</h3>
          <p className='mb-7'>Silahkan masuk untuk mengakses akun Anda</p>
          <form className='flex flex-col mb-8' onSubmit={handleSubmit}>
            <div className='relative w-full flex flex-col mb-4'>
              <input
                type='email'
                className='input-field'
                placeholder='Email'
                name='email'
                required
                autoComplete='on'
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <MdLock className='absolute text-2xl top-17/sp left-5 fill-secondary-800' />
              {showPassword ? (
                <VscEyeClosed
                  className='absolute text-2xl top-17/sp right-5 fill-secondary-800 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <VscEye
                  className='absolute text-2xl top-17/sp right-5 fill-secondary-800 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <p className='mb-8'>
              Lupa kata sandi?{" "}
              <Link to='/forgot-password' className='font-bold'>
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
