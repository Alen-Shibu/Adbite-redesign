import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
        <a href="#" className="footer-logo">
            AD<span>BITE</span>
        </a>

        <p className='footer-copy'>© 2025 Adbite. All rights reserved.</p>

        <nav className="footer-links">
            <a href="#services">Services</a>
            <a href="#locations">Locations</a>
            <a href="#contact">Contact</a>
        </nav>
    </footer>
  )
}

export default Footer
