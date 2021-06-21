import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="about__team">
      <h1>
        <div><span id="aboutteamhead">OUR</span></div>
        <div><span id="aboutteamhead">CREATIVE TEAM</span></div>
      </h1>
      <p id="aboutteamtext">
        Happy developers mean profitable projects and satisfied clients. Over
        the years, we've developed a successful formula to take care of our
        people – they are up-to-date with technologies, well-coordinated and
        effective. By choosing The Software House, you’re guaranteed to work
        with high-quality teams only.
      </p>
      <p id="aboutteamtext">
        Our people not only following the tasks but can work as team and work
        together.
      </p>
      <Link to="/" id="aboutteamlink">LEARN MORE</Link>
    </div>
  );
}

export default Team;
