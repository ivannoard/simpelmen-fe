import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import { FiMenu } from "react-icons/fi";

const NavbarMobile = ({ userLog, handleLogout }) => {
  return (
    <>
      <div className='xmd:hidden'>
        <Menu as='div' className='relative flex'>
          <Menu.Button>
            <FiMenu size={25} className='cursor-pointer' />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              as='nav'
              className='absolute flex flex-col shadow-md top-14 border right-0 bg-white rounded-xl min-w-[15rem] max-w-[17rem] overflow-hidden'
            >
              <Menu.Item as='div' className='flex w-full'>
                {userLog && (
                  <NavLink
                    to='/profile'
                    className='navlink-mobile transition-200 !pt-4 truncate'
                  >
                    👋 Hi, <span>Username</span>!
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item as='div' className='flex w-full'>
                <NavLink
                  to='/'
                  className={`navlink-mobile transition-200 ${
                    !userLog && "!pt-4"
                  }`}
                >
                  Beranda
                </NavLink>
              </Menu.Item>
              <Menu.Item as='div' className='flex w-full'>
                <NavLink
                  to='/produk-kemasan'
                  className='navlink-mobile transition-200'
                >
                  Produk Kemasan
                </NavLink>
              </Menu.Item>
              <Menu.Item as='div' className='flex w-full'>
                <NavLink
                  to='/laporan'
                  className='navlink-mobile transition-200'
                >
                  Laporan PAD
                </NavLink>
              </Menu.Item>
              <Menu.Item as='div' className='flex w-full'>
                <NavLink
                  to='/keranjang'
                  className='navlink-mobile transition-200 !pb-4'
                >
                  Keranjang
                </NavLink>
              </Menu.Item>
              <hr />
              <Menu.Item as='div' className='flex w-full'>
                {!userLog && (
                  <div className='w-full flex justify-center py-4'>
                    <Link to='/login'>
                      <button className='button-fill-sm !px-14'>Masuk</button>
                    </Link>
                  </div>
                )}
                {userLog && (
                  <div className='flex flex-col w-full'>
                    <NavLink
                      to='/dashboard'
                      className='navlink-mobile transition-200 !pt-4'
                    >
                      Dashboard
                    </NavLink>
                    <p
                      className='navlink-mobile transition-200 !pb-4'
                      aria-label='button'
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default NavbarMobile;
