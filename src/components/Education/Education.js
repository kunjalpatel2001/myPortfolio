import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Education.css";

function Education() {
  return (
    <div className="portfolio-main-container main-education">
      <div className="title-main-head">
        <h1>Education</h1>
      </div>
      <div className="main-experience-container">
        <div className="main-exp-start">
          <div className="main-exp-left">
            <h3>July 2022 - May 2024</h3>
            <div className="position-title">
              <b>GPA: 3.7</b>
            </div>
            <div className="company-title">
              California State University - Long Beach
            </div>
            <div className="location-title">Master's, Computer Science</div>
          </div>
          <div className="main-exp-right">
            Pursuing Master's in Computer Science from California State
            University-Long Beach helped me to enhance my skills through courses such as
            Data Structures and Algorithms, Software Engineering & Testing,
            Advanced Programming Languages, Advanced AI, Machine Learning, and
            Topics in Distributed Computing. I also completed several projects
            during this time, including a search engine, Bughound software for
            software testing, and research on cryptocurrency, among others.
            These courses & projects equipped me with the expertise needed to
            excel in the tech industry.
          </div>
        </div>
      </div>

      <div className="main-experience-container">
        <div className="main-exp-start">
          <div className="main-exp-left">
            <h3>July 2018 - May 2022</h3>
            <div className="position-title">
              <b>GPA: 3.9</b>
            </div>
            <div className="company-title">Indus University, Ahmedabad</div>
            <div className="location-title">
              Bachelor's, Information Technology
            </div>
          </div>
          <div className="main-exp-right">
            During my studies in Information Technology, I completed courses
            such as Data Structures and Algorithms, Database Management Systems,
            Operating Systems, Data Science, and Cryptography and Cyber
            Security. I also worked on projects including an E-commerce website
            using HTML/CSS, a 3D visualizer using Babylon.js and PHP, textile
            billing software using Java, and Adult Income Classification using
            various Machine Learning algorithms. This diverse education and
            hands-on experience have thoroughly prepared me for a successful
            tech career.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
