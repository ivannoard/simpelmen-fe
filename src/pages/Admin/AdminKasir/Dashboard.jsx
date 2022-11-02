import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { adminKasir } from "../../../services/api";

const Dashboard = () => {
  const user = localStorage.getItem("admin");
  const parseUser = JSON.parse(user);
  const [sellData, setSellData] = useState();
  const [pad, setPad] = useState();

  useEffect(() => {
    const getData = async () => {
      await adminKasir
        .get("/orders", {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => setSellData(response.data));
    };
    getData();
  }, [parseUser.data.token]);

  useEffect(() => {
    const getData = async () => {
      await adminKasir
        .get("/pad", {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => setPad(response.data));
    };
    getData();
  }, [parseUser.data.token]);

  console.log(pad);
  return (
    <>
      <section>
        <div className=" border-b border-orange-900">
          <h3 className="font-semibold pb-3">Dashboard Kasir</h3>
        </div>
        <h6 className="mt-10 mb-4">Tabel Daftar Pembayaran </h6>
        <table className="table-auto mt-4 w-[1440px] lg:w-full">
          <thead>
            <tr className="bg-orange-900">
              <td className="text-center py-3 text-white">No</td>
              <td className="text-center py-3 text-white">Nomor Pesanan</td>
              <td className="text-center py-3 text-white">Tanggal Pemesanan</td>
              <td className="text-center py-3 text-white">Nama IKM</td>
              <td className="text-center py-3 text-white">Status</td>
            </tr>
          </thead>
          <tbody>
            {sellData?.map((item, index) => (
              <tr className=" border-b" key={index}>
                <td className="text-center py-3">{index + 1}</td>
                <td className="text-center py-3">{item.order_code}</td>
                <td className="text-center py-3">{item.createdAt}</td>
                <td className="text-center py-3">{item.users.user_ikm}</td>
                <td className="text-center py-3">
                  <div className="flex gap-2 w-full justify-center">
                    <div className="bg-[#21B630] text-white py-2 px-3 rounded-lg font-semibold">
                      {item.order_payment_method}
                    </div>
                    <div className="bg-[#6D6061] text-white py-2 px-3 rounded-lg font-semibold">
                      {item.order_payment_status}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex justify-end items-center gap-x-[.375rem] py-2 mt-5"
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
        {/*  */}
        <h6 className="mt-10 mb-4">Tabel PAD </h6>
        <table className="table-auto mt-4 w-[1440px] lg:w-full">
          <thead>
            <tr className="bg-orange-900">
              <td className="text-center py-3 text-white">No</td>
              <td className="text-center py-3 text-white">Nomor Pesanan</td>
              <td className="text-center py-3 text-white">Nama IKM</td>
              <td className="text-center py-3 text-white">Nominal Transaksi</td>
              <td className="text-center py-3 text-white">Status</td>
            </tr>
          </thead>
          <tbody>
            {pad?.map((item, index) => (
              <tr className=" border-b" key={index}>
                <td className="text-center py-3">{index + 1}</td>
                <td className="text-center py-3">{item.orders.order_code}</td>
                <td className="text-center py-3">
                  {item.orders.users.user_ikm}
                </td>
                <td className="text-center py-3">
                  Rp. {item.retribution_jasa_total}
                </td>
                <td className="text-center py-3">
                  {item.retribution_pad_status === 2 ? (
                    <div className="bg-[#21B630] text-white py-2 px-3 rounded-lg font-semibold">
                      Disetujui
                    </div>
                  ) : (
                    <div className="bg-primary-900 text-white py-2 px-3 rounded-lg font-semibold">
                      Belum Disetujui
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex justify-end items-center gap-x-[.375rem] py-2 mt-5"
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
      </section>
    </>
  );
};

export default Dashboard;
