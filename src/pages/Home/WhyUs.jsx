import React from "react";
import svg from "../../assets/svg";

const WhyUs = () => {
  return (
    <>
      <section className="containers !py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_0_#C9111B33]">
          <img
            src={svg.savingMoney}
            alt="saving-money"
            className="mx-auto w-[250px] h-[250px]"
          />
          <h6 className="mt-8 mb-4">Harga Terjangkau</h6>
          <p className="text-secondary-900">
            Menghadirkan kualitas terbaik dengan harga terjangkau untuk industri
            kecil menengah.
          </p>
        </div>
        <div className="card bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_0_#C9111B33]">
          <img
            src={svg.quantity}
            alt="saving-money"
            className="mx-auto w-[250px] h-[250px]"
          />
          <h6 className="mt-8 mb-4">Minimal Kuantitas Order Rendah</h6>
          <p className="text-secondary-900">
            Dengan minimal pembelian 200 pcs, order Anda akan kami proses.
          </p>
        </div>
        <div className="card bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_0_#C9111B33]">
          <img
            src={svg.productQuality}
            alt="saving-money"
            className="mx-auto w-[250px] h-[250px] "
          />
          <h6 className="mt-8 mb-4">Material Terbaik</h6>
          <p className="text-secondary-900">
            Bahan berkualitas, aman untuk digunakan, memberikan proteksi
            maksimal.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
