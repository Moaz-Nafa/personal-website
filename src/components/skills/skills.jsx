import React from 'react'
import  './skills.scss';
import { FaStar } from "react-icons/fa";


const skills = () => {
  return (
    <section id='skills'>
            <h4>What Skills Do I Have</h4>
            <h1>My Skills</h1>
      <div className="container skills__container">
        <article>
          <FaStar className='star-icon'/>
          <h3 className='slill-name'>HTML</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>CSS</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>SASS</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>JavaScript</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>TypeScript</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>React.JS</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>Redux-Toolkit</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>TailwindCss</h3>
          <small className='text-light'>Experienced</small>
        </article>

        <article>
        <FaStar className='star-icon'/>
          <h3 className='slill-name'>Bootsrape</h3>
          <small className='text-light'>Experienced</small>
        </article>
      </div>
    </section>
  )
}


export default skills
