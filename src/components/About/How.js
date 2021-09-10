import React from "react";
import search from "../../assets/pageAbout/search.png";
import design from "../../assets/pageAbout/design.png";
import tools from "../../assets/pageAbout/tools.png";
import transfer from "../../assets/pageAbout/transfer.png";
import rocket from "../../assets/pageAbout/startup.png";
import settings from "../../assets/pageAbout/settings.png";

function How() {
  return (
    <div className="about__process">
      <h1>
        <div><span id="aboutprocesshead">HOW</span></div>
        <div><span id="aboutprocesshead">WE DO IT</span></div>
      </h1>

      <div className="processes">
        <div className="col">
          {/* 1 */}
          <div className="process">
            <div className="process__logo">
              <img src={search} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">1</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Evaluation</h3>
              <p>
                Before going into the specifics we map out the process so that
                we can cover all the needs of our clients.
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
                Once the specifics have been identified, we begin to sketch down
                our plan to combine the right technologies & review options with
                the client.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="process">
            <div className="process__logo">
              <img src={tools} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">3</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Implementation</h3>
              <p>
                After finalizing the architecture of the product, our team of
                experts starts the process of creating the new system.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          {/* 4 */}
          <div className="process">
            <div className="process__logo">
              <img src={transfer} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">4</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Feedback</h3>
              <p>
                Once the system has been fully developed, we review the system
                from the beginning with the involvement of the end user for
                feedback.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="process">
            <div className="process__logo">
              <img src={rocket} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">5</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Deployment</h3>
              <p>
                Once all the testing & feedback has a green signal, we are ready
                to launch & promote the product for ultimate exposure.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="process">
            <div className="process__logo">
              <img src={settings} alt="" id="aboutprocesslogo" />
            </div>
            <div className="process__number" id="aboutprocesslnumber">6</div>
            <div className="process__text" id="aboutprocesscontents">
              <h3>Maintenance</h3>
              <p>
                Once all the testing & feedback has a green signal, we are ready
                to launch & promote the product for ultimate exposure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
