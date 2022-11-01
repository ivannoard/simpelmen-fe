import React, { useState } from 'react';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ModalsEditSpesifikasi from './components/ModalsEditSpesifikasi';
import ModalsSpesifikasi from './components/ModalsSpesifikasi';

const Spesifikasi = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [modalContent, setModalContent] = useState({
    type: '',
    placeholder: '',
    label: '',
  });
  const [modalEditContent, setModalEditContent] = useState({
    type: '',
    placeholder: '',
    label: '',
    id: '',
    kategori: '',
  });

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const closeModalEdit = () => {
    setIsOpenModalEdit(false);
  };

  const handleModal = (type) => {
    switch (type) {
      case 'kategori':
        setModalContent({
          type: 'kategori',
          label: 'Kategori',
          placeholder: 'Masukkan Kategori Produk',
        });
        break;
      case 'bahan':
        setModalContent({
          type: 'bahan',
          label: 'Bahan',
          placeholder: 'Masukkan Bahan Produk',
        });
        break;
      case 'bentuk':
        setModalContent({
          type: 'bentuk',
          label: 'Bentuk',
          placeholder: 'Masukkan Bentuk Produk',
        });
        break;
      case 'ukuran':
        setModalContent({
          type: 'ukuran',
          label: 'Deskripsi',
          placeholder: 'Masukkan Deskripsi Produk',
        });
        break;
      case 'finishing':
        setModalContent({
          type: 'finishing',
          label: 'Finishing',
          placeholder: 'Masukkan Finishing Produk',
        });
        break;
      default:
        break;
    }
    setIsOpenModal(true);
  };

  const handleModalEdit = (type, id, kategori) => {
    switch (type) {
      case 'kategori':
        setModalEditContent({
          type: 'kategori',
          label: 'Kategori',
          placeholder: 'Masukkan Kategori Produk',
          id: id,
          kategori: kategori,
        });
        break;
      case 'bahan':
        setModalEditContent({
          type: 'bahan',
          label: 'Bahan',
          placeholder: 'Masukkan Bahan Produk',
          id: id,
          kategori: kategori,
        });
        break;
      case 'bentuk':
        setModalEditContent({
          type: 'bentuk',
          label: 'Bentuk',
          placeholder: 'Masukkan Bentuk Produk',
          id: id,
          kategori: kategori,
        });
        break;
      case 'ukuran':
        setModalEditContent({
          type: 'ukuran',
          label: 'Deskripsi',
          placeholder: 'Masukkan Deskripsi Produk',
          id: id,
          kategori: kategori,
        });
        break;
      case 'finishing':
        setModalEditContent({
          type: 'finishing',
          label: 'Finishing',
          placeholder: 'Masukkan Finishing Produk',
          id: id,
          kategori: kategori,
        });
        break;
      default:
        break;
    }
    setIsOpenModalEdit(true);
  };

  const submitModalHandler = (e) => {
    e.preventDefault();
  };

  const submitEditModalHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="border-b border-orange-900 mb-6">
          <h3 className="font-semibold pb-3">Spesifikasi</h3>
        </div>
        <article
          id="tableKategoriProduk"
          className="mb-12 p-8 rounded-xl shadow-gray"
        >
          <div className="flex flex-col gap-y-4 2xsm:gap-y-0 2xsm:flex-row 2xsm:items-center justify-between mb-6 2xsm:mb-4">
            <h6>Kategori Produk</h6>
            <div>
              <button
                onClick={() => handleModal('kategori')}
                className="button-fill !pl-4 flex items-center"
              >
                <BsPlus className="text-2xl mr-2 fill-white" />
                Tambah Produk
              </button>
            </div>
          </div>
          <div className="flex flex-col 2xsm:flex-row 2xsm:items-center 2xsm:justify-between mb-4">
            <div className="flex gap-2 items-center mb-2 2xsm:mb-0 2xsm:mr-4">
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
          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto mb-4 w-full">
                <thead>
                  <tr className="bg-orange-900">
                    <th className="text-white text-center p-3 min-w-[54px]">
                      No
                    </th>
                    <th className="text-white text-center p-3 min-w-[160px]">
                      Kategori Produk
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
                      <td className="text-center p-3">karton</td>
                      <td className="text-center p-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                            onClick={() =>
                              handleModalEdit('kategori', item, 'Karton')
                            }
                          >
                            Edit
                          </button>
                          <button className="button-fill !p-[15px]">
                            <FaTrash className="fill-white text-base" />
                          </button>
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
          </div>
        </article>
        <article
          id="tableBahanProduk"
          className="mb-12 p-8 rounded-xl shadow-gray"
        >
          <div className="flex flex-col gap-y-4 2xsm:gap-y-0 2xsm:flex-row 2xsm:items-center justify-between mb-6 2xsm:mb-4">
            <h6>Bahan Produk</h6>
            <div>
              <button
                onClick={() => handleModal('bahan')}
                className="button-fill !pl-4 flex items-center"
              >
                <BsPlus className="text-2xl mr-2 fill-white" />
                Tambah Bahan
              </button>
            </div>
          </div>
          <div className="flex flex-col 2xsm:flex-row 2xsm:items-center 2xsm:justify-between mb-4">
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
          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto mb-4 w-full">
                <thead>
                  <tr className="bg-orange-900">
                    <td className="text-white text-center p-3 min-w-[54px]">
                      No
                    </td>
                    <td className="text-white text-center p-3 min-w-[160px]">
                      Bahan Produk
                    </td>
                    <td className="text-white text-center p-3 min-w-[180px]">
                      Aksi
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <tr
                      className="border-b"
                      key={index}
                    >
                      <td className="text-center p-3">{index + 1}</td>
                      <td className="text-center p-3">Duplex</td>
                      <td className="text-center p-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                            onClick={() =>
                              handleModalEdit('bahan', item, 'Karton')
                            }
                          >
                            Edit
                          </button>
                          <button className="button-fill !p-[15px]">
                            <FaTrash className="fill-white text-base" />
                          </button>
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
          </div>
        </article>
        <article
          id="tableBentukProduk"
          className="mb-12 p-8 rounded-xl shadow-gray"
        >
          <div className="flex flex-col gap-y-4 2xsm:gap-y-0 2xsm:flex-row 2xsm:items-center justify-between mb-6 2xsm:mb-4">
            <h6>Bentuk Produk</h6>
            <div>
              <button
                onClick={() => handleModal('bentuk')}
                className="button-fill !pl-4 flex items-center"
              >
                <BsPlus className="text-2xl mr-2 fill-white" />
                Tambah Bentuk
              </button>
            </div>
          </div>
          <div className="flex flex-col 2xsm:flex-row 2xsm:items-center 2xsm:justify-between mb-4">
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
          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto mb-4 w-full">
                <thead>
                  <tr className="bg-orange-900">
                    <th className="text-white text-center p-3 min-w-[54px]">
                      No
                    </th>
                    <th className="text-white text-center p-3 min-w-[160px]">
                      Bentuk Produk
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
                      <td className="text-center p-3">karton</td>
                      <td className="text-center p-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                            onClick={() =>
                              handleModalEdit('bentuk', item, 'Karton')
                            }
                          >
                            Edit
                          </button>
                          <button className="button-fill !p-[15px]">
                            <FaTrash className="fill-white text-base" />
                          </button>
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
          </div>
        </article>
        <article
          id="tableUkuranProduk"
          className="mb-12 p-8 rounded-xl shadow-gray"
        >
          <div className="flex flex-col gap-y-4 2xsm:gap-y-0 2xsm:flex-row 2xsm:items-center justify-between mb-6 2xsm:mb-4">
            <h6>Ukuran Produk</h6>
            <div>
              <button
                onClick={() => handleModal('ukuran')}
                className="button-fill !pl-4 flex items-center"
              >
                <BsPlus className="text-2xl mr-2 fill-white" />
                Tambah Ukuran
              </button>
            </div>
          </div>
          <div className="flex flex-col 2xsm:flex-row 2xsm:items-center 2xsm:justify-between mb-4">
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
          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto mb-4 w-full">
                <thead>
                  <tr className="bg-orange-900">
                    <th className="text-white text-center p-3 min-w-[54px] w-[8%]">
                      No
                    </th>
                    <th className="text-white text-center p-3 min-w-[160px] w-[22%]">
                      Ukuran Produk
                    </th>
                    <th className="text-white text-center p-3 min-w-[180px] w-[45%]">
                      Deskripsi Produk
                    </th>
                    <th className="text-white text-center p-3 min-w-[160px] w-[25%]">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <tr
                      className="border-b align-baseline"
                      key={index}
                    >
                      <td className="text-center p-3">{index + 1}</td>
                      <td className="text-center p-3">karton</td>
                      <td className="p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quia illo nobis ipsam doloremque cumque, pariatur
                        ut commodi voluptatibus reiciendis fugit.
                      </td>
                      <td className="text-center p-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                            onClick={() =>
                              handleModalEdit('ukuran', item, 'Karton')
                            }
                          >
                            Edit
                          </button>
                          <button className="button-fill !p-[15px]">
                            <FaTrash className="fill-white text-base" />
                          </button>
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
          </div>
        </article>
        <article
          id="tableFinishingKemasan"
          className="mb-12 p-8 rounded-xl shadow-gray"
        >
          <div className="flex flex-col gap-y-4 2xsm:gap-y-0 2xsm:flex-row 2xsm:items-center justify-between mb-6 2xsm:mb-4">
            <h6>Finishing Kemasan</h6>
            <div>
              <button
                onClick={() => handleModal('finishing')}
                className="button-fill !pl-4 flex items-center"
              >
                <BsPlus className="text-2xl mr-2 fill-white" />
                Tambah Finishing
              </button>
            </div>
          </div>
          <div className="flex flex-col 2xsm:flex-row 2xsm:items-center 2xsm:justify-between mb-4">
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
          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto mb-4 w-full">
                <thead>
                  <tr className="bg-orange-900">
                    <th className="text-white text-center p-3 min-w-[54px]">
                      No
                    </th>
                    <th className="text-white text-center p-3 min-w-[160px]">
                      Finishing Kemasan
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
                      <td className="text-center p-3">karton</td>
                      <td className="text-center p-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                            onClick={() =>
                              handleModalEdit('finishing', item, 'Karton')
                            }
                          >
                            Edit
                          </button>
                          <button className="button-fill !p-[15px]">
                            <FaTrash className="fill-white text-base" />
                          </button>
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
          </div>
        </article>
      </section>

      {/* Modal Spesifikasi */}
      <ModalsSpesifikasi
        isOpen={isOpenModal}
        closeModal={closeModal}
        submitHandler={submitModalHandler}
        content={modalContent}
      />

      {/* Modal Edit Spesifikasi */}
      <ModalsEditSpesifikasi
        isOpen={isOpenModalEdit}
        closeModal={closeModalEdit}
        submitHandler={submitEditModalHandler}
        content={modalEditContent}
      />
    </>
  );
};

export default Spesifikasi;
