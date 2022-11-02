import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { adminCS } from "../../../services/api";

const Dashboard = () => {
  const user = localStorage.getItem("admin");
  const parseUser = JSON.parse(user);
  const [customerRetribution, setCustomerRetribution] = useState();
  const [customerStatus, setCustomerStatus] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    const getRetribution = async () => {
      await adminCS
        .get("/retributions", {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => setCustomerRetribution(response.data));
    };
    getRetribution();
  }, [parseUser.data.token]);

  useEffect(() => {
    const getOrders = async () => {
      await adminCS
        .get("/orders", {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => setCustomerStatus(response.data));
    };
    getOrders();
  }, [parseUser.data.token]);

  // get rekap-pesanan
  useEffect(() => {
    const getData = async () => {
      await adminCS
        .get("/rekap/order", {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => setOrder(response.data));
    };
    getData();
  }, [parseUser.data.token]);

  return (
    <section>
      <div className="border-b border-orange-900">
        <h3 className="font-semibold pb-3">Dashboard CS</h3>
      </div>
      <article id="retribusiPelanggan">
        <h6 className="mt-10 mb-4">Tabel Retribusi Pelanggan </h6>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-orange-900">
                <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                  No
                </th>
                <th className="text-white p-3 w-[28%] min-w-[218px] text-center">
                  Nomor Pesanan
                </th>
                <th className="text-white p-3 w-1/5 min-w-[180px] text-left">
                  Nama IKM
                </th>
                <th className="text-white p-3 w-[28%] min-w-[218px] text-center">
                  Nominal Transaksi
                </th>
                <th className="text-white p-3 w-[16%] min-w-[160px] text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {customerRetribution?.map((item, index) => (
                <tr className=" border-b" key={item.orders.order_id}>
                  <td className="text-center px-3 py-2">{index + 1}</td>
                  <td className="text-center px-3 py-2">
                    {item.orders.order_code}
                  </td>
                  <td className="text-left px-3 py-2">
                    {item.orders.users.user_ikm}
                  </td>
                  <td className="text-center px-3 py-2">
                    Rp.{item.retribution_jasa_total}
                  </td>
                  <td className="text-center py-2 px-4 [#21B630]">
                    <div
                      className={`bg-${
                        item.retribution_status === "Disetujui"
                          ? "[#21B630]"
                          : "primary-900"
                      } text-white py-2 rounded-lg font-semibold text-sm`}
                    >
                      {item.retribution_status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex justify-end items-center gap-x-[.375rem] py-2 mt-2"
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
      </article>

      <article id="statusPOPelanggan">
        <h6 className="mt-5 mb-4">Tabel Status PO Pelanggan </h6>
        <div className="overflow-x-auto">
          <table className="table-auto mb-4 w-full">
            <thead>
              <tr className="bg-orange-900">
                <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                  No
                </th>
                <th className="text-white p-3 w-[44%] text-center min-w-[218px]">
                  Nomor Pesanan
                </th>
                <th className="text-white p-3 w-[32%] text-left min-w-[180px]">
                  Nama IKM
                </th>
                <th className="text-white p-3 w-[16%] text-center min-w-[160px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {customerStatus?.map((item, index) => (
                <tr className=" border-b" key={index}>
                  <td className="text-center px-3 py-2">{index + 1}</td>
                  <td className="text-center px-3 py-2">{item?.order_code}</td>
                  <td className="text-left px-3 py-2">
                    {item?.delivery_details[0]?.delivery_detail_ikm}
                  </td>
                  <td className="text-center px-4 py-2">
                    {item?.order_statuses[0]?.order_status_admin_code ===
                    "2" ? (
                      <div className="bg-primary-900 text-white py-2 rounded-lg font-semibold text-sm truncate px-2">
                        Belum Disetujui
                      </div>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex justify-end items-center gap-x-[.375rem] py-2 mt-2"
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
      </article>

      <article id="rekapPesanan">
        <h6 className="mt-5 mb-4">
          Tabel Rekap Pesanan{" "}
          <span className="text-primary-900 font-semibold">
            Kurang Status Admin
          </span>
        </h6>
        <div className="overflow-x-auto">
          <table className="table-auto mb-4 w-full">
            <thead>
              <tr className="bg-orange-900">
                <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                  No
                </th>
                <th className="text-white p-3 w-[32%] min-w-[218px] text-center">
                  Nomor Pesanan
                </th>
                <th className="text-white p-3 w-[20%] min-w-[180px] text-left">
                  Nama IKM
                </th>
                <th className="text-white p-3 w-[15%] min-w-[160px] text-center">
                  Status
                </th>
                <th className="text-white p-3 w-[25%] min-w-[218px] text-center">
                  Nominal Transaksi
                </th>
              </tr>
            </thead>
            <tbody>
              {order?.map((item, index) => (
                <tr className=" border-b" key={index}>
                  <td className="text-center p-3">{index + 1}</td>
                  <td className="text-center p-3">{item.order_code}</td>
                  <td className="text-left p-3">{item.users.user_ikm}</td>
                  <td className="text-center p-3">
                    {item.order_statuses[0].order_status_admin_code}
                  </td>
                  <td className="text-center p-3">
                    Rp. {item.retributions[0]?.retribution_jasa_total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex justify-end items-center gap-x-[.375rem] py-2 mt-2"
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
      </article>
    </section>
  );
};

export default Dashboard;
