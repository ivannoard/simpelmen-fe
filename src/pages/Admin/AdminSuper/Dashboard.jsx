import React from "react";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Dashboard = () => {
  return (
    <>
      <section>
        <div className=" border-b border-orange-900">
          <h3 className="font-semibold">Dashboard</h3>
        </div>
        <div className="flex gap-8 mt-8">
          <div className="card rounded-2xl p-6 flex items-center gap-5 bg-gradient-to-r from-primary-900 to-orange-900 w-[252px]">
            <BsFillPersonFill fill="#FFFFFF" size={40} />
            <div className="content">
              <h4 className="!text-white">14</h4>
              <p className="!text-white">Total Admin</p>
            </div>
          </div>
          <div className="card rounded-2xl p-6 flex items-center gap-5 bg-gradient-to-r from-primary-900 to-orange-900 w-[252px]">
            <FaBox fill="#FFFFFF" size={40} />
            <div className="content">
              <h4 className="!text-white">14</h4>
              <p className="!text-white">Total Produksi</p>
            </div>
          </div>
          <div className="card rounded-2xl p-6 flex items-center gap-5 bg-gradient-to-r from-primary-900 to-orange-900 w-[252px]">
            <BsFillCartFill fill="#FFFFFF" size={40} />
            <div className="content">
              <h4 className="!text-white">14</h4>
              <p className="!text-white">Total Pesanan</p>
            </div>
          </div>
        </div>
        {/*  */}
        <h6 className="mt-10">Tabel Admin</h6>
        <table className="table-auto mt-6 w-[1440px] lg:w-full">
          <thead>
            <tr className="bg-orange-900">
              <th className="text-center text-white py-3">No</th>
              <th className="text-center text-white py-3">Nama Admin</th>
              <th className="text-center text-white py-3">Jenis Admin</th>
              <th className="text-center text-white py-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr className="border-b" key={item}>
                <td className="text-center py-3">1</td>
                <td className="text-center py-3">Roikhatul Miskiyah</td>
                <td className="text-center py-3">CS</td>
                <td className="text-center py-3">r.miskiyah@gmail.com</td>
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
        {/*  */}
        <h6 className="mt-6">Tabel Produk</h6>
        <table className="table-auto mt-6 w-[1440px] lg:w-full">
          <thead>
            <tr className="bg-orange-900">
              <th className="text-center text-white py-3">No</th>
              <th className="text-center text-white py-3">Bentuk Produk</th>
              <th className="text-center text-white py-3">Kategori Produk</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr className="border-b" key={item}>
                <td className="text-center py-3">1</td>
                <td className="text-center py-3">A1</td>
                <td className="text-center py-3">Karton</td>
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
        {/*  */}
        <h6 className="mt-6">Rekap Pesanan</h6>
        <table className="table-auto mt-6 w-[1440px] lg:w-full">
          <thead>
            <tr className="bg-orange-900">
              <th className="text-center text-white py-3">No</th>
              <th className="text-center text-white py-3">Nomor Pesanan</th>
              <th className="text-center text-white py-3">Nama Pelanggan</th>
              <th className="text-center text-white py-3">Status</th>
              <th className="text-center text-white py-3">Total Transaksi</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr className="border-b" key={item}>
                <td className="text-center py-3">1</td>
                <td className="text-center py-3">001/BIKDK/O/VII/2022</td>
                <td className="text-center py-3">Ikha Katering</td>
                <td className="text-center py-3">Status</td>
                <td className="text-center py-3">Rp. 250.000</td>
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

export default Dashboard;
