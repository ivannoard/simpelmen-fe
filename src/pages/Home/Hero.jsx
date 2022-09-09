import React from "react";
import svg from "../../assets/svg";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <img
          src={svg.bgHero}
          alt=""
          className="absolute top-0 -z-10 left-0 right-0 mx-auto"
        />
        <div className="containers grid grid-cols-12">
          <div className="col-span-7 self-center">
            <h1 clasName="!text-blue-500">Simpelmenoke</h1>
            <p className="text-3xl leading-10">
              Sistem Informasi Pelayanan Manajemen Order Kemasan
            </p>
            <button className="button-gradient mt-10">Pesan Sekarang</button>
          </div>
          <div className="col-span-5">
            <img src={svg.heroImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
