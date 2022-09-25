import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PAD = () => {
  return (
    <>
      <section>
        <div className=" border-b border-orange-900">
          <h3 className="font-semibold">PAD</h3>
        </div>
        <h6 className="mt-10 mb-4">Tabel PAD</h6>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <label htmlFor="sorting">Menampilkan</label>
            <select
              name="sorting"
              id="sorting"
              className="w-[50px] rounded-md h-10 p-2 bg-white border border-primary-900"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex relative top-2 flex-col mb-4">
            <input
              type="email"
              className="input-field !rounded-full !py-2"
              placeholder="Cari"
              name="email"
              required
              autoComplete="on"
              // onChange={handleChange}
            />
            <BsSearch className="absolute text-2xl top-[10px] left-5 fill-secondary-800" />
          </div>
        </div>
        {/*  */}
        <table className="table-auto w-[1440px] lg:w-full mt-4">
          <thead>
            <tr className="bg-orange-900">
              <th className="text-white py-3 text-center">No</th>
              <th className="text-white py-3 text-center">Nomor Pesanan</th>
              <th className="text-white py-3 text-center">Nama IKM</th>
              <th className="text-white py-3 text-center">Nominal Transaksi</th>
              <th className="text-white py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <tr className="border-b" key={item}>
                <td className="text-center py-3">{index}</td>
                <td className="text-center py-3">001/BIKDK/O/VII/2022</td>
                <td className="text-center py-3">Ikha Katering</td>
                <td className="text-center py-3">Rp. 120.000</td>
                <td className="text-center py-3">
                  <div className="bg-[#21B630] text-white py-2 px-3 rounded-lg font-semibold">
                    Sudah Setor
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex justify-end items-center gap-x-[.375rem] py-2 mt-5"
          aria-label="pagination"
        >
          <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base !px-3">
            <HiChevronLeft className="!text-base xs:!text-xl" />
          </button>
          <button className="button-gradient-sm !text-xs xs:!text-base">
            1
          </button>
          <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base">
            2
          </button>
          <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base">
            3
          </button>
          <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base !px-3">
            <HiChevronRight className="!text-base xs:!text-xl" />
          </button>
        </nav>
      </section>
    </>
  );
};

export default PAD;
