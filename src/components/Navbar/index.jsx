import React, { Fragment } from "react";
import svg from "../../assets/svg";
import { FiMenu } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  return (
    <div className="Navbar w-full shadow-md">
      <div className="containers items-center justify-between bg-white !py-[20px] grid grid-cols-12">
        <div className="col-span-6 2xsm:col-span-8 lg:max-w-[4.5rem] md:col-span-1">
          <img
            src={svg.logoSimpelmen}
            alt="simplemen-brand-logo"
            className="block lg:w-full h-[3rem] lg:h-auto"
          />
        </div>
        <div className="col-span-11 hidden md:block">
          <div className="flex justify-end gap-8 items-center">
            <p
              onClick={() => navigate("/")}
              className="text-[15px] hover:text-primary-900 transition cursor-pointer"
            >
              Beranda
            </p>
            <p
              onClick={() => navigate("/produk-kemasan")}
              className="text-[15px] hover:text-primary-900 transition cursor-pointer"
            >
              Produk Kemasan
            </p>
            <p
              onClick={() => navigate("/laporan")}
              className="text-[15px] hover:text-primary-900 transition cursor-pointer"
            >
              Laporan PAD
            </p>
            <p
              onClick={() => navigate("/keranjang")}
              className="text-[15px] hover:text-primary-900 transition cursor-pointer"
            >
              Keranjang
            </p>
            <Link to="/login">
              <button
                className={`button-fill ${
                  user ? "hidden" : ""
                } !py-[8px] !px-5 text-[15px]`}
              >
                Masuk
              </button>
            </Link>
            {user ? (
              <Menu as="div" className="relative">
                <Menu.Button>
                  <h4>Username</h4>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    as="div"
                    className="absolute flex flex-col gap-y-3 shadow-md top-14 p-3 border right-0 bg-white rounded-md w-[250px]"
                  >
                    <Menu.Item as="div">Dashboard</Menu.Item>
                    <Menu.Item as="div">Logout</Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-span-6 2xsm:col-span-4 md:hidden ml-auto">
          <Menu as="div" className="relative">
            <Menu.Button>
              <FiMenu size={25} className="cursor-pointer" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="div"
                className="absolute flex flex-col gap-y-3 shadow-md top-14 p-3 border right-0 bg-white rounded-md w-[250px]"
              >
                <Menu.Item as="div">
                  <button onClick={() => navigate("/")}>Beranda</button>
                </Menu.Item>
                <Menu.Item as="div">
                  <button onClick={() => navigate("/produk-kemasan")}>
                    Produk Kemasan
                  </button>
                </Menu.Item>
                <Menu.Item as="div">
                  <button onClick={() => navigate("/laporan")}>
                    Laporan PAD
                  </button>
                </Menu.Item>
                <Menu.Item as="div">
                  <button onClick={() => navigate("/keranjang")}>
                    Keranjang
                  </button>
                </Menu.Item>
                <Menu.Item as="div">
                  {!user && (
                    <Link to="/login">
                      <button className="button-fill w-full !py-[0.5px]">
                        Masuk
                      </button>
                    </Link>
                  )}
                  {user && (
                    <div className="flex flex-col gap-2 pt-3 border-t-2">
                      <Link to="/dashboard">
                        <button>Dashboard</button>
                      </Link>
                      <Link to="/">
                        <button>Logout</button>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
