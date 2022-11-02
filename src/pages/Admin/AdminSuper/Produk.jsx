import React, { useState } from 'react';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ModalsDetailProduk from './components/ModalsDetailProduk';
import ModalsAddProduk from './components/ModalsAddProduk';
import ModalsEditProduk from './components/ModalsEditProduk';

const Produk = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [idProduk, setIdProduk] = useState();

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
    setIdProduk(id);
  };

  const modalDetailHandling = (id) => {
    setIsOpenModalDetail(true);
    setIdProduk(id);
  };

  const submitProdukHandler = (e) => {};
  const submitEditProdukHandler = (e) => {};
  return (
    <>
      <section>
        <div className="border-b border-orange-900 mb-6">
          <h3 className="font-semibold pb-3">Produk</h3>
        </div>
        <div className="flex flex-col gap-y-4 xs:gap-y-0 xs:flex-row xs:items-center justify-between mb-4">
          <h6 className="">Tabel Produk</h6>
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
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <tr
                    className="border-b"
                    key={index}
                  >
                    <td className="text-center p-3">{index + 1}</td>
                    <td className="text-center p-3">A1</td>
                    <td className="text-center p-3">Karton</td>
                    <td className="text-center p-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                          onClick={() => modalDetailHandling(item)}
                        >
                          Detail
                        </button>
                        <button
                          className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                          onClick={() => modalEditHandling(item)}
                        >
                          Edit
                        </button>
                        <div className="button-fill !p-[15px]">
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
      />

      {/* Modal Edit Produk */}
      <ModalsEditProduk
        isOpen={isOpenModalEdit}
        closeModal={closeModalEdit}
        submitHandler={submitEditProdukHandler}
        idProduk={idProduk}
      />

      {/* Modal Detail Produk */}
      <ModalsDetailProduk
        isOpen={isOpenModalDetail}
        closeModal={closeModalDetail}
        idProduk={idProduk}
      />
    </>
  );
};

export default Produk;
