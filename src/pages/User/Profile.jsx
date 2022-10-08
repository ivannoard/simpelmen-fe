import React, { useState } from 'react';
import Modal from '../../components/Card/Modal';
import { IoIosArrowDown } from 'react-icons/io';

const Profile = () => {
  const [toggleDisabled, setToggleDisabled] = useState(true);
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [fields, setFields] = useState({});

  const closeModalConfirm = () => {
    setToggleConfirm(false);
  };

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setToggleConfirm(true);
    console.log(fields);
  }

  const handleEdit = () => {
    console.log('edit');
    setToggleConfirm(false);
  };

  return (
    <>
      <section>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid grid-cols-4 md:grid-cols-8 gap-8"
        >
          <div className="col-span-4">
            <div className="">
              <label
                htmlFor="nama"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                className="input-field-xs"
                placeholder=""
                name="nama"
                id="nama"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="namaikm"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Nama IKM
              </label>
              <input
                type="text"
                className="input-field-xs"
                placeholder=""
                name="namaikm"
                id="namaikm"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                className="input-field-xs"
                placeholder=""
                name="email"
                id="email"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="handphone"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                No. Handphone
              </label>
              <input
                type="text"
                className="input-field-xs"
                placeholder=""
                name="handphone"
                id="handphone"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="katasandi"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Kata Sandi
              </label>
              <input
                type="password"
                className="input-field-xs"
                placeholder=""
                name="katasandi"
                id="katasandi"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="">
              <label
                htmlFor="alamat"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Alamat Lengkap
              </label>
              <input
                type="text"
                className="input-field-xs"
                placeholder=""
                name="alamat"
                id="alamat"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="relative mt-4">
              <label
                htmlFor="kecamatan"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Kecamatan
              </label>
              <select
                id="kecamatan"
                name="kecamatan"
                disabled={toggleDisabled}
                // onChange={(e) => handleChange(e)}
                className="input-field-select-xs"
              >
                <option>Pilih Kecamatan</option>
                <option value="1">Jasa Bahan</option>
                <option value="2">Tanpa Bahan</option>
              </select>
              <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
            </div>
            <div className="relative mt-4">
              <label
                htmlFor="kota"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Kota / Kabupaten
              </label>
              <select
                id="kota"
                name="kota"
                disabled={toggleDisabled}
                // onChange={(e) => handleChange(e)}
                className="input-field-select-xs"
              >
                <option>Pilih Kota</option>
                <option value="1">Jasa Bahan</option>
                <option value="2">Tanpa Bahan</option>
              </select>
              <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
            </div>
            <div className="relative mt-4">
              <label
                htmlFor="provinsi"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Provinsi
              </label>
              <select
                id="provinsi"
                name="provinsi"
                disabled={toggleDisabled}
                // onChange={(e) => handleChange(e)}
                className="input-field-select-xs"
              >
                <option>Pilih Provinsi</option>
                <option value="1">Jasa Bahan</option>
                <option value="2">Tanpa Bahan</option>
              </select>
              <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
            </div>
            <div className="mt-4">
              <label
                htmlFor="kodepos"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Kode Pos
              </label>
              <input
                type="text"
                className="input-field-xs"
                placeholder=""
                name="kodepos"
                id="kodepos"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-8 mx-auto mt-3">
            {toggleDisabled ? (
              <button
                onClick={() => setToggleDisabled(false)}
                className="button-fill-sm"
              >
                Edit Profil
              </button>
            ) : (
              <button
                type="submit"
                className="button-fill-sm"
              >
                Simpan Perubahan
              </button>
            )}
          </div>
        </form>
      </section>

      {/* modal confirm */}
      <Modal
        isOpen={toggleConfirm}
        closeModal={closeModalConfirm}
        handleAccept={handleEdit}
        titleModal="Edit Profil"
        captionModal="Simpan perubahan pada profil Anda"
        btnCancelCaption="Kembali"
        btnAcceptCaption="Simpan"
        isErrorModal={false}
      />
    </>
  );
};

export default Profile;
