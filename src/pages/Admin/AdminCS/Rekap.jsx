import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Rekap = () => {
  const [barang, setBarang] = useState([
    {
      id: 1,
      noPesanan: "001/BIKDK/O/VII/2022",
      namaIKM: "Ikha Katering",
      status: 3,
      totalTransaksi: "Rp.150.000",
    },
    {
      id: 2,
      noPesanan: "001/BIKDK/O/VII/2022",
      totalTransaksi: "Rp.150.000",
      namaIKM: "Ikha Katering",
      status: 1,
    },
    {
      id: 3,
      noPesanan: "001/BIKDK/O/VII/2022",
      totalTransaksi: "Rp.150.000",
      namaIKM: "Ikha Katering",
      status: 2,
    },
    {
      id: 4,
      noPesanan: "001/BIKDK/O/VII/2022",
      totalTransaksi: "Rp.150.000",
      namaIKM: "Ikha Katering",
      status: 1,
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
        <h3 className="font-semibold">Rekap Pesanan</h3>
      </div>
      <h6 className="mt-10 mb-4">Tabel Rekap Pesanan</h6>
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
      <div className="mt-4">
        <table className="table-auto w-[1440px] lg:w-full">
          <thead>
            <tr className="bg-orange-900">
              <th className="text-white py-3 text-center">No</th>
              <th className="text-white py-3 text-center">Nomor Pesanan</th>
              <th className="text-white py-3 text-center">Nama IKM</th>
              <th className="text-white py-3 text-center">Status</th>
              <th className="text-white py-3 text-center">Total Transaksi</th>
            </tr>
          </thead>
          <tbody>
            {barang.map((item, index) => (
              <tr className="border-b" key={index}>
                <td className="text-center py-3">{index}</td>
                <td className="text-center py-3">{item.noPesanan}</td>
                <td className="text-center py-3">{item.namaIKM}</td>
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
                        : "bg-orange-600"
                    } font-semibold text-white text-sm rounded-2xl  block py-4 px-5 outline-none h-[60px] mx-auto !w-1/2`}
                  >
                    <option value="1">Status Pesanan</option>
                    <option value="2">Admin CS</option>
                    <option value="3">Admin Kasir</option>
                    <option value="4">Admin TU</option>
                    <option value="5">Admin Produksi</option>
                    <option value="6">Admin Desain</option>
                    <option value="7">Admin Gudang</option>
                  </select>
                </td>
                <td className="text-center py-3">{item.totalTransaksi}</td>
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
      </div>
    </section>
  );
};

export default Rekap;
