import React, { Component } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



class Navbar extends Component {
  state={clicked:false};
  handleClick=()=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div>
        <nav className='navbarItems'>
            <h1 className='navbar-logo'>Four Wheels</h1>
            <div className="menu-icon" onClick={this.handleClick} >
              <span >{this.state.clicked?<CloseRoundedIcon/>:<MenuRoundedIcon />}</span>
            </div>

            <ul className={this.state.clicked?"navbar-menu active":"navbar-menu"}>
                <li >
                <Link className='icon' to="/"><span><HomeRoundedIcon/></span>Home</Link>   
                </li>
                <li >
                <Link className='icon' to="/about"><span><InfoIcon/></span>About</Link>
                </li>
                <li >
                <Link className='icon' to="/service"><span><HomeRepairServiceIcon/></span>Services</Link>
                </li>
                <li >
                <Link className='icon' to="/contact"><span><ContactsIcon/></span>Contact</Link>
                </li>
                <li >
                <Link className='link' to="/">Sign Up</Link>
                </li>
                <button>Sign Up</button>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
