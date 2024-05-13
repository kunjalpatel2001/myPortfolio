import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';

import emailjs from '@emailjs/browser'


function Contact (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = 'service_x8h7dat';
      const templateId = 'template_lghaxmd';
      const publicKey = 'IxLweSHcnyinUYG7J';
  
      // Create a new object that contains dynamic template params
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Kunjal',
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send('service_x8h7dat', 'template_lghaxmd', templateParams,'IxLweSHcnyinUYG7J')
        .then((response) => {
          console.log('Email sent successfully!', response);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  
    return(
      <div className="portfolio-main-container">
        <div className="main-heading"><h1>Get In Touch</h1></div>
        <div className="Appt">
      
        <form onSubmit={handleSubmit} className='emailForm'>
        <input
          type="text"
          className="name_input insi_field"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="email_input insi_field"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          className="messg_input "
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <div className="btn-main"><button className="btn-contact" type="submit"><span>Submit</span></button></div>
        
      </form>
      </div>
      </div>
    )
    }
export default Contact