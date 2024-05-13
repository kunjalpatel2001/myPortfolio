import "./Skills.css";
import pic1 from "../../assets/Skills/improvement.png";
import pic2 from "../../assets/Skills/software-development.png";
import pic3 from "../../assets/Skills/user-experience.png";
import pic4 from "../../assets/Skills/web-development.png";

const myArray = [{}];

function Skills() {
  return (
    <div className="main-skills-container">
      <div className="skills-section-start">
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-img-start">
          <div className="skills-text">
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
      </div>
   
  );
}

export default Skills;
