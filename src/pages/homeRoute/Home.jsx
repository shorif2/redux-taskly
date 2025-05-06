import React from "react";
import Banner from "../../components/HomePage/Banner";
import Categories from "../../components/HomePage/Categories";
import Stats from "../../components/HomePage/Stats";
import Footer from "../../components/HomePage/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Stats />
      <Footer />
    </>
  );
};

export default Home;
