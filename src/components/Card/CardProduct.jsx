import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({ produkImg, altImg, kategori, jenis, id }) => {
  return (
    <>
      <div className="w-full h-full py-4 2xsm:py-6 px-3 2xsm:px-5 rounded-2xl shadow-gray bg-white transition-all-200 hover:-translate-y-3">
        <div className="mb-3">
          <img
            src={produkImg}
            alt={altImg}
            className="w-full object-cover object-center"
          />
        </div>
        <p className="text-center text-xs xs:text-base">{kategori}</p>
        <p className="font-bold text-base xs:text-xl md:text-2xl text-center mb-3 line-clamp-2">
          {jenis}
        </p>
        <div className="flex flex-col items-center">
          <Link
            to={`/detail-produk/${id}`}
            className="button-fill-sm !text-xs xs:!text-base text-center"
          >
            Lihat Produk
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
