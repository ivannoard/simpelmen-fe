import React from 'react';

import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import svg from '../../assets/svg';
import './styles.css';

const dummy = true;
const check = true;

const Pemesanan = () => {
  return (
    <>
      <main className="containers">
        <div className="mb-5 flex">
          <Link
            to="/"
            className="flex items-center mb-3"
          >
            <HiOutlineArrowSmLeft className="text-2xl mr-3" />
            <span className="leading-10">Kembali</span>
          </Link>
        </div>
        {dummy ? (
          <>
            <section id="pesanan"></section>
            <hr className="my-10" />
            <section id="alamat">
              <form className="w-full grid grid-cols-4 2xsm:grid-cols-8 2md:grid-cols-12 gap-x-8">
                <div className="col-span-4 2md:col-span-6">
                  <div className="mb-5">
                    <label
                      htmlFor="fullname"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-field-xs"
                      placeholder="Masukkan Nama Lengkap"
                      name="fullname"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="ikm"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Nama IKM <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-field-xs"
                      placeholder="Masukkan Nama IKM"
                      name="ikm"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="input-field-xs"
                      placeholder="Masukkan Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      No. Handphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-field-xs"
                      placeholder="Masukkan Nomor Handphone"
                      name="phone"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="checkbox"
                      name="matchProfile"
                      className="w-4 h-4 mr-2"
                    />
                    <label
                      htmlFor="matchProfile"
                      className="text-sm font-medium text-gray-700"
                    >
                      Sama dengan data diri pada profil saya
                    </label>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="catatan"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Catatan
                    </label>
                    <textarea
                      name="catatan"
                      id="catatan"
                      cols="30"
                      rows="4"
                      className="input-field-xs"
                      placeholder="Masukkan Catatan"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-span-4 2md:col-span-6">
                  <div className="mb-5">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Alamat Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-field-xs"
                      placeholder="Masukkan Alamat Lengkap"
                      name="address"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="kecamatan"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Kecamatan <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="kecamatan"
                      id="kecamatan"
                      className="input-field-xs"
                      required
                    >
                      <option value="kec1">Kecamatan 1</option>
                      <option value="kec2">Kecamatan 2</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="kota"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Kota / Kabupaten <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="kota"
                      id="kota"
                      className="input-field-xs"
                      required
                    >
                      <option value="kota1">Kota 1</option>
                      <option value="kota2">Kota 2</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="provinsi"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Provinsi <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="provinsi"
                      id="provinsi"
                      className="input-field-xs"
                      required
                    >
                      <option value="prov1">Provinsi 1</option>
                      <option value="prov2">Provinsi 2</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="kodePos"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Kode Pos <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-field-xs"
                      placeholder="Masukkan Nomor Kode Pos"
                      name="kodePos"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="checkbox"
                      name="matchProfile"
                      className="w-4 h-4 mr-2"
                    />
                    <label
                      htmlFor="matchProfile"
                      className="text-sm font-medium text-gray-700"
                    >
                      Sama dengan alamat pada profi saya
                    </label>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="pengiriman"
                      className="block mb-3 text-sm font-medium text-gray-700"
                    >
                      Pengiriman <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-x-5">
                      <label class="relative block">
                        <input
                          id="pengirimanDikirim"
                          type="radio"
                          value=""
                          name="pengiriman"
                          class="absolute opacity-0 top-0 left-0 -z-10"
                        />
                        <div className="radio-button-white">Dikirim</div>
                      </label>
                      <label class="relative block">
                        <input
                          id="pengirimanSendiri"
                          type="radio"
                          value=""
                          name="pengiriman"
                          class="absolute opacity-0 top-0 left-0 -z-10"
                        />
                        <div className="radio-button-white">Ambil Sendiri</div>
                      </label>
                    </div>
                  </div>
                  {check && (
                    <div className="mb-5">
                      <label
                        htmlFor="jasaKirim"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Jasa Kirim
                      </label>
                      <select
                        name="jasaKirim"
                        id="jasaKirim"
                        className="input-field-xs"
                        required
                      >
                        <option value="jk1">Jasa Kirim 1</option>
                        <option value="jk2">Jasa Kirim 2</option>
                      </select>
                    </div>
                  )}
                </div>
                <div className="col-span-4 2xsm:col-span-8 2md:col-span-12 flex justify-center mt-8">
                  <button className="text-base 2xsm:text-lg text-white font-semibold px-5 2xsm:px-30/sp py-3 2xsm:py-4 rounded-lg 2xsm:rounded-2xl bg-primary-900 hover:bg-primary-600 shadow-red">
                    Lanjutkan Pesanan
                  </button>
                </div>
              </form>
            </section>
          </>
        ) : (
          <section className="pt-9 pb-12 2xsm:pb-28 xmd:pb-40">
            <div className="w-4/5 md:w-[33.75rem] mx-auto">
              <div className="w-full px-9">
                <img
                  src={svg.successPO}
                  alt="empty-keranjang"
                  className="w-full mb-10"
                />
              </div>
              <h3 className="text-center mb-10">
                Berhasil melakukan permintaan pesanan.
              </h3>
              <div className="flex justify-center">
                <button className="text-base 2xsm:text-lg text-white font-semibold px-5 2xsm:px-30/sp py-3 2xsm:py-4 rounded-lg 2xsm:rounded-2xl bg-gradient-to-bl from-orange-900 to-primary-900 hover:from-primary-900 hover:to-orange-900 shadow-red">
                  Lihat Detail Pesanan
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Pemesanan;
