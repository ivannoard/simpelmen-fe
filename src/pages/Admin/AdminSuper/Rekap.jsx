import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { adminSuper } from "../../../services/api";
import ModalsRekap from "./components/ModalsRekap";

const Rekap = () => {
  const user = localStorage.getItem("admin");
  const [toggleId, setToggleId] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [data, setData] = useState();

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const detailModalHandling = (id) => {
    setIsOpenModal(true);
    // setToggleId(id);
  };

  useEffect(() => {
    const getData = async () => {
      await adminSuper
        .get("/rekap/pesanan", {
          headers: {
            "x-access-token": `${JSON.parse(user).data.token}`,
          },
        })
        .then((response) => setData(response.data));
    };
    getData();
  }, [user]);

  return (
    <>
      <section>
        <div className="border-b border-orange-900">
          <h3 className="font-semibold pb-3">Rekap Pesanan</h3>
        </div>
        <h6 className="mt-6 mb-4">
          Tabel Rekap Pesanan{" "}
          <span className="text-primary-900">NO DETAIL</span>
        </h6>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 items-center mr-4">
            <label htmlFor="sorting">Menampilkan</label>
            <select
              name="sorting"
              id="sorting"
              className="w-[50px] rounded h-10 p-2 bg-white border border-primary-900"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex relative top-2 flex-col mb-4">
            <input
              type="search"
              className="input-field !rounded-full !py-2 !pl-14"
              placeholder="Cari"
              name="search"
              required
              autoComplete="on"
              // onChange={handleChange}
            />
            <BsSearch className="absolute text-xl top-3 left-6 fill-secondary-800" />
          </div>
        </div>

        <article id="tableRekapPesanan">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-white text-center p-3 min-w-[54px]">
                    No
                  </th>
                  <th className="text-white text-center p-3 min-w-[180px]">
                    Nomor Pesanan
                  </th>
                  <th className="text-white text-left p-3 min-w-[140px]">
                    Nama IKM
                  </th>
                  <th className="text-white text-center p-3 min-w-[140px]">
                    Status
                  </th>
                  <th className="text-white text-center p-3 min-w-[160px]">
                    Nominal Transaksi
                  </th>
                  <th className="text-white text-center p-3 min-w-[100px]">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="text-center p-3">{index + 1}</td>
                    <td className="text-center p-3">{item.order_code}</td>
                    <td className="text-left p-3">{item.users.user_ikm}</td>
                    <td className="text-center p-3">
                      {item.order_statuses[0]?.order_status_admin_code}
                    </td>
                    <td className="text-center p-3">
                      Rp.{" "}
                      {item.retributions[0]?.retribution_jasa_total !== null
                        ? item.retributions[0]?.retribution_jasa_total
                        : "0"}
                    </td>
                    <td className="text-center p-3">
                      <div className="flex justify-center">
                        <button
                          onClick={() => detailModalHandling(item)}
                          className="bg-white border py-3 px-4 rounded-lg text-sm transition-200 hover:border-orange-900"
                        >
                          Detail
                        </button>
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
      </section>

      {/* Modal Detail Recap */}
      <ModalsRekap
        isOpen={isOpenModal}
        closeModal={closeModal}
        // idPesanan={toggleId}
      />
    </>
  );
};

export default Rekap;
