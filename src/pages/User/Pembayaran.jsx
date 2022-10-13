import React from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

const Pembayaran = () => {
  const dummyData = [
    {
      id: 1,
      date: '2021-08-01',
      pesanan: '001/BIKDK/O/VII/2022',
      produk: 'Baju Koko',
      status: 1,
    },
    {
      id: 2,
      date: '2021-09-04',
      pesanan: '001/BIKDK/O/VII/2022',
      produk: 'Kemeja',
      status: 2,
    },
    {
      id: 3,
      date: '2022-01-20',
      pesanan: '001/BIKDK/O/VII/2022',
      produk: 'Roti Gandum',
      status: 3,
    },
    {
      id: 4,
      date: '2022-01-22',
      pesanan: '001/BIKDK/O/VII/2022',
      produk: 'Sepatu Nike KW Super',
      status: 4,
    },
    {
      id: 5,
      date: '2022-02-28',
      pesanan: '001/BIKDK/O/VII/2022',
      produk: 'Vitamin C',
      status: 3,
    },
  ];

  const badge = (status) => {
    switch (status) {
      case 1:
        return (
          <p className="px-4 py-1 rounded font-medium cursor-default bg-primary-900/[15%] text-sm transition-200 hover:bg-primary-900/20 text-primary-900">
            Belum Terkonfirmasi
          </p>
        );
      case 2:
        return (
          <p className="px-4 py-1 rounded font-medium cursor-default bg-success/[15%] text-sm transition-200 hover:bg-success/20 text-success">
            Sudah Terkonfirmasi
          </p>
        );
      case 3:
        return (
          <p className="px-4 py-1 rounded font-medium cursor-default bg-primary-900/[15%] text-sm transition-200 hover:bg-primary-900/20 text-primary-900">
            Belum Diproses
          </p>
        );
      case 4:
        return (
          <p className="px-4 py-1 rounded font-medium cursor-default bg-success/[15%] text-sm transition-200 hover:bg-success/20 text-success">
            Sudah Diproses
          </p>
        );
      default:
        return (
          <p className="px-4 py-1 rounded font-medium cursor-default bg-primary-900/[15%] text-sm transition-200 hover:bg-primary-900/20 text-primary-900">
            Belum Terkonfirmasi
          </p>
        );
    }
  };

  return (
    <>
      <section>
        <h5 className="mb-4">Status Pesanan</h5>

        <article id="statusPesanan mb-8">
          <div className="w-full grid grid-cols-1 gap-y-5">
            {dummyData?.map((item) => (
              <div
                className="col-span-1"
                key={item.id}
              >
                <div className="w-full shadow-gray p-4 rounded-[10px] bg-white grid grid-cols-8 items-center border border-secondary-700/40">
                  <div className="col-span-2">
                    <p className="text-sm font-medium mb-2 text-secondary-900">
                      Tanggal Pesanan
                    </p>
                    <p className="font-semibold">{item.date}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-medium mb-2 text-secondary-900">
                      No. Pesanan
                    </p>
                    <p className="font-semibold">{item.pesanan}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-medium mb-2 text-secondary-900">
                      Nama Produk
                    </p>
                    <p className="font-semibold">{item.produk}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex justify-center">
                      {badge(item.status)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <nav
          className="flex justify-center items-center gap-x-[.375rem] py-2 mt-10"
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
      </section>
    </>
  );
};

export default Pembayaran;
