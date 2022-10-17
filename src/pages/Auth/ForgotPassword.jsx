import React, { useState } from "react";
import AuthLayout from "./components/AuthLayout";

import svg from "../../assets/svg";
import { MdEmail } from "react-icons/md";
import { userAuth } from "../../services/api";
import Alerts from "../../components/Alerts";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [fields, setFields] = useState({});
  const [alerts, setAlerts] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");
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
      .post("reset-password", fields, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
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
            textContent=""
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
          <h3 className="mb-2">Lupa Kata Sandi</h3>
          <p className="mb-7">
            Kami akan mengirim link ke email Anda untuk mengubah kata sandi
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="relative w-full flex flex-col mb-6">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                name="email"
                required
                autoComplete="on"
                onChange={handleChange}
              />
              <MdEmail className="absolute text-xl top-4 left-4 fill-secondary-800" />
            </div>
            <button className="button-fill transition-200">Kirim Email</button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
