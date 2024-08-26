import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'
import img10 from '../Asset/img10.jpg'
import '../Components/Hero.css'

function Contact() {
  return (
    <div className='contact'>
      <Navbar/>
        <Hero
        cName="heroAbout"
        heroImage={img10}
        title="Contact Us"
        btnClass="showAbout"
        />
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact
