import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormDus from "./components/FormDus";
import FormKarton from "./components/FormKarton";
import FormSablon from "./components/FormSablon";
import FormSticker from "./components/FormSticker";
import FormStandingPouch from "./components/FormStandingPouch";

import { dummyImg } from "../../assets/image";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { BiTrashAlt } from "react-icons/bi";
import { GoCheck } from "react-icons/go";
import svg from "../../assets/svg";
import Modal from "../../components/Card/Modal";
import Pemesanan from "../Pemesanan";
import { postOrder } from "../../services/api";

const Keranjang = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState();
  const [isNext, setIsNext] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const user = localStorage.getItem("user");
  const userToken = JSON.parse(user).data.token;
  const [item, setItem] = useState();
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      produkImg: dummyImg.kotakBerdiri,
      altImg: "Kotak Berdiri",
      kategori: "Dus Offset",
      jenis: "Kotak Berdiri",
      status: false,
    },
    {
      id: 2,
      produkImg: dummyImg.boxTentengan,
      altImg: "Box Tentengan",
      kategori: "Karton",
      jenis: "Box Tentengan",
      status: false,
    },
    {
      id: 3,
      produkImg: dummyImg.topBottom,
      altImg: "Top Bottom",
      kategori: "Dus Offset",
      jenis: "Top Bottom",
      status: false,
    },
    {
      id: 4,
      produkImg: dummyImg.bentukSegitiga,
      altImg: "Bentuk Segitiga",
      kategori: "Dus Offset",
      jenis: "Bentuk Segitiga",
      status: false,
    },
    {
      id: 5,
      produkImg: dummyImg.boxModelPizza,
      altImg: "Box Model Pizza",
      kategori: "Karton",
      jenis: "Box Model Pizza",
      status: false,
    },
  ]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (e, id) => {
    e.preventDefault();
    setIsOpen(true);
    setDeleteItem(id);
  };

  const handleCheck = (e, itemId) => {
    e.preventDefault();
    const getItemFromArray = cartItem.filter((item) => item.id === itemId)[0];
    getItemFromArray.status = !getItemFromArray.status;
    console.log(getItemFromArray);
    setCartItem((prevState) =>
      prevState.map((state) =>
        state.id === getItemFromArray.id
          ? { ...state, status: getItemFromArray.status }
          : state
      )
    );
  };

  const handleDelete = () => {
    setCartItem((prevState) =>
      prevState.filter((item) => item.id !== deleteItem)
    );
    setIsOpen(false);
  };

  const handleCartConfirm = (e) => {
    e.preventDefault();
    setCartItem((prevState) =>
      prevState.filter((item) => item.status === true)
    );
    setIsNext(true);
    window.scrollTo(0, 0);
  };

  // Set Dynamic Form
  const formProduct = (product) => {
    switch (product) {
      case 1:
        return <FormKarton />;
      case 2:
        return <FormDus categoryName="Slobokan" />;
      case 3:
        return <FormSablon />;
      case 4:
        return <FormSticker />;
      case 5:
        return <FormStandingPouch />;
      default:
        break;
    }
  };

  useEffect(() => {
    const getCart = async () => {
      await postOrder
        .get("/cart", {
          headers: {
            "x-access-token": `${userToken}`,
          },
        })
        .then((response) => console.log(response));
    };
    getCart();
  }, [userToken]);

  useEffect(() => {
    const checkStatus = () => {
      const getStatus = cartItem.filter((item) => item.status === true);
      console.log(getStatus);
      getStatus.length > 0 ? setIsDisable(false) : setIsDisable(true);
    };
    checkStatus();
  }, [cartItem]);

  return (
    <>
      <main className="containers">
        <div className="mb-5 mt-0 xs:mt-7 flex">
          <Link to="/produk-kemasan" className="flex items-center mb-3">
            <HiOutlineArrowSmLeft className="text-2xl mr-3" />
            <span className="leading-10">Kembali</span>
          </Link>
        </div>
        {/* dummy condition */}
        {/* if data !== null */}
        {cartItem.length > 0 ? (
          <>
            <section id="cart" className="mb-10">
              {cartItem.map((item) => {
                return (
                  <article
                    className="relative mb-10 shadow-gray rounded-2xl pt-8 px-8 pb-9 grid grid-cols-4 2xsm:grid-cols-8 2md:grid-cols-12 gap-x-8"
                    key={item.id}
                  >
                    {/* checkbox */}
                    <div className="absolute top-6 md:top-8 left-6 md:left-8">
                      <div className="w-full flex justify-start">
                        <button
                          className={`w-5 h-5 p-[2px] rounded-[.25rem] ${
                            item.status
                              ? "bg-gradient-to-bl from-orange-900 to-primary-900"
                              : "bg-orange-900"
                          } overflow-hidden`}
                          disabled={isNext}
                          onClick={(e) => handleCheck(e, item.id)}
                        >
                          {item.status ? (
                            <div className="w-full h-full bg-gradient-to-bl from-orange-900 to-primary-900 flex items-center justify-center overflow-hidden">
                              <GoCheck className="fill-white" />
                            </div>
                          ) : (
                            <div className="w-full h-full rounded-[3px] bg-white hover:bg-orange-400"></div>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* product image */}
                    <div className="lg:col-start-2 col-span-4 2xsm:col-span-8 2md:col-span-12 lg:col-span-4">
                      <div className="mb-3 w-11/12 xs:w-3/4 lg:w-full mx-auto">
                        <img
                          src={item.produkImg}
                          alt={item.altImg}
                          className="w-full object-cover object-center"
                        />
                      </div>
                      <p className="text-xs xs:text-base">{item.kategori}</p>
                      <p className="font-bold text-base xs:text-xl md:text-2xl mb-3 line-clamp-2">
                        {item.jenis}
                      </p>
                    </div>

                    {/* form product */}
                    <div className="lg:col-start-7 col-span-4 2xsm:col-span-8 2md:col-span-12 lg:col-span-5">
                      {formProduct(item.id)}
                    </div>

                    {/* delete state */}
                    <div className="absolute top-6 md:top-8 right-6 md:right-8">
                      <div className="w-full flex justify-end">
                        <button
                          onClick={(e) => openModal(e, item.id)}
                          type="button"
                          disabled={isNext}
                        >
                          <BiTrashAlt className="text-[26px] fill-orange-900 transition-200 hover:fill-red-500" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>
            {isNext && <Pemesanan item={cartItem} />}
            <div
              className={`${isNext ? "hidden" : ""} flex justify-center mb-9`}
            >
              <button
                className={`${isDisable ? "!bg-slate-300" : ""} button-fill`}
                onClick={(e) => handleCartConfirm(e)}
                disabled={isDisable}
              >
                Lanjutkan Pesanan
              </button>
            </div>
          </>
        ) : (
          // Cart Empty State
          <section className="pt-9 pb-12 2xsm:pb-28 xmd:pb-40">
            <div className="w-4/5 md:w-[33.75rem] mx-auto">
              <div className="w-full px-9">
                <img
                  src={svg.emptyKeranjang}
                  alt="empty-keranjang"
                  className="w-full mb-10"
                />
              </div>
              <h3 className="text-center mb-10">
                Keranjang Anda masih kosong!
              </h3>
              <div className="flex justify-center">
                <button
                  className="button-fill"
                  onClick={() => navigate("/produk-kemasan")}
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </section>
        )}
        {/* <Modal /> */}
        {/* state from product trach icon */}
        <Modal
          id={deleteItem}
          isOpen={isOpen}
          closeModal={closeModal}
          handleAccept={handleDelete}
          titleModal="Hapus produk"
          captionModal="Hapus produk dari keranjang?"
          btnCancelCaption="Kembali"
          btnAcceptCaption="Hapus"
          isErrorModal={false}
        />
      </main>
    </>
  );
};

export default Keranjang;
