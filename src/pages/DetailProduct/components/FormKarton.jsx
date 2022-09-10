import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { postProduct } from "../../../services/api";
const FormKarton = ({ setAlertSuccess, setAlertFail }) => {
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
      const postData = await postProduct
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
      <div>
        <label
          htmlFor="ukuran"
          className="block mb-2 text-15/sp font-medium text-dark"
        >
          Ukuran
        </label>
        <div className="grid grid-cols-3 gap-[10px]">
          <input
            type="number"
            id="ukuran"
            name="panjang"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
            placeholder="Panjang"
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            id="ukuran"
            name="lebar"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
            placeholder="Lebar"
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            id="ukuran"
            name="tinggi"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
            placeholder="Tinggi"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="mt-3">
        <label
          htmlFor="sablon"
          className="block mb-2 text-15/sp font-medium text-dark"
        >
          Sablon
        </label>
        <select
          id="sablon"
          name="sablon"
          onChange={(e) => handleChange(e)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
        >
          <option>Pilih Sablon</option>
          <option value="1">Jasa Sablon</option>
          <option value="2">Tanpa Sablon</option>
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
          htmlFor="jumlah"
          className="block mb-2 text-15/sp font-medium text-dark"
        >
          Jumlah Pesanan
        </label>
        <input
          type="number"
          id="jumlah"
          name="jumlah"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
          placeholder="Masukkan Jumlah Pesanan"
          required
          onChange={(e) => handleChange(e)}
        />
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

export default FormKarton;
