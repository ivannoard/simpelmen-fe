import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <section className='containers'>
          <h1>Welcome From Home</h1>
          <Link to='/login' className='button-fill'>
            Login
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
