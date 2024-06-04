import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Project.css';
import picture from "../../assets/Projects/HiRes-17.jpg"
import picture1 from "../../assets/Projects/22West.png"
import picture2 from "../../assets/Projects/SearchEngine.jpg"
import picture3 from "../../assets/Projects/TaskManagement.png"
function Project(){
    return(
        <div>
            <div className="portfolio-main-container">
    <div className="main-heading"><h1>Projects</h1></div>
    <div className="main-para para-para"><p>Welcome to my portfolio! Explore my work in web development, software engineering, and machine learning. I have developed various applications using a range of technologies including HTML/CSS, ReactJS, NodeJS, Javascript, Python, PHP, Java, Babylon JS and advanced JavaScript frameworks. My projects also include implementing machine learning algorithms for data analysis. These experiences, combined with my coursework demonstrate my comprehensive skill set and readiness for the tech industry.</p></div>
  
    <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>Project 1:- 22 WestMedia</h3>
               
                <div className="company-title">Led the development of a sophisticated information retrieval system using Python, achieving rapid searching and best-in-class search functionality.
• Successfully processed and indexed over 30,000 diverse documents from the National Parks Service, including .txt and .json files. This streamlined document 
handling for the search engine, optimizing data retrieval.

</div>
                

            </div>
            <div className="main-exp-right-img"><a href="https://22westmedia.com/web-team" target="_blank"><img src={picture1}></img></a></div>


            </div>
        </div>
      
        <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>Project 2:- Search Engine</h3>
               
                <div className="company-title">Led the development of a sophisticated information retrieval system using Python, achieving rapid searching and best-in-class search functionality.
• Successfully processed and indexed over 30,000 diverse documents from the National Parks Service, including .txt and .json files. This streamlined document 
handling for the search engine, optimizing data retrieval.

</div>
                

            </div>
            <div className="main-exp-right-img"><a href="https://github.com/kunjalpatel2001/SearchEngine" taregt="_blank"><img src={picture2}></img></a></div>


            </div>
        </div>
        <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>Project 3:- Task Management</h3>
               
                <div className="company-title">Led the development of a sophisticated information retrieval system using Python, achieving rapid searching and best-in-class search functionality.
• Successfully processed and indexed over 30,000 diverse documents from the National Parks Service, including .txt and .json files. This streamlined document 
handling for the search engine, optimizing data retrieval.

</div>
                

            </div>
            <div className="main-exp-right-img"><a href="https://github.com/kunjalpatel2001/Task-Management" target="_blank"><img src={picture3}></img> </a></div>


            </div>
        </div>
    </div>
        </div>
    )}


    export default Project