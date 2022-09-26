import React from "react";

const Profil = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center w-full">
          <div className="bg-white rounded-2xl shadow-md p-10 w-full">
            <div className="border-b border-orange-900">
              <h3>Update Profile Admin</h3>
            </div>
            <form className="mt-8">
              <div className="relative w-full flex flex-col">
                <label htmlFor="nama" className="font-semibold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="input-field !w-full !h-[60px] !px-5 !mt-4"
                  placeholder=""
                  name="nama"
                  id="nama"
                  required
                  autoComplete="on"
                />
              </div>
              <div className="relative w-full flex flex-col">
                <label htmlFor="posisi" className="font-semibold">
                  Posisi Admin
                </label>
                <input
                  type="text"
                  className="input-field !w-full !h-[60px] !px-5 !mt-4"
                  placeholder=""
                  name="posisi"
                  id="posisi"
                  required
                  disabled
                  autoComplete="on"
                />
              </div>
              <div className="relative w-full flex flex-col">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="input-field !w-full !h-[60px] !px-5 !mt-4"
                  placeholder=""
                  name="email"
                  id="email"
                  required
                  disabled
                  autoComplete="on"
                />
              </div>
              <div className="relative w-full flex flex-col">
                <label htmlFor="password" className="font-semibold">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="input-field !w-full !h-[60px] !px-5 !mt-4"
                  placeholder=""
                  name="password"
                  id="password"
                  required
                  disabled
                  autoComplete="on"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button className="button-fill">Perbarui</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profil;
