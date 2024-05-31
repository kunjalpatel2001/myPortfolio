import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Project.css';
import picture from "../../assets/Projects/HiRes-17.jpg"
function Project(){
    return(
        <div>
            <div className="portfolio-main-container">
    <div className="main-heading"><h1>Projects</h1></div>
    <div className="main-para para-para"><p>Welcome to my portfolio! As a web developer, I have had the opportunity to work on
various exciting projects. Each project has been a learning experience and a chance to
push the boundaries of web development. I believe in creating meaningful and
impactful digital solutions that resonate with users.</p></div>
  
    <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>Project 1:- Search Engine</h3>
               
                <div className="company-title">Led the development of a sophisticated information retrieval system using Python, achieving rapid searching and best-in-class search functionality.
• Successfully processed and indexed over 30,000 diverse documents from the National Parks Service, including .txt and .json files. This streamlined document 
handling for the search engine, optimizing data retrieval.

</div>
                

            </div>
            <div className="main-exp-right-img"><img src={picture}></img></div>


            </div>
        </div>
      
        <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>Project 1:- Search Engine</h3>
               
                <div className="company-title">Led the development of a sophisticated information retrieval system using Python, achieving rapid searching and best-in-class search functionality.
• Successfully processed and indexed over 30,000 diverse documents from the National Parks Service, including .txt and .json files. This streamlined document 
handling for the search engine, optimizing data retrieval.

</div>
                

            </div>
            <div className="main-exp-right-img"><img src={picture}></img></div>


            </div>
        </div>
        <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>Project 1:- Search Engine</h3>
               
                <div className="company-title">Led the development of a sophisticated information retrieval system using Python, achieving rapid searching and best-in-class search functionality.
• Successfully processed and indexed over 30,000 diverse documents from the National Parks Service, including .txt and .json files. This streamlined document 
handling for the search engine, optimizing data retrieval.

</div>
                

            </div>
            <div className="main-exp-right-img"><img src={picture}></img></div>


            </div>
        </div>
    </div>
        </div>
    )}


    export default Project