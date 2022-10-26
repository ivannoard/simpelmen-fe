import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Dashboard = () => {
  return (
    <>
      <section>
        <div className=" border-b border-orange-900">
          <h3 className="font-semibold pb-3">Dashboard Kasir</h3>
        </div>
        <h6 className="mt-10 mb-4">Tabel Daftar Pembayaran</h6>
        <article id="tablePembayaran">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                    No
                  </th>
                  <th className="text-white p-3 w-[22%] min-w-[196px] text-center">
                    Nomor Pesanan
                  </th>
                  <th className="text-white p-3 w-[20%] min-w-[180px] text-center">
                    Tanggal Pemesanan
                  </th>
                  <th className="text-white p-3 w-[16%] min-w-[150px] text-left">
                    Nama IKM
                  </th>
                  <th className="text-white p-3 w-[34%] min-w-[286px] text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr
                    className="border-b"
                    key={item}
                  >
                    <td className="text-center p-3">{item}</td>
                    <td className="text-center p-3">001/BIKDK/O/VII/2022</td>
                    <td className="text-center p-3">12 September 2022</td>
                    <td className="text-left p-3">Ikha Katering</td>
                    <td className="text-center p-3">
                      <div className="flex gap-2 w-full justify-center item-center">
                        <div className="bg-[#21B630] text-white py-2 px-3 rounded-lg font-semibold">
                          Langsung
                        </div>
                        <div className="bg-[#6D6061] text-white py-2 px-3 rounded-lg font-semibold">
                          Belum Lunas
                        </div>
                      </div>
                    </td>
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

        <h6 className="mt-10 mb-4">Tabel PAD</h6>
        <article id="tablePAD">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-center p-3 text-white w-[8%] min-w-[54px]">
                    No
                  </th>
                  <th className="text-center p-3 text-white w-[25%] min-w-[196px]">
                    Nomor Pesanan
                  </th>
                  <th className="text-left p-3 text-white w-[18%] min-w-[150px]">
                    Nama IKM
                  </th>
                  <th className="text-center p-3 text-white w-[23%] min-w-[180px]">
                    Nominal Transaksi
                  </th>
                  <th className="text-center p-3 text-white w-[26%] min-w-[240px]">
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
                    <td className="text-center p-3">{item}</td>
                    <td className="text-center p-3">001/BIKDK/O/VII/2022</td>
                    <td className="text-left p-3">Ikha Katering</td>
                    <td className="text-center p-3">Rp. 120.000</td>
                    <td className="text-center p-3">
                      <div className="flex justify-center">
                        <div className="bg-[#21B630] text-white py-2 px-4 rounded-lg font-semibold">
                          Disetujui
                        </div>
                      </div>
                    </td>
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
    </>
  );
};

export default Dashboard;
