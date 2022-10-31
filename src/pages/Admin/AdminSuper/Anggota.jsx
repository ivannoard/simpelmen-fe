import React, { useState } from 'react';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ModalsAddAdmin from './components/ModalsAddAdmin';
import ModalsEditAdmin from './components/ModalsEditAdmin';

const Anggota = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [idAdmin, setIdAdmin] = useState();

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const closeModalEdit = () => {
    setIsOpenModalEdit(false);
  };

  const detailModalHandling = () => {
    setIsOpenModal(true);
  };

  const detailModalHandlingEdit = (id) => {
    setIsOpenModalEdit(true);
    setIdAdmin(id);
  };

  const submitAdminHandler = (e) => {};
  const submitEditAdminHandler = (e) => {};

  return (
    <>
      <section>
        <div className="border-b border-orange-900 mb-6">
          <h3 className="font-semibold pb-3">Admin</h3>
        </div>
        <div className="flex flex-col gap-y-4 xs:gap-y-0 xs:flex-row xs:items-center justify-between mb-4">
          <h6 className="">Tabel Admin</h6>
          <div>
            <button
              onClick={detailModalHandling}
              className="button-fill !pl-4 flex items-center"
            >
              <BsPlus className="text-2xl mr-2 fill-white" />
              Tambah Admin
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

        <article id="tableAdmin">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-white text-center p-3 min-w-[54px]">
                    No
                  </th>
                  <th className="text-white text-center p-3 min-w-[180px]">
                    Nama
                  </th>
                  <th className="text-white text-center p-3 min-w-[200px]">
                    Email
                  </th>
                  <th className="text-white text-center p-3 min-w-[90px]">
                    Posisi
                  </th>
                  <th className="text-white text-center p-3 min-w-[180px]">
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
                    <td className="text-center p-3">Ivan Nova Rivaldo</td>
                    <td className="text-center p-3">
                      rivaldonovaivan@gmail.com
                    </td>
                    <td className="text-center p-3">Desain</td>
                    <td className="text-center p-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                          onClick={() => detailModalHandlingEdit(item)}
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

      {/* Modal Add Admin */}
      <ModalsAddAdmin
        isOpen={isOpenModal}
        closeModal={closeModal}
        submitHandler={submitAdminHandler}
      />

      {/* Modal Edit Admin */}
      <ModalsEditAdmin
        isOpen={isOpenModalEdit}
        closeModal={closeModalEdit}
        submitHandler={submitEditAdminHandler}
        idAdmin={idAdmin}
      />
    </>
  );
};

export default Anggota;
