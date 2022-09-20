import React, { useState } from "react";
import svg from "../../assets/svg";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Stepper from "./components/Stepper";

const EmptyState = () => {
  return (
    <>
      <div className="empty-state w-full pt-10 flex flex-col justify-center items-center text-center">
        <img src={svg.windTurbine} alt="wind-turbine" />
        <p>Pilih produk yang ingin Anda lacak</p>
      </div>
    </>
  );
};
const LacakPesanan = () => {
  const [toggleTracking, setToggleTracking] = useState(true);
  const [trackingOrder, setTrackingOrder] = useState();

  function showTracking(e, index) {
    e.preventDefault();
    setToggleTracking(false);
    setTrackingOrder(index);
  }
  console.log(trackingOrder);

  return (
    <>
      <section>
        <div className="grid grid-cols-10 gap-3">
          <div className="col-span-10 lg:col-span-6">
            <img
              src={svg.shippingVehicle}
              alt="shipping-vehicle"
              className="w-full"
            />
            <div className="flex gap-2 items-center mt-5">
              <label htmlFor="sorting">Menampilkan</label>
              <select
                name="sorting"
                id="sorting"
                className="w-[50px] rounded-md h-10 p-2 bg-white border border-primary-900"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="mt-[10px]">
              <table className="text-center w-full">
                <thead>
                  <tr>
                    <th className="bg-[#F29A41] text-white">No. Pesanan</th>
                    <th className="bg-[#F29A41] text-white">Nama Produk</th>
                    <th className="bg-[#F29A41] text-white">Lacak Pesanan</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <tr key={item} className="border-b">
                      <td className="py-2">001/BIKDK/O/VII/2022</td>
                      <td className="py-2">Bentuk Langsungan</td>
                      <td>
                        <button
                          onClick={(e) => showTracking(e, index)}
                          className="border border-secondary-800 rounded-2xl px-[10px] py-1"
                        >
                          Lacak Pesanan
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav
                className="flex justify-center items-center gap-x-[.375rem] py-2 mt-10"
                aria-label="pagination"
              >
                <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base !px-3">
                  <HiChevronLeft className="!text-base xs:!text-xl" />
                </button>
                <button className="button-gradient-sm !text-xs xs:!text-base">
                  1
                </button>
                <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base">
                  2
                </button>
                <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base">
                  3
                </button>
                <button className="button-white-sm !shadow-none hover:!shadow-red !text-xs xs:!text-base !px-3">
                  <HiChevronRight className="!text-base xs:!text-xl" />
                </button>
              </nav>
            </div>
          </div>
          <div className="col-span-10 lg:col-span-4 lg:border-l px-6">
            {toggleTracking && <EmptyState />}
            {!toggleTracking && <Stepper trackingOrder={trackingOrder} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default LacakPesanan;
