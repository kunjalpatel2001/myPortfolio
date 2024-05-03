import React, { Component} from "react";
import Navbar from '../Navbar/Navbar';
import './Homepage.css'
import picture from '../../assets/Homepage/Profile.png';
import Education from '../Education/Education';


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
                    <a className="linkedin-logo" href="https://www.linkedin.com/in/kunjal-patel2001/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
                
              
            </div>
            <div className="inner-box-right">
                <div className="inner-text-box">
                    <h1>Welcome to
my portfolio
Website!</h1>
                    <div className="btn-start">
                        <div className="btn-1"><span>Resume</span></div>
                        <div className="btn-2"><span>Github</span></div>
                    </div>
                    <p>Welcome to my website! I am a web developer
passionate about creating stunning and
functional websites. This is the place where I
showcase my work and share my journey in the
world of web development. Feel free to explore
my projects and get in touch with me to discuss
how we can work together to bring your ideas to life.</p>
                </div>
            </div>
        </div>
     </div>
     <Education/>
      </div>
      
    );
  }







export default Homepage