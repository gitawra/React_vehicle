import React from 'react'
import './RecentCarStyle.css'

function RecentCarData(props) {
  return (
    <div className='t-card'>
      <div className="t-image">
        <img src={props.img} alt="simple image" />
      </div>
      <h4>{props.heading2}</h4>
      <p>{props.text2}</p>
    </div>
  )
}

export default RecentCarData
