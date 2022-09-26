import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Pesanan = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
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
        <div className="mt-[10px]">
          <table className="text-center w-[1440px] lg:w-full">
            <thead>
              <tr>
                <th className="bg-[#F29A41] text-white py-3">No. Pesanan</th>
                <th className="bg-[#F29A41] text-white py-3">Nama Produk</th>
                <th className="bg-[#F29A41] text-white py-3">Tanggal Pesan</th>
                <th className="bg-[#F29A41] text-white py-3">Detail Pesanan</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b">
                  <td className="py-5">001/BIKDK/O/VII/2022</td>
                  <td className="py-5">Bentuk Langsungan</td>
                  <td className="py-5">1 Januari 2022</td>
                  <td>
                    <button
                      onClick={() => navigate(`/dashboard/detail/${item}`)}
                      className="border border-secondary-800 rounded-2xl px-[10px] py-2"
                    >
                      Sudah Terkonfirmasi
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex justify-center items-center gap-x-[.375rem] py-2 mt-10"
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

export default Pesanan;
