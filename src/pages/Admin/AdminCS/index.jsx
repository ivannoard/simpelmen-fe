import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminCS = () => {
  const adminRole = localStorage.getItem("admin");
  const navigate = useNavigate();
  useEffect(() => {
    if (!adminRole) navigate("/admin/login");
  }, [adminRole]);
  return <div>AdminCS</div>;
};

export default AdminCS;
