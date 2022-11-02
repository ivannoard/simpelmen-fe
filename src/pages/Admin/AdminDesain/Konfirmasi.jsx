import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

const Konfirmasi = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nomorPesanan: '001/BIKDK/O/VII/2022',
      tanggalPesanan: '12 September 2022',
      namaIKM: 'Ikha cathering',
      status: 1,
      ongkir: 120000,
    },
    {
      id: 2,
      nomorPesanan: '002/BIKDK/O/VII/2022',
      tanggalPesanan: '15 September 2022',
      namaIKM: 'Ikha cathering',
      status: 2,
      ongkir: 120000,
    },
    {
      id: 3,
      nomorPesanan: '003/BIKDK/O/VII/2022',
      tanggalPesanan: '17 September 2022',
      namaIKM: 'Ikha cathering',
      status: 3,
      ongkir: 120000,
    },
    {
      id: 4,
      nomorPesanan: '004/BIKDK/O/VII/2022',
      tanggalPesanan: '19 September 2022',
      namaIKM: 'Ikha cathering',
      status: 1,
      ongkir: 120000,
    },
    {
      id: 5,
      nomorPesanan: '004/BIKDK/O/VII/2022',
      tanggalPesanan: '27 September 2022',
      namaIKM: 'Ikha cathering',
      status: 2,
      ongkir: 120000,
    },
  ]);

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
          <h3 className="font-semibold pb-3">Konfirmasi Desain</h3>
        </div>
        <h6 className="mt-10 mb-4">Tabel Desain Pelanggan</h6>
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
              type="search"
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
        <article id="tableCustomerDesign">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-center text-white p-3 w-[8%] min-w-[54px]">
                    No
                  </th>
                  <th className="text-center text-white p-3 w-[27%] min-w-[196px]">
                    Nomor Pesanan
                  </th>
                  <th className="text-center text-white p-3  w-[26%] min-w-[180px]">
                    Tanggal Pemesanan
                  </th>
                  <th className="text-left text-white p-3 w-[17%] min-w-[140px]">
                    Nama IKM
                  </th>
                  <th className="text-center text-white p-3 w-[22%] min-w-[234px]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr className="border-b">
                    <td className="text-center p-3">{index + 1}</td>
                    <td className="text-center p-3">{item.nomorPesanan}</td>
                    <td className="text-center p-3">{item.tanggalPesanan}</td>
                    <td className="text-left p-3">{item.namaIKM}</td>
                    <td className="text-center py-3 px-4 flex justify-center">
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
                          <option value="1">Status Desain</option>
                          <option value="2">Disetujui</option>
                          <option value="3">Belum Disetujui</option>
                        </select>
                        <IoIosArrowDown className="absolute right-4 top-[15px] text-base fill-white" />
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

export default Konfirmasi;
