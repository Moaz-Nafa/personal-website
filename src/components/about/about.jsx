import React from 'react';
import './about.scss';
import CV from '../../assets/CV.pdf';
import VIDEO from '../../assets/video/video1_1.mp4';
import Fade from 'react-reveal/Fade';


const about = () => {
  return (
    <section id='about'>
        <h4>Get To Know </h4>
          <h1>About Me</h1>
        
        <div className="container about__container">
      <Fade left>
        <div className="about__me">
          <div className="about__me-image">
              <video width='100%' height='100%' controls autoPlay loop muted src={VIDEO} type="video/mp4"></video>
          </div>
        </div>
        </Fade>
        <div className="about__content">
          <p className='paragraphe-1'>This is a summary about what I do!</p>
          <p className='paragraphe-2'>
              Implement a responsive website for all screens.
              Developing and maintaining the user interface.
              Work along with the UI/UX and backend team
              to deliver the best optimized website.
          </p>
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about
