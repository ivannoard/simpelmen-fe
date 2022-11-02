import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

const Pembayaran = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nomorPesanan: '001/BIKDK/O/VII/2022',
      tanggalPesanan: '12 September 2022',
      namaIKM: 'Ikha cathering',
      statusPembayaran: 2,
      status: 1,
      ongkir: 120000,
    },
    {
      id: 2,
      nomorPesanan: '001/BIKDK/O/VII/2022',
      tanggalPesanan: '12 September 2022',
      namaIKM: 'Ikha cathering',
      statusPembayaran: 1,
      status: 2,
      ongkir: 120000,
    },
    {
      id: 3,
      nomorPesanan: '001/BIKDK/O/VII/2022',
      tanggalPesanan: '12 September 2022',
      namaIKM: 'Ikha cathering',
      statusPembayaran: 3,
      status: 3,
      ongkir: 120000,
    },
    {
      id: 4,
      nomorPesanan: '001/BIKDK/O/VII/2022',
      tanggalPesanan: '12 September 2022',
      namaIKM: 'Ikha cathering',
      statusPembayaran: 3,
      status: 1,
      ongkir: 120000,
    },
    {
      id: 5,
      nomorPesanan: '001/BIKDK/O/VII/2022',
      tanggalPesanan: '12 September 2022',
      namaIKM: 'Ikha cathering',
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
        <div className="border-b border-orange-900">
          <h3 className="font-semibold pb-3">Pembayaran</h3>
        </div>
        <h6 className="mt-10 mb-4">Tabel Pembayaran</h6>
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
              type="email"
              className="input-field !rounded-full !py-2 !pl-14"
              placeholder="Cari"
              name="email"
              required
              autoComplete="on"
              // onChange={handleChange}
            />
            <BsSearch className="absolute text-xl top-3 left-6 fill-secondary-800" />
          </div>
        </div>

        <article id="tablePembayaran">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-white p-3 text-center min-w-[54px]">
                    No
                  </th>
                  <th className="text-white p-3 text-center min-w-[220px]">
                    Nomor Pesanan
                  </th>
                  <th className="text-white p-3 text-center min-w-[180px]">
                    Tanggal Pemesanan
                  </th>
                  <th className="text-white p-3 text-left min-w-[180px]">
                    Nama IKM
                  </th>
                  <th className="text-white p-3 text-center min-w-[130px]">
                    Ongkir
                  </th>
                  <th className="text-white p-3 text-center min-w-[320px]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    className="border-b"
                    key={item.id}
                  >
                    <td className="text-center p-3">{index + 1}</td>
                    <td className="text-center p-3">{item.nomorPesanan}</td>
                    <td className="text-center p-3">{item.tanggalPesanan}</td>
                    <td className="text-left p-3">{item.namaIKM}</td>
                    <td className="text-center p-3">Rp {item.ongkir}</td>
                    <td className="text-center p-3">
                      <div className="flex items-center gap-4 justify-center">
                        <div className="relative">
                          <select
                            id="status"
                            name="status"
                            defaultValue={item.statusPembayaran}
                            // value={item.status}
                            onChange={(e) => handleChangePembayaran(e, item)}
                            className={`${
                              parseInt(item.statusPembayaran) === 1
                                ? '!bg-gradient-to-bl !from-orange-900 !to-primary-900 hover:!from-primary-900 hover:!to-orange-900 !shadow-red'
                                : parseInt(item.statusPembayaran) === 2
                                ? '!bg-green-500 hover:!bg-green-500/80'
                                : parseInt(item.statusPembayaran) === 3
                                ? '!bg-secondary-800 hover:!bg-secondary-800/80'
                                : ''
                            } input-field-select-xs !border-none !font-semibold !text-white !w-auto !pr-12`}
                          >
                            <option value="1">Pembayaran</option>
                            <option value="2">Langsung</option>
                            <option value="3">DP</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[15px] text-base fill-white" />
                        </div>
                        <div className="relative">
                          <select
                            id="status"
                            name="status"
                            defaultValue={item.status}
                            // value={item.status}
                            onChange={(e) => handleChangeStatus(e, item)}
                            className={`${
                              parseInt(item.status) === 1
                                ? '!bg-gradient-to-bl !from-orange-900 !to-primary-900 hover:!from-primary-900 hover:!to-orange-900 !shadow-red'
                                : parseInt(item.status) === 2
                                ? '!bg-green-500 hover:!bg-green-500/80'
                                : parseInt(item.status) === 3
                                ? '!bg-secondary-800 hover:!bg-secondary-800/80'
                                : ''
                            } input-field-select-xs !border-none !font-semibold !text-white !w-auto !pr-12`}
                          >
                            <option value="1">Status</option>
                            <option value="2">Lunas</option>
                            <option value="3">Belum Lunas</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[15px] text-base fill-white" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav
            className="flex justify-end items-center gap-x-[.375rem] py-2 mt-2"
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
    </>
  );
};

export default Pembayaran;
