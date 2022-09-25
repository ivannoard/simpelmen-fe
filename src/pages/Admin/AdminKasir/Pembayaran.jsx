import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pembayaran = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nomorPesanan: "001/BIKDK/O/VII/2022",
      tanggalPesanan: "12 September 2022",
      namaIKM: "Ikha cathering",
      statusPembayaran: 2,
      status: 1,
      ongkir: 120000,
    },
    {
      id: 2,
      nomorPesanan: "001/BIKDK/O/VII/2022",
      tanggalPesanan: "12 September 2022",
      namaIKM: "Ikha cathering",
      statusPembayaran: 1,
      status: 2,
      ongkir: 120000,
    },
    {
      id: 3,
      nomorPesanan: "001/BIKDK/O/VII/2022",
      tanggalPesanan: "12 September 2022",
      namaIKM: "Ikha cathering",
      statusPembayaran: 3,
      status: 3,
      ongkir: 120000,
    },
    {
      id: 4,
      nomorPesanan: "001/BIKDK/O/VII/2022",
      tanggalPesanan: "12 September 2022",
      namaIKM: "Ikha cathering",
      statusPembayaran: 3,
      status: 1,
      ongkir: 120000,
    },
    {
      id: 5,
      nomorPesanan: "001/BIKDK/O/VII/2022",
      tanggalPesanan: "12 September 2022",
      namaIKM: "Ikha cathering",
      statusPembayaran: 2,
      status: 2,
      ongkir: 120000,
    },
  ]);

  function handleChangePembayaran(e, item) {
    e.preventDefault();
    console.log(e.target.value);
    const filtered = data.filter((brg) => brg.id === item.id)[0];
    filtered.statusPembayaran = parseInt(e.target.value);
    setData((prevState) =>
      prevState.map((state) =>
        state.id === filtered.id
          ? { ...state, statusPembayaran: filtered.statusPembayaran }
          : state
      )
    );
    console.log(typeof data[0].statusPembayaran);
  }
  function handleChangeStatus(e, item) {
    e.preventDefault();
    console.log(e.target.value);
    const filtered = data.filter((brg) => brg.id === item.id)[0];
    filtered.status = parseInt(e.target.value);
    setData((prevState) =>
      prevState.map((state) =>
        state.id === filtered.id ? { ...state, status: filtered.status } : state
      )
    );
    console.log(typeof data[0].status);
  }
  return (
    <>
      <section>
        <div className=" border-b border-orange-900">
          <h3 className="font-semibold">Pembayaran</h3>
        </div>
        <h6 className="mt-10 mb-4">Tabel Pembayaran</h6>
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
              <th className="text-white py-3 text-center">Tanggal Pemesanan</th>
              <th className="text-white py-3 text-center">Nama IKM</th>
              <th className="text-white py-3 text-center">Ongkir</th>
              <th className="text-white py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="border-b" key={item.id}>
                <td className="text-center py-3">{index}</td>
                <td className="text-center py-3">{item.nomorPesanan}</td>
                <td className="text-center py-3">{item.tanggalPesanan}</td>
                <td className="text-center py-3">{item.namaIKM}</td>
                <td className="text-center py-3">{item.ongkir}</td>
                <td className="text-center py-3">
                  <div className="flex items-center gap-4 justify-center">
                    <select
                      id="status"
                      name="status"
                      defaultValue={item.statusPembayaran}
                      // value={item.status}
                      onChange={(e) => handleChangePembayaran(e, item)}
                      className={`${
                        parseInt(item.statusPembayaran) === 1
                          ? "bg-gradient-to-bl from-orange-900 to-primary-900 hover:from-primary-900 hover:to-orange-900 shadow-red"
                          : parseInt(item.statusPembayaran) === 2
                          ? "bg-green-500"
                          : parseInt(item.statusPembayaran) === 3
                          ? "bg-secondary-800"
                          : ""
                      } font-semibold text-white text-sm rounded-lg  block py-2 px-4 outline-none`}
                    >
                      <option value="1">Pembayaran</option>
                      <option value="2">Langsung</option>
                      <option value="3">DP</option>
                    </select>
                    <select
                      id="status"
                      name="status"
                      defaultValue={item.status}
                      // value={item.status}
                      onChange={(e) => handleChangeStatus(e, item)}
                      className={`${
                        parseInt(item.status) === 1
                          ? "bg-gradient-to-bl from-orange-900 to-primary-900 hover:from-primary-900 hover:to-orange-900 shadow-red"
                          : parseInt(item.status) === 2
                          ? "bg-green-500"
                          : parseInt(item.status) === 3
                          ? "bg-secondary-800"
                          : ""
                      } font-semibold text-white text-sm rounded-lg  block py-2 px-4 outline-none`}
                    >
                      <option value="1">Status</option>
                      <option value="2">Lunas</option>
                      <option value="3">Belum Lunas</option>
                    </select>
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

export default Pembayaran;
