import React from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Pesanan = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      date: '2021-08-01',
      pesanan: '001/BIKDK/O/VII/2022',
      jenis: 'Bentuk Langsungan - Duplex 310gr - Laminasi Glosi',
      status: 1,
    },
    {
      id: 2,
      date: '2021-09-04',
      pesanan: '001/BIKDK/O/VII/2022',
      jenis: 'Bentuk Langsungan - Duplex 310gr - Laminasi Glosi',
      status: 2,
    },
    {
      id: 3,
      date: '2022-01-20',
      pesanan: '001/BIKDK/O/VII/2022',
      jenis: 'Bentuk Langsungan - Duplex 310gr - Laminasi Glosi',
      status: 3,
    },
    {
      id: 4,
      date: '2022-01-22',
      pesanan: '001/BIKDK/O/VII/2022',
      jenis: 'Bentuk Langsungan - Duplex 310gr - Laminasi Glosi',
      status: 4,
    },
    {
      id: 5,
      date: '2022-02-28',
      pesanan: '001/BIKDK/O/VII/2022',
      jenis: 'Bentuk Langsungan - Duplex 310gr - Laminasi Glosi',
      status: 3,
    },
  ];

  return (
    <>
      <section>
        <h5 className="mb-4">Detail Pesanan</h5>

        <article
          id="pesanan"
          className="mb-8"
        >
          <div className="w-full grid grid-cols-4 gap-y-5 gap-x-6">
            {dummyData?.map((item) => (
              <div
                className="col-span-4"
                key={item.id}
              >
                <div className="w-full shadow-gray p-4 rounded-[10px] bg-white grid grid-cols-8 gap-x-3 gap-y-2 xs:gap-y-3 xl:items-center border border-secondary-700/40">
                  <div className="col-span-3 xl:col-span-2">
                    <p className="text-xs xs:text-sm font-medium mb-1 xs:mb-2 text-secondary-900">
                      Tanggal Pesanan
                    </p>
                    <p className="font-semibold">{item.date}</p>
                  </div>
                  <div className="col-span-5 xl:col-span-2 block xl:hidden">
                    <div className="flex xl:justify-center">
                      <button
                        onClick={() => navigate(`/dashboard/detail/${item}`)}
                        className="border border-secondary-800 rounded-[4px] px-2 py-2 flex items-center hover:border-orange-900 transition-200"
                        type="button"
                      >
                        <FaShoppingCart className="text-lg fill-dark mr-2" />
                        <span className="text-sm">Detail Pesanan</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-span-3 xl:col-span-2">
                    <p className="text-xs xs:text-sm font-medium mb-1 xs:mb-2 text-secondary-900">
                      No. Pesanan
                    </p>
                    <p className="font-semibold truncate">{item.pesanan}</p>
                  </div>
                  <div className="col-span-5 xl:col-span-2">
                    <p className="text-xs xs:text-sm font-medium mb-1 xs:mb-2 text-secondary-900">
                      Jenis Produk
                    </p>
                    <p className="font-semibold">{item.jenis}</p>
                  </div>
                  <div className="xl:col-span-2 hidden xl:block">
                    <div className="flex justify-center">
                      <button
                        onClick={() => navigate(`/dashboard/detail/${item.id}`)}
                        className="border border-secondary-800 rounded-[4px] px-2 py-2 flex items-center hover:border-orange-900 transition-200"
                        type="button"
                      >
                        <FaShoppingCart className="text-lg fill-dark mr-2" />
                        <span className="text-sm">Detail Pesanan</span>
                      </button>
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

export default Pesanan;
