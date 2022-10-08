import React, { useState } from 'react';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { dummyImg } from '../../assets/image';
import Modal from '../../components/Card/Modal';

const DetailPesanan = () => {
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  const closeModalConfirm = () => {
    setToggleConfirm(false);
  };

  const closeModalDelete = () => {
    setToggleDelete(false);
  };

  const handleConfirm = () => {
    console.log('confirm');
    setToggleConfirm(false);
  };

  const handleDelete = () => {
    console.log('delete');
    setToggleDelete(false);
  };

  const navigate = useNavigate();
  function printInvoice(e) {
    e.preventDefault();
  }
  return (
    <>
      <section className="w-full mb-6">
        <div className="flex items-center mb-4">
          <HiOutlineArrowSmLeft className="text-2xl mr-3" />
          <span
            className="leading-10 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Kembali
          </span>
        </div>

        {/* content detail pesanan */}
        <div className="grid grid-cols-4 2md:grid-cols-8 gap-x-5 gap-y-10 2md:gap-y-0">
          <div className="col-span-4 2md:col-span-3">
            <h6 className="mb-5">Detail Pesanan</h6>
            <div className="mb-5 p-4 border rounded-lg border-orange-900/40">
              <img
                src={dummyImg.kardus}
                alt="ini-gambar"
                className="w-full object-cover"
              />
            </div>
            <div className="product-title mb-5">
              <p className="mb-1 text-secondary-900">Dus Offset</p>
              <p className="font-semibold">Bentuk Langsungan</p>
            </div>
            <div className="product-order-number mb-5">
              <p className="mb-1 text-secondary-900">No. Pesanan</p>
              <p className="font-semibold pb-3 border-b border-orange-900">
                001/BIKDK/O/VII/2022
              </p>
            </div>
            <div className="product-order mb-5">
              <p className="mb-1 text-secondary-900">Tanggal Pesan</p>
              <p className="font-semibold pb-3 border-b border-orange-900">
                1 Januari 2022
              </p>
            </div>
            <button
              onClick={(e) => printInvoice(e)}
              className="button-fill-sm !text-sm"
            >
              Cetak Formulir PO
            </button>
          </div>

          <div className="2md:col-start-5 col-span-4">
            <h6 className="pb-3 mb-5 border-b border-orange-900">
              Spesifikasi Produk
            </h6>
            <div className="specification mb-6">
              <table className="w-full">
                <tbody className="align-baseline">
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Nama
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">
                      Roikhiatul Miskiyah ijei hefiejf eiefjie feh fhue
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Bahan
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Duplex 350 gram</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Desain
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Swadesain</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Laminasi
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Laminasi Doff</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Jumlah Pesanan
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">1000 pcs</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Retribusi
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Rp 125.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="pb-3 mb-5 border-b border-orange-900">Pengiriman</h6>
            <div className="shipping mb-6">
              <table className="w-full">
                <tbody className="align-baseline">
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Nama
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">
                      Roikhiatul Miskiyah ijei hefiejf eiefjie feh fhue
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Nama IKM
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Ikha Catering</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      No. Handphone
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">082312123434</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Alamat
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">
                      Jl. Bukit Raya No. 1, Banyumanik, Kota Semarang, Jawa
                      Tengah 123456
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Pengiriman
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Dikirm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h6 className="pb-3 mb-5 border-b border-orange-900">Desain</h6>
            <div className="buttons flex gap-5 flex-wrap">
              <button
                onClick={() => setToggleConfirm(true)}
                className="button-fill-sm !text-sm"
              >
                Konfirmasi Desain
              </button>
              <button
                onClick={() => setToggleDelete(true)}
                className="button-white-sm !text-sm"
              >
                Hapus Desain
              </button>
              <button className="button-white-sm !text-sm">Ganti Desain</button>
            </div>
          </div>
        </div>
      </section>

      {/* modal confirm */}
      <Modal
        isOpen={toggleConfirm}
        closeModal={closeModalConfirm}
        handleAccept={handleConfirm}
        titleModal="Konfirmasi Desain"
        captionModal="Anda tidak dapat mengubah desain setelah konfirmasi"
        btnCancelCaption="Kembali"
        btnAcceptCaption="Lanjutkan"
        isErrorModal={false}
      />

      {/* modal delete */}
      <Modal
        isOpen={toggleDelete}
        closeModal={closeModalDelete}
        handleAccept={handleDelete}
        titleModal="Hapus Desain"
        captionModal="Yakin ingin menghapus desain?"
        btnCancelCaption="Kembali"
        btnAcceptCaption="Hapus"
        isErrorModal={false}
      />
    </>
  );
};

export default DetailPesanan;
