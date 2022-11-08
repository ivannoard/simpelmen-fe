import React, { useEffect, useState } from "react";
import { BsSearch, BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import ModalsDetailProduk from "./components/ModalsDetailProduk";
import ModalsAddProduk from "./components/ModalsAddProduk";
import ModalsEditProduk from "./components/ModalsEditProduk";
import { commonAPI } from "../../../services/api";
import Alerts from "../../../components/Alerts";

const Produk = () => {
  const user = localStorage.getItem("admin");
  const parseUser = JSON.parse(user);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [detailData, setDetailData] = useState();
  const [dataProduct, setDataProduct] = useState();
  const [postProduct, setPostProduct] = useState();
  const [alerts, setAlerts] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");

  const handleChangeProduct = (e) => {
    e.preventDefault();
    setPostProduct({
      ...postProduct,
      [e.target.getAttribute("name")]: e.target.value,
    });
  };

  async function handleDelete(e, id) {
    e.preventDefault();
    await commonAPI
      .delete(`/product/${id}`, {
        headers: {
          "x-access-token": `${parseUser.data.token}`,
        },
      })
      .then((response) => setAlerts(true))
      .catch((e) => {
        setFailMessage(e.message);
        setAlertFail(true);
      });
  }

  const closeModalAdd = () => {
    setIsOpenModalAdd(false);
  };

  const closeModalEdit = () => {
    setIsOpenModalEdit(false);
  };

  const closeModalDetail = () => {
    setIsOpenModalDetail(false);
  };

  const modalAddHandling = () => {
    setIsOpenModalAdd(true);
  };

  const modalEditHandling = (id) => {
    setIsOpenModalEdit(true);
  };

  const modalDetailHandling = async (id) => {
    setIsOpenModalDetail(true);
    await commonAPI
      .get(`/product/${id}`)
      .then((response) => setDetailData(response.data));
  };

  const submitProdukHandler = (e) => {
    e.preventDefault();
  };
  const submitEditProdukHandler = (e) => {
    e.preventDefault();
  };

  // get product data
  useEffect(() => {
    const getProduct = async () => {
      await commonAPI
        .get("/product")
        .then((response) => setDataProduct(response.data));
    };
    getProduct();
  }, []);

  console.log(dataProduct);

  useEffect(() => {
    setTimeout(() => {
      if (alerts || alertFail === true) setAlertFail(false) || setAlerts(false);
    }, 2000);
  }, [alertFail, alerts]);

  return (
    <>
      {alerts && (
        <Alerts
          state="true"
          background="bg-green-100"
          textColor="text-green-600"
          textContent="Status berhasil diubah!"
        />
      )}
      {alertFail && (
        <Alerts
          state="true"
          background="bg-red-100"
          textColor="text-red-600"
          textContent={`Ups, sepertinya ada yang salah: ${failMessage}`}
          closeButton="true"
        />
      )}
      <section>
        <div className="border-b border-orange-900 mb-6">
          <h3 className="font-semibold pb-3">Produk</h3>
        </div>
        <div className="flex flex-col gap-y-4 xs:gap-y-0 xs:flex-row xs:items-center justify-between mb-4">
          <h6 className="">
            Tabel Produk{" "}
            <span className="text-primary-900 font-semibold">
              GAADA SPESIFIKASI + METHOD PUT GA JELAS
            </span>
          </h6>
          <div>
            <button
              onClick={modalAddHandling}
              className="button-fill !pl-4 flex items-center"
            >
              <BsPlus className="text-2xl mr-2 fill-white" />
              Tambah Produk
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 items-center mr-4">
            <label htmlFor="sorting">Menampilkan</label>
            <select
              name="sorting"
              id="sorting"
              className="w-[50px] rounded h-10 p-2 bg-white border border-primary-900"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex relative top-2 flex-col mb-4">
            <input
              type="search"
              className="input-field !rounded-full !py-2 !pl-14"
              placeholder="Cari"
              name="search"
              required
              autoComplete="on"
              // onChange={handleChange}
            />
            <BsSearch className="absolute text-xl top-3 left-6 fill-secondary-800" />
          </div>
        </div>

        <article id="tableProduk">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-white text-center p-3 min-w-[54px]">
                    No
                  </th>
                  <th className="text-white text-center p-3 min-w-[120px]">
                    Bentuk Produk
                  </th>
                  <th className="text-white text-center p-3 min-w-[120px]">
                    Kategori Produk
                  </th>
                  <th className="text-white text-center p-3 min-w-[240px]">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataProduct?.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="text-center p-3">{index + 1}</td>
                    <td className="text-center p-3">{item.product_name}</td>
                    <td className="text-center p-3">
                      {item.product_categories.product_category_name}
                    </td>
                    <td className="text-center p-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                          onClick={() => modalDetailHandling(item.product_id)}
                        >
                          Detail
                        </button>
                        <button
                          className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                          onClick={() => modalEditHandling(item.product_id)}
                        >
                          Edit
                        </button>
                        <div
                          className="button-fill !p-[15px]"
                          onClick={(e) => handleDelete(e, item.product_id)}
                        >
                          <FaTrash className="fill-white text-base" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav
            className="flex justify-end items-center gap-x-[.375rem] py-2 mt-2"
            aria-label="pagination"
          >
            <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base !px-3">
              <HiChevronLeft className="!text-base xs:!text-xl" />
            </button>
            <button className="button-gradient-sm !text-xs xs:!text-base">
              1
            </button>
            <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base">
              2
            </button>
            <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base">
              3
            </button>
            <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base !px-3">
              <HiChevronRight className="!text-base xs:!text-xl" />
            </button>
          </nav>
        </article>
      </section>

      {/* Modal Add Produk */}
      <ModalsAddProduk
        isOpen={isOpenModalAdd}
        closeModal={closeModalAdd}
        submitHandler={submitProdukHandler}
        handleChangeProduct={handleChangeProduct}
      />

      {/* Modal Edit Produk */}
      <ModalsEditProduk
        isOpen={isOpenModalEdit}
        closeModal={closeModalEdit}
        submitHandler={submitEditProdukHandler}
        detailData={detailData}
      />

      {/* Modal Detail Produk */}
      <ModalsDetailProduk
        isOpen={isOpenModalDetail}
        closeModal={closeModalDetail}
        detailData={detailData}
      />
    </>
  );
};

export default Produk;
