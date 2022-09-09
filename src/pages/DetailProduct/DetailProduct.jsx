import React from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <>
      <section className="containers">
        <h1>Ini adalah produk dengan ID: {productId}</h1>
      </section>
    </>
  );
};

export default DetailProduct;
