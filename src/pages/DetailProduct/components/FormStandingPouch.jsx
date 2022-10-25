import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { postOrder } from "../../../services/api";
import { IoIosArrowDown } from "react-icons/io";

const FormStandingPouch = ({ productId, setAlertSuccess, setAlertFail }) => {
  const [fields, setFields] = useState({});
  const user = localStorage.getItem("user");

  const dummySize = [
    {
      id: 1,
      p: 10,
      l: 12,
    },
    {
      id: 2,
      p: 10,
      l: 15,
    },
    {
      id: 3,
      p: 12,
      l: 20,
    },
    {
      id: 4,
      p: 13,
      l: 20,
    },
    {
      id: 5,
      p: 14,
      l: 20,
    },
    {
      id: 6,
      p: 15,
      l: 22,
    },
    {
      id: 7,
      p: 16,
      l: 24,
    },
    {
      id: 8,
      p: 18,
      l: 26,
    },
    {
      id: 9,
      p: 20,
      l: 30,
    },
  ];

  const dummyLamination = [
    "Laminasi Glossy",
    "Laminasi Doff",
    "Tanpa Laminasi",
  ];

  const dummyDesign = [
    "Lama (Diambil dari data pesanan file pesanan sebelumnya)",
    "Baru (Dibuatkan oleh desainer BIKDK)",
    "Swadesign (File desain dari konsumen)",
    "Re-design (Desain ulang dari pesanan sebelumnya)",
  ];

  const finalDummy = [];

  for (let i = 0; i < dummySize.length; i++) {
    // console.log(dummySize[i]);
    for (let j = 0; j < dummyLamination.length; j++) {
      finalDummy.push({ size: dummySize[i], lamination: dummyLamination[j] });
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute("name")]: e.target.value,
    });
  }

  async function handleCart(e) {
    e.preventDefault();
    const finalSpesification = {
      panjang_1: parseInt(fields.spesifikasi.split(" ")[0]),
      lebar_1: parseInt(fields.spesifikasi.split(" ")[3]),
      order_design: fields.desain,
      order_quantity: parseInt(fields.jumlah),
    };

    if (user) {
      await postOrder.post(`/cart/${productId}`, finalSpesification, {
        headers: {
          "x-access-token": `${JSON.parse(user).data.token}`,
        },
      });
      setAlertSuccess(true);
    } else {
      setAlertFail(true);
    }
  }

  return (
    <form>
      <div className="relative">
        <label
          htmlFor="spesifikasi"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Spesifikasi
        </label>
        <select
          id="spesifikasi"
          name="spesifikasi"
          onChange={(e) => handleChange(e)}
          className="input-field-select-xs"
        >
          <option>Pilih Spesifikasi</option>
          {finalDummy.map((item, index) => (
            <option
              value={`${item.size.p} cm X ${item.size.l} cm ${item.lamination}`}
            >
              {item.size.p} cm X {item.size.l} cm {item.lamination}
            </option>
          ))}
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
      </div>
      <div className="mt-4 relative">
        <label
          htmlFor="desain"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Desain
        </label>
        <select
          id="desain"
          name="desain"
          onChange={(e) => handleChange(e)}
          className="input-field-select-xs"
        >
          <option>Pilih Desain</option>
          {dummyDesign.map((item, index) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
      </div>
      {/* <div className="mt-4 relative">
        <label
          htmlFor="laminasi"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Laminasi
        </label>
        <select
          id="laminasi"
          name="laminasi"
          onChange={(e) => handleChange(e)}
          className="input-field-select-xs"
        >
          <option>Pilih Laminasi</option>
          <option value="1">Jasa Laminasi</option>
          <option value="2">Tanpa Laminasi</option>
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
      </div> */}
      <div className="mt-4">
        <label
          htmlFor="jumlah"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Jumlah Pesanan
        </label>
        <div className="relative">
          <input
            type="text"
            id="jumlah"
            name="jumlah"
            className="input-field-xs !pr-12"
            placeholder="Masukkan Jumlah Pesanan"
            required
            onChange={(e) => handleChange(e)}
          />
          <span className="text-gray-400 absolute right-3 top-[11px]">pcs</span>
        </div>
      </div>
      <div className="buttons flex justify-end mt-8 gap-5">
        <button className="button-fill !py-4">Pesan Sekarang</button>
        <button className="button-white !p-4" onClick={(e) => handleCart(e)}>
          <BsCartPlus size={20} className="mx-auto" />
        </button>
      </div>
    </form>
  );
};

export default FormStandingPouch;
