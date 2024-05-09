import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";

const headerSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/moaz-nafa-796b8529a/' target='_blank'><FaLinkedin/></a>
      <a href='https://github.com/Moaz-Nafa' target='_blank'><VscGithubInverted/></a>
    </div>
  )
}

export default headerSocials
