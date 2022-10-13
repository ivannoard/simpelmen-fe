import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

const Rekap = () => {
  const [barang, setBarang] = useState([
    {
      id: 1,
      noPesanan: '001/BIKDK/O/VII/2022',
      namaIKM: 'Ikha Katering',
      status: 3,
      totalTransaksi: 'Rp.150.000',
    },
    {
      id: 2,
      noPesanan: '001/BIKDK/O/VII/2022',
      totalTransaksi: 'Rp.150.000',
      namaIKM: 'Ikha Katering',
      status: 1,
    },
    {
      id: 3,
      noPesanan: '001/BIKDK/O/VII/2022',
      totalTransaksi: 'Rp.150.000',
      namaIKM: 'Ikha Katering',
      status: 2,
    },
    {
      id: 4,
      noPesanan: '001/BIKDK/O/VII/2022',
      totalTransaksi: 'Rp.150.000',
      namaIKM: 'Ikha Katering',
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
      <div className="border-b border-orange-900">
        <h3 className="font-semibold pb-3">Rekap Pesanan</h3>
      </div>
      <h6 className="mt-10 mb-4">Tabel Rekap Pesanan</h6>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center mr-4">
          <label htmlFor="sorting">Menampilkan</label>
          <select
            name="sorting"
            id="sorting"
            className="w-[50px] rounded h-10 p-2 bg-white border border-primary-900"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="flex relative top-2 flex-col mb-4">
          <input
            type="text"
            className="input-field !rounded-full !py-2 !pl-14"
            placeholder="Cari"
            name="search"
            required
            autoComplete="on"
            // onChange={handleChange}
          />
          <BsSearch className="absolute text-xl top-3 left-6 fill-secondary-800" />
        </div>
      </div>
      {/*  */}
      <article id="tableRekapPesanan">
        <div className="overflow-x-auto">
          <table className="table-auto mb-4 w-full">
            <thead>
              <tr className="bg-orange-900">
                <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                  No
                </th>
                <th className="text-white p-3 w-[27%] min-w-[196px] text-center">
                  Nomor Pesanan
                </th>
                <th className="text-white p-3 w-[17%] min-w-[140px] text-left">
                  Nama IKM
                </th>
                <th className="text-white p-3 w-[24%] min-w-[234px] text-center">
                  Status
                </th>
                <th className="text-white p-3 w-[24%] min-w-[180px] text-center">
                  Total Transaksi
                </th>
              </tr>
            </thead>
            <tbody>
              {barang.map((item, index) => (
                <tr
                  className="border-b"
                  key={index}
                >
                  <td className="text-center p-3">{index + 1}</td>
                  <td className="text-center p-3">{item.noPesanan}</td>
                  <td className="text-left p-3">{item.namaIKM}</td>
                  <td className="text-center py-3 px-4 flex justify-center">
                    <div className="relative">
                      <select
                        id="status"
                        name="status"
                        defaultValue={item.status}
                        // value={item.status}
                        onChange={(e) => handleChange(e, item)}
                        className={`${
                          parseInt(item.status) === 1
                            ? '!bg-gradient-to-bl !from-orange-900 !to-primary-900 hover:!from-primary-900 hover:!to-orange-900 !shadow-red'
                            : '!bg-orange-600'
                        } input-field-select-xs !border-none !font-semibold !w-auto !pr-12 !text-white`}
                      >
                        <option value="1">Status Pesanan</option>
                        <option value="2">Admin CS</option>
                        <option value="3">Admin Kasir</option>
                        <option value="4">Admin TU</option>
                        <option value="5">Admin Produksi</option>
                        <option value="6">Admin Desain</option>
                        <option value="7">Admin Gudang</option>
                      </select>
                      <IoIosArrowDown className="absolute right-4 top-[15px] text-base fill-white" />
                    </div>
                  </td>
                  <td className="text-center py-3">{item.totalTransaksi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      </article>
    </section>
  );
};

export default Rekap;
