import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Aboutus from '../Components/Aboutus'
import img3 from '../Asset/img3.jpg'

function About() {
  return (
    <div>
      <Navbar/>
        <Hero
        cName="heroAbout"
        heroImage={img3}
        title="About Us"
        btnClass="showAbout"
        />
        <Aboutus/>
        <Footer/>
    </div>
  )
}

export default About
