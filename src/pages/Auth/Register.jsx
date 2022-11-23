import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alerts from '../../components/Alerts';
import AuthLayout from './components/AuthLayout';

import svg from '../../assets/svg';
import regex from '../../services/regex';
import { MdEmail, MdLock } from 'react-icons/md';
import { BsFillPersonFill, BsExclamationCircleFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { CgSpinner } from 'react-icons/cg';
import { userAuth } from '../../services/api';

const {
  name: NAME_REGEX,
  email: EMAIL_REGEX,
  password: PASSWORD_REGEX,
  phoneNumber: PHONE_REGEX,
} = regex;

const Register = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [alerts, setAlerts] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [failMessage, setFailMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tooltip, showTooltip] = useState(true);

  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [validFields, setValidFields] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    setValidFields({
      ...validFields,
      name: NAME_REGEX.test(fields.name),
      email: EMAIL_REGEX.test(fields.email),
      phone: PHONE_REGEX.test(fields.phone),
      password: PASSWORD_REGEX.test(fields.password),
      confirmPassword:
        fields.confirmPassword !== '' &&
        fields.confirmPassword === fields.password,
    });
  }, [
    fields.email,
    fields.name,
    fields.password,
    fields.confirmPassword,
    fields.phone,
  ]);

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }
  const valids =
    validFields.name &&
    validFields.email &&
    validFields.phone &&
    validFields.password &&
    validFields.confirmPassword;
  /*
    axios
    1. https
    2. request body
    3. headers
    4. promise chain
  */
  async function handleSubmit(e) {
    e.preventDefault();
    if (valids) {
      setIsLoading(true);
      await userAuth
        .post('/signup', fields, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setAlerts(true);
          setIsLoading(false);
        })
        .catch((e) => {
          setAlertFail(true);
          setFailMessage(e.message);
          setIsLoading(false);
        });
    } else {
      setFailMessage('Mohon isi semua fields dengan benar!');
      setAlertFail(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (alerts || alertFail === true) setAlertFail(false) || setAlerts(false);
    }, 2000);
  }, [alertFail, alerts]);

  return (
    <>
      <AuthLayout
        images={svg.registerPage}
        altImages="woman-and-handphone"
      >
        {alerts && (
          <Alerts
            status="true"
            background="bg-green-100"
            textColor="text-green-600"
            textContent="Email telah dikirim! Silahkan Aktivasi Akun Anda "
          />
        )}
        {alertFail && (
          <Alerts
            status="true"
            background="bg-red-100"
            textColor="text-red-600"
            textContent={`Ups, sepertinya ada yang salah: ${failMessage}`}
            closeButton="true"
          />
        )}
        <div className="form-content w-full p-6 xs:p-12 2md:p-0 rounded-2xl shadow-[0_4px_20px_0_#00000029] 2md:shadow-none">
          <h3 className="mb-1">Daftar Akun</h3>
          <p className="mb-7">Silahkan daftar akun agar dapat masuk</p>
          <form
            className="flex flex-col gap-4 mb-8"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Nama Lengkap"
                className={`input-field ${
                  fields.name && !validFields.name && 'field-error'
                }`}
                aria-invalid={validFields.name ? 'false' : 'true'}
                aria-describedby="nameField"
              />
              <BsFillPersonFill className="absolute text-xl top-4 left-4 fill-secondary-800" />
              {fields.name && !validFields.name && (
                <p
                  id="nameField"
                  className="flex items-center ml-1 mt-1"
                >
                  <BsExclamationCircleFill className="text-base mr-2 fill-red-500" />
                  <span className="error-inputs">
                    Mohon masukkan nama dengan benar.
                  </span>
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                onChange={handleChange}
                placeholder="Email"
                className={`input-field ${
                  fields.email && !validFields.email && 'field-error'
                }`}
                aria-invalid={validFields.email ? 'false' : 'true'}
                aria-describedby="emailField"
              />
              <MdEmail className="absolute text-xl top-4 left-4 fill-secondary-800" />
              {fields.email && !validFields.email && (
                <p
                  id="emailField"
                  className="flex items-center ml-1 mt-1"
                >
                  <BsExclamationCircleFill className="text-base mr-2 fill-red-500" />
                  <span className="error-inputs">
                    Mohon masukkan email sesuai format.
                  </span>
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="telp"
                name="phone"
                required
                autoComplete="off"
                onChange={handleChange}
                placeholder="No. Handphone"
                className={`input-field ${
                  fields.phone && !validFields.phone && 'field-error'
                }`}
                aria-invalid={validFields.phone ? 'false' : 'true'}
                aria-describedby="phoneField"
              />
              <AiFillPhone className="absolute text-xl top-4 left-4 fill-secondary-800" />
              {fields.phone && !validFields.phone && (
                <p
                  id="phoneField"
                  className="flex items-center ml-1 mt-1"
                >
                  <BsExclamationCircleFill className="text-base mr-2 fill-red-500" />
                  <span className="error-inputs">
                    Masukkan telepon harus berupa angka.
                  </span>
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type={!togglePassword ? 'password' : 'text'}
                name="password"
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Kata Sandi"
                className={`input-password-field ${
                  fields.password && !validFields.password && 'field-error'
                }`}
                aria-invalid={validFields.password ? 'false' : 'true'}
                aria-describedby="passwordField"
              />
              <MdLock className="absolute text-xl top-4 left-4 fill-secondary-800" />
              {!togglePassword ? (
                <VscEye
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="absolute text-xl top-4 right-5 fill-secondary-800 cursor-pointer"
                />
              ) : (
                <VscEyeClosed
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="absolute text-xl top-4 right-5 fill-secondary-800 cursor-pointer"
                />
              )}
              {fields.password && !validFields.password && (
                <>
                  <p
                    id="passwordField"
                    className="flex items-center ml-1 mt-1"
                  >
                    <BsExclamationCircleFill className="text-base mr-2 fill-red-500" />
                    <div>
                      <span className="error-inputs mr-1">
                        Mohon masukkan kata sandi dengan benar.
                      </span>
                      <span
                        className="error-inputs underline underline-offset-1 cursor-pointer inline-block relative"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => showTooltip(false)}
                      >
                        Tips
                        {tooltip && (
                          <span className="absolute p-3 bg-dark text-white top-7 right-0 z-50 w-52 rounded-lg translate-x-1/2">
                            <span className="text-white bg-dark !text-center">
                              Berisikan 8 sampai dengan 24 karakter.
                              <br />
                              Harus mengandung huruf besar, huruf kecil, angka,
                              dan karakter khusus.
                              <br />
                              Karakter khusus yang diperbolehkan adalah:
                              <br />
                              <span
                                className="text-sm text-red-500"
                                aria-label="exclamation mark"
                              >
                                !
                              </span>{' '}
                              <span
                                className="text-sm text-red-500"
                                aria-label="at symbol"
                              >
                                @
                              </span>{' '}
                              <span
                                className="text-sm text-red-500"
                                aria-label="hashtag"
                              >
                                #
                              </span>{' '}
                              <span
                                className="text-sm text-red-500"
                                aria-label="dollar sign"
                              >
                                $
                              </span>{' '}
                              <span
                                className="text-sm text-red-500"
                                aria-label="percent"
                              >
                                %
                              </span>
                            </span>
                          </span>
                        )}
                      </span>
                    </div>
                  </p>
                </>
              )}
            </div>
            <div className="relative">
              <input
                type={!toggleConfirmPassword ? 'password' : 'text'}
                name="confirmPassword"
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Konfirmasi Kata Sandi"
                className={`input-password-field ${
                  fields.confirmPassword &&
                  !validFields.confirmPassword &&
                  'field-error'
                }`}
                aria-invalid={validFields.confirmPassword ? 'false' : 'true'}
                aria-describedby="confirmPasswordField"
              />
              <MdLock className="absolute text-xl top-4 left-4 fill-secondary-800" />
              {!toggleConfirmPassword ? (
                <VscEye
                  onClick={() =>
                    setToggleConfirmPassword(!toggleConfirmPassword)
                  }
                  className="absolute text-xl top-4 right-5 fill-secondary-800 cursor-pointer"
                />
              ) : (
                <VscEyeClosed
                  onClick={() =>
                    setToggleConfirmPassword(!toggleConfirmPassword)
                  }
                  className="absolute text-xl top-4 right-5 fill-secondary-800 cursor-pointer"
                />
              )}
              {fields.confirmPassword && !validFields.confirmPassword && (
                <p
                  id="confirmPasswordField"
                  className="flex items-center ml-1 mt-1"
                >
                  <BsExclamationCircleFill className="text-base mr-2 fill-red-500" />
                  <span className="error-inputs">
                    Konfirmasi kata sandi harus sama dengan kata sandi.
                  </span>
                </p>
              )}
            </div>
            <button className="button-fill transition-200 mt-4 flex items-center justify-center">
              {isLoading ? (
                <>
                  <CgSpinner className="animate-spin text-xl mr-2 icon-white" />
                  Daftar
                </>
              ) : (
                <>Daftar</>
              )}
            </button>
          </form>
          <p className="text-center">
            Sudah mempunyai akun?{' '}
            <Link to="/login">
              <strong className="hover:text-orange-900 transition-200">
                Masuk
              </strong>
            </Link>
          </p>
        </div>
      </AuthLayout>
    </>
  );
};

export default Register;
