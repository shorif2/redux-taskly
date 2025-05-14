import React from "react";
import Banner from "../../components/HomePage/Banner";
import Categories from "../../components/HomePage/Categories";
import Stats from "../../components/HomePage/Stats";
import Footer from "../../components/HomePage/Footer";
import Copyright from "../../components/HomePage/Copyright";
import Subscribe from "../../components/HomePage/Subscribe";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Stats />

      <Subscribe />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
