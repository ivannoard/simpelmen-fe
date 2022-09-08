import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import svg from "../../assets/svg";
import { MdEmail, MdLock } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";
import Alerts from "../../components/Alerts";
import AuthLayout from "./AuthLayout";

const Register = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [alerts, setAlerts] = useState(false);
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    username: "",
    email: "",
    telp: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }
  /*
    axios
    1. https
    2. request body
    3. headers
    4. promise chain
  */
  async function handleSubmit(e) {
    e.preventDefault();
    const register = await axios
      .post("https://hookb.in/Xk17j2l08BHDkmwD3lgW", fields, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTimeout(() => {
          navigate("/login");
        }, 5000);
        setAlerts(true);
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <AuthLayout images={svg.registerPage} altImages="woman-and-handphone">
        {alerts && (
          <Alerts
            path="/login"
            background="bg-green-100"
            textColor="text-green-600"
            textContent="Berhasil Daftar"
            closeButton="true"
          />
        )}
        <div className="form-content w-full p-6 xs:p-12 2md:p-0 rounded-2xl shadow-[0_4px_20px_0_#00000029] 2md:shadow-none">
          <h2 className="text-[30px]">Daftar Akun</h2>
          <p className="text-[15px]">Silahkan daftar akun agar dapat masuk</p>
          <form className="flex flex-col gap-4 mt-7" onSubmit={handleSubmit}>
            <div className="register-input relative">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Nama Lengkap"
                className="rounded-2xl border leading-10 bg-white w-full py-[10px] pl-[60px] outline-none focus:border-orange-900"
              />
              <BsFillPersonFill className="absolute top-5 left-5 text-2xl text-secondary-800" />
            </div>
            <div className="register-input relative">
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                onChange={handleChange}
                placeholder="Email"
                className="rounded-2xl border leading-10 bg-white w-full py-[10px] pl-[60px] outline-none focus:border-orange-900"
              />
              <MdEmail className="absolute top-5 left-5 text-2xl text-secondary-800" />
            </div>
            <div className="register-input relative">
              <input
                type="telp"
                name="telp"
                required
                autoComplete="off"
                onChange={handleChange}
                placeholder="No. Handphone"
                className="rounded-2xl border leading-10 bg-white w-full py-[10px] pl-[60px] outline-none focus:border-orange-900"
              />
              <AiFillPhone className="absolute top-5 left-5 text-2xl text-secondary-800" />
            </div>
            <div className="register-input relative">
              <input
                type={!togglePassword ? "password" : "text"}
                name="password"
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Kata Sandi"
                className="rounded-2xl border leading-10 bg-white w-full py-[10px] pl-[60px] outline-none focus:border-orange-900"
              />
              <MdLock className="absolute top-5 left-5 text-2xl text-secondary-800" />
              {!togglePassword ? (
                <VscEye
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="absolute top-5 right-5 text-2xl text-secondary-800 cursor-pointer"
                />
              ) : (
                <VscEyeClosed
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="absolute top-5 right-5 text-2xl text-secondary-800 cursor-pointer"
                />
              )}
            </div>
            <div className="register-input relative">
              <input
                type={!toggleConfirmPassword ? "password" : "text"}
                name="confirmPassword"
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Konfirmasi Kata Sandi"
                className="rounded-2xl border leading-10 bg-white w-full py-[10px] pl-[60px] outline-none focus:border-orange-900"
              />
              <MdLock className="absolute top-5 left-5 text-2xl text-secondary-800" />
              {!toggleConfirmPassword ? (
                <VscEye
                  onClick={() =>
                    setToggleConfirmPassword(!toggleConfirmPassword)
                  }
                  className="absolute top-5 right-5 text-2xl text-secondary-800 cursor-pointer"
                />
              ) : (
                <VscEyeClosed
                  onClick={() =>
                    setToggleConfirmPassword(!toggleConfirmPassword)
                  }
                  className="absolute top-5 right-5 text-2xl text-secondary-800 cursor-pointer"
                />
              )}
            </div>
            <button className="button-fill w-full mt-8">Daftar</button>
          </form>
          <p className="text-center mt-8">
            Sudah mempunyai akun?{" "}
            <Link to="/login">
              <strong>Masuk</strong>
            </Link>
          </p>
        </div>
      </AuthLayout>
      {/* <main className="containers">

        <div className="w-full grid grid-cols-12 gap-x-8">
          <div className="col-span-6">
            <Link to="/">
              <div className="flex items-center gap-6 mb-4">
                <HiArrowLeft />
                <p>Kembali</p>
              </div>
            </Link>
            <img src={svg.registerPage} alt="woman-and-handphone" />
          </div>
          
        </div>
      </main> */}
    </>
  );
};

export default Register;
