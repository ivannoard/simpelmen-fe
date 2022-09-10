import React from "react";

const CardProduct = ({ produkImg, altImg, kategori, jenis }) => {
  return (
    <>
      <div className='w-full p-5 rounded-2xl shadow-gray flex flex-col items-center bg-white'>
        <div className='mb-3'>
          <img src={produkImg} alt={altImg} className='w-full' />
        </div>
        <p className='text-center'>{kategori}</p>
        <h3 className='text-center mb-3'>{jenis}</h3>
        <button className='button-fill-sm'>Lihat Produk</button>
      </div>
    </>
  );
};

export default CardProduct;
