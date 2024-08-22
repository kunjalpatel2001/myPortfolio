import "./Skills.css";
import pic1 from "../../assets/Skills/improvement.png";
import pic2 from "../../assets/Skills/software-development.png";
import pic3 from "../../assets/Skills/user-experience.png";
import pic4 from "../../assets/Skills/web-development.png";
import Azure from "../../assets/Skills/azure.png";
import AWS from "../../assets/Skills/aws.png";
import Devops from "../../assets/Skills/devops.png";
import Docker from "../../assets/Skills/web.png";
import Javascript from "../../assets/Skills/java-script.png";
import Kubernets from "../../assets/Skills/ship-wheel.png";
import Php from "../../assets/Skills/php.png";
import Python from "../../assets/Skills/python.png";
import React from "../../assets/Skills/atom.png";
import Css from "../../assets/Skills/css.png"
import Java from "../../assets/Skills/java.png"
import Html from "../../assets/Skills/html.png"
import Node from "../../assets/Skills/cube.png"




const myArray = [{}];

function Skills() {
  return (
    <div className="main-skills-container tech-start">
      <div className="skills-section-start">
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-img-start global">
          <div className="skills-text ">
            <div className="skills-main-both"><img src={pic1}></img>{" "}
            <div className="skills-inner-img">Frontend Development</div>
            </div>
            <div className="skills-main-both"><img src={pic2}></img>{" "}
            <div className="skills-inner-img">Backend Development</div>
            </div>
            </div>
            <div className="skills-text">
            <div className="skills-main-both"><img src={pic3}></img>{" "}
            <div className="skills-inner-img">UI/UX Designer</div>
            </div>
            <div className="skills-main-both"><img src={pic4}></img>{" "}
            <div className="skills-inner-img">Software Development</div>
            </div>
            </div>
          </div>
        </div>


        <div className="skills-section-start " >
        <div className="skills-title">
          <h2>Technical Skills</h2>
        </div>
        <div className="tech-startdiv">
          <div className="tech-text">
           <img src={AWS}></img>
           <img src={Azure}></img>
           <img src={Kubernets}></img>
           <img src={Devops}></img>
           <img src={Docker}></img>
           <img src={Php}></img>
           <img src={React}></img>
           <img src={Python}></img>
           <img src={Html}></img>
           <img src={Css}></img>
           <img src={Javascript}></img>
           <img src={Java}></img>
           <img src={Node}></img>
    
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Skills;
