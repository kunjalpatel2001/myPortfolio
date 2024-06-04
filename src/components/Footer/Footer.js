import React from "react";
import "./Footer.css";
import pict1 from "../../assets/Footer/icon.png";
import pict2 from "../../assets/Footer/phone.png";
import pict3 from "../../assets/Footer/email.png";
function Footer() {
  return (
    <section className="footer-main">
      <section className="footer-social-media">
        <a
          className="footer-social-media__icon"
          href="https://www.linkedin.com/in/kunjal-patel2001/"
          target="_blank"
        >
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          className="footer-social-media__icon"
          href="https://github.com/kunjalpatel2001"
          target="_blank"
        >
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>
        <a
          className="footer-social-media__icon"
          href="mailto:kunjalpatel2001@gmail.com"
          target="_blank"
        >
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <img className="footer-img" src={pict1}></img>
          <b>Kunjal Patel</b>
          <br />
          Software Developer
          <br />
          Long Beach, USA
        </section>
        <section className="footer-info-center">
        
          <b><img className="footer-img1" src={pict2}></img>Contact:</b>
          <br />
          +1 (562) 391-3286
        </section>
        <section className="footer-info-right">
       
          <b> <img className="footer-img1" src={pict3}></img>Mail:</b>
          <br />
          kunjalpatel2001@gmail.com
        </section>
      </section>
    </section>
  );
}

export default Footer;
