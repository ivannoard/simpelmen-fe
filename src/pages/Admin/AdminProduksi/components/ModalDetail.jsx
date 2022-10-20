import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';
import { dummyImg } from '../../../../assets/image';

const ModalDetail = ({ isOpen, closeModal, idPesanan }) => {
  const isDisabled = true;

  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
        >
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
                <Dialog.Panel className="w-full max-w-[33.75rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <MdClose
                    className="absolute text-xl top-6 right-6 cursor-pointer"
                    onClick={closeModal}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold pt-8 mb-3"
                  >
                    Detail Pesanan
                  </Dialog.Title>
                  <hr className="mb-6" />
                  <div className="mb-6">
                    <p className="mb-1">
                      Pesanan: {`1 Januari 2022`}/{idPesanan}
                    </p>
                    <p className="mb-1">
                      {`Standing Pouch`} {`(Nama Produk)`}
                    </p>
                    <p className="mb-4">
                      {`Standing Pouch Full COlor`} {`(Jenis Produk)`}
                    </p>
                    <figure className="p-6 rounded-xl border border-orange-900/70">
                      <img
                        src={dummyImg.boxTentengan}
                        alt={`nama`}
                        className="w-full"
                      />
                    </figure>
                  </div>

                  <form>
                    <div className="mb-5">
                      <label
                        htmlFor="ukuran"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Ukuran Produk
                      </label>
                      <div className="grid grid-cols-3 gap-x-3">
                        <div className="col-span-1">
                          <div className="relative">
                            <input
                              type="text"
                              name="panjang"
                              className={`input-field-xs ${
                                isDisabled ? '!bg-secondary-600' : '!bg-white'
                              }`}
                              value={`20`}
                              disabled={isDisabled}
                            />
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="relative">
                            <input
                              type="text"
                              name="lebar"
                              className={`input-field-xs ${
                                isDisabled ? '!bg-secondary-600' : '!bg-white'
                              }`}
                              value={`20`}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="relative">
                            <input
                              type="text"
                              name="tinggi"
                              className={`input-field-xs ${
                                isDisabled ? '!bg-secondary-600' : '!bg-white'
                              }`}
                              value={`30`}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="jenisProduk"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Jenis Produk
                      </label>
                      <input
                        type="text"
                        name="jenisProduk"
                        id="jenisProduk"
                        className={`input-field-xs ${
                          isDisabled ? '!bg-secondary-600' : '!bg-white'
                        }`}
                        placeholder="Masukkan jenis produk"
                        disabled={isDisabled}
                        value={`A1 Pond`}
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="bahanProduk"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Bahan Produk
                      </label>
                      <input
                        type="text"
                        name="bahanProduk"
                        id="bahanProduk"
                        className={`input-field-xs ${
                          isDisabled ? '!bg-secondary-600' : '!bg-white'
                        }`}
                        placeholder="Masukkan bahan produk"
                        disabled={isDisabled}
                        value={`Duplex 310 gram`}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="finishingProduk"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Finishing Produk
                      </label>
                      <input
                        type="text"
                        name="finishingProduk"
                        id="finishingProduk"
                        className={`input-field-xs ${
                          isDisabled ? '!bg-secondary-600' : '!bg-white'
                        }`}
                        placeholder="Masukkan finishing produk"
                        disabled={isDisabled}
                        value={`Laminasi glossi`}
                      />
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

export default ModalDetail;
