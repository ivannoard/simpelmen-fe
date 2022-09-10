import React from "react";
import { Link } from "react-router-dom";

import { dummyImg } from "../../assets/image";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import CardProduct from "../../components/Card/CardProduct";

const Kemasan = () => {
  const dummyData = [
    {
      produkImg: dummyImg.kotakBerdiri,
      altImg: "Kotak Berdiri",
      kategori: "Dus Offset",
      jenis: "Kotak Berdiri",
    },
    {
      produkImg: dummyImg.boxTentengan,
      altImg: "Box Tentengan",
      kategori: "Karton",
      jenis: "Box Tentengan",
    },
    {
      produkImg: dummyImg.topBottom,
      altImg: "Top Bottom",
      kategori: "Dus Offset",
      jenis: "Top Bottom",
    },
  ];
  return (
    <>
      <main className='containers'>
        <section id='categoryKemasan' className='mt-7 mb-60/sp'>
          <div className='mb-5'>
            <Link to='/' className='flex items-center mb-3'>
              <HiOutlineArrowSmLeft className='text-2xl mr-3' />
              <span className='leading-10'>Kembali</span>
            </Link>
          </div>
          <div className='flex items-center gap-x-4'>
            <button className='button-gradient-sm'>Semua Kemasan</button>
            <button className='button-white-sm'>Karton</button>
            <button className='button-white-sm'>Dus Offset</button>
            <button className='button-white-sm'>
              Sablon Plastik, Pouch, Dus
            </button>
            <button className='button-white-sm'>Sticker</button>
            <button className='button-white-sm'>Standing Pouch</button>
          </div>
        </section>
        <section id='kemasan' className='mb-11'>
          <div className='w-full grid grid-cols-12 gap-x-8'>
            {dummyData.map((item, index) => {
              return (
                <div className='col-span-4' key={index}>
                  <CardProduct {...item} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Kemasan;
