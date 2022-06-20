import React from "react";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Feature from "../components/home/Feature";
import Collection from "../components/home/Collection";
import NewsLetter from "../components/home/NewsLetter";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Collection />
      <Feature />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
