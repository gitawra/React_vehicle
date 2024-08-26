import React, { Component } from 'react'
import './CarStyle.css'
// import img01 from '../Asset/img01.jpg'
// import img02 from '../Asset/img02.jpg'
// import img03 from '../Asset/img03.jpg'
// import img04 from '../Asset/img04.jpeg'

export class CarData extends Component {
  render() {
    return (
        <div className={this.props.classname}>
          <div className="des-text">
              <h2>{this.props.heading}</h2>
              <p>{this.props.text}
                  </p>
          </div>
          <div className="image">
                      <img src={this.props.img1} alt="img01" />
                      <img src={this.props.img2} alt="img02" />
                  </div>
        </div>
    )
  }
}

export default CarData
