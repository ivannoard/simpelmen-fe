import React from "react";
import svg from "../../../../assets/svg";

const ModalRekap = ({ setToggleDetail, toggleId }) => {
  return (
    <>
      <div className="fixed z-10 opacity-50 bg-black top-0 bottom-0 left-0 right-0 min-h-screen"></div>
      <div className="bg-white z-[11] absolute right-0 left-0 mx-auto rounded-2xl py-[30px] px-3 w-[543px]">
        <div className="relative w-full text-center">
          <button
            onClick={() => setToggleDetail(false)}
            className="text-lg text-dark font-semibold rounded-2xl bg-white px-5 py-2 absolute -right-3 -top-10"
          >
            X
          </button>
          <div className="my-5">
            <h6 className="">Detail Pesanan {toggleId}</h6>
          </div>
          <img src={svg.karton} alt="" className="mx-auto" />
          <div className="content mt-6">
            <p>
              Nomor Pesanan <strong>123456</strong>
            </p>
            <h6>Karton (Kategori Produk)</h6>
            <h6>Box A1 (Bentuk Produk)</h6>
            <p>
              Tanggal Pemesanan <strong>12 September 2022</strong>
            </p>
          </div>
          <div className="spesifikasi mt-6 w-full bg-orange-900  rounded-2xl py-4 px-2">
            <h6 className="text-white">Spesifikasi Produk</h6>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quod hic nemo rerum fugit quaerat eaque molestias
              laboriosam neque tempora!
            </p>
            <div className="total text-left">
              <p className="text-white">Jumlah: 500pcs</p>
              <p className="text-white">Retribusi: Rp. 112.500</p>
            </div>
          </div>
          <div className="deliver mt-6 w-full border border-orange-900 rounded-2xl py-4 px-2">
            <h6>Pengiriman</h6>
            <p className="text-left mt-4">Nama: Ivan Nova Ardiansyah</p>
            <p className="text-left">Nama IKM: Vanz</p>
            <p className="text-left">No. Handphone: 08123456</p>
            <p className="text-left">Alamat: Planet Namex</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRekap;
