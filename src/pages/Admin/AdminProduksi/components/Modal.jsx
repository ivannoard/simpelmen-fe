import React from "react";
import svg from "../../../../assets/svg";

const Modal = ({ setToggleModal, toggleId }) => {
  const disable = true;
  return (
    <>
      <div className="absolute z-10 opacity-50 bg-black top-0 bottom-0 left-0 right-0 min-h-screen"></div>
      <div className="bg-white z-[11] absolute right-0 left-0 mx-auto rounded-2xl py-[30px] px-3 w-[543px]">
        <div className="relative w-full">
          <button
            onClick={() => setToggleModal(false)}
            className="text-lg text-dark font-semibold rounded-2xl bg-white px-5 py-2 absolute -right-3 -top-10"
          >
            X
          </button>
          <div className="border-b border-orange-900 mt-5">
            <h6 className="">Detail Pesanan {toggleId}</h6>
          </div>
          <div className="mt-4">
            <p>
              No. Pesanan <strong>123456</strong>
            </p>
            <h6>Standing Pouch (Jenis Produk)</h6>
            <h6>Standing Pouch Full Color (Bentuk Produk)</h6>
            <p>
              Tanggal Pemesanan <strong>1 Januari 2022</strong>
            </p>
            <img src={svg.karton} alt="" />
            <div className="size">
              <p>Ukuran Produk</p>
              <div className="grid grid-cols-3 gap-[10px] mt-2">
                <div className="relative">
                  <input
                    type="text"
                    id="ukuran"
                    name="panjang"
                    value="21"
                    className={`${
                      disable ? "bg-secondary-600" : "bg-white"
                    } h-[60px] pr-14 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                    required
                    disabled={disable}
                  />
                  <span className="text-gray-400 absolute right-3 top-[18px]">
                    cm
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="ukuran"
                    name="lebar"
                    value="21"
                    className={`${
                      disable ? "bg-secondary-600" : "bg-white"
                    } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                    required
                    disabled={disable}
                  />
                  <span className="text-gray-400 absolute right-3 top-[18px]">
                    cm
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="ukuran"
                    name="tinggi"
                    value="30"
                    className={`${
                      disable ? "bg-secondary-600" : "bg-white"
                    } h-[60px] border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                    required
                    disabled={disable}
                  />
                  <span className="text-gray-400 absolute right-3 top-[18px]">
                    cm
                  </span>
                </div>
              </div>
              {/*  */}
              <p className="mt-2">Bentuk Produk</p>
              <div className="relative mt-2">
                <input
                  type="text"
                  value="A1 Pond"
                  className={`${
                    disable ? "bg-secondary-600" : "bg-white"
                  } h-[60px] pr-14 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                  required
                  disabled={disable}
                />
              </div>
              {/*  */}
              <p className="mt-2">Bentuk Produk</p>
              <div className="relative mt-2">
                <input
                  type="text"
                  value="Duplex 310 gram"
                  className={`${
                    disable ? "bg-secondary-600" : "bg-white"
                  } h-[60px] pr-14 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                  required
                  disabled={disable}
                />
              </div>
              {/*  */}
              <p className="mt-2">Bentuk Produk</p>
              <div className="relative mt-2">
                <input
                  type="text"
                  value="Laminasi Glossy"
                  className={`${
                    disable ? "bg-secondary-600" : "bg-white"
                  } h-[60px] pr-14 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-full p-[10px] outline-none`}
                  required
                  disabled={disable}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
