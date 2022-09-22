import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PAD = () => {
  const [barang, setBarang] = useState([
    {
      id: 1,
      noPesanan: "001/BIKDK/O/VII/2022",
      namaIKM: "Ikha Katering",
      nominalTransaksi: "Rp.150.000",
      status: 3,
    },
    {
      id: 2,
      noPesanan: "001/BIKDK/O/VII/2022",
      nominalTransaksi: "Rp.150.000",
      status: 1,
      namaIKM: "Ikha Katering",
    },
    {
      id: 3,
      noPesanan: "001/BIKDK/O/VII/2022",
      nominalTransaksi: "Rp.150.000",
      status: 2,
      namaIKM: "Ikha Katering",
    },
    {
      id: 4,
      noPesanan: "001/BIKDK/O/VII/2022",
      nominalTransaksi: "Rp.150.000",
      status: 1,
      namaIKM: "Ikha Katering",
    },
  ]);

  function handleChange(e, item) {
    e.preventDefault();
    console.log(e.target.value);
    const filtered = barang.filter((brg) => brg.id === item.id)[0];
    filtered.status = parseInt(e.target.value);
    setBarang((prevState) =>
      prevState.map((state) =>
        state.id === filtered.id ? { ...state, status: filtered.status } : state
      )
    );
    console.log(typeof barang[0].status);
  }
  return (
    <section>
      <div className=" border-b border-orange-900">
        <h3 className="font-semibold">PAD</h3>
      </div>
      <h6 className="mt-10 mb-4">Tabel PAD</h6>
      <div className="flex items-center justify-end gap-4">
        <button className="bg-[#21B630] hover:bg-green-500 transition px-5 py-2 text-white rounded-2xl font-semibold">
          Download
        </button>
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
      {/*  */}
      <div className="flex gap-2 items-center mt-4">
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
          {barang.map((item, index) => (
            <tr className="border-b" key={index}>
              <td className="text-center py-3">{index}</td>
              <td className="text-center py-3">{item.noPesanan}</td>
              <td className="text-center py-3">{item.namaIKM}</td>
              <td className="text-center py-3">{item.nominalTransaksi}</td>
              <td className="text-center py-3">
                <select
                  id="status"
                  name="status"
                  defaultValue={item.status}
                  // value={item.status}
                  onChange={(e) => handleChange(e, item)}
                  className={`${
                    parseInt(item.status) === 1
                      ? "bg-gradient-to-bl from-orange-900 to-primary-900 hover:from-primary-900 hover:to-orange-900 shadow-red"
                      : parseInt(item.status) === 2
                      ? "bg-green-500"
                      : parseInt(item.status) === 3
                      ? "bg-secondary-800"
                      : ""
                  } font-semibold text-white text-sm rounded-2xl  block py-4 px-5 outline-none h-[60px] mx-auto !w-1/2`}
                >
                  <option value="1">Status PO</option>
                  <option value="2">Diterima</option>
                  <option value="3">Belum Disetujui</option>
                </select>
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
        <button className="button-gradient-sm !text-xs xs:!text-base">1</button>
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
  );
};

export default PAD;
