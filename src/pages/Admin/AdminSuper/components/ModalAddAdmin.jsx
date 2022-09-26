import React from "react";

const ModalAddAdmin = ({ setToggle }) => {
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
            <h6 className="">Tambah Admin </h6>
          </div>
          <div className="mt-4">
            <form>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="nama">Nama Admin</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Masukkan nama admin"
                  className="px-5 py-4 rounded-2xl border bg-white focus:outline-none focus:border-orange-900"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="posisi">Posisi Admin</label>
                <input
                  type="text"
                  id="posisi"
                  name="posisi"
                  placeholder="Masukkan posisi admin"
                  className="px-5 py-4 rounded-2xl border bg-white focus:outline-none focus:border-orange-900"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukkan email"
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

export default ModalAddAdmin;
