import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Portfolio.css";
import Skills from "../Skills/Skills";

function Portfolio() {
  return (
    <div className="portfolio-main-container">
      <div className="main-heading">
        <h1>Portfolio</h1>
      </div>
      <div className="title-main">
        <h2>Experience</h2>
        <div className="resume-btn">
          <a
            className="inside-resume"
            href="https://www.linkedin.com/in/kunjal-patel2001/"
            target="_blank"
          >
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      <div className="main-experience-container">
        <div className="main-exp-start">
          <div className="main-exp-left">
            <h3>June 2023 - May 2024</h3>
            <div className="position-title">
              <i>Software Developer</i>
            </div>
            <div className="company-title">
              <b>Associated Students Inc, CSULB</b>{" "}
            </div>
            <div className="location-title">Long Beach, California, USA</div>
            <div className="location-title">
              <a
                className="wesite-link"
                href="https://www.asicsulb.org/corporate/"
                target="_blank"
              >
                Visit:- CSULB ASI
              </a>
            </div>
          </div>
          <div className="main-exp-right">
          <li>Developed and maintained a live streaming radio website using React.js, Node.js, and SCSS, enhancing user interaction and experience.</li>
          <li>Integrated GitHub and <b>CI/CD pipelines</b>, reducing development time by 10% and improving code quality.</li>
          <li>Managed and maintained multiple websites using Joomla CMS with <b>PHP extentions</b>, focusing on enhancing functionality and user-friendliness.</li>
         
           </div>
        </div>
      </div>
      <div className="main-experience-container">
        <div className="main-exp-start">
          <div className="main-exp-left">
            <h3>January 2022 - June 2022</h3>
            <div className="position-title">
              <i>Software Developer</i>
            </div>
            <div className="company-title">
              <b>Wolves Creata Pvt. Ltd.</b>
            </div>
            <div className="location-title">Ahmedabad, Gujarat, India</div>
            <div className="location-title">
              <a
                className="wesite-link"
                href="https://visuareal.in/home/"
                target="_blank"
              >
                Visit:- VISUAREAL
              </a>
            </div>
          </div>
          <div className="main-exp-right">
            <li>Created a comprehensive system, work tracking, and e-commerce platform for visualizing surface and objects in a 3-Dimensional Environment for smooth visualization using Babylon JS.  </li>
            <li>Optimized cross-browser compatibility by analyzing <b>DOM </b>functions and JavaScript interactions, leading to a 40% decrease in UI/UX bugs and a 25% improvement in load times across diverse browser platforms. 
            </li>
            <li>Implemented and designed <b>UI/UX enhancements</b>, ensuring cross-browser compatibility and responsiveness.</li>
            

          </div>
        </div>
      </div>
      <div className="main-experience-container">
        <div className="main-exp-start">
          <div className="main-exp-left">
            <h3>May 2021 - September 2021</h3>
            <div className="position-title">
              <i>Data Analyst</i>
            </div>
            <div className="company-title"><b>ShapeAI</b></div>
            <div className="location-title">Mumbai, Maharashtra, India</div>
            <div className="location-title">
              <a
                className="wesite-link"
                href="https://shape-ai.com/"
                target="_blank"
              >
                Visit:- SHAPEAI
              </a>
            </div>
          </div>
          <div className="main-exp-right">
            <li>Implemented a real-time project utilizing Tableau, Python, and machine learning; simplified data processing, saving significant time weekly. 
            </li>
            <li>Streamlined the data preparation process by executing tasks such as data pre-processing, cleaning and wrangling; identified data quality issues, enhancing decision-making accuracy and efficiency by 40%. </li>
            <li>Applied analytics is used to identify trends and forecast market shifts, which reduces costs & minimizes stockouts through predictive modeling. </li>
        
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default Portfolio;
