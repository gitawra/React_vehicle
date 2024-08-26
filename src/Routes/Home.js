import React from 'react'
import Navbar from '../Components/Navbar'
// import Navbar2 from '../Components/Navbar2'
import Car from '../Components/Car'
import RecentCar from '../Components/RecentCar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import img1 from '../Asset/img1.jpg'

function Home() {
  return (
    <div>
      {/* <Navbar2/> */}
    <Navbar/>
        <Hero
        cName='hero'
        heroImage={img1}
        title="Your Journey Your Story"
        text="Choose Your Favourite Four Wheeler"
        btnText="Varient"
        url="/"
        btnClass="show"
        />
        <Car/>
        <RecentCar/>
        <Footer/>

    </div>
  )
}

export default Home
