import React, { useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { postProduct } from '../../../services/api';
import { IoIosArrowDown } from 'react-icons/io';

const FormKarton = ({ setAlertSuccess, setAlertFail }) => {
  const [fields, setFields] = useState({});
  const user = localStorage.getItem('user');

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (user) {
      await postProduct
        .post('/Xk17j2l08BHDkmwD3lgW')
        .then((response) => console.log(response));
      setAlertSuccess(true);
      console.log(fields);
    } else {
      setAlertFail(true);
      console.log('no user');
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label
          htmlFor="ukuran"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Ukuran
        </label>
        <div className="grid grid-cols-3 gap-x-3 gap-y-4">
          <div className="relative col-span-3 xs:col-span-1">
            <input
              type="text"
              id="ukuran"
              name="panjang"
              className="input-field-xs"
              placeholder="Panjang"
              required
              onChange={(e) => handleChange(e)}
            />
            <span className="text-gray-400 absolute right-3 top-[11px]">
              cm
            </span>
          </div>
          <div className="relative col-span-3 xs:col-span-1">
            <input
              type="text"
              id="ukuran"
              name="lebar"
              className="input-field-xs"
              placeholder="Lebar"
              required
              onChange={(e) => handleChange(e)}
            />
            <span className="text-gray-400 absolute right-3 top-[11px]">
              cm
            </span>
          </div>
          <div className="relative col-span-3 xs:col-span-1">
            <input
              type="text"
              id="ukuran"
              name="tinggi"
              className="input-field-xs"
              placeholder="Tinggi"
              required
              onChange={(e) => handleChange(e)}
            />
            <span className="text-gray-400 absolute right-3 top-[11px]">
              cm
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 relative">
        <label
          htmlFor="sablon"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Sablon
        </label>
        <select
          id="sablon"
          name="sablon"
          onChange={(e) => handleChange(e)}
          className="input-field-xs appearance-none"
        >
          <option>Pilih Sablon</option>
          <option value="1">Jasa Sablon</option>
          <option value="2">Tanpa Sablon</option>
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
      </div>
      <div className="mt-4 relative">
        <label
          htmlFor="desain"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Desain
        </label>
        <select
          id="desain"
          name="desain"
          onChange={(e) => handleChange(e)}
          className="input-field-xs appearance-none"
        >
          <option>Pilih Desain</option>
          <option value="1">Jasa Desain</option>
          <option value="2">Tanpa Desain</option>
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
      </div>
      <div className="mt-4">
        <label
          htmlFor="jumlah"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Jumlah Pesanan
        </label>
        <div className="relative">
          <input
            type="text"
            id="jumlah"
            name="jumlah"
            className="input-field-xs !pr-12"
            placeholder="Masukkan Jumlah Pesanan"
            required
            onChange={(e) => handleChange(e)}
          />
          <span className="text-gray-400 absolute right-3 top-[11px]">pcs</span>
        </div>
      </div>
      <div className="buttons flex justify-end mt-8 gap-5">
        <button className="button-fill !py-4">Pesan Sekarang</button>
        <button className="button-white !p-4">
          <BsCartPlus
            size={20}
            className="mx-auto"
          />
        </button>
      </div>
    </form>
  );
};

export default FormKarton;
