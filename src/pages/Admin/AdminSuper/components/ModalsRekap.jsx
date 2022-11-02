import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';
import { dummyImg } from '../../../../assets/image';

const ModalsRekap = ({ isOpen, closeModal, idPesanan }) => {
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
                <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <MdClose
                    className="absolute text-xl top-6 right-6 cursor-pointer"
                    onClick={closeModal}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold pt-10 mb-6 text-center"
                  >
                    Detail Pesanan
                  </Dialog.Title>
                  <figure className="w-[80%] mx-auto mb-6">
                    <img
                      src={dummyImg.boxTentengan}
                      alt={`nama`}
                      className="w-full"
                    />
                  </figure>
                  <div className="text-center mb-6">
                    <p className="mb-1">
                      Pesanan: {`1 Januari 2022`}/{idPesanan}
                    </p>
                    <p className="mb-1">
                      {`Standing Pouch`} {`(Nama Produk)`}
                    </p>
                    <p>
                      {`Standing Pouch Full COlor`} {`(Jenis Produk)`}
                    </p>
                  </div>
                  <div className="spesifikasi w-full bg-orange-600 rounded-lg p-4 text-center mb-6">
                    <h6 className="text-white mb-3">Spesifikasi Produk</h6>
                    <p className="text-white mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium quod hic nemo rerum fugit quaerat eaque
                      molestias laboriosam neque tempora!
                    </p>
                    <div className="text-left">
                      <p className="text-white font-semibold">
                        Jumlah: {`500`} pcs
                      </p>
                      <p className="text-white font-semibold">
                        Retribusi: Rp {`112.500`}
                      </p>
                    </div>
                  </div>
                  <div className="w-full border border-orange-900 rounded-lg p-4">
                    <h6 className="text-center mb-3">Pengiriman</h6>
                    <table>
                      <tr>
                        <td className="w-[28%] align-baseline">Nama</td>
                        <td className="w-[4%] align-baseline">:</td>
                        <td className="w-[68%] align-baseline">{`Ivan Nova Ardiansyah`}</td>
                      </tr>
                      <tr>
                        <td className="w-[28%] align-baseline">Nama IKM</td>
                        <td className="w-[4%] align-baseline">:</td>
                        <td className="w-[68%] align-baseline">{`Vanz`}</td>
                      </tr>
                      <tr>
                        <td className="w-[28%] align-baseline">Telepon</td>
                        <td className="w-[4%] align-baseline">:</td>
                        <td className="w-[68%] align-baseline">{`6282314145656`}</td>
                      </tr>
                      <tr>
                        <td className="w-[28%] align-baseline">Alamat</td>
                        <td className="w-[4%] align-baseline">:</td>
                        <td className="w-[68%] align-baseline">
                          {`Jl. Ikigari No. 67, Kirimate, Kirigakure`}
                        </td>
                      </tr>
                    </table>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalsRekap;
