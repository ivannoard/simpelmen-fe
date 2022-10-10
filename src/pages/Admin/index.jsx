import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const admin = localStorage.getItem("admin"); //check role
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!admin) navigate("/admin/login");
      switch (parseInt(admin)) {
        case 1:
          return navigate("/admin/cs/dashboard/");
        case 2:
          return navigate("/admin/desain/dashboard/");
        case 3:
          return navigate("/admin/gudang/dashboard/");
        case 4:
          return navigate("/admin/kasir/dashboard/");
        case 5:
          return navigate("/admin/produksi/dashboard/");
        case 6:
          return navigate("/admin/super/dashboard/");
        case 7:
          return navigate("/admin/tu/dashboard/");
        default:
          break;
      }
    }, 2000);
  }, [admin, navigate]);

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-secondary-800 animate-bounce">Authorizing</h1>
      </div>
    </>
  );
};

export default Admin;
