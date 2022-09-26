import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DetailRetribusi = () => {
  const { retribusiId } = useParams();
  const [fields, setFields] = useState({});
  const [disable, setDisable] = useState(true);

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }
  return (
    <>
      <section>
        <div className=" border-b border-orange-900">
          <h3 className="font-semibold">Retribusi Pelanggan</h3>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h6>Kemasan Karton A{retribusiId}</h6>
          <h6>001/BIKDK/O/VII/2022</h6>
        </div>
        <form className="mt-4">
          <p>Ukuran Produk</p>
          <div className="grid grid-cols-3 gap-[10px] w-1/2 mt-2">
            <div className="relative">
              <input
                type="text"
                id="ukuran"
                name="panjang"
                className={`${
                  disable ? "bg-secondary-600" : "bg-white"
                } h-[60px] pr-14 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                required
                disabled={disable}
                onChange={(e) => handleChange(e)}
              />
              <span className="text-gray-400 absolute right-3 top-[18px]">
                cm
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="ukuran"
                name="lebar"
                className={`${
                  disable ? "bg-secondary-600" : "bg-white"
                } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                required
                disabled={disable}
                onChange={(e) => handleChange(e)}
              />
              <span className="text-gray-400 absolute right-3 top-[18px]">
                cm
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="ukuran"
                name="tinggi"
                className={`${
                  disable ? "bg-secondary-600" : "bg-white"
                } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                required
                disabled={disable}
                onChange={(e) => handleChange(e)}
              />
              <span className="text-gray-400 absolute right-3 top-[18px]">
                cm
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-7">
            <div className="left">
              <div className="mt-3">
                <label
                  htmlFor="bentuk"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Bentuk Produk
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="bentuk"
                    name="bentuk"
                    className={`${
                      disable ? "bg-secondary-600" : "bg-white"
                    } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="finishing"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Finishing Produk
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="finishing"
                    name="finishing"
                    className={`${
                      disable ? "bg-secondary-600" : "bg-white"
                    } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="mt-3">
                <label
                  htmlFor="sablon"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Sablon
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="sablon"
                    name="sablon"
                    className={`${
                      disable ? "bg-secondary-600" : "bg-white"
                    } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="desain"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Desain
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="desain"
                    name="desain"
                    className={`${
                      disable ? "bg-secondary-600" : "bg-white"
                    } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                    required
                    disabled={disable}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <h6 className="mt-5">Masukkan Retribusi</h6>
          <div className="grid grid-cols-2 gap-7">
            <div className="left">
              <div className="mt-3">
                <label
                  htmlFor="jasapound"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Jasa Pound
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasapound"
                    name="jasapound"
                    className="bg-white h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="jumlahkarton"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Jumlah Karton
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jumlahkarton"
                    name="jumlahkarton"
                    className="bg-white h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="jasasablon"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Jasa Sablon
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasasablon"
                    name="jasasablon"
                    className="bg-white h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="mt-3">
                <label
                  htmlFor="jasadesain"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Jasa Desain
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasadesain"
                    name="jasadesain"
                    className="bg-white h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="jasafinishing"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Jasa Finishing
                </label>
                <div className="flex items-center gap-5">
                  <h6>Rp</h6>
                  <input
                    type="text"
                    id="jasafinishing"
                    name="jasafinishing"
                    className="bg-white h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mt-12 flex items-center justify-end gap-4">
                <label
                  htmlFor="jumlahorder"
                  className="block mb-2 text-15/sp font-medium text-dark"
                >
                  Jumlah Order :
                </label>

                <input
                  type="text"
                  id="jumlahorder"
                  name="jumlahorder"
                  className="bg-white w-[146px] h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block  p-[10px] outline-none"
                  required
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card bg-white text-dark w-[600px] rounded-2xl py-4 px-20 border mx-auto mt-10">
            <h6 className="border-b text-center">Rincian Retribusi</h6>
            <div className="content flex flex-col gap-6 mt-7 ">
              <div className="flex items-center justify-between">
                <p>Jasa Pound</p>
                <h6>Rp. 750.000</h6>
              </div>
              <div className="flex items-center justify-between">
                <p>Jasa Karton</p>
                <h6>Rp. 750.000</h6>
              </div>
              <div className="flex items-center justify-between">
                <p>Jasa Sablon</p>
                <h6>Rp. 750.000</h6>
              </div>
              <div className="flex items-center justify-between">
                <p>Jasa Desain</p>
                <h6>Rp. 750.000</h6>
              </div>
              <div className="flex items-center justify-between">
                <p>Jasa Finishing</p>
                <h6>Rp. 750.000</h6>
              </div>
            </div>
            <div className="flex justify-end mt-10">
              <div>
                <h6>Jumlah Order : 24</h6>
                <h6>Total : Rp. 750.000</h6>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="mx-auto py-4 w-[376px] rounded-lg  bg-dark text-white">
              Simpan
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default DetailRetribusi;
