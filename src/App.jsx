import React from 'react'
import Header from './components/header/header'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
// import Nav from './components/nav/nav'
import Services from './components/services/services'

const App = () => {
  return (
    <>
    <Header></Header>
    {/* <Nav/> */}
    <About/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
