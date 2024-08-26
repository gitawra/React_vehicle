import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import RecentCar from '../Components/RecentCar'
import img8 from '../Asset/img8.jpg'

function Service() {
  return (
    <div>
      <Navbar/>
        <Hero
        cName="heroAbout"
        heroImage={img8}
        title="Services"
        btnClass="showAbout"
        />
        <RecentCar/>
        <Footer/>
    </div>
  )
}

export default Service
