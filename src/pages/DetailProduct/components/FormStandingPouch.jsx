import React, { useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { postProduct } from '../../../services/api';
import { IoIosArrowDown } from 'react-icons/io';

const FormStandingPouch = ({ setAlertSuccess, setAlertFail }) => {
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
      <div className="relative">
        <label
          htmlFor="ukuran"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Ukuran
        </label>
        <select
          id="ukuran"
          name="ukuran"
          onChange={(e) => handleChange(e)}
          className="input-field-xs appearance-none"
        >
          <option>Pilih Ukuran</option>
          <option value="1">Jasa Ukuran</option>
          <option value="2">Tanpa Ukuran</option>
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
      <div className="mt-4 relative">
        <label
          htmlFor="laminasi"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Laminasi
        </label>
        <select
          id="laminasi"
          name="laminasi"
          onChange={(e) => handleChange(e)}
          className="input-field-xs appearance-none"
        >
          <option>Pilih Laminasi</option>
          <option value="1">Jasa Laminasi</option>
          <option value="2">Tanpa Laminasi</option>
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

export default FormStandingPouch;
