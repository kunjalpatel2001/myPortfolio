import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import picture from "../../assets/Homepage/IMG_2553_(1).jpg";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Gettoknowmore from "../GetToKnowMore/Gettoknowmore";
import Resume from "../../assets/Resume.pdf";
import { TypeAnimation } from "react-type-animation";

function Homepage() {
  return (
    <div className="main-container-start">
      <div className="main-container-one"></div>
      <div className="main-container-two">
        <div className="inner-box-start">
          <div className="inner-box-left">
            <div className="inner-inner-box">
              <img src={picture}></img>
              <h3>Kunjal Patel</h3>
              <hr></hr>
              <h4>SOFTWARE DEVELOPER</h4>
              <a
                className="linkedin-logo"
                href="https://www.linkedin.com/in/kunjal-patel2001/"
              >
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="inner-box-right">
            <div className="inner-text-box">
              <h1>Welcome to my portfolio Website!</h1>
              <div className="inner-animate-text">
                <TypeAnimation
                  sequence={[
                    "I'm a Web Developer, ",
                    1000,
                    "I'm a Web Designer, ",
                    1000,
                    "I'm a Software Developer,",
                    1000,
                    "I'm a UI/UX Designer,",
                    1000,
                    "",
                    "",
                  ]}
                  speed={50}
                  style={{ whiteSpace: "pre-line", fontSize: "2em" }}
                  repeat={Infinity}
                />
              </div>
              <div className="btn-start">
                <a href={Resume} download="Resume">
                  <div className="btn-1">
                    <span>Resume</span>
                  </div>
                </a>
                <a href="https://github.com/kunjalpatel2001 " target="_blank">
                  <div className="btn-2">
                    <span>Github</span>
                  </div>
                </a>
              </div>
              <p>
                Welcome to my website! As a passionate web developer, I
                specialize in creating beautiful and efficient websites. Here,
                you'll find a showcase of my work and insights from my web
                development journey. Take a look at my projects and reach out to
                discuss how we can work together to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Education />
      <Gettoknowmore />

      <Contact />
    </div>
  );
}

export default Homepage;
