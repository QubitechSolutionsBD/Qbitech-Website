import React from "react";

// CLIENTS
import client1 from "../../assets/pagehome/client/happyClients/1.png";
import client2 from "../../assets/pagehome/client/happyClients/2.png";
import client3 from "../../assets/pagehome/client/happyClients/3.svg";
import client4 from "../../assets/pagehome/client/happyClients/4.png";
import client5 from "../../assets/pagehome/client/happyClients/5.png";

function Clients() {
  return (
    <>
      <h2 className="client__head">Our Happy Clients</h2>
      <div className="home__clients">
        <img src={client1} alt="obosor" id="homeclientprofile" />
        <img src={client2} alt="musafirkhana" id="homeclientprofile" />
        <img src={client3} alt="startupRajshahi" id="homeclientprofile" />
        <img src={client4} alt="startupRongpur" id="homeclientprofile" />
        <img src={client5} alt="startupRongpur" id="homeclientprofile" />
      </div>
      {/* <h2 className="client__head">Partners</h2>
      <div className="home__clients">
        
      </div> */}
    </>
  );
}

export default Clients;
