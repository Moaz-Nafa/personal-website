import React from 'react'
import './footer.scss';
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";



const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MOAZ NAFA</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://m.me/hector.nafa.7" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/nafahector/" target='_blank'><BsInstagram/></a>
        <a href="mailto:moaznafa1995@gmail.com" target='_blank'><SiGmail/></a>
      </div>
      <div className="footer__cobyright">
        <small>&copy; MOAZ NAFA Front-end React developer.</small>
      </div>
    </footer>
  )
}

export default footer
