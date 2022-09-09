import React from "react";
import { Link } from "react-router-dom";
import FlowOrder from "./FlowOrder";
import Hero from "./Hero";
import OurProduct from "./OurProduct";
import PAD from "./PAD";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <WhyUs />
        <FlowOrder />
        <OurProduct />
        <PAD />
      </main>
    </>
  );
};

export default Home;
