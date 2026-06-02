import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
      const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({behavior:'smooth'})
    }
  return (
    <footer className="footer-container">
        <a onClick={() => scrollTo('hero')} className="footer-logo">
            AD<span>BITE</span>
        </a>

        <p className='footer-copy'>© 2025 Adbite. All rights reserved.</p>

        <nav className="footer-links">
            <a onClick={() => scrollTo('services')}>Services</a>
            <a onClick={() => scrollTo('locations')}>Locations</a>
            <a onClick={() => scrollTo('contact')}>Contact</a>
        </nav>
    </footer>
  )
}

export default Footer
 