import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FilePond, registerPlugin } from 'react-filepond';
import ModalChat from './ModalChat';
import { MdClose } from 'react-icons/md';
import { dummyImg } from '../../../../assets/image';
import { FaTrashAlt } from 'react-icons/fa';
import './styles.css';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Modals = ({
  isOpen,
  closeModal,
  idPesanan,
  toggleModalChat,
  openModalChat,
  closeModalChat,
  submitChatHandler,
}) => {
  const isDisabled = true;
  const [fileDesain, setFileDesain] = useState([]);

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
          id="detailChat"
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
                <div className="flex space-x-6 justify-center">
                  <Dialog.Panel
                    className={`w-full max-w-[32rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative max-h-[90vh] overflow-y-auto`}
                  >
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
                      <div className="relative image-warp-detail">
                        <figure className="p-6 rounded-xl border border-orange-900/70">
                          <img
                            src={dummyImg.boxTentengan}
                            alt={`nama`}
                            className="w-full"
                          />
                        </figure>
                        <div className="absolute right-0 top-0 pt-3 pr-3 transition-all-200">
                          <div
                            className="button-fill-sm !p-2"
                            role="button"
                          >
                            <FaTrashAlt className="text-xl fill-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <form>
                      <div className="mb-5">
                        <label
                          htmlFor="fileDesain"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Edit desain
                        </label>
                        <FilePond
                          files={fileDesain}
                          onupdatefiles={setFileDesain}
                          allowMultiple={false}
                          server="/api"
                          name="filesDesain"
                          labelIdle="<p class='text-sm text-secondary-900'>Drag & drop desain Anda</p>"
                          labelFileTypeNotAllowed="File tidak didukung"
                          labelFileWaitingForSize="Menunggu ukuran"
                          labelFileLoadError="Error"
                          labelFileProcessing="Mengunggah"
                          labelFileProcessingComplete="Selesai"
                          labelFileProcessingAborted="Dibatalkan"
                          labelFileProcessingError="Error"
                          labelFileProcessingRevertError="Error"
                          labelTapToCancel="Klik untuk membatalkan"
                          labelTapToRetry="Klik untuk mengulangi"
                          labelTapToUndo="Klik untuk mengembalikan"
                          labelButtonRemoveItem="Hapus"
                          labelButtonAbortItemLoad="Batalkan"
                          labelButtonRetryItemLoad="Ulangi"
                          labelButtonAbortItemProcessing="Batalkan"
                          labelButtonUndoItemProcessing="Kembalikan"
                          labelButtonRetryItemProcessing="Ulangi"
                          labelButtonProcessItem="Unggah"
                          labelMaxFileSizeExceeded="Ukuran file terlalu besar"
                          labelMaxFileSize="Ukuran maksimal: {filesize}"
                          labelMaxTotalFileSizeExceeded="Ukuran total file terlalu besar"
                          labelMaxTotalFileSize="Ukuran total maksimal: {filesize}"
                        />
                      </div>
                    </form>

                    <form className="mb-9">
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
                    </form>
                    <div className="flex justify-center">
                      <div
                        className="button-fill-sm"
                        onClick={openModalChat}
                        role="button"
                      >
                        Riwayat chat
                      </div>
                    </div>
                  </Dialog.Panel>

                  {toggleModalChat && (
                    <Dialog.Panel className="w-full max-w-[28rem] transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all relative max-h-[75vh]">
                      <ModalChat
                        closeModalChat={closeModalChat}
                        submitHandling={submitChatHandler}
                      />
                    </Dialog.Panel>
                  )}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modals;
