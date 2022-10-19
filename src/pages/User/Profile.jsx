import React, { useState } from 'react';
import Modal from '../../components/Card/Modal';
import { IoIosArrowDown } from 'react-icons/io';

const Profile = () => {
  const [toggleDisabled, setToggleDisabled] = useState(true);
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [fields, setFields] = useState({});
  const [togglePwdDisabled, setTogglePwdDisabled] = useState(true);
  const [togglePwdConfirm, setTogglePwdConfirm] = useState(false);
  const [pwdFields, setPwdFields] = useState({});

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

  const closeModalPwdConfirm = () => {
    setTogglePwdConfirm(false);
  };
  function handlePwdChange(e) {
    e.preventDefault();
    setPwdFields({
      ...pwdFields,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }
  function handlePwdSubmit(e) {
    e.preventDefault();
    setTogglePwdConfirm(true);
    console.log(pwdFields);
  }
  const handlePwdEdit = () => {
    console.log('edit');
    setTogglePwdConfirm(false);
  };

  return (
    <>
      <section>
        <article className="mb-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="grid grid-cols-4 md:grid-cols-8 gap-y-4 md:gap-y-0 md:gap-x-8"
          >
            <div className="col-span-4 md:col-span-8">
              <h4 className="py-2 pl-3 border-l-[6px] border-primary-900 mb-4">
                Edit Profil
              </h4>
            </div>
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
                  placeholder="Masukkan Nama Lengkap"
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
                  placeholder="Masukkan Nama IKM"
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
                  placeholder="Masukkan Email"
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
                  placeholder="Masukkan No. Handphone"
                  name="handphone"
                  id="handphone"
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
                  placeholder="Masukkan Alamat Lengkap"
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
                  placeholder="Masukkan Kode Pos"
                  name="kodepos"
                  id="kodepos"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-8">
              <h6 className="mt-2 md:mt-8 mb-1">Konfirmasi Perubahan</h6>
              <p>
                Masukkan kata sandi untuk menyimpan semua perubahan kemudian
                tekan tombol “Simpan”
              </p>
            </div>
            <div className="col-span-4">
              <div className="md:mt-4">
                <label
                  htmlFor="katasandi"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="input-field-xs"
                  placeholder="Masukkan Kata Sandi"
                  name="katasandi"
                  id="katasandi"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-4 md:col-span-8 mx-auto mt-12">
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
        </article>

        <hr className="mb-12" />

        <article>
          <form
            className="grid grid-cols-4 md:grid-cols-8 gap-y-4 md:gap-y-0 md:gap-x-8"
            onSubmit={(e) => handlePwdSubmit(e)}
          >
            <div className="col-span-4 md:col-span-8">
              <h4 className="py-2 pl-3 border-l-[6px] border-primary-900 mb-4">
                Ubah Kata Sandi
              </h4>
            </div>
            <div className="col-span-4">
              <div className="">
                <label
                  htmlFor="newPwd"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  className="input-field-xs"
                  placeholder="Masukkan Kata Sandi Baru"
                  name="newPwd"
                  id="newPwd"
                  required
                  disabled={togglePwdDisabled}
                  autoComplete="on"
                  onChange={handlePwdChange}
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className="">
                <label
                  htmlFor="newConfirmPwd"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  className="input-field-xs"
                  placeholder="Masukkan Konfirmasi Kata Sandi Baru"
                  name="newConfirmPwd"
                  id="newConfirmPwd"
                  required
                  disabled={togglePwdDisabled}
                  autoComplete="on"
                  onChange={handlePwdChange}
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-8">
              <h6 className="mt-2 md:mt-8 mb-1">Konfirmasi Perubahan</h6>
              <p>
                Masukkan kata sandi untuk menyimpan semua perubahan kemudian
                tekan tombol “Simpan”
              </p>
            </div>
            <div className="col-span-4">
              <div className="md:mt-4">
                <label
                  htmlFor="oldPwd"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kata Sandi Lama
                </label>
                <input
                  type="password"
                  className="input-field-xs"
                  placeholder="Masukkan Kata Sandi Lama"
                  name="oldPwd"
                  id="oldPwd"
                  required
                  disabled={togglePwdDisabled}
                  autoComplete="on"
                  onChange={handlePwdChange}
                />
              </div>
            </div>

            <div className="col-span-4 md:col-span-8 mx-auto mt-12">
              {togglePwdDisabled ? (
                <button
                  onClick={() => setTogglePwdDisabled(false)}
                  className="button-fill-sm"
                >
                  Ubah Kata Sandi
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
        </article>
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

      <Modal
        isOpen={togglePwdConfirm}
        closeModal={closeModalPwdConfirm}
        handleAccept={handlePwdEdit}
        titleModal="Ubah Kata Sandi"
        captionModal="Simpan perubahan pada profil Anda"
        btnCancelCaption="Kembali"
        btnAcceptCaption="Simpan"
        isErrorModal={false}
      />
    </>
  );
};

export default Profile;
