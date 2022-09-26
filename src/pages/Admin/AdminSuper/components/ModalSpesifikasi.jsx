import React from "react";

const ModalSpesifikasi = ({ setToggle, content }) => {
  const disable = false;
  return (
    <>
      <div className="fixed z-10 opacity-50 bg-black top-0 bottom-0 left-0 right-0 min-h-screen"></div>
      <div className="bg-white z-[11] fixed right-0 left-0 mx-auto rounded-2xl py-[30px] px-3 w-[543px]">
        <div className="relative w-full">
          <button
            onClick={() => setToggle(false)}
            className="text-lg text-dark font-semibold rounded-2xl bg-white px-5 py-2 absolute -right-3 -top-10"
          >
            X
          </button>
          <div className="my-5">
            <h6 className="">Tambah Spesifikasi</h6>
          </div>
          <form>
            {content.type === "ukuran" ? (
              <>
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
              </>
            ) : (
              ""
            )}
            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="bentukproduk">{content.label} Produk</label>
              <input
                type="text"
                id="bentukproduk"
                name="bentukproduk"
                placeholder={content.placeholder}
                className="px-5 py-4 rounded-2xl border bg-white focus:outline-none focus:border-orange-900"
              />
            </div>
            <div className="flex justify-end mt-5">
              <button className="button-fill-sm !w-[231px]">Tambahkan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalSpesifikasi;
