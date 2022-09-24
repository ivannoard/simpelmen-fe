import React from "react";

const Modal = ({ setToggleModal, toggleId }) => {
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
            <h6 className="">Tambah Resi {toggleId}</h6>
          </div>
          <div className="mt-4">
            <form>
              <label htmlFor="kurir">Kurir Pengiriman</label>
              <select
                name="kurir"
                id="kurir"
                className="w-full rounded-2xl h-10 px-5 mt-[6px] bg-white border border-orange-900"
              >
                <option value="1">Pilih Kurir</option>
                <option value="2">JNE</option>
                <option value="3">JNT</option>
                <option value="4">Ninja Express</option>
                <option value="5">Pos Indonesia</option>
              </select>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="noresi">No Resi</label>
                <input
                  type="text"
                  placeholder="Masukkan no resi"
                  className="px-5 py-4 rounded-2xl border bg-white border-orange-900 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="estimasi">Pilih Tanggal Estimasi Sampai</label>
                <input
                  type="date"
                  className="px-5 py-4 rounded-2xl border bg-white border-orange-900 outline-none"
                />
              </div>
              <div className="flex justify-end mt-5">
                <button className="button-fill-sm !w-[231px]">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
