import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';

const DetailRetribusi = () => {
  const navigate = useNavigate();
  const { retribusiId } = useParams();
  const [fields, setFields] = useState({});
  const [disable, setDisable] = useState(true);

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }
  return (
    <>
      <section>
        <div className=" border-b border-orange-900 mb-6">
          <h3 className="font-semibold pb-3">Retribusi Pelanggan</h3>
        </div>
        <div className="flex items-center mb-6">
          <HiOutlineArrowSmLeft className="text-2xl mr-3" />
          <span
            className="leading-10 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Kembali
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h6 className="mr-3 mb-2 sm:mb-0">Kemasan Karton A{retribusiId}</h6>
          <h6>001/BIKDK/O/VII/2022</h6>
        </div>
        <form className="mt-5">
          <p className="block mb-2 text-sm font-medium text-gray-700">
            Ukuran Produk
          </p>
          <div className="grid xmd:grid-cols-3 gap-4 xmd:gap-3 xmd:w-1/2">
            <div className="relative">
              <input
                type="text"
                id="ukuran"
                name="panjang"
                className={`${
                  disable ? '!bg-secondary-600' : '!bg-white'
                } input-field !pr-12 !pl-4`}
                required
                disabled={disable}
                onChange={(e) => handleChange(e)}
              />
              <span className="text-gray-400 absolute right-4 top-[14px]">
                cm
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="ukuran"
                name="lebar"
                className={`${
                  disable ? '!bg-secondary-600' : '!bg-white'
                } input-field !pr-12 !pl-4`}
                required
                disabled={disable}
                onChange={(e) => handleChange(e)}
              />
              <span className="text-gray-400 absolute right-4 top-[14px]">
                cm
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="ukuran"
                name="tinggi"
                className={`${
                  disable ? '!bg-secondary-600' : '!bg-white'
                } input-field !pr-12 !pl-4`}
                required
                disabled={disable}
                onChange={(e) => handleChange(e)}
              />
              <span className="text-gray-400 absolute right-4 top-[14px]">
                cm
              </span>
            </div>
          </div>
          <div className="grid xmd:grid-cols-2 gap-0 xmd:gap-7">
            <div className="left">
              <div className="mt-4">
                <label
                  htmlFor="bentuk"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Bentuk Produk
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="bentuk"
                    name="bentuk"
                    className={`${
                      disable ? '!bg-secondary-600' : '!bg-white'
                    } input-field !px-5`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="finishing"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Finishing Produk
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="finishing"
                    name="finishing"
                    className={`${
                      disable ? '!bg-secondary-600' : '!bg-white'
                    } input-field !px-5`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="mt-4">
                <label
                  htmlFor="sablon"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Sablon
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="sablon"
                    name="sablon"
                    className={`${
                      disable ? '!bg-secondary-600' : '!bg-white'
                    } input-field !px-5`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="desain"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Desain
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="desain"
                    name="desain"
                    className={`${
                      disable ? '!bg-secondary-600' : '!bg-white'
                    } input-field !px-5`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <h6 className="mt-8">Masukkan Retribusi</h6>
          <div className="grid xmd:grid-cols-2 gap-0 xmd:gap-7">
            <div className="left">
              <div className="mt-5">
                <label
                  htmlFor="jasapound"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Jasa Pound
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasapound"
                    name="jasapound"
                    className="input-field !px-5"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="jumlahkarton"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Jumlah Karton
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jumlahkarton"
                    name="jumlahkarton"
                    className="input-field !px-5"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="jasasablon"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Jasa Sablon
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasasablon"
                    name="jasasablon"
                    className="input-field !px-5"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="mt-4 xmd:mt-5">
                <label
                  htmlFor="jasadesain"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Jasa Desain
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasadesain"
                    name="jasadesain"
                    className="input-field !px-5"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="jasafinishing"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Jasa Finishing
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasafinishing"
                    name="jasafinishing"
                    className="input-field !px-5"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-12 flex items-center justify-end gap-4">
                <label
                  htmlFor="jumlahorder"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Jumlah Order :
                </label>

                <input
                  type="text"
                  id="jumlahorder"
                  name="jumlahorder"
                  className="input-field !px-5 !w-[160px]"
                  required
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card bg-white text-dark w-full xmd:w-[54%] min-w-0 xmd:min-w-[460px] rounded-xl py-6 sm:py-8 px-8 sm:px-10 border border-secondary-900/60 mx-auto mt-12">
            <h6 className="text-center mb-4">Rincian Retribusi</h6>
            <div className="overflow-x-auto">
              <table className="table-auto w-full mb-6">
                <thead>
                  <tr>
                    <th className="text-center pr-2 py-4 w-[10%] min-w-[36px]"></th>
                    <th className="text-left px-2 py-4 w-[60%] text-sm font-normal text-black/60 min-w-[150px]">
                      Nama item
                    </th>
                    <th className="text-left px-2 py-4 w-[30%] text-sm font-normal text-black/60 min-w-[150px]">
                      Harga
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center pr-2 py-2 text-black/60">1</td>
                    <td className="p-2">Jasa Pound</td>
                    <td className="p-2">Rp 750.000</td>
                  </tr>
                  <tr>
                    <td className="text-center pr-2 py-2 text-black/60">2</td>
                    <td className="p-2">Jasa Karton</td>
                    <td className="p-2">Rp 1.050.000</td>
                  </tr>
                  <tr>
                    <td className="text-center pr-2 py-2 text-black/60">3</td>
                    <td className="p-2">Jasa Sablon</td>
                    <td className="p-2">Rp 480.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="mb-6 border-secondary-900/30 mx-0 sm:mx-10" />
            <div className="flex justify-end mx-0 sm:mx-10">
              <div className="w-full md:w-[70%] flex justify-between">
                <div>
                  <p className="mb-[14px] text-black/60">Total Order</p>
                  <p className="text-black/60">Subtotal</p>
                </div>
                <div>
                  <p className="text-right mb-3">24</p>
                  <p className="text-right text-lg font-semibold text-[#427afb]">
                    Rp. 750.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="button-dark !w-60">Simpan</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default DetailRetribusi;
