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
            Led the development of engaging web experiences using HTML, CSS, and
            JavaScript, setting a standard for increased user interaction. Also,
            improved Joomla CMS with PHP extensions, streamlining content
            management processes and workflow efficiency. Additionally, I
            directed the setup of a live streaming radio station using React.js
            and Node.js, demonstrating my capacity for innovation and delivering
            distinctive web solutions. Ensuring adherence to WCAG standards and
            integrating user-centric design principles, fostered a culture of
            accessibility excellence within the team. Moreover, introduced
            Git/GitHub for version control, implementing effective branching
            strategies and code review procedures to facilitate seamless
            collaboration.
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
              <b>Visuareal Pvt. Ltd.</b>
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
            Developed a comprehensive system encompassing work tracking and an
            e-commerce platform tailored for visualizing surfaces and objects in
            a 3-dimensional environment. Integrated a 3D environment seamlessly
            into the software, utilizing Babylon JS to ensure smooth
            visualization. Demonstrated proficiency in analyzing the document
            object model (DOM) layout, DOM functions, JavaScript functions, and
            cascading styles across various browsers, employing tools such as
            Firebug and Developer Toolbar. Actively engaged in client meetings,
            collaborating with customers and management to establish design and
            production standards. Additionally, managed data collation and
            maintenance within a MYSQL database to ensure efficient information
            handling.
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
            A real-time project was developed utilizing data-visualization tools
            such as Tableau and technologies including Python, Machine Learning,
            and Data Analysis. The project involved extensive data preparation
            and analysis, encompassing tasks such as data pre-processing and
            data wrangling. Various classification and regression techniques
            were employed to identify trends and patterns within the data, with
            findings presented in a clear and concise manner. Comprehensive data
            analysis was conducted to optimize business strategies, streamline
            processes, and enhance operational efficiency.
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default Portfolio;
