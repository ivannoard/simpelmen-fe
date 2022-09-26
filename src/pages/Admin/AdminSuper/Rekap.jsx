import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import ModalRekap from "./components/ModalRekap";

const Rekap = () => {
  const [toggleDetail, setToggleDetail] = useState(false);
  const [toggleId, setToggleId] = useState();

  function handleModal(state, id) {
    setToggleDetail(state);
    setToggleId(id);
  }
  return (
    <>
      <section>
        {toggleDetail && (
          <ModalRekap setToggleDetail={setToggleDetail} toggleId={toggleId} />
        )}
        <div className=" border-b border-orange-900">
          <h3 className="font-semibold">Rekap Pesanan</h3>
        </div>
        <h6 className="mt-6">Tabel Rekap Pesanan</h6>
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
        <table className="table-auto mt-4 w-[1440px] lg:w-full">
          <thead>
            <tr className="bg-orange-900">
              <td className="text-white text-center py-3">No</td>
              <td className="text-white text-center py-3">Nomor Pesanan</td>
              <td className="text-white text-center py-3">Nama IKM</td>
              <td className="text-white text-center py-3">Status</td>
              <td className="text-white text-center py-3">Nominal Transaksi</td>
              <td className="text-white text-center py-3">Aksi</td>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr className="border-b">
                <td className="text-center py-3">1</td>
                <td className="text-center py-3">001/BIKDK/O/VII/2022</td>
                <td className="text-center py-3">Ikha Katering</td>
                <td className="text-center py-3">Admin Gudang</td>
                <td className="text-center py-3">Rp. 250.000</td>
                <td className="text-center py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleModal(true, item)}
                      className="border bg-white py-2 px-7 rounded-lg"
                    >
                      Detail
                    </button>
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

export default Rekap;
