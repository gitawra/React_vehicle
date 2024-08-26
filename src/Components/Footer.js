import React from 'react'
import './FooterStyle.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div>
            <h1>Four Wheels !</h1>
            <p>Choose your Favourite Mercedes.</p>
            </div>
        <div className='media'>
            <a href="/"><span><FacebookOutlinedIcon/></span></a>
            <a href="/"><span><InstagramIcon/></span></a>
            <a href="/"><span><WhatsAppIcon/></span></a>
            <a href="/"><span><TwitterIcon/></span></a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
        <a href="/">Status</a>
        <a href="/">License</a>
        <a href="/">All Versions</a>
            </div>
        
      
      
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
        <a href="/">Issues</a>
        <a href="/">Twitter</a>
        <a href="/">Project</a>
            </div>
        
      
      
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
        <a href="/">Troubleshooting</a>
        <a href="/">Contact us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Term of service</a>
        <a href="/">Privacy Policy</a>
        <a href="/">License</a>
        <a href="/">Policy</a>
            </div>
        
            </div>
    </div>
  )
}

export default Footer
