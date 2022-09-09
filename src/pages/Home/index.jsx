import React from "react";
import { Link } from "react-router-dom";
import FlowOrder from "./FlowOrder";
import Hero from "./Hero";
import OurProduct from "./OurProduct";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      <main>
        {/* hero */}
        <Hero />

        {/* why us */}
        <WhyUs />

        {/* flow order */}
        <FlowOrder />

        {/* our product */}
        <OurProduct />
      </main>
    </>
  );
};

export default Home;
