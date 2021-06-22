import React, { useEffect, useRef, useState } from "react";
import GlobalPageTransition from "../components/GlobalPageTransition";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Service/Banner";
import Footer from "../components/Footer";
import Offers from "../components/Service/Offers";
import Technologies from "../components/Service/Technologies";
import Works from "../components/Service/Works";
import { setupData } from "../components/Service/Data";
import { useLocation } from "react-router-dom";

function Service() {
  const [bannerHeading, setBannerHeading] = useState([]);
  const [bannerText, setBannerText] = useState("");
  const [offerHeading, setOfferHeading] = useState("");
  const [offerText, setOfferText] = useState([]);
  const [offers, setOffers] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [works, setWorks] = useState([]);

  const nextslideRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.split("/")[2];
    setupData(
      pathname,
      setBannerHeading,
      setBannerText,
      setOfferHeading,
      setOfferText,
      setOffers,
      setTechnologies,
      setWorks
    );
  }, [location.pathname]);

  return (
    <>
      {/* <GlobalPageTransition /> */}
      <Navbar />

      <div className="service">
        <Banner
          nextslideRef={nextslideRef}
          bannerHeading={bannerHeading}
          bannerText={bannerText}
        />
        <Offers
          nextslideRef={nextslideRef}
          offerHeading={offerHeading}
          offerText={offerText}
          offers={offers}
        />
        <Technologies technologies={technologies} />
        <Works works={works} />
      </div>

      <Footer />
    </>
  );
}

export default Service;
