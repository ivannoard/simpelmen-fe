import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const ModalsEditProduk = ({
  isOpen,
  closeModal,
  submitHandler,
  detailData,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[45rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <MdClose
                    className="absolute text-xl top-6 right-6 cursor-pointer"
                    onClick={closeModal}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold pt-8 mb-3"
                  >
                    Edit Produk
                  </Dialog.Title>
                  <hr className="mb-6 border-orange-900" />

                  <form className="mb-2" onSubmit={submitHandler}>
                    <div className="grid grid-cols-2 2xsm:grid-cols-4 gap-x-5">
                      <div className="col-span-2">
                        <div className="mb-4 relative">
                          <label
                            htmlFor="namaProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Nama Produk <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="namaProduk"
                            name="namaProduk"
                            className="input-field-select-xs"
                            required
                          >
                            <option>Pilih Produk</option>
                            <option value="1">Produk 1</option>
                            <option value="2">Produk 2</option>
                            <option value="3">Produk 3</option>
                            <option value="4">Produk 4</option>
                            <option value="5">Produk 5</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4 relative">
                          <label
                            htmlFor="kategori"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Kategori Produk{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="kategori"
                            name="kategori"
                            className="input-field-select-xs"
                            required
                          >
                            <option>Pilih Kategori</option>
                            <option value="1">Kategori 1</option>
                            <option value="2">Kategori 2</option>
                            <option value="3">Kategori 3</option>
                            <option value="4">Kategori 4</option>
                            <option value="5">Kategori 5</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4 relative">
                          <label
                            htmlFor="jenisProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Jenis Produk <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="jenisProduk"
                            name="jenisProduk"
                            className="input-field-select-xs"
                            required
                          >
                            <option>Pilih Jenis Produk</option>
                            <option value="1">Jenis Produk 1</option>
                            <option value="2">Jenis Produk 2</option>
                            <option value="3">Jenis Produk 3</option>
                            <option value="4">Jenis Produk 4</option>
                            <option value="5">Jenis Produk 5</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4">
                          <label
                            htmlFor="beratProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Berat Produk <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="beratProduk"
                            id="beratProduk"
                            className="input-field-xs"
                            placeholder="Masukkan Berat Produk"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4 relative">
                          <label
                            htmlFor="ukuranProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Ukuran Produk{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="ukuranProduk"
                            name="ukuranProduk"
                            className="input-field-select-xs"
                            required
                          >
                            <option>Pilih Ukuran Produk</option>
                            <option value="1">Ukuran Produk 1</option>
                            <option value="2">Ukuran Produk 2</option>
                            <option value="3">Ukuran Produk 3</option>
                            <option value="4">Ukuran Produk 4</option>
                            <option value="5">Ukuran Produk 5</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4 relative">
                          <label
                            htmlFor="bahanProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Bahan Produk <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="bahanProduk"
                            name="bahanProduk"
                            className="input-field-select-xs"
                            required
                          >
                            <option>Pilih Bahan Produk</option>
                            <option value="1">Bahan Produk 1</option>
                            <option value="2">Bahan Produk 2</option>
                            <option value="3">Bahan Produk 3</option>
                            <option value="4">Bahan Produk 4</option>
                            <option value="5">Bahan Produk 5</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4 relative">
                          <label
                            htmlFor="finishingProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Finishing Produk{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="finishingProduk"
                            name="finishingProduk"
                            className="input-field-select-xs"
                            required
                          >
                            <option>Pilih Finishing Produk</option>
                            <option value="1">Finishing Produk 1</option>
                            <option value="2">Finishing Produk 2</option>
                            <option value="3">Finishing Produk 3</option>
                            <option value="4">Finishing Produk 4</option>
                            <option value="5">Finishing Produk 5</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4">
                          <label
                            htmlFor="fotoProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Foto Produk <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="file"
                            name="fotoProduk"
                            id="fotoProduk"
                            className="input-field-xs"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-4">
                          <label
                            htmlFor="deskripsiProduk"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Deskripsi Produk{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <textarea
                            name="deskripsiProduk"
                            id="deskripsiProduk"
                            className="input-field-xs"
                            placeholder="Masukkan Deskripsi Produk"
                            required
                            cols="30"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="button-fill" type="submit">
                        Perbarui
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalsEditProduk;
