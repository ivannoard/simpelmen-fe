import React from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

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
            className="w-[50px] rounded-[4px] h-10 p-2 bg-white border border-primary-900"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-auto mb-5">
            <thead>
              <tr>
                <th className="bg-[#F29A41] text-white py-3 px-3 w-[30%] min-w-[250px]">
                  No. Pesanan
                </th>
                <th className="bg-[#F29A41] text-white py-3 text-left px-3 w-1/4 min-w-[224px]">
                  Nama Produk
                </th>
                <th className="bg-[#F29A41] text-white py-3 px-3 w-1/4 min-w-[200px]">
                  Tanggal Pesan
                </th>
                <th className="bg-[#F29A41] text-white py-3 px-3 w-1/5 min-w-[135px]">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr
                  key={item}
                  className="border-b"
                >
                  <td className="py-4 px-3 text-center">
                    001/BIKDK/O/VII/2022
                  </td>
                  <td className="py-4 px-3 text-left">Bentuk Langsungan</td>
                  <td className="py-4 px-3 text-center">1 Januari 2022</td>
                  <td className="text-center">
                    <button
                      onClick={() => navigate(`/dashboard/detail/${item}`)}
                      className="border border-secondary-800 rounded-[4px] px-2 py-2"
                      type="button"
                    >
                      <FaShoppingCart className="text-xl fill-dark hover:fill-orange-900 transition-200" />
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
