import React from "react";
import Navbar from "../components/Navbar/Navbar";
import line from "../assets/blog-svg/Line 15.svg";
import cover from "../assets/case-studies/Cover.png";
import body from "../assets/case-studies/Body.svg";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";
import CaseStudy from "../components/CaseStudies/CaseStudy";
//Cases
import spotify from "../assets/case-studies/Spotify.svg";
import { useState } from "react";
const CaseStudies = () => {
  const [caseDetails, setCaseDetails] = useState({
    logo: spotify,
    text: "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
    details: [
      {
        title: "Service Provided",
        dtext:
          "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
      },
      {
        title: "About Client",
        dtext:
          "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
      },
      {
        title: "Solutions",
        dtext:
          "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
      },
      {
        title: "Impact",
        dtext:
          "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
      },
      {
        title: "Tech Stack",
        dtext:
          "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
      },
    ],
    snaps: {
      sn1: cover,
      sn2: cover,
    },
  });
  const cases = [
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
      case: {
        logo: spotify,
        text: "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
        details: [
          {
            title: "Service Provided",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "About Client",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "Solutions",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "Impact",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "Tech Stack",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
        ],
        body: body,
        snaps: {
          sn1: cover,
          sn2: cover,
        },
      },
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
      case: {
        logo: spotify,
        text: "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
        details: [
          {
            title: "Service Providex",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "About Client",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "Solutions",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "Impact",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
          {
            title: "Tech Stack",
            dtext:
              "As the world’s most popular music streaming service, Spotify gives fans on-demand access to millions of tracks via mobile, tablet and desktop devices. Whatever the activity or occasion, the right music is always at your fingertips. ",
          },
        ],
        body: body,
        snaps: {
          sn1: cover,
          sn2: cover,
        },
      },
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
    {
      sl: 1,
      img: cover,
      tags: ["TAG1", "TAG4"],
      title: "Virtual Fire Safety Training",
      serviceName: "Software Solutions",
    },
  ];

  const handleToCaseStudy = (csd) => {
    setCaseDetails(csd);
    console.log("clicked none");
    const cases = document.getElementById("studies");
    cases.style.display = "none";
    const cs = document.getElementById("caseStudy");
    cs.style.display = "block";
  };
  return (
    <>
      <Navbar />
      <div id="studies" className="caseStudies">
        <div style={{ textAlign: "center" }} className="blog">
          <h3 className="blog__topLine">
            Originality with versatile ideas for every sphere of the digital
            world!
          </h3>
          <h1 className="blog__topLine2">Case Studies</h1>
          <img className="blog__line" src={line} alt="" />
        </div>
        <div className="caseStudies__cases">
          {cases.map((cs) => (
            <div onClick={() => handleToCaseStudy(cs.case)} className="case">
              <img className="cover" src={cover} alt="" />
              <img className="body" src={body} alt="" />
              <h1>01</h1>
              <hr />
              <h2>TAG1,TAG4</h2>

              <h3>{cs.title}</h3>
              <h4>{cs.serviceName}</h4>
            </div>
          ))}
        </div>
      </div>
      <CaseStudy cd={caseDetails} />
      <Footer />
    </>
  );
};

export default CaseStudies;
