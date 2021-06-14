import React, { useEffect } from "react";

// COMPONENTS
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Home/Banner";
import Clients from "../components/Home/Clients";
import Features from "../components/Home/Features";
import Industries from "../components/Home/Industries";
import Insights from "../components/Home/Insights";
import Partners from "../components/Home/Partners";
import Testomonials from "../components/Home/Testomonials";
import Footer from "../components/Footer";
import Services from "../components/Home/Services";
import SuccessStories from "../components/Home/SuccessStories";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <Banner />
        <Features />
        <Services />
        <Industries />
        <Insights />
        <Clients />
        <SuccessStories />
        <Partners />
        <Testomonials />
      </div>
      <Footer />
    </>
  );
}

export default Home;
