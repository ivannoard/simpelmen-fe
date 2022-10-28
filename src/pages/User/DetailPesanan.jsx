import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { dummyImg } from "../../assets/image";
import Modal from "../../components/Card/Modal";
import { postOrder } from "../../services/api";

const DetailPesanan = () => {
  const user = localStorage.getItem("user");
  const parseUser = JSON.parse(user);
  const { pesananId } = useParams();
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState();

  const closeModalConfirm = () => {
    setToggleConfirm(false);
  };

  const closeModalDelete = () => {
    setToggleDelete(false);
  };

  const handleConfirm = () => {
    console.log("confirm");
    setToggleConfirm(false);
  };

  const handleDelete = () => {
    console.log("delete");
    setToggleDelete(false);
  };

  const navigate = useNavigate();
  function printInvoice(e) {
    e.preventDefault();
  }

  useEffect(() => {
    const getOrderDetail = async () => {
      await postOrder
        .get(`/list/${pesananId}`, {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => setData(response.data));
    };
    getOrderDetail();
  }, [parseUser.data.token, pesananId]);

  console.log(data);

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
                src={`data:image/jpg;base64,${data?.order_products[0].products.product_image}`}
                alt="ini-gambar"
                className="w-full object-cover"
              />
            </div>
            <div className="product-title mb-5">
              <p className="mb-1 text-secondary-900">
                {data?.order_products[0].products.product_name}
              </p>
              <p className="font-semibold">
                {data?.order_products[0].products.product_description}
              </p>
            </div>
            <div className="product-order-number mb-5">
              <p className="mb-1 text-secondary-900">No. Pesanan</p>
              <p className="font-semibold pb-3 border-b border-orange-900">
                {data?.order_code}
              </p>
            </div>
            <div className="product-order mb-5">
              <p className="mb-1 text-secondary-900">Tanggal Pesan</p>
              <p className="font-semibold pb-3 border-b border-orange-900">
                {data?.createdAt}
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
                      {data?.order_products[0].products.product_name}
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
                    <td className="pl-2 w-[50%]">{data?.order_design}</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Laminasi
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Belum ada</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Jumlah Pesanan
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">{data?.order_quantity} pcs</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Retribusi
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Belum ada</td>
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
                    <td className="pl-2 w-[50%]">{data?.users.user_name}</td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Nama IKM
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">
                      {data?.users.user_ikm} | Belum ada
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      No. Handphone
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">
                      {data?.users.user_contact} | Belum ada
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Alamat
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">
                      {data?.users.user_address} | Belum ada
                    </td>
                  </tr>
                  <tr>
                    <td className="text-secondary-900 pr-3 w-[47%] py-2">
                      Pengiriman
                    </td>
                    <td className="w-[3%]">:</td>
                    <td className="pl-2 w-[50%]">Belum ada</td>
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
