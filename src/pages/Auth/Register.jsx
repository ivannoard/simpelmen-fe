import React from "react";
import { Link } from "react-router-dom";
import svg from "../../assets/svg";

const Register = () => {
  return (
    <>
      <main className="containers">
        <div className="w-full grid grid-cols-12 gap-x-8">
          <div className="col-span-6">
            <Link to="/">
              <p>Kembali</p>
            </Link>
            <img src={svg.registerPage} alt="woman-and-handphone" />
          </div>
          <div className="col-span-5 col-start-8">
            <h2>Daftar Akun</h2>
            <p>Silahkan daftar akun agar dapat masuk</p>
            <form>
              <input type="text" placeholder="Nama Lengkap" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="No. Handphone" />
              <input type="text" placeholder="Kata Sandi" />
              <input type="text" placeholder="Konfirmasi Kata Sandi" />
              <button className="button-fill w-full">Daftar</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
