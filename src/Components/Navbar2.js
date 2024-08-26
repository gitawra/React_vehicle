import React from 'react'
import './NavbarStyle2.css'
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
    <div className='navbar'>
      <div className="nav-Item">
        <div className='nav-logo'>Four Wheeles</div>
        <div className="nav-icon">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Service</Link>
            <Link to='/'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
