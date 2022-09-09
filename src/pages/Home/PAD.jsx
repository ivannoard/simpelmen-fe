import React from "react";

const PAD = () => {
  return (
    <>
      <section className="containers !py-8 mb-52">
        <h3 className="text-center">Laporan Pendapatan Asli Daerah</h3>
        <div className="overflow-x-auto">
          <table className="table-auto bg-white w-[1440px] text-center mt-10">
            <thead className="bg-[#F29A41]">
              <tr>
                <th className="text-white py-[8px]">No</th>
                <th className="text-white py-[8px]">No. Pesanan</th>
                <th className="text-white py-[8px]">Nama IKM</th>
                <th className="text-white py-[8px]">Jumlah Total Retribusi</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index} className="border-b border-orange-100">
                  <td className="py-[10px]">{item}</td>
                  <td className="py-[10px]">001/BIKDK/O/VII/2022</td>
                  <td className="py-[10px]">Ikha Catering</td>
                  <td className="py-[10px]">Rp215.000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-10">
          <button className="button-fill">Lihat Selengkapnya</button>
        </div>
      </section>
    </>
  );
};

export default PAD;
