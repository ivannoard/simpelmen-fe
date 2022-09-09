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
        <div className="containers flex flex-wrap flex-col-reverse md:grid md:grid-cols-12">
          <div className="w-full self-center md:col-span-6">
            <h1 className="!text-3xl md:!text-6xl md:mb-4">Simpelmenoke</h1>
            <p className="!text-lg md:!text-[30px]">
              Sistem Informasi Pelayanan Manajemen Order Kemasan
            </p>
            <button className="button-gradient-sm md:text-lg md:px-30/sp md:py-4 mt-10">
              Pesan Sekarang
            </button>
          </div>
          <div className="w-full md:col-span-6">
            <img
              src={svg.heroImage}
              alt="woman-with-creditcard"
              className="w-[250px] md:w-full mx-auto mb-5"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
