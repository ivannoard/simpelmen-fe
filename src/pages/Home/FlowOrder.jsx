import React from "react";
import svg from "../../assets/svg";

const FlowOrder = () => {
  return (
    <>
      <section className="containers">
        <p className="text-3xl text-orange-900 font-bold text-center">
          Alur Pemesanan
        </p>
        <div className="grid grid-cols-4 my-10">
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder1}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>1</h1>
              </div>
            </div>
            <h6 className="mt-5">Pilih Produk</h6>
          </div>
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder2}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>2</h1>
              </div>
            </div>
            <h6 className="mt-5">Pilih Spesifikasi Produk</h6>
          </div>
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder3}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>3</h1>
              </div>
            </div>
            <h6 className="mt-5">Masukkan Keranjang</h6>
          </div>
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder4}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>4</h1>
              </div>
            </div>
            <h6 className="mt-5">Pesan</h6>
          </div>
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder5}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>5</h1>
              </div>
            </div>
            <h6 className="mt-5">Persetujuan Pesanan</h6>
          </div>
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder6}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>6</h1>
              </div>
            </div>
            <h6 className="mt-5">Desain</h6>
          </div>
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder7}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>7</h1>
              </div>
            </div>
            <h6 className="mt-5">Produksi</h6>
          </div>
          <div className="card text-center">
            <div className="relative">
              <img
                src={svg.flowOrder8}
                alt="pilih-produk"
                className="w-[205px] h-[211px] mx-auto"
              />
              <div className="absolute -bottom-3 left-5 flex justify-center items-center w-[100px] h-[100px] bg-orange-400 rounded-full">
                <h1>8</h1>
              </div>
            </div>
            <h6 className="mt-5">Pengiriman</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlowOrder;
