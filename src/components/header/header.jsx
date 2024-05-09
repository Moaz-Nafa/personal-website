import React, { useState } from 'react'
import './header.scss'
import CTA from './CTA';
import ME from '../../assets/moaz-22.png'
import HeaderSocials from './headerSocials'
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { TbHexagonLetterP } from "react-icons/tb";

const Header = () => {
  const [activNav, setAvtiveNav] = useState("#")

  return (
    <header>
      <div className='container header_container'>
        <h2>Hello I'm</h2>
        <h1>Moaz Nafa</h1>
        <h2 className='text_light'>Front-end Developer</h2>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img className='img' src={ME} alt='Nafa'></img>
        </div>
      <div className="anvbar">
        <nav>
          <a href='#' onClick={() => setAvtiveNav('#')} className={activNav === '#' ? 'active' : ''}><IoHome /></a>
          <a href='#about' onClick={() => setAvtiveNav('#about')} className={activNav === '#about' ? 'active' : ''}><FaRegUser/></a>
          <a href='#skills' onClick={() => setAvtiveNav('#skills')} className={activNav === '#skills' ? 'active' : ''}><FaAlignJustify /></a>
          <a href='#portfolio' onClick={() => setAvtiveNav('#portfolio')} className={activNav === '#portfolio' ? 'active' : ''}><TbHexagonLetterP/></a>
          <a href='#contact' onClick={() => setAvtiveNav('#contact')} className={activNav === '#contact' ? 'active' : ''}><FaCommentAlt/></a>
        </nav>
      </div>
 
          <a className='scroll_down' href='#contact'>Scroll Down</a>
      </div>
    </header>     
  )
}

export default Header
