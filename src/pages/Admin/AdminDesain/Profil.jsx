import React, { useState } from 'react';

const Profil = () => {
  const [toggleDisabledProfile, setToggleDisabledProfile] = useState(true);
  const [toggleDisabledPwd, setToggleDisabledPwd] = useState(true);
  const [fieldsProfile, setFieldsProfile] = useState({});
  const [fieldsPwd, setFieldsPwd] = useState({});

  const handleChangeProfile = (e) => {
    e.preventDefault();
    setFieldsProfile({
      ...fieldsProfile,
      [e.target.getAttribute('name')]: e.target.value,
    });
  };

  const handleChangePwd = (e) => {
    e.preventDefault();
    setFieldsPwd({
      ...fieldsPwd,
      [e.target.getAttribute('name')]: e.target.value,
    });
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    console.log(fieldsProfile);
  };

  const handleSubmitPwd = (e) => {
    e.preventDefault();
    console.log(fieldsPwd);
  };

  return (
    <>
      <section>
        <div className="flex justify-center items-center w-full mb-12">
          <div className="bg-white rounded-2xl shadow-gray px-8 xs:px-10 pb-8 xs:pb-10 pt-9 xs:pt-12 w-full">
            <div className="border-b border-orange-900 mb-8">
              <h3 className="pb-4">Update Profile Admin Desain</h3>
            </div>
            <form
              className=""
              onSubmit={(e) => handleSubmitProfile(e)}
            >
              <div className="relative w-full flex flex-col mb-4">
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
                  autoComplete="on"
                  disabled={toggleDisabledProfile}
                  onChange={handleChangeProfile}
                  value={fieldsProfile.nama}
                />
              </div>
              <div className="relative w-full flex flex-col mb-4">
                <label
                  htmlFor="posisi"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Posisi Admin
                </label>
                <input
                  type="text"
                  className="input-field-xs"
                  placeholder="Masukkan Posisi Admin"
                  name="posisi"
                  id="posisi"
                  required
                  disabled={toggleDisabledProfile}
                  onChange={handleChangeProfile}
                  autoComplete="on"
                  value={fieldsProfile.posisi}
                />
              </div>
              <div className="relative w-full flex flex-col mb-4">
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
                  disabled={toggleDisabledProfile}
                  onChange={handleChangeProfile}
                  autoComplete="on"
                  value={fieldsProfile.email}
                />
              </div>
              <div className="relative w-full flex flex-col mb-8">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="input-field-xs"
                  placeholder="Masukkan Kata Sandi"
                  name="password"
                  id="password"
                  required
                  disabled={toggleDisabledProfile}
                  onChange={handleChangeProfile}
                  autoComplete="on"
                />
              </div>
              <div className="flex justify-end">
                {toggleDisabledProfile ? (
                  <button
                    className="button-fill"
                    onClick={() => setToggleDisabledProfile(false)}
                    type="button"
                  >
                    Edit Profil
                  </button>
                ) : (
                  <button
                    className="button-fill"
                    type="submit"
                  >
                    Simpan Perubahan
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="bg-white rounded-2xl shadow-gray px-8 xs:px-10 pb-8 xs:pb-10 pt-9 xs:pt-12 w-full">
            <div className="border-b border-orange-900 mb-8">
              <h3 className="pb-4">Ubah Kata Sandi</h3>
            </div>
            <form
              className=""
              onSubmit={(e) => handleSubmitPwd(e)}
            >
              <div className="relative w-full flex flex-col mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  className="input-field-xs"
                  placeholder="Masukkan Kata Sandi Baru"
                  name="password"
                  id="password"
                  required
                  disabled={toggleDisabledPwd}
                  onChange={handleChangePwd}
                  autoComplete="on"
                />
              </div>
              <div className="relative w-full flex flex-col mb-8">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Konfirmasi Kata Sandi Baru
                </label>
                <input
                  type="password"
                  className="input-field-xs"
                  placeholder="Masukkan Konfirmasi Kata Sandi Baru"
                  name="password"
                  id="password"
                  required
                  disabled={toggleDisabledPwd}
                  onChange={handleChangePwd}
                  autoComplete="on"
                />
              </div>
              <div className="flex justify-end">
                {toggleDisabledProfile ? (
                  <button
                    className="button-fill"
                    onClick={() => setToggleDisabledPwd(false)}
                    type="button"
                  >
                    Edit Password
                  </button>
                ) : (
                  <button
                    className="button-fill"
                    type="submit"
                  >
                    Perbarui Password
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profil;
