import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import ModalResi from "./components/ModalResi";
import { IoIosArrowDown } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { adminGudang } from "../../../services/api";
import Alerts from "../../../components/Alerts";

const Dashboard = () => {
  const user = localStorage.getItem("admin");
  const parseUser = JSON.parse(user);
  const [warehouseData, setWarehouseData] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idPesanan, setIdPesanan] = useState();
  const [alerts, setAlerts] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const [resiField, setResiField] = useState({
    delivery_detail_receipt: "",
    delivery_detail_estimate: "",
  });

  async function shipping(id, status) {
    await adminGudang
      .put(
        `/orders/dikirim/${id}`,
        {
          order_status: status,
        },
        {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        }
      )
      .then((response) => setAlerts(true))
      .catch((e) => {
        setFailMessage(e.message);
        setAlertFail(true);
      });
  }

  const handleChange = (e, item) => {
    e.preventDefault();
    console.log(e.target.value);
    shipping(item.order_id, e.target.value);
    // const filtered = data.filter((brg) => brg.id === item.id)[0];
    // filtered.status = parseInt(e.target.value);
    // setData((prevState) =>
    //   prevState.map((state) =>
    //     state.id === filtered.id ? { ...state, status: filtered.status } : state
    //   )
    // );
    // console.log(typeof data[0].status);
  };

  const closeModal = () => setIsOpenModal(false);

  const resiModalHandling = (id) => {
    setIsOpenModal(true);
    setIdPesanan(id);
  };

  const handleResiField = (e) => {
    setResiField({ ...resiField, [e.target.name]: e.target.value });
  };

  const resiSaveHandling = async (e) => {
    e.preventDefault();
    setIsOpenModal(false);
    console.log(resiField);
    await adminGudang
      .put(`/orders/resi/${idPesanan}`, resiField, {
        headers: {
          "x-access-token": `${parseUser.data.token}`,
        },
      })
      .then((response) => console.log(response));
  };

  useEffect(() => {
    const getData = async () => {
      await adminGudang
        .get("/orders", {
          headers: {
            "x-access-token": `${parseUser.data.token}`,
          },
        })
        .then((response) => setWarehouseData(response.data));
    };
    getData();
  }, [parseUser.data.token]);

  console.log(warehouseData);

  return (
    <>
      <section>
        {alerts && (
          <Alerts
            state="true"
            background="bg-green-100"
            textColor="text-green-600"
            textContent="Status berhasil diubah!"
          />
        )}
        {alertFail && (
          <Alerts
            state="true"
            background="bg-red-100"
            textColor="text-red-600"
            textContent={`Ups, sepertinya ada yang salah: ${failMessage}`}
            closeButton="true"
          />
        )}
        <div className="border-b border-orange-900">
          <h3 className="font-semibold pb-3">Dashboard Gudang</h3>
        </div>
        <h6 className="mt-10 mb-4">Tabel Status Pengiriman Barang </h6>
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
              type="text"
              className="input-field !rounded-full !py-2 !pl-14"
              placeholder="Cari"
              name="seach"
              required
              autoComplete="on"
              // onChange={handleChange}
            />
            <BsSearch className="absolute text-xl top-3 left-6 fill-secondary-800" />
          </div>
        </div>
        <article id="tableStatus">
          <div className="overflow-x-auto">
            <table className="table-auto mb-4 w-full">
              <thead>
                <tr className="bg-orange-900">
                  <th className="text-white p-3 w-[8%] min-w-[54px] text-center">
                    No
                  </th>
                  <th className="text-white p-3 w-[22%] min-w-[196px] text-center">
                    No Pesanan
                  </th>
                  <th className="text-white p-3 w-[20%] min-w-[180px] text-center">
                    Tanggal Pemesanan
                  </th>
                  <th className="text-white p-3 w-[16%] min-w-[140px] text-left">
                    Nama IKM
                  </th>
                  <th className="text-white p-3 w-[34%] min-w-[234px] text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {warehouseData?.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="text-center p-3">{index + 1}</td>
                    <td className="text-center p-3">{item.order_code}</td>
                    <td className="text-center p-3">{item.createdAt}</td>
                    <td className="text-left p-3">
                      {item.delivery_details[0].delivery_detail_ikm}
                    </td>
                    <td className="text-center p-3">
                      <div className="flex items-center gap-4 justify-center">
                        <div className="relative">
                          <select
                            id="status"
                            name="status"
                            defaultValue={item.order_status}
                            // value={item.status}
                            onChange={(e) => handleChange(e, item)}
                            className={`${
                              item.order_status === null
                                ? "!bg-gradient-to-bl !from-orange-900 !to-primary-900 hover:!from-primary-900 hover:!to-orange-900 !shadow-red"
                                : item.order_status === 2
                                ? "!bg-green-500 hover:!bg-green-500/80"
                                : item.order_status === 3
                                ? "!bg-secondary-800 hover:!bg-secondary-800/80"
                                : ""
                            } input-field-select-xs !border-none !font-semibold !text-white !w-auto !pr-12`}
                          >
                            <option
                              value={
                                item.order_status === null
                                  ? "null"
                                  : item.order_status
                              }
                            >
                              {item.order_status === null
                                ? "Status PO"
                                : item.order_status === 2
                                ? "Diterima"
                                : "Belum Disetujui"}
                            </option>
                            <option value="1">Status PO</option>
                            <option value="2">Diterima</option>
                            <option value="3">Belum Disetujui</option>
                          </select>
                          <IoIosArrowDown className="absolute right-4 top-[15px] text-base fill-white" />
                        </div>
                        <button
                          onClick={() => resiModalHandling(item.order_id)}
                          className="bg-white border py-2 pl-3 pr-4 rounded-lg flex items-center transition-200 hover:border-orange-900"
                        >
                          <BiPlus className="mr-2 text-xl" />
                          <span>Resi</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
        </article>
      </section>

      {/* Modal Resi */}
      <ModalResi
        isOpen={isOpenModal}
        closeModal={closeModal}
        noPesanan={idPesanan}
        submitHandler={resiSaveHandling}
        changeHandler={(e) => handleResiField(e)}
        data={warehouseData}
        id={idPesanan}
      />
    </>
  );
};

export default Dashboard;
