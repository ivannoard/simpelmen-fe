import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { postProduct } from "../../../services/api";
const FormStandingPouch = ({ setAlertSuccess, setAlertFail }) => {
  const [fields, setFields] = useState({});
  const user = localStorage.getItem("user");

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (user) {
      await postProduct
        .post("/Xk17j2l08BHDkmwD3lgW")
        .then((response) => console.log(response));
      setAlertSuccess(true);
      console.log(fields);
    } else {
      setAlertFail(true);
      console.log("no user");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mt-3">
        <label
          htmlFor="ukuran"
          className="block mb-2 text-15/sp font-medium text-dark"
        >
          Ukuran
        </label>
        <select
          id="ukuran"
          name="ukuran"
          onChange={(e) => handleChange(e)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
        >
          <option>Pilih Ukuran</option>
          <option value="1">Jasa Ukuran</option>
          <option value="2">Tanpa Ukuran</option>
        </select>
      </div>
      <div className="mt-3">
        <label
          htmlFor="desain"
          className="block mb-2 text-15/sp font-medium text-dark"
        >
          Desain
        </label>
        <select
          id="desain"
          name="desain"
          onChange={(e) => handleChange(e)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
        >
          <option>Pilih Desain</option>
          <option value="1">Jasa Desain</option>
          <option value="2">Tanpa Desain</option>
        </select>
      </div>
      <div className="mt-3">
        <label
          htmlFor="laminasi"
          className="block mb-2 text-15/sp font-medium text-dark"
        >
          Laminasi
        </label>
        <select
          id="laminasi"
          name="laminasi"
          onChange={(e) => handleChange(e)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
        >
          <option>Pilih Laminasi</option>
          <option value="1">Jasa Laminasi</option>
          <option value="2">Tanpa Laminasi</option>
        </select>
      </div>
      <div className="mt-3">
        <label
          htmlFor="jumlah"
          className="block mb-2 text-15/sp font-medium text-dark"
        >
          Jumlah Pesanan
        </label>
        <div className="relative">
          <input
            type="text"
            id="jumlah"
            name="jumlah"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
            placeholder="Masukkan Jumlah Pesanan"
            required
            onChange={(e) => handleChange(e)}
          />
          <span className="text-gray-400 absolute right-3 top-[10px]">pcs</span>
        </div>
      </div>
      <div className="buttons flex justify-end mt-[30px] gap-5">
        <button className="button-fill">Pesan Sekarang</button>
        <button className="button-white !w-[60px] !h-[60px] !p-[20px]">
          <BsCartPlus size={20} className="mx-auto" />
        </button>
      </div>
    </form>
  );
};

export default FormStandingPouch;
