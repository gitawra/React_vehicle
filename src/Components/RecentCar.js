import React from 'react'
import RecentCarData from './RecentCarData'
import './RecentCarStyle.css'
import img4 from '../Asset/img4.jpg'
import c1 from '../Asset/c1.jpg'
import gls3 from '../Asset/gls3.jpg'

function RecentCar() {
  return (
    <div className='recentCar'>
      <h1>Recent Models.</h1>
      <p>
        The new A-Class Limousine.
      </p>
      <div className='carCard'>
        <RecentCarData
        img={img4}
        heading2="G-Wagon"
        text2="Its functional, robust front has retained its character over the decades. 
        Clear lines and large, flat surfaces shape the side view of the G-Class. 
        Characteristic features are the exterior door hinges, the exterior protective strip and the exposed spare wheel on the tailgate. 
        The striking wheel arch liners and the wide track provide for a dominant appearance."
        />
        <RecentCarData
        img={c1}
        heading2="C-Class"
        text2="Comfort, Connect, Control: The all-new Mercedes-Benz C-Class awaits you 
        with Modern Luxury, Superior Technology,
         and many exciting new colours and highlights."
        />
        <RecentCarData
        img={gls3}
        heading2="GLS 400"
        text2="Climb in and enjoy the seemingly endless space and comfort, 
        combined with the latest technologies. 
        Choose between four luxurious individual seats or a flexible five-seater."
        />
      </div>
    </div>
  )
}

export default RecentCar
