import React, { useEffect, useState } from "react";
import Modal from "../../components/Card/Modal";
import { IoIosArrowDown } from "react-icons/io";
import { getUser } from "../../services/api";
import useGeoLocation from "../../hooks/useGeoLocation";

const Profile = () => {
  const currentUser = localStorage.getItem("user");
  const parseUser = JSON.parse(currentUser);
  const [toggleDisabled, setToggleDisabled] = useState(true);
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const [togglePwdDisabled, setTogglePwdDisabled] = useState(true);
  const [togglePwdConfirm, setTogglePwdConfirm] = useState(false);
  const [pwdFields, setPwdFields] = useState({});
  const [userData, setUserData] = useState();
  const [fields, setFields] = useState({
    user_name: "",
    user_ikm: "",
    user_email: "",
    user_contact: "",
    user_password: "",
    user_address: "",
    user_province: "",
    user_city: "",
    user_district: "",
    user_postal_code: "",
  });
  const { data: provinceData } = useGeoLocation(
    `https://simpelmen.herokuapp.com/api/province`
  );
  const { data: cityData } = useGeoLocation(
    `https://simpelmen.herokuapp.com/api/city?province_id=${fields.user_province}`
  );
  const { data: districtData } = useGeoLocation(
    `https://simpelmen.herokuapp.com/api/district?city_id=${fields.user_city}`
  );

  const closeModalConfirm = () => {
    setToggleConfirm(false);
  };
  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setToggleConfirm(true);
    console.log(fields);
  }

  const handleEdit = async () => {
    setToggleConfirm(false);
    await getUser
      .put("/profile", fields, {
        headers: {
          "x-access-token": `${parseUser.data.token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  const closeModalPwdConfirm = () => {
    setTogglePwdConfirm(false);
  };
  function handlePwdChange(e) {
    e.preventDefault();
    setPwdFields({
      ...pwdFields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }
  function handlePwdSubmit(e) {
    e.preventDefault();
    setTogglePwdConfirm(true);
    console.log(pwdFields);
  }
  const handlePwdEdit = () => {
    console.log("edit");
    setTogglePwdConfirm(false);
  };

  useEffect(() => {
    const getUserData = async () => {
      await getUser
        .get("/profile", {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => {
          setUserData(response);
          setFields({
            user_name: response.data.data.user_name,
            user_ikm: response.data.data.user_ikm,
            user_email: response.data.data.user_email,
            user_contact: response.data.data.user_contact,
            user_password: response.data.data.user_password,
            user_address: response.data.data.user_address,
            user_province: response.data.data.user_province,
            user_city: response.data.data.user_city,
            user_district: response.data.data.user_district,
            user_postal_code: response.data.data.user_postal_code,
          });
        })
        .catch((e) => console.log(e));
    };
    getUserData();
  }, [parseUser.data.token]);

  console.log(userData);

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
                  name="user_name"
                  id="user_name"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                  defaultValue={userData?.data?.data?.user_name}
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
                  name="user_ikm"
                  id="user_ikm"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                  defaultValue={userData?.data?.data?.user_ikm}
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
                  name="user_email"
                  id="user_email"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                  defaultValue={userData?.data?.data?.user_email}
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
                  name="user_contact"
                  id="user_contact"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                  defaultValue={userData?.data?.data?.user_contact}
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
                  name="user_address"
                  id="user_address"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                  defaultValue={userData?.data?.data?.user_address}
                />
              </div>
              <div className="relative mt-4">
                <label
                  htmlFor="user_province"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Provinsi
                </label>
                <select
                  id="user_province"
                  name="user_province"
                  disabled={toggleDisabled}
                  onChange={(e) => handleChange(e)}
                  className="input-field-select-xs"
                >
                  <option
                    value={
                      userData?.data?.data?.subdistricts?.cities.provinces
                        .province_id
                    }
                  >
                    {userData?.data?.data?.subdistricts
                      ? userData?.data.data.subdistricts?.cities.provinces
                          .province
                      : "Pilih Provinsi"}
                  </option>
                  {provinceData?.map((item) => (
                    <option value={item.province_id} key={item.province_id}>
                      {item.province}
                    </option>
                  ))}
                </select>
                <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
              </div>
              <div className="relative mt-4">
                <label
                  htmlFor="user_city"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kota / Kabupaten
                </label>
                <select
                  id="user_city"
                  name="user_city"
                  disabled={toggleDisabled}
                  onChange={(e) => handleChange(e)}
                  className="input-field-select-xs"
                  // defaultValue={userData?.data?.data?.user_district}
                >
                  <option
                    value={userData?.data?.data?.subdistricts?.cities.city_id}
                  >
                    {userData?.data?.data?.subdistricts
                      ? userData?.data?.data?.subdistricts?.cities.city_name
                      : "Pilih Kota/Kabupaten"}
                  </option>
                  {cityData?.map((item) => (
                    <option value={item.city_id} key={item.city_id}>
                      {item.city_name}
                    </option>
                  ))}
                </select>
                <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
              </div>
              <div className="relative mt-4">
                <label
                  htmlFor="user_district"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kecamatan
                </label>
                <select
                  id="user_district"
                  name="user_district"
                  disabled={toggleDisabled}
                  onChange={(e) => handleChange(e)}
                  className="input-field-select-xs"
                  // defaultValue={userData?.data?.data?.user_district}
                >
                  <option
                    value={userData?.data?.data?.subdistricts?.subdistrict_id}
                  >
                    {userData?.data?.data?.subdistricts
                      ? userData?.data?.data?.subdistricts?.subdistrict_name
                      : "Pilih Kecamatan"}
                  </option>
                  {districtData?.map((item) => (
                    <option
                      value={item.subdistrict_id}
                      key={item.subdistrict_id}
                    >
                      {item.subdistrict_name}
                    </option>
                  ))}
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
                  name="user_postal_code"
                  id="user_postal_code"
                  required
                  disabled={toggleDisabled}
                  autoComplete="on"
                  onChange={handleChange}
                  defaultValue={userData?.data?.data?.user_postal_code}
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
                <button type="submit" className="button-fill-sm">
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
                <button type="submit" className="button-fill-sm">
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
