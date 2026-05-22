import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="main-header">
        {/* Right side logo */}
        <a href="/" className='logo'>
            AD<span>BITE</span>
        </a>

        {/* Left side navigation  */}
        <nav>
            <ul className='nav-links'>
                <li><a href="#services">Services</a></li>
                <li><a href="#locations">Location</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact" className='nav-btn'>Get Started</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
