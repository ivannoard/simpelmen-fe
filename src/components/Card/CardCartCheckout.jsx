import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';

const CardCartCheckout = ({ produkImg, altImg, kategori, jenis }) => {
  return (
    <>
      <article className="relative mb-10 shadow-gray rounded-2xl p-8 2xsm:p-12 grid grid-cols-4 2xsm:grid-cols-8 2md:grid-cols-12 gap-x-8">
        <div className="col-span-4 2xsm:col-span-8 2md:col-span-12 lg:col-span-5">
          <div className="mb-3 w-11/12 xs:w-3/4 lg:w-full mx-auto">
            <img
              src={produkImg}
              alt={altImg}
              className="w-full object-cover object-center"
            />
          </div>
          <p className="text-xs xs:text-base">{kategori}</p>
          <p className="font-bold text-base xs:text-xl md:text-2xl mb-3 line-clamp-2">
            {jenis}
          </p>
        </div>

        <div className="lg:col-start-7 col-span-4 2xsm:col-span-8 2md:col-span-12 lg:col-span-6">
          <form className="w-full">
            <div className="mb-5">
              <label
                htmlFor="ukuran"
                className="mb-[.375rem] block"
              >
                Ukuran
              </label>
              <div
                id="ukuran"
                className="flex flex-col 2xsm:flex-row 2xsm:items-center 2xsm:gap-x-[.625rem] gap-y-5 2xsm:gap-y-0"
              >
                <div className="relative">
                  <input
                    type="text"
                    className="input-field-sm"
                    name="panjang"
                    placeholder="P"
                  />
                  <span className="absolute right-5 top-4 text-gray-400">
                    cm
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="input-field-sm"
                    name="lebar"
                    placeholder="L"
                  />
                  <span className="absolute right-5 top-4 text-gray-400">
                    cm
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="input-field-sm"
                    name="tinggi"
                    placeholder="T"
                  />
                  <span className="absolute right-5 top-4 text-gray-400">
                    cm
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="sablon"
                className="mb-[.375rem] block"
              >
                Sablon
              </label>
              <select
                name="sablon"
                id="sablon"
                className="input-field-sm appearance-none"
              >
                <option value="DEFAULT">Pilih Sablon</option>
                <option value="s1">Pilihan 1</option>
              </select>
              <IoIosArrowDown className="absolute right-5 top-[3.125rem] text-xl fill-gray-400" />
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="desain"
                className="mb-[.375rem] block"
              >
                Desain
              </label>
              <select
                name="desain"
                id="desain"
                className="input-field-sm appearance-none"
              >
                <option value="DEFAULT">Pilih Desain</option>
                <option value="d1">Pilihan 1</option>
              </select>
              <IoIosArrowDown className="absolute right-5 top-[3.125rem] text-xl fill-gray-400" />
            </div>
            <div className="relative">
              <label
                htmlFor="jumlahPesanan"
                className="mb-[.375rem] block"
              >
                Jumlah Pesanan
              </label>
              <input
                type="text"
                className="input-field-sm"
                placeholder="Masukkan jumlah pesanan"
                name="jumlahPesanan"
                id="jumlahPesanan"
              />
              <span className="absolute right-5 top-12 text-gray-400">pcs</span>
            </div>
          </form>
        </div>
      </article>
    </>
  );
};

export default CardCartCheckout;
