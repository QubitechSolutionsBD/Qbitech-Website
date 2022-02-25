import React from "react";

function Culture() {
  return (
    <div className="about__culture">
      <div className="heading">
        <div className="circle" id="aboutpageculturecircle"></div>
        <h1>
          <div><span id="aboutculturehead">OUR CULTURES,</span></div>
          <div><span id="aboutculturehead">VALUES AND</span></div>
          <div><span id="aboutculturehead">BELIEFS</span></div>
        </h1>
      </div>

      <div className="contents">
        <div className="content">
          {/* 1 */}
          <div className="head">
            {/* circle */}
            <div className="cir" id="aboutcukturecircle">
              <div className="cir-small" id="aboutculturesmallcircle"></div>
            </div>
            {/* heading */}
            <div><h3 id="aboutculturecontenthead">Keeping up With the World</h3></div>
          </div>
          <p id="aboutculturecontenttext">
            To keep up with the ever changing world we are always prepared to
            adapt to the new technologies & trends into our systems &
            development
          </p>
        </div>

        {/* 2 */}
        <div className="content">
          <div className="head">
            {/* circle */}
            <div className="cir" id="aboutcukturecircle">
              <div className="cir-small" id="aboutculturesmallcircle"></div>
            </div>
            {/* heading */}
            <div><h3 id="aboutculturecontenthead">Pure Passion</h3></div>
          </div>
          {/* text */}
          <p id="aboutculturecontenttext">
            We pride ourselves on pushing the boundaries of digital design and
            development. We combine relevant trends and best practices to build
            platforms with longevity.
          </p>
        </div>

        {/* 3 */}
        <div className="content">
          <div className="head">
            {/* circle */}
            <div className="cir" id="aboutcukturecircle">
              <div className="cir-small" id="aboutculturesmallcircle"></div>
            </div>
            {/* heading */}
            <div><h3 id="aboutculturecontenthead">Self-Starting</h3></div>
          </div>
          {/* text */}
          <p id="aboutculturecontenttext">
            Having an entrepreneurial mindset ensures that every member of our
            team proudly takes ownership of each project, from concept to
            execution.
          </p>
        </div>

        {/* 4 */}
        <div className="content">
          <div className="head">
          {/* circle */}
          <div className="cir" id="aboutcukturecircle">
            <div className="cir-small" id="aboutculturesmallcircle"></div>
          </div>
          {/* heading */}
            <div><h3 id="aboutculturecontenthead">Growing Together</h3></div>
          </div>
          {/* text */}
          <p id="aboutculturecontenttext">
            We believe that we can make a difference in taking new, up & coming
            SMEs to the next level in fulfilling their goals.
          </p>
        </div>

        {/* 5 */}
        <div className="content">
          <div className="head">
            {/* circle */}
            <div className="cir" id="aboutcukturecircle">
              <div className="cir-small" id="aboutculturesmallcircle"></div>
            </div>
            {/* heading */}
            <div><h3 id="aboutculturecontenthead">Transparent Communication</h3></div>
          </div>
          {/* text */}
          <p id="aboutculturecontenttext">
            We are fully transparent in keeping clear cut communication with our
            clients to help you monitor the process while achieving your target.
          </p>
        </div>

        {/* 6 */}
        <div className="content">
          <div className="head">
            {/* circle */}
            <div className="cir" id="aboutcukturecircle">
              <div className="cir-small" id="aboutculturesmallcircle"></div>
            </div>
            {/* heading */}
            <div><h3 id="aboutculturecontenthead">Great Character</h3></div>
          </div>
          {/* text */}
          <p id="aboutculturecontenttext">
            More than skill, drive, or experience, great work is rooted in
            character; hiring the right people and investing in personal
            development is essential to our growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Culture;
