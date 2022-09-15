import { HiChevronDown } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <nav className="flex justify-between items-center pb-3 border-b border-secondary">
        <p className="text-[18px] font-semibold">Dashboard</p>
        <Menu as="div" className="relative">
          <Menu.Button>
            <div className="flex items-center ml-4">
              <p className="text-15/sp font-semibold mr-2 max-w-[5.625rem] lg:max-w-none truncate">
                Username
              </p>
              <HiChevronDown className="text-2xl" />
            </div>
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
              as="nav"
              className="absolute flex flex-col shadow-md top-10 right-0 bg-white rounded-xl border w-40 overflow-hidden"
            >
              <Menu.Item as="div">
                <NavLink to="/" className="navlink-mobile">
                  Beranda
                </NavLink>
              </Menu.Item>
              <hr />
              <Menu.Item as="div">
                <p
                  onClick={(e) => handleLogout(e)}
                  className="navlink-mobile"
                  aria-label="button"
                >
                  Logout
                </p>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </>
  );
};

export default Navbar;
