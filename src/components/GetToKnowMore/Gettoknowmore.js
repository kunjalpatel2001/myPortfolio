import React, { Component } from "react";
import "./Gettoknowmore.css";
import pic5 from "../../assets/Homepage/Experience1.jpg"
import pic6 from "../../assets/Homepage/Project.jpg"
function Gettoknowmore() {
  return (
    <div>
      <div className="portfolio-main-container">
        <div className="main-heading">
          <h1>Know More About Me</h1>
        </div>
        <div className="main-para">
          <p>
            Welcome to my portfolio! As a web developer, I have had the
            opportunity to work on various exciting projects. Each project has
            been a learning experience and a chance to push the boundaries of
            web development. I believe in creating meaningful and impactful
            digital solutions that resonate with users.
          </p>
        </div>
      </div>
      <div className="main-main-cont">
        <div className="main-section-start">
          <a href="https://kunjalpatel.netlify.app/portfolio"><div className="main-inner-section">
            <div className="inner-main-title">Experiences</div>
            <div className="inner-img"><img src={pic5}></img></div>
          </div></a>
          <a href="https://kunjalpatel.netlify.app/project"><div className="main-inner-section">
            <div className="inner-main-title">Projects</div>
            <div className="inner-img"><img src={pic6}></img></div>
            </div></a>
        </div>
      </div>
    </div>
  );
}
export default Gettoknowmore;
