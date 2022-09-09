import React from "react";
import svg from "../../assets/svg";

const OurProduct = () => {
  return (
    <>
      <section className="relative">
        <p className="text-3xl text-orange-900 font-bold text-center">
          Produk Kami
        </p>
        <img
          src={svg.bgOurProduct}
          alt=""
          className="absolute -z-10 top-30 left-0 right-0 mx-auto h-[826px]"
        />
        <div className="containers">
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                className="card p-5 bg-white rounded-2xl text-center shadow-lg"
                key={index}
              >
                <img src={svg.karton} alt="karton" />
                <p>Karton</p>
                <h3>Box A1 Pound</h3>
                <button className="button-fill !px-[20px] !py-[8px] mt-3">
                  Lihat Produk
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProduct;
