import React from "react";

const ModalAddProduk = ({ setToggle }) => {
  return (
    <>
      <div className="fixed z-10 opacity-50 bg-black top-0 bottom-0 left-0 right-0 min-h-screen"></div>
      <div className="bg-white z-[11] absolute right-0 left-0 mx-auto rounded-2xl py-[30px] px-4 w-[543px]">
        <div className="relative w-full">
          <button
            onClick={() => setToggle(false)}
            className="text-lg text-dark font-semibold rounded-2xl bg-white px-5 py-2 absolute -right-3 -top-10"
          >
            X
          </button>
          <div className="border-b border-orange-900 mt-5">
            <h6 className="">Tambah Produk </h6>
          </div>
          <div className="mt-4">
            <form>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="bentukproduk">Bentuk Produk</label>
                <input
                  type="text"
                  id="bentukproduk"
                  name="bentukproduk"
                  placeholder="Masukkan nama produk"
                  className="px-5 py-4 rounded-2xl border bg-white focus:outline-none focus:border-orange-900"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="kategoriproduk">Kategori Produk</label>
                <select
                  name="kategoriproduk"
                  id="kategoriproduk"
                  className="w-full rounded-2xl h-10 px-4 mt-[6px] bg-white border focus:border-orange-900"
                >
                  <option value="1">Pilih Kategori</option>
                  <option value="2">Karton</option>
                  <option value="3">Dus Offset</option>
                  <option value="4">Sablon Plastik, Pouch, Dus</option>
                  <option value="5">Custom</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="beratproduk">Berat Produk</label>
                <input
                  type="text"
                  id="beratproduk"
                  name="beratproduk"
                  placeholder="Masukkan berat produk"
                  className="px-5 py-4 rounded-2xl border bg-white focus:outline-none focus:border-orange-900"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="deskripsi">Deskripsi Produk</label>
                <input
                  type="text"
                  id="deskripsi"
                  name="deskripsi"
                  placeholder="Masukkan deskripsi produk"
                  className="px-5 py-4 rounded-2xl border bg-white focus:outline-none focus:border-orange-900"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="fotoproduk">Foto Produk</label>
                <input
                  type="file"
                  id="fotoproduk"
                  name="fotoproduk"
                  placeholder="Masukkan deskripsi produk"
                  className="px-5 py-4 rounded-2xl border bg-white focus:outline-none focus:border-orange-900"
                />
              </div>
              <div className="flex justify-end mt-5">
                <button className="button-fill-sm !w-[231px]">Tambahkan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddProduk;
