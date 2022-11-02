import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';

const ModalsAddAdmin = ({ isOpen, closeModal, submitHandler }) => {
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
                <Dialog.Panel className="w-full max-w-[32rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <MdClose
                    className="absolute text-xl top-6 right-6 cursor-pointer"
                    onClick={closeModal}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold pt-8 mb-3"
                  >
                    Tambah Admin
                  </Dialog.Title>
                  <hr className="mb-6 border-orange-900" />

                  <form
                    className="mb-2"
                    onSubmit={submitHandler}
                  >
                    <div className="mb-5">
                      <label
                        htmlFor="namaAdmin"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Nama Admin
                      </label>
                      <input
                        type="text"
                        name="namaAdmin"
                        id="namaAdmin"
                        className="input-field-xs"
                        placeholder="Masukkan Nama Admin"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="posisiAdmin"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Posisi Admin
                      </label>
                      <input
                        type="text"
                        name="posisiAdmin"
                        id="posisiAdmin"
                        className="input-field-xs"
                        placeholder="Masukkan Posisi Admin"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="emailAdmin"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="emailAdmin"
                        id="emailAdmin"
                        className="input-field-xs"
                        placeholder="Masukkan Email"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="pwdAdmin"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="pwdAdmin"
                        id="pwdAdmin"
                        className="input-field-xs"
                        placeholder="Masukkan Password"
                        required
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="pwdConfirmAdmin"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Konfirmasi Password
                      </label>
                      <input
                        type="password"
                        name="pwdConfirmAdmin"
                        id="pwdConfirmAdmin"
                        className="input-field-xs"
                        placeholder="Masukkan Konfirmasi Password"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="button-fill"
                        type="submit"
                      >
                        Tambahkan
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

export default ModalsAddAdmin;
