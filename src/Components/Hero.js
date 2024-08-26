
import React from 'react'
import './Hero.css'
// import img1 from '../Asset/img1.jpg'

function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.heroImage} alt="carImg" />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
      </div>
    </div>
  )
}

export default Hero
