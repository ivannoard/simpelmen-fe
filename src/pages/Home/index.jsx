import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome From Home</h1>
      <Link to='/login' className='button-fill'>
        Login
      </Link>
    </>
  );
};

export default Home;
