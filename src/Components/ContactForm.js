import React from 'react'
import './ContactFormStyle.css'

function ContactForm() {
  return (
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Subject' />
        <textarea type="text" placeholder='Write here' rows={4}></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
