import React from "react";

// CLIENTS
import client1 from "../../assets/pagehome/client/happyClients/1.png";
import client2 from "../../assets/pagehome/client/happyClients/2.png";
import partner1 from "../../assets/pagehome/client/partners/1.png";
import partner2 from "../../assets/pagehome/client/partners/2.png";

function Clients() {
  return (
    <>
      <h2 className="client__head">Our Happy Clients</h2>
      <div className="home__clients">
        <img src={client1} alt="obosor" id="homeclientprofile" />
        <img src={client2} alt="musafirkhana" id="homeclientprofile" />
      </div>
      <h2 className="client__head">Partners</h2>
      <div className="home__clients">
        <img src={partner1} alt="startupRajshahi" id="homeclientprofile" />
        <img src={partner2} alt="startupRongpur" id="homeclientprofile" />
      </div>
    </>
  );
}

export default Clients;
