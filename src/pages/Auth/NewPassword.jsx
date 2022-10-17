import React, { useState } from "react";
import AuthLayout from "./components/AuthLayout";

import svg from "../../assets/svg";
import { MdLock } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate, useParams } from "react-router-dom";
import { userAuth } from "../../services/api";
import Alerts from "../../components/Alerts";

const NewPassword = () => {
  const [alerts, setAlerts] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { resetToken } = useParams();
  const [fields, setFields] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await userAuth
      .post(`/reset-password/${resetToken}`, fields, {
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
      .catch((e) => {
        setAlertFail(true);
        setFailMessage(e.message);
      });
  }

  return (
    <>
      <AuthLayout images={svg.loginPage} altImages="woman-and-password-laptop">
        {alerts && (
          <Alerts
            state="true"
            background="bg-green-100"
            textColor="text-green-600"
            textContent="Password telah diganti! Silahkan login"
          />
        )}
        {alertFail && (
          <Alerts
            state="true"
            background="bg-red-100"
            textColor="text-red-600"
            textContent={`Ups, sepertinya ada yang salah: ${failMessage}`}
            closeButton="true"
          />
        )}
        <div className="w-full p-6 xs:p-12 2md:p-0 rounded-2xl shadow-[0_4px_20px_0_#00000029] 2md:shadow-none">
          <h3 className="mb-2">Buat Kata Sandi Baru</h3>
          <p className="mb-7">Silahkan buat kata sandi baru Anda</p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="relative w-full flex flex-col mb-4">
              <input
                type={showPassword ? "text" : "password"}
                className="input-password-field"
                placeholder="Kata Sandi Baru"
                name="password"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <MdLock className="absolute text-2xl top-17/sp left-5 fill-secondary-800" />
              {showPassword ? (
                <VscEyeClosed
                  className="absolute text-2xl top-17/sp right-5 fill-secondary-800"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <VscEye
                  className="absolute text-2xl top-17/sp right-5 fill-secondary-800"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className="relative w-full flex flex-col mb-8">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input-password-field"
                placeholder="Konfirmasi Kata Sandi Baru"
                name="confirmPassword"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <MdLock className="absolute text-2xl top-17/sp left-5 fill-secondary-800" />
              {showConfirmPassword ? (
                <VscEyeClosed
                  className="absolute text-2xl top-17/sp right-5 fill-secondary-800"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              ) : (
                <VscEye
                  className="absolute text-2xl top-17/sp right-5 fill-secondary-800"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
            <button className="button-fill transition-200">
              Ubah Kata Sandi
            </button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default NewPassword;
