import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const PAD = () => {
  return (
    <>
      <main>
        <section className="containers">
          <div className="mb-5">
            <Link to="/" className="flex items-center mb-3">
              <HiOutlineArrowSmLeft className="text-2xl mr-3" />
              <span className="leading-10">Kembali</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
            <div>
              <p>Dari Tanggal</p>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="start"
                  type="date"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full pl-10 p-2.5 focus:ring-orange-900 focus:border-orange-900"
                  placeholder="Select date start"
                />
              </div>
            </div>
            <div>
              <p>Sampai Tanggal</p>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="end"
                  type="date"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full pl-10 p-2.5 focus:ring-orange-900 focus:border-orange-900"
                  placeholder="Select date end"
                />
              </div>
            </div>
            <div className="mt-6">
              <select
                id="laminasi"
                name="laminasi"
                // onChange={(e) => handleChange(e)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
              >
                <option>Pilih Laminasi</option>
                <option value="1">Jasa Laminasi</option>
                <option value="2">Tanpa Laminasi</option>
              </select>
            </div>
            <div className="mt-6">
              <select
                id="laminasi"
                name="laminasi"
                // onChange={(e) => handleChange(e)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none"
              >
                <option>Pilih Laminasi</option>
                <option value="1">Jasa Laminasi</option>
                <option value="2">Tanpa Laminasi</option>
              </select>
            </div>
          </div>
        </section>
        <section className="containers !-mt-12 !py-5">
          <div className="overflow-x-auto">
            <table className="table-auto text-center w-[1440px]">
              <thead>
                <tr>
                  <th colspan="21" className="bg-[#F29A41] py-2">
                    Jasa Pelayanan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F29A41]">
                  <td>No</td>
                  <td colspan="3">No Pesanan</td>
                  <td colspan="3">Nama IKM</td>
                  <td colspan="2">Karton Box</td>
                  <td colspan="2">Sablon</td>
                  <td colspan="2">Pond</td>
                  <td>Laminasi</td>
                  <td colspan="2">Desain</td>
                  <td>Sewa Ruang</td>
                  <td>Jasa Pembuatan Stiker</td>
                  <td>Jumlah Total Retribusi (Rp)</td>
                </tr>
                <tr className="bg-[#F29A41]">
                  <td colspan="7"></td>
                  <td>Jumlah Barang</td>
                  <td>Retribusi </td>
                  <td>Jumlah Barang</td>
                  <td>Retribusi </td>
                  <td>Jumlah Barang</td>
                  <td>Retribusi </td>
                  <td>Retribusi</td>
                  <td>File</td>
                  <td>Retribusi</td>
                  <td colspan="3"></td>
                </tr>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <tr key={index} className="border-b">
                    <td>{item}</td>
                    <td colspan="3">001/BIKDK/O/VII/2022</td>
                    <td colspan="3">Ikha Katering</td>
                    <td>200</td>
                    <td>60000</td>
                    <td>200</td>
                    <td>60000</td>
                    <td>200</td>
                    <td>60000</td>
                    <td>60000</td>
                    <td>1</td>
                    <td>60000</td>
                    <td>60000</td>
                    <td>60000</td>
                    <td>420.000</td>
                  </tr>
                ))}
                <tr className="bg-slate-300">
                  <td colspan="7">Total</td>
                  {/* <td >001/BIKDK/O/VII/2022</td>
                <td >Ikha Katering</td> */}
                  <td>200</td>
                  <td>60000</td>
                  <td>200</td>
                  <td>60000</td>
                  <td>200</td>
                  <td>60000</td>
                  <td>60000</td>
                  <td>1</td>
                  <td>60000</td>
                  <td>60000</td>
                  <td>60000</td>
                  <td>420.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default PAD;
