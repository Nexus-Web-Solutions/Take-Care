import React from 'react'
import Hero from '../components/pages/home_page/Hero'
import About from '../components/pages/home_page/About'
import Services from '../components/pages/home_page/Services'
import Contact from '../components/pages/home_page/Contact'

const Homepage = () => {
  return (
    <div>
    <section id='home'>
        <Hero/>
      </section>
      <section id='About_US'>
        <About/>
      </section>
      <section id='Services'>
        <Services/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Homepage
