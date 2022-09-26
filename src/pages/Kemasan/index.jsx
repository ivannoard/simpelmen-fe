import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../../components/Card/CardProduct';

import { dummyImg } from '../../assets/image';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

const Kemasan = () => {
  const dummyData = [
    {
      id: 1,
      produkImg: dummyImg.kotakBerdiri,
      altImg: 'Kotak Berdiri',
      kategori: 'Dus Offset',
      jenis: 'Kotak Berdiri',
    },
    {
      id: 2,
      produkImg: dummyImg.boxTentengan,
      altImg: 'Box Tentengan',
      kategori: 'Karton',
      jenis: 'Box Tentengan',
    },
    {
      id: 3,
      produkImg: dummyImg.topBottom,
      altImg: 'Top Bottom',
      kategori: 'Dus Offset',
      jenis: 'Top Bottom',
    },
    {
      id: 4,
      produkImg: dummyImg.bentukSegitiga,
      altImg: 'Bentuk Segitiga',
      kategori: 'Dus Offset',
      jenis: 'Bentuk Segitiga',
    },
    {
      id: 5,
      produkImg: dummyImg.boxModelPizza,
      altImg: 'Box Model Pizza',
      kategori: 'Karton',
      jenis: 'Box Model Pizza',
    },
  ];
  return (
    <>
      <main className="containers">
        <section
          id="categoryKemasan"
          className="mt-0 xs:mt-7 mb-12 2xsm:mb-60/sp"
        >
          <div className="mb-5 flex">
            <Link
              to="/"
              className="flex items-center mb-3"
            >
              <HiOutlineArrowSmLeft className="text-2xl mr-3" />
              <span className="leading-10">Kembali</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 xs:gap-3 md:gap-4 flex-wrap">
            <button className="button-gradient-sm !text-xs xs:!text-base !rounded-full">
              Semua Kemasan
            </button>
            <button className="button-white-sm !text-xs xs:!text-base !rounded-full">
              Karton
            </button>
            <button className="button-white-sm !text-xs xs:!text-base !rounded-full">
              Dus Offset
            </button>
            <button className="button-white-sm !text-xs xs:!text-base !rounded-full">
              Sablon Plastik, Pouch, Dus
            </button>
            <button className="button-white-sm !text-xs xs:!text-base !rounded-full">
              Sticker
            </button>
            <button className="button-white-sm !text-xs xs:!text-base !rounded-full">
              Standing Pouch
            </button>
          </div>
        </section>
        <section
          id="kemasan"
          className="mb-9"
        >
          <div className="w-full grid grid-cols-8 md:grid-cols-12 gap-3 2xsm:gap-5 xl:gap-7 mb-60/sp">
            {dummyData.map((item, index) => {
              return (
                <div
                  className="col-span-4 lg:col-span-3"
                  key={index}
                >
                  <CardProduct {...item} />
                </div>
              );
            })}
          </div>
          <nav
            className="flex justify-center items-center gap-x-[.375rem] py-2"
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
      </main>
    </>
  );
};

export default Kemasan;
