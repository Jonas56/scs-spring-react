import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Collection from "../components/Collection";
import NewsLetter from "../components/NewsLetter";

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
