
import './Skills.css';
import pic1 from '../../assets/Skills/front-end.png'
import pic2 from '../../assets/Skills/backend.png'
import pic3 from '../../assets/Skills/uiux.png'
import pic4 from '../../assets/Skills/web.png'

const myArray = [
    { }
]

function Skills() {
  return (
    <div className="main-skills-container">
         <div className="skills-section-start">
        <div className="skills-title"><h2>Skills</h2></div>
        <div className="skills-img-start">
            <div className="skills-inner-img"><img src={pic1}></img></div>
            <div className="skills-inner-img"><img src={pic2}></img></div>
            <div className="skills-inner-img"><img src={pic3}></img></div>
            <div className="skills-inner-img"><img src={pic4}></img></div>
            
        </div>
    </div>
    </div>
   
  )
}



export default Skills;