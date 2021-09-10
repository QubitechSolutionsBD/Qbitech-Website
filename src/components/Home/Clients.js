import React from "react";

// ASSETS
import apple from "../../assets/pagehome/client/partners/apple-logo.png";
import github from "../../assets/pagehome/client/partners/github.png";
import google from "../../assets/pagehome/client/partners/google.png";
import microsoft from "../../assets/pagehome/client/partners/windows-logo.png";
import adobe from "../../assets/pagehome/client/partners/adobe.png";

function Clients() {
  return (
    <>
      <h2 className="client__head">Our Happy Clients</h2>
      <div className="home__clients">
        <img src={apple} alt="apple" id="homeclientprofile" />
        <img src={github} alt="github" id="homeclientprofile" />
        <img src={google} alt="google" id="homeclientprofile" />
        <img src={microsoft} alt="microsoft" id="homeclientprofile" />
        <img src={adobe} alt="adobe" id="homeclientprofile" />
      </div>
      <h2 className="client__head">Partners</h2>
      <div className="home__clients">
      <img src={google} alt="google" id="homeclientprofile" />
        <img src={apple} alt="apple" id="homeclientprofile" />
        <img src={adobe} alt="adobe" id="homeclientprofile" />
        <img src={github} alt="github" id="homeclientprofile" />
        <img src={microsoft} alt="microsoft" id="homeclientprofile" />
      </div>
    </>
  );
}

export default Clients;
