import React, { Component} from "react";
import { MenuItems } from "./MenuItems";
import {Button} from "../Button";
import './Navbar.css';
// import Resume from '../../assets/Resume.pdf';
import Resume1 from '../../assets/Homepage/Kunjal_R.pdf';
class Navbar extends Component {
    state={clicked:false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }
    render() {
        return(
            <nav className="NavbarItems">
                
              <h1 className="navbar-logo"><a href="/" style={{textDecoration:'none', color:'#000'}}>&lt;Kunjal Patel/&gt;</a></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}  download={item.download}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                  
                  <li>
                  <div><a href={Resume1} download="Resume">
                <Button className="nav-links-mobile">RESUME</Button>
                </a></div>
                  </li>
                </ul>
                
                
            </nav>

        )
    }
}
export default Navbar