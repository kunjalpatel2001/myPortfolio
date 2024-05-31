import React, { Component } from "react";
import "./Gettoknowmore.css";
import pic5 from "../../assets/Homepage/Experience1.jpg";
import pic6 from "../../assets/Homepage/Project.jpg";
function Gettoknowmore() {
  return (
    <div>
      <div className="portfolio-main-container">
        <div className="main-heading head1">
          <h1>Know More About Me</h1>
        </div>
        <div className="main-para para-para">
          <p>
            Welcome to my portfolio! To know more about my experiences and
            projects, explore my work in web development, software engineering,
            and machine learning. I have developed various applications using a
            range of technologies including HTML/CSS, ReactJS, NodeJS, Javascript, Python, PHP, Java, Babylon JS and advanced
            JavaScript frameworks. My projects also include implementing machine
            learning algorithms for data analysis. These experiences, combined
            with my coursework demonstrate my comprehensive skill set and readiness
            for the tech industry.
          </p>
        </div>
      </div>
      <div className="main-main-cont">
        <div className="main-section-start">
          <a href="https://kunjalpatel.netlify.app/portfolio">
            <div className="main-inner-section">
              <div className="inner-main-title">Experiences</div>
              <div className="inner-img">
                <img src={pic5}></img>
              </div>
            </div>
          </a>
          <a href="https://kunjalpatel.netlify.app/project">
            <div className="main-inner-section">
              <div className="inner-main-title">Projects</div>
              <div className="inner-img">
                <img src={pic6}></img>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Gettoknowmore;
