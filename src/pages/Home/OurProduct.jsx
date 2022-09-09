import React from "react";
import { Link } from "react-router-dom";
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
          className="absolute -z-10 top-32 left-0 right-0 mx-auto h-[826px]"
        />
        <div className="containers !py-8 md:!py-100/sp">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                className="card p-5 bg-white rounded-2xl text-center shadow-lg"
                key={index}
              >
                <img src={svg.karton} alt="karton" />
                <p>Karton</p>
                <h3 className="!text-lg md:!text-3xl md:mb-3">Box A1 Pound</h3>
                <Link to={`/detail-produk/${item}`}>
                  <button className="button-fill-sm !px-4 !py-1 !text-[10px] md:!px-30/sp md:!py-4 md:!text-lg">
                    Lihat Produk
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className="button-white">Lihat Produk Lainnya</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProduct;
