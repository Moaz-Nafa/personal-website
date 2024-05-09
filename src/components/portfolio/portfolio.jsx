import React from 'react'
import "./portfolio.scss";
import IMG1 from '../../assets/e-commerce-33.jpg'
import IMG7 from '../../assets/art1.jpg'
import IMG2 from '../../assets/Amazon-logo.jpg'
import IMG3 from '../../assets/candycrush.jpg'
import IMG4 from '../../assets/movies1.jpg'
import IMG6 from '../../assets/twitter1.jpg'
import IMG8 from '../../assets/law1.jpg'
import IMG9 from '../../assets/img12.jpg'

const data = [
  {
    id:1,
    img:IMG1,
    title: "E-commerce",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://e-shope.moazsite.com	'
  },
  {
    id:2,
    img:IMG9,
    title: "E-commerce",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://e-commerce.moazsite.com/'
  },
  {
    id:3,
    img:IMG8,
    title: "Law Firm",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://tantawi.moazsite.com'
  },
  {
    id:4,
    img:IMG2,
    title: "Amazon-Clone",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://amazon.moazsite.com/'
  },
  {
    id:5,
    img:IMG4,
    title: "Movies-Site",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://movies-site.moazsite.com/'
  },
  {
    id:6,
    img:IMG6,
    title: "Twitter-Clone",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://twitter-clone.moazsite.com'
  },
  {
    id:7,
    img:IMG7,
    title: "Art-Site",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://art-site.moazsite.com'
  },
  {
    id:8,
    img:IMG3,
    title: "Candy-Crush",
    github:"https://github.com/Moaz-Nafa",
    demo:'https://candy-crush.moazsite.com'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-Github'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default portfolio
