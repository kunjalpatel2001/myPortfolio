import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Portfolio.css';
import Skills from '../Skills/Skills';

function Portfolio(){
    return(
<div className="portfolio-main-container">
    <div className="main-heading"><h1>Portfolio</h1></div>
    <div className="title-main">
        <h2>Experience</h2>
        <div className="resume-btn"><span>Linkedin</span></div>
    </div>
    <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>2022-2024</h3>
                <div className="position-title"><b>Software Developer</b></div>
                <div className="company-title">Associated Students Inc,</div>
                <div className="location-title">Long Beach, California</div>

            </div>
            <div className="main-exp-right">lorem Stallman's concept specifically included the idea that no 
                central organization should control editing. This contrasted with contemporary d
                igital encyclopedias such as Microsoft Encarta and Encyclopædia Britannica. In 2001, t
                he license for Nupedia was changed to GFDL, and Jimmy Wales and Larry Sanger launched Wikip
                edia as a complementary project, using an online wiki[6] as a collaborative drafting tool. While Wiki
                pedia was initially imagined as a place to draft articles and ideas for eventual polishing in Nupedia,
                 it quickly overtook its predecessor</div>


            </div>
        </div>
        <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>2022-2024</h3>
                <div className="position-title"><b>Software Developer</b></div>
                <div className="company-title">Associated Students Inc,</div>
                <div className="location-title">Long Beach, California</div>

            </div>
            <div className="main-exp-right">lorem Stallman's concept specifically included the idea that no 
                central organization should control editing. This contrasted with contemporary d
                igital encyclopedias such as Microsoft Encarta and Encyclopædia Britannica. In 2001, t
                he license for Nupedia was changed to GFDL, and Jimmy Wales and Larry Sanger launched Wikip
                edia as a complementary project, using an online wiki[6] as a collaborative drafting tool. While Wiki
                pedia was initially imagined as a place to draft articles and ideas for eventual polishing in Nupedia,
                 it quickly overtook its predecessor</div>


            </div>
        </div>
        <div className="main-experience-container">
        <div className="main-exp-start">
            <div className="main-exp-left">
                <h3>2022-2024</h3>
                <div className="position-title"><b>Software Developer</b></div>
                <div className="company-title">Associated Students Inc,</div>
                <div className="location-title">Long Beach, California</div>

            </div>
            <div className="main-exp-right">lorem Stallman's concept specifically included the idea that no 
                central organization should control editing. This contrasted with contemporary d
                igital encyclopedias such as Microsoft Encarta and Encyclopædia Britannica. In 2001, t
                he license for Nupedia was changed to GFDL, and Jimmy Wales and Larry Sanger launched Wikip
                edia as a complementary project, using an online wiki[6] as a collaborative drafting tool. While Wiki
                pedia was initially imagined as a place to draft articles and ideas for eventual polishing in Nupedia,
                 it quickly overtook its predecessor</div>


            </div>
        </div>
        <Skills/>

    </div>
    

    )
}


export default Portfolio;