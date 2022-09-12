import React from "react";

import { BiTrashAlt } from "react-icons/bi";
import { GoCheck } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const CardCart = ({
  produkImg,
  altImg,
  kategori,
  jenis,
  handleDelete,
  handleCheck,
  isCheck,
}) => {
  return (
    <>
      <article className='mb-10 shadow-gray rounded-2xl p-8 grid grid-cols-12 gap-x-8'>
        <div className='col-span-1'>
          <div className='w-full flex justify-start'>
            <button
              className={`w-6 h-6 p-[.1875rem] rounded-md ${
                isCheck
                  ? "bg-gradient-to-bl from-orange-900 to-primary-900"
                  : "bg-orange-900"
              } overflow-hidden`}
              onClick={handleCheck}
            >
              {isCheck ? (
                <div className='w-full h-full bg-gradient-to-bl from-orange-900 to-primary-900 flex items-center justify-center overflow-hidden'>
                  <GoCheck className='fill-white' />
                </div>
              ) : (
                <div className='w-full h-full rounded-[4px] bg-white hover:bg-orange-400'></div>
              )}
            </button>
          </div>
        </div>

        <div className='col-start-2 col-span-4'>
          <div className='mb-3'>
            <img
              src={produkImg}
              alt={altImg}
              className='w-full object-cover object-center'
            />
          </div>
          <p className='text-xs xs:text-base'>{kategori}</p>
          <p className='font-bold text-base xs:text-xl md:text-2xl mb-3 line-clamp-2'>
            {jenis}
          </p>
        </div>

        <div className='col-start-7 col-span-5'>
          <form className='w-full'>
            <div className='mb-5'>
              <label htmlFor='ukuran' className='mb-[.375rem] block'>
                Ukuran
              </label>
              <div id='ukuran' className='flex items-center gap-x-[.625rem]'>
                <div className='relative'>
                  <input
                    type='text'
                    className='input-field-sm'
                    name='panjang'
                    placeholder='P'
                  />
                  <span className='absolute right-5 top-4 text-gray-400'>
                    cm
                  </span>
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    className='input-field-sm'
                    name='lebar'
                    placeholder='L'
                  />
                  <span className='absolute right-5 top-4 text-gray-400'>
                    cm
                  </span>
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    className='input-field-sm'
                    name='tinggi'
                    placeholder='T'
                  />
                  <span className='absolute right-5 top-4 text-gray-400'>
                    cm
                  </span>
                </div>
              </div>
            </div>
            <div className='mb-5 relative'>
              <label htmlFor='sablon' className='mb-[.375rem] block'>
                Sablon
              </label>
              <select
                name='sablon'
                id='sablon'
                className='input-field-sm appearance-none'
              >
                <option value='DEFAULT' selected disabled>
                  Pilih Sablon
                </option>
                <option value='s1'>Pilihan 1</option>
              </select>
              <IoIosArrowDown className='absolute right-5 top-[3.125rem] text-xl fill-gray-400' />
            </div>
            <div className='mb-5 relative'>
              <label htmlFor='desain' className='mb-[.375rem] block'>
                Desain
              </label>
              <select
                name='desain'
                id='desain'
                className='input-field-sm appearance-none'
              >
                <option value='DEFAULT' selected disabled>
                  Pilih Desain
                </option>
                <option value='d1'>Pilihan 1</option>
              </select>
              <IoIosArrowDown className='absolute right-5 top-[3.125rem] text-xl fill-gray-400' />
            </div>
            <div className='relative'>
              <label htmlFor='jumlahPesanan' className='mb-[.375rem] block'>
                Jumlah Pesanan
              </label>
              <input
                type='text'
                className='input-field-sm'
                placeholder='Masukkan jumlah pesanan'
                name='jumlahPesanan'
                id='jumlahPesanan'
              />
              <span className='absolute right-5 top-12 text-gray-400'>pcs</span>
            </div>
          </form>
        </div>

        <div className='col-span-1'>
          <div className='w-full flex justify-end'>
            <button onClick={handleDelete}>
              <BiTrashAlt className='text-3xl fill-orange-900 transition-200 hover:fill-red-500' />
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardCart;
