import React from "react";
import search from "../../assets/pageAbout/search.png";
import design from "../../assets/pageAbout/design.png";
import tools from "../../assets/pageAbout/tools.png";
import promotion from "../../assets/pageAbout/promotion.png";
import settings from "../../assets/pageAbout/settings.png";

function Process() {
  return (
    <div className="about__process">
      <h1>
        <div><span id="aboutprocesshead">Our</span></div>
        <div><span id="aboutprocesshead">Working Process</span></div>
      </h1>

      <div className="processes">
        <div className="col">
          <div className="plain" id="aboutprocessplain">
            <p>
              Everything in life requires a plan. We use a time tested process
              that brings customized results to every project we work on.
            </p>
            <p>
              We combine both form and function to create exceptional
              experiences while closing the gap between design, development, and
              experience.
            </p>
          </div>

          {/* 1 */}
          <div className="process">
            <div className="process__logo">
              <img src={search} alt="" id="aboutprocesslogo"/>
            </div>
            <div className="process__number" id="aboutprocesslnumber">1</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Research</h3>
              <p>
                We’re concerned with adding value and enhancing the way of doing
                things.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="process">
            <div className="process__logo">
              <img src={design} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">2</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Design</h3>
              <p>
                Once a solution has been identified, we’ll start laying down a
                design that interact in harmony.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          {/* 3 */}
          <div className="process">
            <div className="process__logo">
              <img src={tools} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">3</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Develop</h3>
              <p>
                After countless hours spent tweaking and finalizing the design,
                the build begins.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="process">
            <div className="process__logo">
              <img src={promotion} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">4</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Promote</h3>
              <p>
                Developing is only one step in the process. Now it’s time to
                take our solution to the market.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="process">
            <div className="process__logo">
              <img src={settings} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">5</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Manage</h3>
              <p>
                Now that you’re using our solution, we’ll stick by your side for
                all the service & support you need.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Process;
