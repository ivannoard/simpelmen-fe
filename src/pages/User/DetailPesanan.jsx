import React, { useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import svg from "../../assets/svg";
import ModalConfirm from "./components/ModalConfirm";
import ModalDelete from "./components/ModalDelete";

const DetailPesanan = () => {
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  const navigate = useNavigate();
  function printInvoice(e) {
    e.preventDefault();
  }
  return (
    <>
      {toggleConfirm && <ModalConfirm setToggleConfirm={setToggleConfirm} />}
      {toggleDelete && <ModalDelete setToggleDelete={setToggleDelete} />}
      <section className="overflow-x-auto w-[1440px] lg:w-full">
        <div className="mb-5">
          <div className="flex items-center mb-3">
            <HiOutlineArrowSmLeft className="text-2xl mr-3" />
            <span
              className="leading-10 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Kembali
            </span>
          </div>
          {/* content detail pesanan */}
          <div className="flex mt-4">
            <div className="w-1/3">
              <h6>Detail Pesanan</h6>
              <img src={svg.karton} alt="ini-gambar" className="my-5" />
              <div className="product-title mb-5">
                <p>Dus Offset</p>
                <p className="font-semibold">Bentuk Langsungan</p>
              </div>
              <div className="product-order-number mb-5">
                <p>No. Pesanan</p>
                <p className="font-semibold border-b w-1/2">
                  001/BIKDK/O/VII/2022
                </p>
              </div>
              <div className="product-order mb-5">
                <p>Tanggal Pesan</p>
                <p className="font-semibold border-b w-1/2">1 Januari 2022</p>
              </div>
              <button
                onClick={(e) => printInvoice(e)}
                className="button-fill !w-[178px] !h-[40px] !rounded-2xl !px-[20px] !py-[8px] !text-sm"
              >
                Cetak Formulir PO
              </button>
            </div>
            <div className="w-2/3">
              <h6 className="border-b">Spesifikasi Produk</h6>
              {/* <table className="w-full mt-5 mb-3">
                <tr>
                  <td className="py-[10px]">Ukuran</td>
                  <td className="py-[10px]">10x12x8cm</td>
                </tr>
                <tr>
                  <td className="py-[10px]">Bahan</td>
                  <td className="py-[10px]">Duplex 350 gram</td>
                </tr>
                <tr>
                  <td className="py-[10px]">Desain</td>
                  <td className="py-[10px]">Swadesain</td>
                </tr>
                <tr>
                  <td className="py-[10px]">Laminasi</td>
                  <td className="py-[10px]">Laminasi Doff</td>
                </tr>
                <tr>
                  <td className="py-[10px]">Jumlah Pesanan</td>
                  <td className="py-[10px]">500pcs</td>
                </tr>
                <tr>
                  <td className="py-[10px]">Retribusi</td>
                  <td className="py-[10px]">Rp.125.000</td>
                </tr>
              </table> */}
              <div className="specification my-5">
                <div className="flex">
                  <div className="w-1/2">Nama</div>
                  <div className="w-1/2">Roikhatul Miskiyah</div>
                </div>
                <div className="flex my-[10px]">
                  <div className="w-1/2">Bahan</div>
                  <div className="w-1/2">Duplex 350 gram</div>
                </div>
                <div className="flex my-[10px]">
                  <div className="w-1/2">Desain</div>
                  <div className="w-1/2">Swadesain</div>
                </div>
                <div className="flex my-[10px]">
                  <div className="w-1/2">Laminasi</div>
                  <div className="w-1/2">Laminasi Doff</div>
                </div>
                <div className="flex my-[10px]">
                  <div className="w-1/2">Jumlah Pesanan</div>
                  <div className="w-1/2">500pcs</div>
                </div>
                <div className="flex my-[10px]">
                  <div className="w-1/2">Retribusi</div>
                  <div className="w-1/2">Rp.125.000</div>
                </div>
              </div>
              <h6 className="border-b">Pengiriman</h6>
              <div className="shipping mb-5 mt-5">
                <div className="flex mb-5">
                  <div className="w-1/2">Nama</div>
                  <div className="w-1/2">Roikhatul Miskiyah</div>
                </div>
                <div className="flex mb-5">
                  <div className="w-1/2">Nama IKM</div>
                  <div className="w-1/2">Ikha Catering</div>
                </div>
                <div className="flex mb-5">
                  <div className="w-1/2">No. Handphone</div>
                  <div className="w-1/2">081-1234-5678</div>
                </div>
                <div className="flex mb-5">
                  <div className="w-1/2">Alamat</div>
                  <div className="w-1/2">
                    Jl. Bukit Raya No. 1, Banyumanik, Kota Semarang, Jawa Tengah
                    123456
                  </div>
                </div>
                <div className="flex mb-5">
                  <div className="w-1/2">Pengiriman</div>
                  <div className="w-1/2">Dikirim</div>
                </div>
              </div>
              <h6 className="border-b">Desain</h6>
              <div className="buttons flex gap-5 mt-5">
                <button
                  onClick={() => setToggleConfirm(true)}
                  className="button-fill !w-[178px] !h-[40px] !rounded-2xl !px-[20px] !py-[8px] !text-sm"
                >
                  Konfirmasi Desain
                </button>
                <button
                  onClick={() => setToggleDelete(true)}
                  className="button-white !w-[178px] !h-[40px] !rounded-2xl !px-[20px] !py-[8px] !text-sm"
                >
                  Hapus Desain
                </button>
                <button className="button-white !w-[178px] !h-[40px] !rounded-2xl !px-[20px] !py-[8px] !text-sm">
                  Ganti Desain
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPesanan;
