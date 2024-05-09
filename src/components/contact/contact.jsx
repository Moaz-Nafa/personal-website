import React from 'react'
import './contact.scss';
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ox5fck7', 'template_ohb7c9b', form.current, 'hwYEDUm55dPxgzrYf')
 
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h4>Get in Touch</h4>
      <h1>Contact Me</h1>
      <div className="container contact__container">
        <div className="contact__obtions">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>moaznafa1995@gmail.com</h5>
            <a href="mailto:moaznafa1995@gmail.com" target='_blank'>Send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>hector.nafa</h5>
            <a href="https://m.me/hector.nafa.7" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>+02 1159297283</h4>
            <h5>WhatsApp</h5>
            <a href="https://api.whatsapp.com/send?phone=+21159297283" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder='Your Name' required/>
          <input type="email" name="email_id" placeholder='Your email' required/>
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type='sumit'  className='btn btn-primary'>Send Messeage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
