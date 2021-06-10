import React from "react";

// COMPONENTSD
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

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Banner />
        <Features />
        {/* <Partners /> */}
        <Services />
        <Industries />
        <Insights />
        <Clients />
        <Testomonials />
      </div>
      <Footer />
    </>
  );
}

export default Home;
