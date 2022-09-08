import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Alerts = ({ path, background, textColor, textContent }) => {
  const [close, setClose] = useState(true);
  const navigate = useNavigate();
  const handleClose = (e) => {
    e.preventDefault();
    setClose(false);
    if (path) navigate(path);
  };
  return (
    <div
      className={`absolute ${
        !close
          ? "-translate-y-14 transition ease-in-out"
          : "transition translate-y-9 ease-in-out"
      }  top-0 left-0 right-0 mx-auto p-4 mb-4 text-sm ${textColor} ${background} rounded-lg w-[350px] flex justify-between`}
      role="alert"
    >
      <span className="font-medium">{textContent}</span>
      <button onClick={(e) => handleClose(e)}>
        <MdOutlineClose size={20} />
      </button>
    </div>
  );
};

export default Alerts;
