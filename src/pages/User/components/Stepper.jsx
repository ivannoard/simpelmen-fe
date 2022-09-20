import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import ModalTracking from "./ModalTracking";
const Stepper = ({ trackingOrder }) => {
  const [toggleTracking, setToggleTracking] = useState(false);
  const [tracking, setTracking] = useState({
    confirmation: false,
    CSConfirmation: false,
    paymentCheck: false,
    paymentConfirmed: false,
    orderConfirmed: false,
    orderDesignProcess: false,
    designDone: false,
    orderProduction: false,
    orderProductionDone: false,
    orderWarehouse: false,
    orderSend: false,
    orderTaken: false,
  });

  useEffect(() => {
    switch (trackingOrder) {
      case 0:
        return setTracking({ confirmation: true });
      case 1:
        return setTracking({
          confirmation: true,
          CSConfirmation: true,
        });
      case 2:
        return setTracking({
          confirmation: true,
          CSConfirmation: true,
          paymentCheck: true,
        });
      case 3:
        return setTracking({
          confirmation: true,
          CSConfirmation: true,
          paymentCheck: true,
          paymentConfirmed: true,
          orderConfirmed: true,
          orderDesignProcess: true,
          designDone: true,
          orderProduction: true,
          orderProductionDone: true,
          orderWarehouse: true,
          orderSend: true,
          orderTaken: true,
        });

      default:
        break;
    }
  }, [trackingOrder]);

  return (
    <>
      {toggleTracking && (
        <ModalTracking setToggleTracking={setToggleTracking} />
      )}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.confirmation
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.confirmation && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.confirmation
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.confirmation ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.confirmation ? "font-semibold" : ""}`}>
              Menunggu Konfirmasi
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.CSConfirmation
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.CSConfirmation && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.CSConfirmation
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.CSConfirmation ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.CSConfirmation ? "font-semibold" : ""}`}>
              Menunggu Konfirmasi PO CS
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.paymentCheck
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.paymentCheck && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.paymentCheck
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.paymentCheck ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.paymentCheck ? "font-semibold" : ""}`}>
              Proses Pengecekan Pembayaran
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.paymentConfirmed
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.paymentConfirmed && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.paymentConfirmed
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.paymentConfirmed ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p
              className={`${tracking.paymentConfirmed ? "font-semibold" : ""}`}
            >
              Pembayaran Terkonfirmasi
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.orderConfirmed
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.orderConfirmed && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.orderConfirmed
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.orderConfirmed ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.orderConfirmed ? "font-semibold" : ""}`}>
              Pesanan Diterima TU
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.orderDesignProcess
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.orderDesignProcess && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.orderDesignProcess
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.orderDesignProcess ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p
              className={`${
                tracking.orderDesignProcess ? "font-semibold" : ""
              }`}
            >
              Pesanan Dalam Proses Desain
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.designDone
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.designDone && <AiOutlineCheck size={20} fill="#FFFF" />}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.designDone
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.designDone ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.designDone ? "font-semibold" : ""}`}>
              Tahap Desain Selesai
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.orderProduction
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.orderProduction && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.orderProduction
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.orderProduction ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.orderProduction ? "font-semibold" : ""}`}>
              Pesanan Dalam Proses Produksi
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.orderProductionDone
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.orderProductionDone && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.orderProductionDone
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.orderProductionDone ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p
              className={`${
                tracking.orderProductionDone ? "font-semibold" : ""
              }`}
            >
              Pesanan Selesai Produksi
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.orderWarehouse
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.orderWarehouse && (
                <AiOutlineCheck size={20} fill="#FFFF" />
              )}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.orderWarehouse
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.orderWarehouse ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.orderWarehouse ? "font-semibold" : ""}`}>
              Pesanan Masuk Gudang
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.orderSend
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.orderSend && <AiOutlineCheck size={20} fill="#FFFF" />}
              <div
                className={`absolute -z-10 -bottom-8 left-0 right-0 mx-auto w-[5px] h-[60px] ${
                  tracking.orderSend
                    ? "bg-primary-600"
                    : "bg-secondary-800 border"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-2/3">
            {tracking.orderSend ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.orderSend ? "font-semibold" : ""}`}>
              Pesanan Dikirim
            </p>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/3">
            <div
              className={`flex justify-center items-center w-[46px] h-[46px] rounded-full ${
                tracking.orderTaken
                  ? "bg-primary-600"
                  : "bg-white border-2 border-secondary-800"
              } mx-auto relative text-white`}
            >
              {tracking.orderTaken && <AiOutlineCheck size={20} fill="#FFFF" />}
            </div>
          </div>
          <div className="w-2/3">
            {tracking.orderTaken ? (
              <p className="text-secondary-800">01 Januari 2022, 13.00 WIB</p>
            ) : (
              ""
            )}
            <p className={`${tracking.orderTaken ? "font-semibold" : ""}`}>
              Pesanan Diambil
            </p>
          </div>
        </div>
        <button
          className={`w-[165px] text-sm mx-auto font-semibold px-5 py-2 rounded-2xl ${
            tracking.orderTaken
              ? "bg-primary-900 text-white hover:bg-primary-600 shadow-red"
              : "bg-secondary-700 text-secondary-800"
          } `}
          disabled={tracking.orderTaken ? false : true}
          onClick={() => setToggleTracking(true)}
        >
          Pesanan Selesai
        </button>
      </div>
    </>
  );
};

export default Stepper;
