import React from "react";
import { useState } from "react";

const Profile = () => {
  const [toggleDisabled, setToggleDisabled] = useState(true);
  const [fields, setFields] = useState({});

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(fields);
  }

  return (
    <>
      <section>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <div className="mx-auto left">
            <div className="relative w-full flex flex-col">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                className="input-field !w-[488px] !h-[60px] mt-[6px] !px-5"
                placeholder=""
                name="nama"
                id="nama"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full flex flex-col mt-[10px]">
              <label htmlFor="namaikm">Nama IKM</label>
              <input
                type="text"
                className="input-field !w-[488px] !h-[60px] mt-[6px] !px-5"
                placeholder=""
                name="namaikm"
                id="namaikm"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full flex flex-col mt-[10px]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input-field !w-[488px] !h-[60px] mt-[6px] !px-5"
                placeholder=""
                name="email"
                id="email"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full flex flex-col mt-[10px]">
              <label htmlFor="handphone">No. Handphone</label>
              <input
                type="text"
                className="input-field !w-[488px] !h-[60px] mt-[6px] !px-5"
                placeholder=""
                name="handphone"
                id="handphone"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full flex flex-col mt-[10px]">
              <label htmlFor="katasandi">Kata Sandi</label>
              <input
                type="password"
                className="input-field !w-[488px] !h-[60px] mt-[6px] !px-5"
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
          <div className="mx-auto right">
            <div className="relative w-full flex flex-col">
              <label htmlFor="alamat">Alamat Lengkap</label>
              <input
                type="text"
                className="input-field !w-[488px] !h-[60px] mt-[6px] !px-5"
                placeholder=""
                name="alamat"
                id="alamat"
                required
                disabled={toggleDisabled}
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="mt-[10px]">
              <label
                htmlFor="kecamatan"
                className="block mb-2 text-15/sp font-medium text-dark"
              >
                Kecamatan
              </label>
              <select
                id="kecamatan"
                name="kecamatan"
                disabled={toggleDisabled}
                // onChange={(e) => handleChange(e)}
                className="bg-white border border-secondary-800 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-[488px] py-4 px-5 outline-none h-[60px]"
              >
                <option>Pilih Kecamatan</option>
                <option value="1">Jasa Bahan</option>
                <option value="2">Tanpa Bahan</option>
              </select>
            </div>
            <div className="mt-[10px]">
              <label
                htmlFor="kota"
                className="block mb-2 text-15/sp font-medium text-dark"
              >
                Kota / Kabupaten
              </label>
              <select
                id="kota"
                name="kota"
                disabled={toggleDisabled}
                // onChange={(e) => handleChange(e)}
                className="bg-white border border-secondary-800 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-[488px] py-4 px-5 outline-none h-[60px]"
              >
                <option>Pilih Kota</option>
                <option value="1">Jasa Bahan</option>
                <option value="2">Tanpa Bahan</option>
              </select>
            </div>
            <div className="mt-[10px]">
              <label
                htmlFor="provinsi"
                className="block mb-2 text-15/sp font-medium text-dark"
              >
                Provinsi
              </label>
              <select
                id="provinsi"
                name="provinsi"
                disabled={toggleDisabled}
                // onChange={(e) => handleChange(e)}
                className="bg-white border border-secondary-800 text-gray-900 text-sm rounded-2xl focus:ring-orange-900 focus:border-orange-900 block w-[488px] py-4 px-5 outline-none h-[60px]"
              >
                <option>Pilih Provinsi</option>
                <option value="1">Jasa Bahan</option>
                <option value="2">Tanpa Bahan</option>
              </select>
            </div>
            <div className="relative w-full flex flex-col mt-[10px]">
              <label htmlFor="kodepos">Kode Pos</label>
              <input
                type="text"
                className="input-field !w-[488px] !h-[60px] mt-[6px] !px-5"
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
          <div className="lg:col-span-2 mx-auto mt-3">
            {toggleDisabled ? (
              <button
                onClick={() => setToggleDisabled(false)}
                className="button-fill-sm !w-[110px] !text-sm "
              >
                Edit Profil
              </button>
            ) : (
              <button
                type="submit"
                className="button-fill-sm !w-[188px] !text-sm "
              >
                Simpan Perubahan
              </button>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
