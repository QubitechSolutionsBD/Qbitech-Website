import React from 'react'
import Navbar from "../components/Navigation/Navbar";
import Banner from '../components/Service/Banner';
import Footer from "../components/Footer";
import GlobalPageTransition from "../components/GlobalPageTransition";

function Service() {

    return (
        <>
        <GlobalPageTransition />
        <Navbar />
        <div className="service">
          <Banner />
        </div>
        <Footer />
      </>
    )
}

export default Service
