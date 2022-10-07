import React from "react";
import CardProduct from "../../components/Card/CardProduct";
import svg from "../../assets/svg";
import { dummyImg } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import CardSkeleton from "../../components/Skeletons/CardSkeleton";

const OurProduct = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useProducts(
    "https://simpelmen.herokuapp.com/api/products"
  );

  // const dummyProduct = [
  //   {
  //     id: 1,
  //     produkImg: dummyImg.kotakBerdiri,
  //     altImg: "Kotak Berdiri",
  //     kategori: "Dus Offset",
  //     jenis: "Kotak Berdiri",
  //   },
  //   {
  //     id: 2,
  //     produkImg: dummyImg.boxTentengan,
  //     altImg: "Box Tentengan",
  //     kategori: "Karton",
  //     jenis: "Box Tentengan",
  //   },
  //   {
  //     id: 3,
  //     produkImg: dummyImg.topBottom,
  //     altImg: "Top Bottom",
  //     kategori: "Dus Offset",
  //     jenis: "Top Bottom",
  //   },
  //   {
  //     id: 4,
  //     produkImg: dummyImg.bentukSegitiga,
  //     altImg: "Bentuk Segitiga",
  //     kategori: "Dus Offset",
  //     jenis: "Bentuk Segitiga",
  //   },
  //   {
  //     id: 5,
  //     produkImg: dummyImg.boxModelPizza,
  //     altImg: "Box Model Pizza",
  //     kategori: "Karton",
  //     jenis: "Box Model Pizza",
  //   },
  //   {
  //     id: 6,
  //     produkImg: dummyImg.kardus,
  //     altImg: "kardus",
  //     kategori: "Karton",
  //     jenis: "Box A1 Pound",
  //   },
  // ];
  return (
    <>
      <section className="relative">
        <div className="containers-sm">
          <p className="text-3xl text-orange-900 font-bold text-center">
            Produk Kami
          </p>
          <img
            src={svg.bgOurProduct}
            alt=""
            className="absolute -z-10 top-40 left-0 right-0 mx-auto h-[826px]"
          />
          <div className="mt-12 md:mt-14">
            <div className="grid grid-systems gap-3 2xsm:gap-5 xl:gap-8">
              {isLoading
                ? [1, 2, 3, 4, 5, 6].map((item) => (
                    <div className="col-span-2 2xsm:col-span-4" key={item}>
                      <CardSkeleton />
                    </div>
                  ))
                : data?.slice(0, 6)?.map((item) => (
                    <div className="col-span-2 2xsm:col-span-4" key={item.id}>
                      <CardProduct {...item} />
                    </div>
                  ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button
                className="button-white"
                onClick={() => navigate("/produk-kemasan")}
                type="button"
              >
                Lihat Produk Lainnya
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProduct;
