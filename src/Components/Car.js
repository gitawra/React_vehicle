import React from 'react'
import './CarStyle.css'
import CarData from './CarData'
import img01 from '../Asset/img01.jpg'
import img02 from '../Asset/img02.jpg'
import img03 from '../Asset/img03.jpg'
import img04 from '../Asset/img04.jpeg'

function Car() {
  return (
    <div className='cars'>
      <h1>Unbelievable Cars.</h1>
      <p>Tour give you the opporunity to see a lot, with in a time frame.</p>
      <CarData 
      classname="first-des"
      heading="Dynamic. Luxurious."
      text="Progressiveness meets luxury in the all-new Mercedes-Benz C-Class. 
      And the design? An expression of sportiness. With the AVANTGARDE 
      Exterior in the C 200 and C 220d variants, 
      you can further enhance the individuality and sportiness of your vehicle, 
      and show clearly that you attach importance to style and high quality. 
      The expressive body styling of the AMG Line in the C 300d variant lends 
      the exterior of the C-Class a sporty, exclusive touch."
      img1={img01}
      img2={img02}
      />
      <CarData
      classname="first-des-reverse" 
      heading="Climb in. Take a deep breath."
      text="Comfort, Connect, Control: 
      The all-new Mercedes-Benz C-Class awaits you with Modern Luxury, 
      Superior Technology, 
      and many exciting new colours and highlights."
      img1={img03}
      img2={img04}
      />
    </div>
  )
}

export default Car
