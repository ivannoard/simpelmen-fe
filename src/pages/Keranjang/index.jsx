import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardCart from '../../components/Card/CardCart';

import { dummyImg } from '../../assets/image';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import svg from '../../assets/svg';

const Keranjang = () => {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);
  const handleCheck = () => {
    setIsCheck(!isCheck);
  };
  const handleDelete = () => {
    console.log('delete');
  };

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
  const dummy = false;
  return (
    <>
      <main className="containers">
        <div className="mb-5 flex">
          <Link
            to="/"
            className="flex items-center mb-3"
          >
            <HiOutlineArrowSmLeft className="text-2xl mr-3" />
            <span className="leading-10">Kembali</span>
          </Link>
        </div>
        {/* dummy condition */}
        {dummy ? (
          <>
            <section
              id="cart"
              className="mb-10"
            >
              {dummyData.map((item, index) => {
                return (
                  <CardCart
                    key={index}
                    {...item}
                    handleCheck={handleCheck}
                    isCheck={isCheck}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </section>
            <div className="flex justify-center mb-9">
              <button
                className="button-fill"
                onClick={() => navigate('/')}
              >
                Lanjutkan Pesanan
              </button>
            </div>
          </>
        ) : (
          <section className="pt-9 pb-12 2xsm:pb-28 xmd:pb-40">
            <div className="w-4/5 md:w-[33.75rem] mx-auto">
              <div className="w-full px-9">
                <img
                  src={svg.EmptyKeranjang}
                  alt="empty-keranjang"
                  className="w-full mb-10"
                />
              </div>
              <h3 className="text-center mb-10">
                Keranjang Anda masih kosong!
              </h3>
              <div className="flex justify-center">
                <button className="button-gradient-sm 2xsm:button-gradient">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Keranjang;
