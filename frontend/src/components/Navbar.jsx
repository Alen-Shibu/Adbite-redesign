import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="main-header">
        <nav className='desktop-header'>
            {/* Right side logo */}
            <a href="/" className='logo'>
                AD<span>BITE</span>
            </a>
        {/* Left side navigation  */}
            <ul className='nav-links'>
                <li><a href="#services">Services</a></li>
                <li><a href="#locations">Location</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact" className='nav-btn'>Get Started</a></li>
            </ul>
        </nav>

        {/* Mobile bottom tab bar */}
        <nav className="bottom-tab-bar">
            <a href="/" className="tab-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
            </a>
            <a href="#services" className="tab-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>Services</span>
            </a>
            <a href="#locations" className="tab-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Location</span>
            </a>
            <a href="#contact" className="tab-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Contact</span>
            </a>
        </nav>
    </header>
  )
}

export default Navbar
