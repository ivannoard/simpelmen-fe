import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Dashboard = () => {
  return (
    <section>
      <div className="border-b border-orange-900">
        <h3 className="font-semibold pb-3">Dashboard CS</h3>
      </div>
      <article id="retribusiPelanggan">
        <h6 className="mt-10 mb-4">Tabel Retribusi Pelanggan</h6>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-orange-900">
                <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                  No
                </th>
                <th className="text-white p-3 w-[28%] min-w-[218px] text-center">
                  Nomor Pesanan
                </th>
                <th className="text-white p-3 w-1/5 min-w-[180px] text-left">
                  Nama IKM
                </th>
                <th className="text-white p-3 w-[28%] min-w-[218px] text-center">
                  Nominal Transaksi
                </th>
                <th className="text-white p-3 w-[16%] min-w-[160px] text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr
                  className=" border-b"
                  key={item}
                >
                  <td className="text-center px-3 py-2">{item}</td>
                  <td className="text-center px-3 py-2">
                    001/BIKDK/O/VII/2022
                  </td>
                  <td className="text-left px-3 py-2">Ikha Katering</td>
                  <td className="text-center px-3 py-2">Rp.120000</td>
                  <td className="text-center py-2 px-4">
                    <div className="bg-[#21B630] text-white py-2 rounded-lg font-semibold text-sm">
                      Disetujui
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

      <article id="statusPOPelanggan">
        <h6 className="mt-5 mb-4">Tabel Status PO Pelanggan</h6>
        <div className="overflow-x-auto">
          <table className="table-auto mb-4 w-full">
            <thead>
              <tr className="bg-orange-900">
                <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                  No
                </th>
                <th className="text-white p-3 w-[44%] text-center min-w-[218px]">
                  Nomor Pesanan
                </th>
                <th className="text-white p-3 w-[32%] text-left min-w-[180px]">
                  Nama IKM
                </th>
                <th className="text-white p-3 w-[16%] text-center min-w-[160px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr
                  className=" border-b"
                  key={item}
                >
                  <td className="text-center px-3 py-2">{item}</td>
                  <td className="text-center px-3 py-2">
                    001/BIKDK/O/VII/2022
                  </td>
                  <td className="text-left px-3 py-2">Ikha Katering</td>
                  <td className="text-center px-4 py-2">
                    <div className="bg-[#21B630] text-white py-2 rounded-lg font-semibold text-sm">
                      Disetujui
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

      <article id="rekapPesanan">
        <h6 className="mt-5 mb-4">Tabel Rekap Pesanan</h6>
        <div className="overflow-x-auto">
          <table className="table-auto mb-4 w-full">
            <thead>
              <tr className="bg-orange-900">
                <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                  No
                </th>
                <th className="text-white p-3 w-[32%] min-w-[218px] text-center">
                  Nomor Pesanan
                </th>
                <th className="text-white p-3 w-[20%] min-w-[180px] text-left">
                  Nama IKM
                </th>
                <th className="text-white p-3 w-[15%] min-w-[160px] text-center">
                  Status
                </th>
                <th className="text-white p-3 w-[25%] min-w-[218px] text-center">
                  Nominal Transaksi
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr
                  className=" border-b"
                  key={item}
                >
                  <td className="text-center p-3">{item}</td>
                  <td className="text-center p-3">001/BIKDK/O/VII/2022</td>
                  <td className="text-left p-3">Ikha Katering</td>
                  <td className="text-center p-3">admin gudang</td>
                  <td className="text-center p-3">Rp.120000</td>
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
  );
};

export default Dashboard;
