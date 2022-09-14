import React, { useState } from "react";
import svg from "../../assets/svg";
import Navbar from "./components/Navbar";
import Sidebar from "./components/user/Sidebar";

const Dashboard = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="flex overflow-x-auto">
        <div
          className={`fixed bg-white rounded-tr-2xl rounded-br-2xl shadow-red z-10 ${
            toggle ? "w-72" : "w-20"
          } min-h-screen duration-500`}
        >
          <div
            className={`relative py-2 ${
              toggle ? "md:py-10" : "md:py-4"
            } duration-500`}
          >
            <img
              src={svg.LogoDashboardUser}
              alt="simpelmenok"
              className="mx-auto px-2"
            />
            <div
              className="bg-white absolute w-[30px] h-[30px] top-9 -right-3 rounded-full"
              onClick={() => setToggle(!toggle)}
            >
              A
            </div>
            {/* Sidebar */}
            <Sidebar toggle={toggle} />
          </div>
        </div>
        <div
          className={`flex-1 h-[2000px] ${
            toggle ? "ml-72" : "ml-20"
          } duration-500 px-8 pt-6 ${toggle ? "md:pt-[53px]" : "md:pt-6"}`}
        >
          {/* Navbar Top */}
          <Navbar />
          {/* Main Content */}
          <main className="mt-10">
            <section>asd</section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
